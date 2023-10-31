![Captura de pantalla 2023-10-21 143930](https://github.com/Ro07-r/Inkua-Project/assets/84238521/bc842ecb-20d2-45fa-99db-880adcfc7146)

![Captura de pantalla 2023-10-21 205718](https://github.com/Ro07-r/Inkua-Project/assets/84238521/bce19619-3601-4917-8c86-79798e6425fe)


<h3>Stack utilizado:</h3>

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=js,html,css,nodejs,express" />
  </a>
</p>

<h3>Roles en el equipo:</h3>

| ROL  | INTEGRANTE |
| ------------- | ------------- |
| :computer: Scrum Master - Dev  | Rosalia Lotierzo |
| :computer: Dev  | Emmanuel Toro |
| :computer: Dev  | Marina Falcón |
| :computer: Dev  | Maia Strusiat |
| :computer: Dev  | Lorena Rodríguez |
| :computer: Dev  | Deisy Ortega  |
| :computer: Dev  | Matías Quispe |

<h3>Metodología de trabajo</h3>

Utilizamos la metodología de trabajo mixta entre Scrum y Kanban, nos manejaremos con un tablero de trabajo que tendrá distintas columnas por estado.
Trabajaremos con Milestones en los que se cargarán los distintos issues.

Las columnas tendrán los siguientes estados:

:exclamation: TO DO: Todas las tareas que se realizarán en el Milestone activo

:fast_forward: IN PROGRESS: Aquellas tareas que se están realizando por cada uno de los integrantes del grupo en el correspondiente Milestone

👀: TEST: Todas las tareas pendientes de testeo una vez que se haya realizado el PR (Aquí nos aseguramos que el código esté perfecto para poder ser mergeado a main)

:stop_sign: BLOCKED: Aquellas tareas que están bloqueadas

:thumbsup: DONE: Las tareas finalizadas


<h3>Workflow</h3>

Contaremos con la rama main y la rama test. Por cada card (issue) correspondiente a la tarea asignada se creará una rama que luego de finalizada será commiteada, pusheada y se realizará un pull request para mergear a la rama test. El issue será testeado y una vez realizado esto se mergeará mediante un pull request a la rama main.

Las ramas serán nombradas con el nombre de cada issue. Ej: InkuaProject_{Nombre_de_clase} El nombre del issue se genera con la siguiente nomenclatura:

InkuaProject_{Nombre_de_clase}

Cada issue tiene asignado:

Título (De acuerdo a la nomenclatura antes descrita)
Milestone (Nombre del Sprint)
Label (De qué parte del proyecto se trata)
Asignee (Persona encargada de resolver el issue)
Descripción (Una breve descripción de la actividad a realizar)
Status (Estado en el que se encuentra la actividad)


<h3>Integración con MercadoPago</h3>

- Datos de tarjetas para realizar pruebas de pago:

| CREDITO| NRO TARJETA|CÓDIGO|VENCIMIENTO|DOCUMENTO
| ------------- | ------------- | ------------- | ------------- | ------------- |
|<p align="center">Mastercard</p>|<p align="center">5031 7557 3453 0604</p>|<p align="center">123</p>|<p align="center">11/25</p>|<p align="center">12345678</p>
|<p align="center">Visa</p>|<p align="center">4509 9535 6623 3704</p>|<p align="center">123</p>|<p align="center">11/25</p>|<p align="center">12345678</p>
|<p align="center">American Express</p>|<p align="center">3711 803032 57522</p>|<p align="center">123</p>|<p align="center">11/25</p>|<p align="center">12345678</p>