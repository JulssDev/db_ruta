from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# URL de conexión a la base de datos (ajusta según tu configuración)
DATABASE_URL = "postgresql://adminruta:ruta2024*@localhost:5432/db_ruta?options=-csearch_path=rutas"

# Crear el motor de conexión
engine = create_engine(DATABASE_URL)

# Crear una fábrica de sesiones
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base para los modelos
Base = declarative_base()

# Dependencia para obtener la sesión
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
