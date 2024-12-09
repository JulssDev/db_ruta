
SET client_encoding = 'UTF8';

INSERT INTO rutas.DIRECCION_RUTA (Nombre, Tiempo_Estimado_Ruta) VALUES
('Casona-Rosario-Principal', 20),
('Rosario-Casona-Principal', 22),
('Rosario-Principal-Casona', 30),
('Principal-Rosario-Casona', 18);

INSERT INTO rutas.TIPO_TRANSPORTE (Nombre) VALUES
('Autobus'),
('Taxi');

INSERT INTO rutas.HORARIOS_DISPONIBLES (Hora) VALUES
('6:00:00-12:00:00'),
('12:00:00-18:00:00');

INSERT INTO rutas.MARCA (Nombre) VALUES
('Austin'),
('Hummer'),
('Mercury'),
('Dodge'),
('Mitsubishi'),
('Ford'),
('Porsche'),
('Volvo'),
('Plymouth'),
('Mazda'),
('Isuzu'),
('GMC'),
('Lincoln'),
('Chevrolet'),
('BMW'),
('Saab'),
('Bentley'),
('Lexus'),
('Pontiac'),
('Oldsmobile'),
('Toyota'),
('Nissan'),
('Audi'),
('Chrysler'),
('Ferrari'),
('Buick'),
('Saturn'),
('Honda'),
('Volkswagen'),
('Maserati'),
('Scion'),
('Jeep'),
('Mercedes-Benz'),
('Land Rover'),
('Suzuki'),
('Jaguar'),
('Cadillac'),
('Aptera'),
('Infiniti');

INSERT INTO rutas.HORARIO (Dia_Nombre, ID_Horarios_Disponibles) VALUES
('Lunes, Martes, Miercoles', 1),
('Miercoles, Jueves, Viernes', 2),
('Lunes, Miercoles, Viernes', 1),
('Martes, Jueves, Sabado', 2),
('Lunes, Sabado', 1);

