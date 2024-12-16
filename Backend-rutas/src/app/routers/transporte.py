from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from ..database import get_db
from ..crud import transporte as crud_transporte
from app.crud.transporte import actualizar_transporte
from ..models import Transporte
from fastapi import FastAPI, Depends

router = APIRouter()
app = FastAPI()

@router.get("/transportes")
def get_transportes(db: Session = Depends(get_db)):
    transportes = db.query(Transporte).all()
    return transportes

@router.post("/transportes")
def agregar_transporte( transporte_id: int,  id_tipo_transporte: int, id_marca:int, id_horario: int, capacidad: int, id_conductor: int, db: Session = Depends(get_db)):
    return crud_transporte.crear_transporte(db, transporte_id, id_tipo_transporte, id_marca, id_horario,capacidad, id_conductor)


@router.put("/transportes/{transporte_id}")
def update_transporte(transporte_id: int, nombre: str = None, tipo: str = None, capacidad: int = None, db: Session = Depends(get_db)):
    transporte_actualizado = actualizar_transporte(db, transporte_id, nombre, tipo, capacidad)
    if not transporte_actualizado:
        raise HTTPException(status_code=404, detail="Transporte no encontrado")
    return {"mensaje": "Transporte actualizado correctamente", "transporte": transporte_actualizado}


@router.delete("/transportes/{transporte_id}", status_code=204)
def delete_transporte(transporte_id: int, db: Session = Depends(get_db)):
    print(f"Buscando transporte con ID: {transporte_id}")
    transporte = db.query(Transporte).filter(Transporte.transporte_id == transporte_id).first()
    print(f"Transporte encontrado: {transporte}")
    if not transporte:
        raise HTTPException(status_code=404, detail="Transporte no encontrado")
    db.delete(transporte)
    db.commit()
    return {"detail": "Transporte eliminado correctamente"}