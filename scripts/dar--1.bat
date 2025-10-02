@echo off
REM scripts\dar--1.bat - simple batch script that prints hello and any arguments
IF "%~1"=="" (
  ECHO hello
) ELSE (
  ECHO hello %*
)
EXIT /B 0
