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
6. [Contributing](#contributing)
7. [License](#license)

---

## **Overview**

The application is designed for universities that need to optimize student transportation. It offers:

- Management of transport routes and schedules.
- Integration with relational databases.
- Interfaces for administrators and students.

**Main technologies used:**
- **Backend:** FastApi.
- **Database:** PostGreSQL.
- **Frontend:** React.

---

## **Project Structure**

The project is organized as follows:

```
/db_ruta
├── backend/		# SQL files for initializing the back-end.
│	├── src/        # Server source code and business logic.
│	│	├── app/           # Principal app configuration.
│	│	├── venv/       	# Controllers for backend operations and start.
│
├── database/              # SQL files for initializing the database.
│	├── data/
│	│   └── backups/            # Database backups
│	│
│	├── docs/                # Database and Proyect documentation
│	│
│	├── models/
│	│   ├── ERD/                # Entity-Relationship Diagrams
│	│   ├── LDM/                # Logical Data Model
│	│   └── PDM/                # Physical Data Model
│	│
│	├── scripts/             # SQL scripts and batch files
│	│   ├── ddl/                # DDL scripts: table and structure creation
│	│   ├── dml/                # DML scripts: data insertion, updates, and deletions
│	│   ├── functions/          # Custom SQL functions
│	│   └── scripts_auto/       # Automated scripts to run SQL
│
├── docs/				#Proyect Manuals and Scrum files.
├── frontend/				# SQL files for initializing the front-end.
│	├── node_modules/			# Aditional librarys.
│	├── public/				# Visual resources.
│	├── src/					# Visual source code.
│
├── gitignore.txt           # Files ignored by Git
└── README.md              # Main documentation.
```

---

## **Prerequisites**

1. **System Environment:**
   - Windows 10 or later, macOS, or Linux.
   - Modern web browser (Chrome, Firefox, Edge).

2. **Required Software:**
   - FastApi.
   - npm (included with Fast).
   - Git.
   - PostgreSQL.
   - React.

3. **Optional Tools:**
   - Visual Studio Code.

---

## **Installation**

### **Follow the technical manual to install the proyect! PATH: main/docs/Manual Tecnico.pdf**

## **Usage**

### **Student Users**
- View available routes and schedules.
- Select a type of transport (public or private).

### **Administrators**
- Create, modify, and delete routes.
- Manage schedules and driver assignments.

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
