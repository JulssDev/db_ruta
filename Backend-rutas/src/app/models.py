from sqlalchemy import Column, Integer
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