# MarvelillosoAngular

Esta es una plataforma que simula ser una pagina de streaming de entretenimiento, especificamente para ver la mayoria del contenido de Marvel con un diseño que intenta ser agradable a el usuario con estilos simples pero tratar de ser eficiente.

![Captura de pantalla 2025-04-05 205838](https://github.com/user-attachments/assets/f2feae06-b22b-4848-9e37-216cb194f3f7)
![Captura de pantalla 2025-04-05 210104](https://github.com/user-attachments/assets/81e5e21d-7c0f-49e8-a3a5-d7c5238f2688)
![Captura de pantalla 2025-04-05 210144](https://github.com/user-attachments/assets/d4241c39-a8cd-45cd-bc2e-b022cbea2ff7)
![Captura de pantalla 2025-04-05 210225](https://github.com/user-attachments/assets/199b511e-fd33-46b2-89b8-40d6c805e53c)
![Captura de pantalla 2025-04-05 210254](https://github.com/user-attachments/assets/c74bea8a-6f96-46ed-abf0-316cc421252c)

MockUp de la idea principal.
![MockUp](https://github.com/user-attachments/assets/6dea2912-1eda-47b6-a04a-81516936a428)

Imagenes adicionales:
![image](https://github.com/user-attachments/assets/109648d2-1039-4dd9-b768-bf845366a9f6)
![image](https://github.com/user-attachments/assets/280a9ca1-7273-40ed-b4b4-5a90299d95d8)
![image](https://github.com/user-attachments/assets/a8159585-208f-4c9c-8870-0440a4d26c10)
![image](https://github.com/user-attachments/assets/70a88e69-42d6-414d-b793-7d7b7dec60ff)
![image](https://github.com/user-attachments/assets/c39f2d97-a712-4dfe-b462-2fbb8e7891e7)

Usuarios registrados:
![image](https://github.com/user-attachments/assets/28c7d981-d9da-4e71-af13-0e4ead434123)


Pruebas: 
![image](https://github.com/user-attachments/assets/44ad3e83-74e6-4153-9019-92eeada240a5)


Diagrama de la base de datos:
![Captura de pantalla 2025-05-20 234158](https://github.com/user-attachments/assets/4783424a-6370-4efa-85e9-1159447d4a91)


Instrucciones de uso:
1.- Descargar el repositorio.
2.- Ubicar el repositorio y crear una carpeta donde incluyas dentro la carpeta "backend" y aparte la del proyecto "marvelilloso-angular".
3.- En la consola del editor de texto (VSCode por ejemplo) ubicarse en la carpeta "MarvelillosoApi" y ejecutar el comando "dotnet run" y en otra terminal ubicarse en la carpeta "Marvelilloso-Angular" y ejecutar "ng serve". (Se necesita instalar el SDK de .NET desde Ve a https://dotnet.microsoft.com/download y desde este comando -> dotnet add package Microsoft.Data.SqlClient para poder ejecutar el backend sin problemas).
4.- Ahora la base de datos guarda a los usuarios y permite el login con las credenciales registradas.



¿Como lo hice?
Primero comenzó como una idea de contenido puesto que disfruto mucho del UCM.
Para hacer la pagina fue sencillo al inicio ya que comencé con el banner de logo de la pagina, seguido de comenzar con las secciones de cada apartado tal como son las peliculas y series, al ver que no tendria mucho desplazamiento en la pagina decidi separar las peliculas en las sagas que existen por ahora, y al final dejar las series.
Despues agregué la parte de favoritos que al inicio evidentemente está vacia.
Lo mas complicado fue agregar la barra de navegacion la cual el diseño no resulto tan complicado pues opte por usar "svg's" para los iconos. Al acercar el mouse a la barra de navegacion lateral se despliega el menu con diferentes opciones, incluyendo el cierre de sesión.



Problemas conocidos:
1.- La optimización de codigo.
2.- Falta de implementacion de "favoritos" para que cada usuario tenga su propia lista.


Retrospectiva:
¿Que hice bien?
El diseño en general me gusta demasiado y las funciones que implemente para el uso de la pagina.
La implementacion de la base de datos para cada usuario me parece muy acertado para el proyecto.
Las mejoras visuales y de funcionamiento tal como la barra de busqueda que funciona perfectamente y la funcionalidad de la barra lateral.

¿Qué no salió bien?
La falta de implementacion de una base de datos mejor, necesidad de que los usuarios tengan su propia seccion de favoritos.

¿Qué puedo hacer diferente?
Optimizar el codigo, implementar de una mejor manera el proyecto.

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.8.

## Development server

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
