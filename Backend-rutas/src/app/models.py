from sqlalchemy import Column, Integer,String,ForeignKey
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Transporte(Base):
    __tablename__ = "transporte"
    _table_args_ = {'schema': 'rutas'}
    transporte_id = Column(Integer, primary_key=True, autoincrement=True)
    id_tipo_transporte = Column(Integer, nullable=False)
    id_marca = Column(Integer, nullable=False)
    id_horario = Column(Integer, nullable=False)
    capacidad = Column(Integer, nullable=False)
    id_conductor = Column(Integer, nullable=False)


class Ruta(Base):
    __tablename__= "ruta"
    ruta_id = Column(Integer, primary_key=True, index=True)
    id_direccion_ruta = Column(Integer, nullable=False)
    id_transporte = Column(Integer, ForeignKey("transporte.transporte_id"), nullable=False)

class Estudiantes(Base):
    __tablename__ = "estudiantes"
    
    estudiante_id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    nombre = Column(String, nullable=False)
    telefono = Column(String, nullable=True)
    id_ruta = Column(Integer, ForeignKey("ruta.ruta_id"), nullable=False)

class Conductor(Base):
    __tablename__ = 'conductor'

    conductor_id = Column(Integer, primary_key=True, index=True)
    nombre = Column(String, nullable=False)
    telefono = Column(String, nullable=True)

class Horario(Base):
    __tablename__ = 'horario'

    id = Column(Integer, primary_key=True, index=True)
    dia_nombre = Column(String, nullable=False)
    id_horarios_disponibles = Column(Integer, ForeignKey('horarios_disponibles.id'), nullable=False)

class TipoTransporte(Base):
    __tablename__ = 'tipo_transporte'

    id = Column(Integer, primary_key=True, index=True)
    nombre = Column(String, nullable=False)

class Marca(Base):
    __tablename__= "marca"
    
    id = Column(Integer, primary_key=True)
    nombre = Column(String, nullable=False)