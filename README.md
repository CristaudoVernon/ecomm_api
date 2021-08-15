# E-Commerce API

###### Español:
Proyecto final del curso de "Desarrollo con Node.js", realizado en la UTN.
El mismo esta hecho en *Node.js* con el framework *Express*.

Se utilizaron las dependencias: 
- **Mongoose** para escribir y recibir consultas de la base de datos de MongoDB.
- **JWT** para generar el token de usuario al login.
- **Bcrypt** para encriptar el password de los usuarios.

Features:
- **GET** /productos: Devuelve json de todos los productos dados en la base de datos
- **POST** /productos: Crea un json de producto en la base de datos (solo para usuarios registrados en la BD)*
- **GET** /destacados: Devuelve json de todos los productos destacados con valor true en "destacados"
- **GET** usuarios/login: Login de usuario.
- **POST** usuarios/registro: Registro de usuario. Crea json de usuario en la base de datos.

* Ingresar el value del token recibido en el VALUE del x-access-token en "Headers".

Seria de mi total gratitud poder recibir un feedback de este proyecto
asi de esta forma se si hay algo que cambiar o mejorar.

---------------------------------------------------------------------------------

###### English:
This is the final project of the "Desarrollo con Node.js" course, 
performed at UTN (Universidad Tecnologica Nacional).
Developed with Node.js, using *Express* framework.

I worked with this dependencies:
- **Mongoose** to get and post in MongoDB.
- **JWT** to generate a user token for login.
- **Bcrypt** to encrypt the users passwords.

Features:
- **GET** /productos: Returns json of all products in the data base.
- **POST** /productos: Creates json of a product in the DB (only for registered users in the DB)*
- **GET** /destacados: Returns json of all "featured" products with true value in "destacados".
- **GET** usuarios/login: User login.
- **POST** usuarios/registro: To register an user. Creates 'usuario' json in the DB.

* Copy the token given in the login and paste it in the x-access-token VALUE in "Headers"

I will be totally grateful by receiving a feedback of this project, 
so this way I know if there is something to change or improve.