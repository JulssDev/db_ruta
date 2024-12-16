from fastapi import FastAPI
from .routers import transporte
from .database import Base, engine
from fastapi.middleware.cors import CORSMiddleware

# Crear las tablas en la base de datos
Base.metadata.create_all(bind=engine)

app = FastAPI()

# Registrar el router
#app.include_router(transporte.router, prefix="/api", tags=["Transportes"])

@app.get("/")
def read_root():
    return {"message": "Bienvenido al backend de transporte"}

# Incluir el router de transporte
app.include_router(transporte.router, prefix="/api", tags=["transportes"])

# Configurar los orígenes permitidos (en este caso, React)
origins = [
    "http://localhost:5173",  # URL donde está corriendo tu aplicación React
    "http://127.0.0.1:5173",  # Otra posible URL de tu frontend
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Permitir estos orígenes
    allow_credentials=True,  # Permitir cookies/sesiones si es necesario
    allow_methods=["*"],  # Permitir todos los métodos HTTP
    allow_headers=["*"],  # Permitir todos los encabezados
)