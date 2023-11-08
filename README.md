# <img style="padding-right:0.5rem" src='https://img.freepik.com/vector-premium/bandera-argentina-bandera-argentina-ilustracion-vectorial_685751-66.jpg' width="50px" >  <span style="font-size:3rem">ESPAÑOL:</span>

## <i align="center" style="font-size:2rem">😀 CRUD DE USUARIOS</i>


En este proyecto se usaron hooks como **useState,useEffect,useContext** , tenologias como  **HTML,CSS,JavaScript,React,SASS** , y para el manejo de estados **Redux**.

 _Este proyecto fue construido con el proposito de practicar Redux_

<p align="center">
<img width="600px" heigth="600px" src="./src/assets/cat-printer.gif" alt="gato imprimiendo">
</p>

## 💡 Como se penso este proyecto y como funciona

**_<span style="text-decoration:underline">Idea Principal</span>: Un CRUD de usuarios_**

Primero que nada , este proyecto lo construi con la intencion de practicar el manejador de estados **Redux**.
Anteriormente ya habia construido un CRUD de usuarios asi que supuse que no seria tan complicado realizar un crud pero agregandole Redux

Los 2 principales componentes de esta aplicacion son : **Tabla de usuarios** y **Formulario de usuarios**

Importe el provider,cree la store , uni la store con el provider, cree los 2 reducers primero el de usuarios y segundo el del  formulario.

Los datos para el estado inicial de los Usuarios los datos los coloque previamente , no se realiza ninguna peticion fetch , ya se encuentran en la app. Hay 3 acciones principales de los usuarios : Eliminar un usuario , añadir un usuario y editar un usuario

El estado inicial del formulario corresponde a la misma cantidad de campos que posee formulario , y se lo llama normalmente "forma controlada" ,a  esta forma que aplique para guardar los datos del formulario . Hay 3 acciones princiaples del formularion: Cambiar el formulario, editar el formulario y resetear el formulario.

Ademas agregue persistencia de datos a traves de un Middleware, que cada vez que  realiza una accion el usuario se guardan los datos del nuevo estado  en el  cache ("Local Storage") para asi siempre tener los datos mas "frescos".

Para los estilos utilice SASS y Styled Components . Me parecio idea interesante juntar estas 2 tecnologias y la verdad que el resultado me gusto bastante.

-------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------

# <img style="padding-right:0.5rem" src="https://img.freepik.com/vector-premium/gran-bretana-bandera-bandera-inglaterra-vector-icono-reino-unido-bandera-gran-bretana-10-eps_800531-104.jpg" width="50px"> <span style="font-size:3rem">ENGLISH:</span>

## <i align="center" style="font-size:2rem">😆 USER CRUD</i>
 
In this project was used hooks like **useState,useEffect,useContext** , technologies like  **HTML,CSS,JavaScript,React,SASS** and for the state mangment **Redux**

 _This project was built with the purpose of practising REACT and REDUX_


<p align="center">
<img width="600px" heigth="600px" src="./src/assets/dog-doggo.gif" alt="dog waving">
</p>

## 🤔 How this project was thinked and how it works

**_<span style="text-decoration:underline">Main Idea</span>: An User CRUD_**


First of all, this project I was built with the purpose/intention of practising the state handler **Redux**. Previously , I made an user CRUD so I supose that it wouldn´t be too complicate to recreate it but adding redux

The two main components of this project are : **Table Crud** and **User Form**

I imported the provider,created the store ,joined the store with the provider . created the 2 reducers , first user reducer and second the form reducer

The data for the user´s initial state , i put previously in the app , so it won´t make a fetch to any API.The user Reducer has three main actions : Remove a user, add a user and edit a user

The initial state for the form has the same quantity of fields that contains the form ,I did the "controled form" to handler the state of this form .It has three main actions : Change the form , edit the form and reset the form.

Also I added persistence data throught a Middleware .It any time that a user dispatch and action , the new state that it come with consequence of it , it will storage in cache ("Local Storage") to has always the data more fresh

For the styles i used SASS and Styled Components. I found it very very interesting  to combine these two technologies and there sults were trully good.

