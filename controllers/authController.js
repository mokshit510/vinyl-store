import { getDBConnection } from "../db/db.js";
import bcrypt from 'bcrypt'
import validator from 'validator'

export async function signin(req, res){
    let{name,email,username,password} = req.body

    if(!name || !email || !username || !password){
        res.status(400).json({error:'all fields should be present'})
    }
    name=name.trim()
    email=email.trim()
    username=username.trim()
    if(!/^[a-zA-Z0-9_-]{1,20}$/.test(username)){
        res.status(400).json({error:'invalid username'})
    }
    if(!validator.isEmail(email)){
        res.status(400).json({error:'email format is not valid'})
    }
    try{
        const db = await getDBConnection()
        const existing = await db.get(`select * from users where email = ? or username = ?`,[email,username])
        if(existing){
            res.status(400).json({error:'email or username already exists'})
        }
        const pass = bcrypt.hash(password,10)
        const result = await db.run(`insert into users(name,email,username,pass) values(?,?,?,?,?)`,[name,email,username,pass])
        req.session.userId = result.lastID
        res.status(201).json({message:'signin successfull'})
    }
    catch(err){
        res.status(500).json({error:`something went wrong:${err}`})
    }
}
export async function login(req, res){
    let{username,password} = req.body
    if(!username || !password){
        res.status(400).json({error:'all fields should be present'})
    }
    username=username.trim()
    try{
        const db = await getDBConnection()
        const pass = await bcrypt.hash(password,10)
        const exist = await db.get(`select * from users where username = ? and password = ?`,[username,pass])
        if(exist){
            req.session.userId = exist.id
            res.status(201).json({message:'login successfull'})
        }else{
            res.status(400).json({error:'wrong username or password'})
        }
    }
    catch(err){
        res.status(500).json({error:`something went wrong:${err}`})
    }
}
export async function logout(req, res){
    req.session.destroy( () => {

    res.json({ message: 'Logged out' })

  })
}