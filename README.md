# db_ruta

**System for Optimization and Management of Student Transport Routes and Schedules**
This is the greatest repository of the world, this is a small proyect focus to universitary transport, if you have interesting for the proyect, feel free to clone this repository, thanks for read the description!, have a good day!
This repository contains the `db_ruta` project, a solution for managing routes, schedules, and student transport services. The application includes a relational database, a backend server, and a web interface.

---

## **Table of Contents**

1. [Overview](#overview)
2. [Project Structure](#project-structure)
3. [Prerequisites](#prerequisites)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Folder Documentation](#folder-documentation)
7. [Contributing](#contributing)
8. [License](#license)

---

## **Overview**

The application is designed for universities that need to optimize student transportation. It offers:

- Management of transport routes and schedules.
- Integration with relational databases.
- Interfaces for administrators and students.

**Main technologies used:**
- **Backend:** Node.js with Express.js.
- **Database:** MySQL.
- **Frontend:** HTML, CSS, and JavaScript.

---

## **Project Structure**

The project is organized as follows:

```
/db_ruta
├── public/                # Static public files (CSS, JS, images).
├── src/                   # Server source code and business logic.
│   ├── controllers/       # Controllers for backend operations.
│   ├── routes/            # API route definitions for the backend.
│   ├── models/            # Data models and database connection.
│   └── config/            # General configurations (database, environment).
├── database/              # SQL files for initializing the database.
├── .env.example           # Example configuration for environment variables.
├── package.json           # Project dependencies and scripts.
└── README.md              # Main documentation.
```

---

## **Prerequisites**

1. **System Environment:**
   - Windows 10 or later, macOS, or Linux.
   - Modern web browser (Chrome, Firefox, Edge).

2. **Required Software:**
   - Node.js v16 or later.
   - npm (included with Node.js).
   - Git.
   - MySQL or MariaDB.

3. **Optional Tools:**
   - Visual Studio Code.
   - Docker (if containerization is required).

---

## **Installation**

### **1. Clone the repository**

```bash
git clone https://github.com/JulssDev/db_ruta.git
cd db_ruta
```

### **2. Install dependencies**

```bash
npm install
```

### **3. Configure environment variables**

Create a `.env` file based on the `.env.example` and provide the required credentials:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=your_user
DB_PASSWORD=your_password
DB_NAME=db_ruta
```

### **4. Initialize the database**

Import the initial SQL schema located in the `database/` folder:

```bash
mysql -u your_user -p db_ruta < database/db_schema.sql
```

### **5. Run the application**

```bash
npm start
```
Access the application from your browser at `http://localhost:3000`.

---

## **Usage**

### **Student Users**
- View available routes and schedules.
- Select a type of transport (public or private).

### **Administrators**
- Create, modify, and delete routes.
- Manage schedules and driver assignments.

---

## **Folder Documentation**

### **1. public/**
Contains static resources such as:
- `styles/`: CSS files for interface design.
- `scripts/`: JavaScript files for client-side interactions.
- `images/`: Images used in the application.

### **2. src/**
Server source code:
- **controllers/**: Implementation of business logic.
  - Example: `rutasController.js` handles CRUD operations for routes.
- **routes/**: Definition of API endpoints.
  - Example: `rutas.js` defines routes for managing transport data.
- **models/**: Database models.
  - Example: `Rutas.js` represents the routes table in the database.
- **config/**: Global configurations.
  - Example: `db.js` manages the database connection.

### **3. database/**
- Contains the SQL file for the initial table setup.
  - Example: `db_schema.sql`.

### **4. Other Files**
- `.env.example`: Example configuration for environment variables.
- `package.json`: Defines project dependencies and useful scripts.

---

## **Contributing**

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/new-feature
   ```
3. Make your changes and push them:
   ```bash
   git commit -m "Description of changes"
   git push origin feature/new-feature
   ```
4. Open a Pull Request describing the changes made.

---

## **License**

This project is licensed under the MIT License. See the `LICENSE` file for more details.
