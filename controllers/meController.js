import { getDBConnection } from "../db/db.js";

export async function getuserID(req, res){
    try{
        const db = await getDBConnection()
        if(!req.session.userId){
            return res.status(201).json({isGuest:true}) 
        }
        const user = await db.get(`select name from users where id = ?`,[req.session.userId])
        res.status(201).json({isGuest:false , name:user.name})
    }
    catch(err){
        res.status(500).json({error:`something went wrong: ${err}`})
    }
}