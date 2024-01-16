Proyecto React
Ecommerce49900

----- * Dependencias a Instalar * ------
 
    "firebase"
    "react":
    "react-loading"
    "react-router-dom"
    "react-toastify"
    “Vite”

----- * Descripcion de Componentes y Funcionalidades * -----

// CartView
Es una representación visual del contenido del carrito de compra, mostrando detalles sobre cada producto y proporcionando la funcionalidad para eliminar productos del carrito.

-Obtiene el estado del carrito, que incluye la lista de productos en el carrito, el total de la compra y la función para eliminar un producto del carrito.
-Mapea sobre la lista de productos en el carrito y muestra información sobre cada producto y un botón para eliminar el producto del carrito.
-Muestra el total de la compra
-Redirige al usuario a la página de checkout


// CartWidget 
Este componente es un widget visual que muestra la cantidad total de productos en el carrito y proporciona un enlace directo a la página del carrito.

-Renderiza un componente que redirige a la página del carrito
-Incluye una imagen de un carrito de compras
-Muestra la cantidad total de productos en el carrito


// Checkout
Este componente maneja el proceso de checkout, interactuando con Firebase para actualizar el stock de productos y almacenar la orden en la base de datos.

-Utiliza el estado local para manejar la carga y almacenar el ID de la orden
-Obtiene información sobre el carrito, incluyendo la lista de productos, el total y la función para limpiar el carrito
-Construye un objeto con la información del comprador, productos en el carrito y el total.
-Utiliza una transacción batch para actualizar el stock de los productos en la base de datos.
-Verifica si hay productos sin stock y muestra una notificación si es necesario.
-Si todos los productos están en stock, confirma la transacción batch y agrega la orden a la colección de pedidos.
-Limpia el carrito, establece el ID de la orden y maneja el estado de carga.
-Si está cargando, muestra un mensaje de generación de orden con un indicador de carga.
-Si hay un ID de orden, muestra un mensaje con el número de ID de la orden.
-Si no está cargando ni hay un ID de orden, muestra la interfaz de checkout con el formulario de contacto


// ContactForm 
Este componente representa un formulario de contacto que recopila la información del usuario necesario para generar una orden y realiza una validación para asegurarse de que todos los campos requeridos estén completos antes de enviar la orden. 

-Utiliza el estado local para manejar la información del usuario
-Maneja cambios en los campos del formulario y actualizar el estado en consecuencia.
-Maneja el envío del formulario.
-Realiza una validación para asegurarse que los campos requeridos estén completos.
-Si algún campo falta, muestra una notificación de advertencia 
-Renderiza un formulario con campos a completar
-Utiliza el estado local para mantener los valores de los campos del formulario actualizados.
-Incluye un botón "Generar Orden" para enviar el formulario.


// Item
Este componente representa un elemento individual en una lista de productos. 

-Recibe propiedades y muestra el nombre del artículo y una imagen 
-Crea un enlace que redirige a la página de detalles cuando se hace clic en el texto "Click aquí para más".


// ItemCOunt
Este componente es un contador de cantidad, con botones para incrementar, decrementar y agregar al carrito. 

-Utiliza el estado local para manejar la cantidad del contador
-Define las funciones que actualizan el estado según las restricciones de existencia de stock, asegurando que la cantidad no sea menor que 1 ni mayor que el stock
-Muestra la cantidad actual en un elemento de encabezado
-Renderiza Un botón para descontar unidades y otro para sumar unidades
-Renderiza Un botón con el texto "Agregar al Carrito" que, al hacer clic, agrega al carrito el valor actual del contador


// ItemDetail
Este componente representa los detalles de un producto, permitiendo al usuario agregarlo al carrito si hay stock disponible.

-Cuando se agrega un producto al carrito, crea un objeto con la información del producto 
-Muestra una notificación de éxito informando que el producto se ha agregado al carrito.
-Renderiza un contenedor que muestra imagen y detalles del producto en un contenedor 
-Si el producto está sin stock, muestra un mensaje indicando la falta de stock.
-Si hay stock, muestra un componente para agregar el producto al carrito si aún no está en el carrito, o un enlace a la página del carrito si ya está en el carrito.


// ItemDetailContainer
Este componente maneja la carga asincrónica de detalles de productos basándose en el ID del producto proporcionado

-Utiliza el estado local para manejar la carga y almacenar la información del producto
-Muestra un indicador de carga durante la obtención del producto.
-Utiliza las funciones de Firestore para obtener el documento del producto de la base de datos.
-Adapta los datos del producto y los almacena en el estado local.
-Muestra una notificación si hay un error durante la obtención del producto.
-Si la carga está en curso, muestra un mensaje de carga con un indicador de carga.
-Si la carga ha finalizado, renderiza el componente con la información del producto.


// ItemList
Este componente es una lista de productos que utiliza un componente para representar cada elemento de la lista.

-Mapea sobre el array de productos y, para cada producto, renderiza el componente con las propiedades del producto 


// ItemListContainer
Este componente maneja la carga asincrónica de una lista de productos basándose en el ID de la categoría

-Realiza una carga asincrónica de productos cuando cambia el ID de categoría
-Muestra un indicador de carga durante la obtención de los productos.
-Utiliza las funciones de Firestore para obtener la colección de productos de la base de datos, filtrando por categoría si se proporciona.
-Adapta los datos de los productos y los almacena en el estado local.
-Muestra una notificación si hay un error durante la obtención de los productos.
-Si la carga está en curso, muestra un mensaje de carga con un indicador de carga.
-Si la carga ha finalizado, renderiza un título con un mensaje de saludo y muestra la lista de productos.


// Navbar
Este componente es la barra de navegación de la aplicación, proporcionando enlaces a diferentes categorías y al carrito de compras. 

-Muestra una imagen del logo y el titulo de la app
-Renderiza una sección de que contiene enlaces a distintas categorías e incluye un enlace al carrito de compras.


// Context/CartContext
Este contexto y proveedor proporcionan un sistema para gestionar el estado del carrito , incluyendo notificaciones

-Crea un contexto de carrito y define un proveedor que utiliza el estado local para almacenar la información del carrito.
-Muestra notificaciones al usuario en diferentes situaciones (ej, al agregar un producto duplicado al carrito o cuando se elimina un producto)
-Agrega un producto al carrito si no está presente, de lo contrario, muestra una notificación de advertencia.
-Verifica si un producto está presente en el carrito.
-Elimina un producto del carrito y muestra una notificación de error.
-Limpia todos los productos del carrito.
-Calcula la cantidad total de productos en el carrito.
-Calcula el total monetario del carrito.


// Service/firebase/firebaseConfig.js
Este código configura Firebase y proporciona acceso a Firestore, que es una base de datos en la nube.

-Importa las funciones necesarias de Firebase para inicializar la aplicación y para obtener una instancia de Firestore.
-Define la configuración de Firebase que contiene información como la clave de la API, el dominio de autenticación, el ID del proyecto, etc.
 

// App.js
Organiza la estructura principal y define cómo se renderizan los componentes según las rutas. 

-Configura las rutas principales de tu aplicación utilizando React Router. 
-Renderiza un componente como el contenedor principal para las rutas de la aplicación.
-Envuelve los componentes para proporcionar el contexto del carrito a toda la aplicación.
-Renderiza la barra de navegación y define las rutas y sus componentes asociados (página de inicio, categorías , detalles de un producto, carrito de compras, proceso de pago) y un mensaje de error si ninguna ruta coincide.

