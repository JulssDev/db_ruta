@echo off
chcp 65001
setlocal

set "PGHOST=localhost"
set "PGPORT=5432"
set "PGUSER=adminruta"
set "PGPASSWORD=ruta2024*"
set "PGDATABASE=db_ruta"

echo Ejecutando create_schema.sql ...
psql -h %PGHOST% -p %PGPORT% -U %PGUSER% -d %PGDATABASE% -f "..\ddl\create_schema.sql"
if %errorlevel% neq 0 (
    echo Error ejecutando create_schema.sql
    exit /b %errorlevel%
)

echo Ejecutando create_tables.sql ...
psql -h %PGHOST% -p %PGPORT% -U %PGUSER% -d %PGDATABASE% -f "..\ddl\create_tables.sql"
if %errorlevel% neq 0 (
    echo Error ejecutando create_tables.sql
    exit /b %errorlevel%
)

echo Script ejecutado correctamente.
endlocal
pause