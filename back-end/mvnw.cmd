@echo off
setlocal

set MVN_VERSION=3.9.16
set WRAPPER_DIR=%~dp0.mvn\wrapper
set MAVEN_HOME=%WRAPPER_DIR%\apache-maven-%MVN_VERSION%
set MAVEN_CMD=%MAVEN_HOME%\bin\mvn.cmd

if not exist "%MAVEN_CMD%" (
  powershell -NoProfile -ExecutionPolicy Bypass -Command "$ErrorActionPreference='Stop'; $ProgressPreference='SilentlyContinue'; $version='%MVN_VERSION%'; $wrapperDir='%WRAPPER_DIR%'; New-Item -ItemType Directory -Force -Path $wrapperDir | Out-Null; $zip=Join-Path $wrapperDir ('apache-maven-' + $version + '-bin.zip'); Invoke-WebRequest -Uri ('https://dlcdn.apache.org/maven/maven-3/' + $version + '/binaries/apache-maven-' + $version + '-bin.zip') -OutFile $zip; Expand-Archive -LiteralPath $zip -DestinationPath $wrapperDir -Force"
)

call "%MAVEN_CMD%" %*
