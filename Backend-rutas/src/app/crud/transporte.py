from sqlalchemy.orm import Session
from ..models import Transporte
from ..models import Transporte, Ruta, Estudiantes
from fastapi import HTTPException
from ..models import TipoTransporte, Conductor, Horario, Marca

def obtener_transportes(db: Session):
    # Realiza la consulta y uniones necesarias
    query = db.query(
        Transporte.transporte_id,
        Conductor.nombre.label("conductor_nombre"),
        TipoTransporte.nombre.label("tipo_transporte_nombre"),
        Horario.dia_nombre.label("horario_dia_nombre"),
        Transporte.capacidad,
        Marca.nombre.label("marca_nombre")
    ).join(
        Conductor, Conductor.conductor_id == Transporte.id_conductor
    ).join(
        TipoTransporte, TipoTransporte.id == Transporte.id_tipo_transporte
    ).join(
        Horario, Horario.id == Transporte.id_horario
    ).join(
        Marca, Marca.id == Transporte.id_marca  # Agrega el join con Marca
    )
    
    transportes = query.all()

    # Convertir los resultados en un formato más legible
    result = [
        {
            "transporte_id": transporte.transporte_id,
            "conductor_nombre": transporte.conductor_nombre,
            "tipo_transporte_nombre": transporte.tipo_transporte_nombre,
            "horario_dia_nombre": transporte.horario_dia_nombre,
            "capacidad": transporte.capacidad,
            "marca_nombre": transporte.marca_nombre
        }
        for transporte in transportes
    ]
    
    return result

def crear_transporte(db: Session, transporte_id: int,  id_tipo_transporte: int, id_marca:int, id_horario: int, capacidad: int, id_conductor: int):
    nuevo_transporte = Transporte(transporte_id=transporte_id, id_tipo_transporte=id_tipo_transporte, id_marca= id_marca, id_horario=id_horario,capacidad=capacidad,id_conductor= id_conductor)
    db.add(nuevo_transporte)
    db.commit()
    db.refresh(nuevo_transporte)
    return nuevo_transporte

def delete_transporte(db: Session, transporte_id: int):
    # Verificar si el transporte existe primero
    transporte = db.query(Transporte).filter(Transporte.transporte_id == transporte_id).first()
    if not transporte:
        raise HTTPException(status_code=404, detail="Transporte no encontrado")

    # Encontrar todas las rutas relacionadas con el transporte
    rutas = db.query(Ruta).filter(Ruta.id_transporte == transporte_id).all()

    for ruta in rutas:
        # Eliminar las filas dependientes en 'estudiantes'
        db.query(Estudiantes).filter(Estudiantes.id_ruta == ruta.ruta_id).delete()

    # Eliminar las rutas dependientes
    db.query(Ruta).filter(Ruta.id_transporte == transporte_id).delete()

    # Eliminar el transporte
    db.delete(transporte)
    db.commit()

    return {"mensaje": "Transporte eliminado correctamente"}

def actualizar_transporte(db: Session, transporte_id: int, id_marca: int = None,id_tipo_transporte: int = None, capacidad: int = None, id_conductor: int= None):
    transporte = db.query(Transporte).filter(Transporte.transporte_id == transporte_id).first()
    if not transporte:
        return None
    if id_marca:
        transporte.id_marca = id_marca
    if id_tipo_transporte:
        transporte.id_tipo_transporte = id_tipo_transporte
    if capacidad:
        transporte.capacidad = capacidad
    if id_conductor:
        transporte.id_conductor= id_conductor
    db.commit()
    db.refresh(transporte)
    return transporte