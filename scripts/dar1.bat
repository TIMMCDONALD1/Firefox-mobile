@echo off
REM scripts\dar1.bat - simple batch script that prints hello dar1 and any arguments
IF "%~1"=="" (
  ECHO hello dar1
) ELSE (
  ECHO hello dar1 %*
)
EXIT /B 0
