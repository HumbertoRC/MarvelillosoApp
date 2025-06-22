# Etapa 1: build
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /app

# Copia el archivo de proyecto y restaura dependencias
COPY *.csproj ./
RUN dotnet restore

# Copia todo el código y publica (compila) en modo Release
COPY . ./
RUN dotnet publish -c Release -o out

# Etapa 2: imagen runtime para ejecutar la app
FROM mcr.microsoft.com/dotnet/aspnet:7.0
WORKDIR /app
COPY --from=build /app/out .

# Expone el puerto que usa tu backend (ajusta si es otro)
EXPOSE 5000

# Ejecuta la aplicación
ENTRYPOINT ["dotnet", "MarvelillosoApi.dll"]
