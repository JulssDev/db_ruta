from fastapi import APIRouter, Depends, HTTPException,Request
from sqlalchemy.orm import Session
from ..database import get_db
from ..crud import transporte as crud_transporte
from app.crud.transporte import actualizar_transporte
from ..crud.transporte import delete_transporte
from ..crud.transporte import obtener_transportes
from ..models import Transporte
from fastapi import FastAPI, Depends
from pydantic import BaseModel

router = APIRouter()
app = FastAPI()

@router.get("/transportes") 
def get_transportes(db: Session = Depends(get_db)):
    transportes = obtener_transportes(db)  # Llamas a la función de obtener transportes con los valores descriptivos
    return transportes


# Modelo Pydantic
class TransporteCreate(BaseModel):
    transporte_id: int
    id_tipo_transporte: int
    id_marca: int
    id_horario: int
    capacidad: int
    id_conductor: int

@router.post("/transportes")
def agregar_transporte(
    transporte: TransporteCreate,  # Cuerpo de la solicitud
    db: Session = Depends(get_db)
):
    nuevo_transporte = crud_transporte.crear_transporte(
        db,
        transporte.transporte_id,
        transporte.id_tipo_transporte,
        transporte.id_marca,
        transporte.id_horario,
        transporte.capacidad,
        transporte.id_conductor
    )
    return {"mensaje": "Transporte creado correctamente", "transporte": nuevo_transporte}


class UpdateTransporte(BaseModel):
    id_marca: int = None
    id_tipo_transporte: int = None
    capacidad: int = None
    id_conductor: int = None

@router.put("/transportes/{transporte_id}")
async def update_transporte(
    transporte_id: int,
    transporte: UpdateTransporte,  # Recibe el JSON en formato Pydantic (no necesitas schemas.py)
    db: Session = Depends(get_db)
):
    # Llama al CRUD para actualizar el transporte
    transporte_actualizado = actualizar_transporte(
        db,
        transporte_id,
        id_marca=transporte.id_marca,
        id_tipo_transporte=transporte.id_tipo_transporte,
        capacidad=transporte.capacidad,
        id_conductor=transporte.id_conductor,
    )
    if not transporte_actualizado:
        raise HTTPException(status_code=404, detail="Transporte no encontrado")
    
    return {"mensaje": "Transporte actualizado correctamente", "transporte": transporte_actualizado}
@router.delete("/api/transportes/{transporte_id}")
def delete_transporte_route(transporte_id: int, db: Session = Depends(get_db)):
    # Llamamos al CRUD para eliminar el transporte
    result = delete_transporte(db, transporte_id)
    return result

