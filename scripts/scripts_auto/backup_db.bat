@echo off
chcp 65001
setlocal

set "PGHOST=localhost"
set "PGPORT=5432"
set "PGUSER=adminruta"
set "PGPASSWORD=ruta2024*"
set "PGDATABASE=db_ruta"

set "BACKUP_DIR=C:\Users\MTZ\Desktop\DB_RUTA\data\backups"

for /f "tokens=2-4 delims=/ " %%a in ('echo %date%') do (
    set "DAY=%%a"
    set "MONTH=%%b"
    set "YEAR=%%c"
)

for /f "tokens=1-2 delims=:" %%a in ("%time: =0%") do (
    set "HOUR=%%a"
    set "MINUTE=%%b"
)

set "BACKUP_FILE=%BACKUP_DIR%\bk_zoo_%DAY%%MONTH%%YEAR%%HOUR%%MINUTE%.sql"

echo Iniciando backup de la base de datos: %PGDATABASE%
"pg_dump" -U %PGUSER% -h %PGHOST% -p %PGPORT% -F c -b -v -f "%BACKUP_FILE%" %PGDATABASE%

if %errorlevel% neq 0 (
    echo Error al realizar el backup.
    exit /b %errorlevel%
) else (
    echo Backup completado exitosamente. Archivo creado: %BACKUP_FILE%
)

endlocal
pause