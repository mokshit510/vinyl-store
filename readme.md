# 🎵 Vinyl Store - Express.js E-Commerce Application

A full-stack **Vinyl Record Store** web application built using **Node.js**, **Express.js**, **SQLite**, and vanilla **HTML, CSS, and JavaScript**. The application allows users to browse vinyl records, create an account, log in, manage their shopping cart, and securely access protected features.

![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-003B57?logo=sqlite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

---

# 📖 About

This project is a complete **Express.js-based Vinyl Store** featuring user authentication, product browsing, shopping cart management, and a modular backend architecture.

It demonstrates how frontend and backend technologies work together to build a modern web application while following a clean and organized project structure.

---

# ✨ Features

- 🎵 Browse vinyl record collection
- 🔍 View available products
- 🛒 Shopping cart functionality
- 👤 User Registration
- 🔐 Secure Login & Logout
- 🛡️ Protected API routes
- 💾 SQLite database
- 📱 Responsive user interface
- ⚡ Fast Express.js backend
- 📂 Modular MVC-inspired architecture

---

# 🛠️ Tech Stack

### Frontend

- HTML5
- CSS3
- JavaScript (ES6)

### Backend

- Node.js
- Express.js

### Database

- SQLite

### Other Tools

- Docker
- Git
- npm

---

# 📂 Project Structure

```text
EXPRESSJS-PROJECT/
│
├── controllers/
│   ├── authController.js
│   ├── cartController.js
│   ├── meController.js
│   └── productsController.js
│
├── db/
│   └── db.js
│
├── middleware/
│   └── requireAuth.js
│
├── public/
│   ├── css/
│   │   └── index.css
│   │
│   ├── images/
│   │   ├── spiral_logo.png
│   │   ├── menu.svg
│   │   ├── cart.png
│   │   └── vinyl1.png ... vinyl10.png
│   │
│   ├── js/
│   │   ├── authUI.js
│   │   ├── cart.js
│   │   ├── cartService.js
│   │   ├── index.js
│   │   ├── login.js
│   │   ├── logout.js
│   │   ├── menu.js
│   │   ├── productService.js
│   │   ├── productUI.js
│   │   └── signup.js
│   │
│   ├── index.html
│   ├── login.html
│   ├── signup.html
│   └── cart.html
│
├── routes/
│   ├── auth.js
│   ├── cart.js
│   ├── me.js
│   └── products.js
│
├── database.db
├── logTable.js
├── server.js
├── Dockerfile
├── .dockerignore
├── package.json
└── README.md
```

---

# 🚀 Installation

## Clone the repository

```bash
git clone https://github.com/mokshit510/vinyl-store.git
```

## Navigate to the project

```bash
cd vinyl-store
```

## Install dependencies

```bash
npm install
```

## Start the development server

```bash
node server.js
```

or

```bash
npm start
```

The application will run locally on the configured port (for example, `http://localhost:3000`).

---

# 🛍️ Application Pages

### 🏠 Home

- Browse available vinyl records
- Responsive product grid
- Navigation menu

### 👤 Sign Up

- Create a new account

### 🔐 Login

- Authenticate existing users

### 🛒 Cart

- View shopping cart
- Manage selected products

---

# 🔌 API Modules

### Authentication

- Register User
- Login User
- Logout User

### Products

- Retrieve product list
- Product management

### Cart

- Add items
- View cart
- Remove items
- Update cart

### User

- Protected profile endpoint

---

# 📚 Concepts Practiced

- Express.js Routing
- Controllers
- Middleware
- Authentication
- SQLite Database
- REST APIs
- CRUD Operations
- Static File Serving
- DOM Manipulation
- Fetch API
- Modular JavaScript
- Responsive Web Design
- Docker Basics

---

# 🐳 Docker

Build the Docker image

```bash
docker build -t vinyl-store .
```

Run the container

```bash
docker run -p 3000:3000 vinyl-store
```

---

# 🔮 Future Improvements

- ❤️ Wishlist
- ⭐ Product Reviews
- 💳 Payment Gateway
- 📦 Order History
- 🔎 Product Search
- 🎵 Music Preview
- 🏷️ Categories & Filters
- 📈 Admin Dashboard
- 📧 Email Verification
- 🔐 JWT Authentication
- ☁️ Cloud Deployment

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository.

2. Create a feature branch.

```bash
git checkout -b feature-name
```

3. Commit your changes.

```bash
git commit -m "Add new feature"
```

4. Push your branch.

```bash
git push origin feature-name
```

5. Open a Pull Request.

---

# 📄 License

This project is licensed under the **MIT License**.

---

# 👨‍💻 Author

**Mokshit Verma**

- GitHub: https://github.com/mokshit510
- LinkedIn: https://www.linkedin.com/in/mokshit-verma-136b55396/

---

## ⭐ Support

If you found this project helpful or learned something from it, consider giving it a ⭐ on GitHub. Contributions, suggestions, and feedback are always welcome!