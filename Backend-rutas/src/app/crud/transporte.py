from sqlalchemy.orm import Session
from ..models import Transporte

def obtener_transportes(db: Session):
    return db.query(Transporte).all

def crear_transporte(db: Session, transporte_id: int,  id_tipo_transporte: int, id_marca:int, id_horario: int, capacidad: int, id_conductor: int):
    nuevo_transporte = Transporte(transporte_id=transporte_id, id_tipo_transporte=id_tipo_transporte, id_marca= id_marca, id_horario=id_horario,capacidad=capacidad,id_conductor= id_conductor)
    db.add(nuevo_transporte)
    db.commit()
    db.refresh(nuevo_transporte)
    return nuevo_transporte

def eliminar_transporte(db: Session, transporte_id: int):
    transporte = db.query(Transporte).filter(Transporte.id == transporte_id).first()
    if transporte:
        db.delete(transporte)
        db.commit()
    return transporte

def actualizar_transporte(db: Session, transporte_id: int, nombre: str = None, tipo: str = None, capacidad: int = None):
    transporte = db.query(Transporte).filter(Transporte.transporte_id == transporte_id).first()
    if not transporte:
        return None
    if nombre:
        transporte.nombre = nombre
    if tipo:
        transporte.tipo = tipo
    if capacidad:
        transporte.capacidad = capacidad
    db.commit()
    db.refresh(transporte)
    return transporte