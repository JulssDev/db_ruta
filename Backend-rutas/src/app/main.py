from fastapi import FastAPI
from .routers import transporte
from .database import Base, engine
from fastapi.middleware.cors import CORSMiddleware

# Crear las tablas en la base de datos
Base.metadata.create_all(bind=engine)

app = FastAPI()

# Registrar el router
#app.include_router(transporte.router, prefix="/api", tags=["Transportes"])


# Incluir el router de transporte
app.include_router(transporte.router, prefix="/api", tags=["transportes"])

# Configurar los orígenes permitidos (en este caso, React)
origins = [
    "http://localhost:5173",  # Puerto 5173
    "http://localhost:5174",  # Puerto 5174 (añadido)
    "http://127.0.0.1:5173",
    "http://127.0.0.1:5174"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Permitir solicitudes de estos orígenes
    allow_credentials=True,
    allow_methods=["*"],  # Permitir todos los métodos (GET, POST, PUT, DELETE, etc.)
    allow_headers=["*"],  # Permitir todos los encabezados
)

# Registrar routers
app.include_router(transporte.router, prefix="/api", tags=["Transportes"])

@app.get("/")
def read_root():
    return {"message": "Bienvenido al backend de transporte"}