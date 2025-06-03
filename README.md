# MarvelillosoAngular

Es una plataforma de streaming inspirada en el Universo Cinematográfico Marvel (UCM). Ofrece un diseño limpio, funcional y con navegación sencilla.  
El objetivo de este proyecto es tener una plataforma accesible a las personas que quieran disfrutar del contenido del UCM o incluso si es nuevo en este universo, es una forma de ubicar todo el contenido.  


![image](https://github.com/user-attachments/assets/73c76481-cb66-4c9c-90ee-67e9a04e878a)  
![image](https://github.com/user-attachments/assets/b91d6634-c6ed-4025-a7b5-b8b5d3ac2870)  
![image](https://github.com/user-attachments/assets/a80a0cfa-000c-4be9-8941-0538cf6c5867)  
![image](https://github.com/user-attachments/assets/959bd28c-616e-42ad-8ed7-1caa34fa2184)  
![image](https://github.com/user-attachments/assets/667995e6-d05c-4d42-abfb-078913d8456e)  

## MockUp de la idea principal.
![MockUp](https://github.com/user-attachments/assets/6dea2912-1eda-47b6-a04a-81516936a428)

## Imagenes adicionales:
![movie.service.ts](https://github.com/user-attachments/assets/84709d6d-e74f-4c2d-88d0-e32c846ad91a)
![favorite.service.ts](https://github.com/user-attachments/assets/f34f2ea1-074a-4371-95d7-25f24fe1a828)
![login.component.ts](https://github.com/user-attachments/assets/60d64bbd-647e-4801-ac49-87c3c8362ced)
![index.component.ts](https://github.com/user-attachments/assets/37b51620-271e-41bc-9d12-acc71b30ae67)
![index.component.ts](https://github.com/user-attachments/assets/67f29235-aba2-4df0-a419-a4818f7cf002)
![register.component.ts](https://github.com/user-attachments/assets/f134675c-e7d1-41d5-958d-a68c18953aae)
![register.component.ts](https://github.com/user-attachments/assets/c3f9a548-efff-4857-9472-88d3b94c0bf0)



## Usuarios registrados:
![image](https://github.com/user-attachments/assets/9b35f5a2-91c3-4525-a991-c18a4679dca8)

## Favoritos por usuarios:
![image](https://github.com/user-attachments/assets/dab8ffe3-ec2e-4406-be29-5a7e0ebf1145)

## Pruebas: 
![TestCoverage](https://github.com/user-attachments/assets/3bc00912-6f88-4134-b428-734f67fd3850)

## Diagrama de la base de datos:  
![Diagram](https://github.com/user-attachments/assets/7b22cb0f-56c5-4556-ab23-7c5191b8c2d1)


## Swagger:
![image](https://github.com/user-attachments/assets/8d1614c7-5307-4112-9406-02ca251722d4)



## 🚀 Instalación y ejecución

### Requisitos previos

- [Node.js](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)
- [.NET SDK](https://dotnet.microsoft.com/download)
- [SQL Server](https://www.microsoft.com/es-mx/sql-server)

### Pasos para correr el proyecto

```bash
git clone https://github.com/HumbertoRC/MarvelillosoAngular.git
```
# Backend
```bash
cd backend/MarvelillosoApi
dotnet add package Microsoft.Data.SqlClient
dotnet run
```
# Frontend
```bash
cd marvelillosoangular
npm install
ng serve
```


## ¿Como lo hice?
Primero comenzó como una idea de contenido puesto que disfruto mucho del UCM.
Para hacer la pagina fue sencillo al inicio ya que comencé con el banner de logo de la pagina, seguido de comenzar con las secciones de cada apartado tal como son las peliculas y series, al ver que no tendria mucho desplazamiento en la pagina decidi separar las peliculas en las sagas que existen por ahora, y al final dejar las series.
Despues agregué la parte de favoritos que al inicio evidentemente está vacia.
Lo mas complicado fue agregar la barra de navegacion la cual el diseño no resulto tan complicado pues opte por usar "svg's" para los iconos. Al acercar el mouse a la barra de navegacion lateral se despliega el menu con diferentes opciones, incluyendo el cierre de sesión.



## Problemas conocidos:
1.- La optimización de codigo.  
2.- Alguna mala implementación o requerimento.

## Retrospectiva:
¿Que hice bien?  
- El diseño en general me gusta demasiado y las funciones que implemente para el uso de la pagina.  
- La implementacion de la base de datos para cada usuario me parece muy acertado para el proyecto.  
- Las mejoras visuales y de funcionamiento tal como la barra de busqueda que funciona perfectamente y la funcionalidad de la barra lateral.
- La implementación de favoritos para cada usuario.

## ¿Qué no salió bien?
La falta de implementacion de una base de datos mejor.  

## ¿Qué puedo hacer diferente?
Optimización y refactorización del código.  

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.8.

## Servidor de desarrollo

Para iniciar un servidor de desarrollo local, ejecuta:

```bash
ng serve
```

Una vez que el servidor esté en funcionamiento, abre tu navegador y navega a http://localhost:4200/.
La aplicación se recargará automáticamente cada vez que modifiques alguno de los archivos fuente.

Generación de código (Code scaffolding)
Angular CLI incluye potentes herramientas para la generación automática de código.
Para generar un nuevo componente, ejecuta:

```bash
ng generate component component-name
```

Para ver una lista completa de esquemas disponibles (como components, directives o pipes), ejecuta:
```bash
ng generate --help
```

## Building

Para compilar el proyecto, ejecuta:

```bash
ng build
```

Esto compilará tu proyecto y almacenará los archivos generados en el directorio 
 `dist/`. Por defecto, la compilación en modo producción optimiza tu aplicación para rendimiento y velocidad.

## Running unit tests

Para ejecutar pruebas unitarias con el ejecutor de pruebas [Karma](https://karma-runner.github.io) test runner, utiliza el siguiente comando:

```bash
ng test
```

## Ejecución de pruebas end-to-end

Para realizar pruebas end-to-end (e2e), ejecuta:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
