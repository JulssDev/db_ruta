CREATE TABLE estudiantes (
  estudiante_id SERIAL PRIMARY KEY,
  nombre VARCHAR NOT NULL,
  telefono VARCHAR,
  id_ruta SERIAL
);

CREATE TABLE ruta (
  ruta_id SERIAL PRIMARY KEY,
  id_direccion_ruta SERIAL,
  id_transporte SERIAL
);

CREATE TABLE direccion_ruta (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR NOT NULL,
  tiempo_estimado_ruta NUMERIC NOT NULL
);

CREATE TABLE transporte (
  transporte_id SERIAL PRIMARY KEY,
  id_tipo_transporte SERIAL,
  id_marca SERIAL,
  id_horario SERIAL,
  capacidad NUMERIC,
  id_conductor SERIAL
);

CREATE TABLE tipo_transporte (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR NOT NULL
);

CREATE TABLE marca (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR NOT NULL
);

CREATE TABLE conductor (
  conductor_id SERIAL PRIMARY KEY,
  nombre VARCHAR NOT NULL,
  telefono VARCHAR
);

CREATE TABLE horario (
  id SERIAL PRIMARY KEY,
  dia_nombre VARCHAR NOT NULL,
  id_horarios_disponibles SERIAL
);

CREATE TABLE horarios_disponibles (
  id SERIAL PRIMARY KEY,
  hora VARCHAR NOT NULL
);

ALTER TABLE estudiantes ADD FOREIGN KEY (id_ruta) REFERENCES ruta (ruta_id);

ALTER TABLE ruta ADD FOREIGN KEY (id_direccion_ruta) REFERENCES direccion_ruta (id);

ALTER TABLE ruta ADD FOREIGN KEY (id_transporte) REFERENCES transporte (transporte_id);

ALTER TABLE transporte ADD FOREIGN KEY (id_tipo_transporte) REFERENCES tipo_transporte (id);

ALTER TABLE transporte ADD FOREIGN KEY (id_marca) REFERENCES marca (id);

ALTER TABLE transporte ADD FOREIGN KEY (id_horario) REFERENCES horario (id);

ALTER TABLE transporte ADD FOREIGN KEY (id_conductor) REFERENCES conductor (conductor_id);

ALTER TABLE horario ADD FOREIGN KEY (id_horarios_disponibles) REFERENCES horarios_disponibles (id);