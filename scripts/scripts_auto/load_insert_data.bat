@echo off
chcp 65001
setlocal

set "PGHOST=localhost"
set "PGPORT=5432"
set "PGUSER=adminruta"
set "PGPASSWORD=ruta2024*"
set "PGDATABASE=db_ruta"

echo Ejecutando 05_conductor.sql...
psql -h %PGHOST% -p %PGPORT% -U %PGUSER% -d %PGDATABASE% -f "..\dml\insert\05_conductor.sql"
if %errorlevel% neq 0 (
    echo Error ejecutando 05_conductor.sql
    exit /b %errorlevel%
)

echo Ejecutando 01_separate_tables.sql...
psql -h %PGHOST% -p %PGPORT% -U %PGUSER% -d %PGDATABASE% -f "..\dml\insert\01_separate_tables.sql"
if %errorlevel% neq 0 (
    echo Error ejecutando 01_separate_tables.sql
    exit /b %errorlevel%
)

echo Ejecutando 04_transporte.sql...
psql -h %PGHOST% -p %PGPORT% -U %PGUSER% -d %PGDATABASE% -f "..\dml\insert\04_transporte.sql"
if %errorlevel% neq 0 (
    echo Error ejecutando 04_transporte.sql
    exit /b %errorlevel%
)

echo Ejecutando 03_ruta.sql...
psql -h %PGHOST% -p %PGPORT% -U %PGUSER% -d %PGDATABASE% -f "..\dml\insert\03_ruta.sql"
if %errorlevel% neq 0 (
    echo Error ejecutando 03_ruta.sql
    exit /b %errorlevel%
)

echo Ejecutando 02_estudiantes.sql...
psql -h %PGHOST% -p %PGPORT% -U %PGUSER% -d %PGDATABASE% -f "..\dml\insert\02_estudiantes.sql"
if %errorlevel% neq 0 (
    echo Error ejecutando 02_estudiantes.sql
    exit /b %errorlevel%
)

echo Todos los scripts SQL se ejecutaron correctamente.
endlocal
pause