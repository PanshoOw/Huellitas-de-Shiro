# 🐾 Huellitas de Shiro

### Tienda de productos para mascotas

**Todo para quienes dejan huellas en tu corazón.** 🐶💙

---

## 📖 Descripción del proyecto

**Huellitas de Shiro** es una aplicación web desarrollada con React que simula una tienda especializada en productos para mascotas.

El proyecto permite visualizar un inventario de productos, consultar información sobre la tienda y acceder a una sección de preguntas frecuentes.

La navegación se implementa mediante **React Router**, permitiendo desplazarse entre diferentes vistas sin necesidad de recargar completamente la página.

La aplicación incorpora una identidad visual personalizada, inspirada en Shiro, la mascota que da nombre a nuestra tienda.

Este proyecto fue desarrollado como parte de la asignatura **Desarrollo Frontend II (PFY2202)** de Duoc UC.

---

## 🎯 Objetivos

### Objetivo general

Desarrollar una aplicación web utilizando React y React Router, implementando una navegación fluida entre diferentes componentes y aplicando buenas prácticas de desarrollo frontend.

### Objetivos específicos

* Implementar una aplicación de página única (SPA).
* Configurar rutas utilizando React Router.
* Desarrollar componentes funcionales reutilizables.
* Gestionar información mediante arreglos de objetos JavaScript.
* Renderizar información dinámicamente mediante el método `.map()`.
* Incorporar una interfaz responsive utilizando CSS.
* Aplicar principios básicos de accesibilidad web.
* Organizar el proyecto mediante una estructura de carpetas y archivos.

---

## 🚀 Funcionalidades

### 🏠 Inicio

La página principal presenta nuestra tienda e incluye:

* Logotipo personalizado de Huellitas de Shiro.
* Ilustración de bienvenida de nuestra mascota.
* Presentación general del establecimiento.
* Inventario dinámico de productos.
* Información sobre categorías, precios y existencias disponibles.
* Formato monetario en pesos chilenos (CLP).

### 🐶 ¿Quiénes somos?

Sección informativa que presenta:

* Identidad de nuestra tienda.
* Propósito del establecimiento.
* Compromiso con el bienestar de las mascotas.
* Ilustración personalizada de Shiro.

### ❓ Preguntas frecuentes

Sección interactiva que permite consultar información sobre:

* Productos disponibles.
* Disponibilidad del inventario.
* Moneda utilizada para los precios.
* Funcionamiento de la plataforma.

Las preguntas utilizan elementos HTML `<details>` y `<summary>`, permitiendo desplegar sus respuestas.

### 🧭 Navegación

La aplicación incorpora un menú inferior desarrollado con React Router que permite acceder a las tres páginas.

El menú identifica visualmente la ruta seleccionada mediante el componente `NavLink`.

---

## 🛠️ Tecnologías utilizadas

| Tecnología   | Descripción                                      |
| ------------ | ------------------------------------------------ |
| HTML5        | Estructuración semántica del contenido.          |
| CSS3         | Estilos, distribución y diseño responsive.       |
| JavaScript   | Lógica de programación y gestión de datos.       |
| React        | Construcción de interfaces mediante componentes. |
| React Router | Gestión de rutas y navegación SPA.               |
| Vite         | Entorno de desarrollo y compilación.             |
| ESLint       | Análisis estático de código.                     |
| Git          | Control de versiones.                            |
| GitHub       | Alojamiento del repositorio.                     |

---

## 📂 Estructura del proyecto

```text
huellitas-de-shiro/
│
├── public/
│
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── logo-huellitas-de-shiro.png
│   │       ├── shiro-bienvenida.png
│   │       ├── shiro-nosotros.png
│   │       └── shiro-preguntas.png
│   │
│   ├── components/
│   │   └── MenuNavegacion.jsx
│   │
│   ├── data/
│   │   └── productos.js
│   │
│   ├── pages/
│   │   ├── Inicio.jsx
│   │   ├── QuienesSomos.jsx
│   │   └── PreguntasFrecuentes.jsx
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

---

## ⚙️ Instalación y ejecución

### Requisitos previos

Para ejecutar el proyecto es necesario contar con Node.js y npm en versiones compatibles con Vite.

### 1. Clonar el repositorio

```bash
git clone https://github.com/PanshoOw/Huellitas-de-Shiro.git
```

### 2. Acceder al directorio

```bash
cd Huellitas-de-Shiro
```

### 3. Instalar las dependencias

```bash
npm install
```

### 4. Iniciar el servidor de desarrollo

```bash
npm run dev
```

La terminal mostrará la dirección local de la aplicación.

Generalmente será:

```text
http://localhost:5173/
```

### 5. Ejecutar ESLint

```bash
npm run lint
```

### 6. Generar la compilación de producción

```bash
npm run build
```

### 7. Visualizar la compilación de producción

```bash
npm run preview
```

---

## 🧩 Arquitectura y componentes

El proyecto utiliza una estructura basada en componentes funcionales de React.

**App.jsx:** contiene la estructura principal de la aplicación y define las rutas disponibles.

**MenuNavegacion.jsx:** implementa los enlaces de navegación utilizando `NavLink`.

**Inicio.jsx:** representa la página principal y muestra dinámicamente el inventario.

**QuienesSomos.jsx:** presenta información sobre la tienda.

**PreguntasFrecuentes.jsx:** contiene las preguntas y respuestas desplegables.

**productos.js:** almacena los datos de demostración del inventario mediante un arreglo de objetos JavaScript.

Esta organización permite separar responsabilidades y facilita el mantenimiento del proyecto.

---

## 🎨 Identidad visual

La aplicación utiliza una paleta de colores basada principalmente en azul marino y celeste suave.

| Color           | Código    |
| --------------- | --------- |
| Azul marino     | `#17324D` |
| Azul intermedio | `#246B9B` |
| Celeste         | `#59B9E8` |
| Celeste claro   | `#EEF8FF` |
| Blanco          | `#FFFFFF` |

Las ilustraciones personalizadas de Shiro se utilizan para reforzar la identidad visual de la tienda.

---

## ♿ Accesibilidad y diseño responsive

Durante el desarrollo se consideraron las siguientes prácticas:

* Uso de etiquetas HTML semánticas.
* Navegación mediante enlaces compatibles con teclado.
* Indicadores visuales de foco.
* Descripciones alternativas para las imágenes.
* Configuración del idioma del documento en español.
* Adaptación de la interfaz a diferentes tamaños de pantalla.
* Consideración de las preferencias de movimiento reducido del usuario.

---

## 📚 Información académica

**Institución:** Duoc UC
**Asignatura:** Desarrollo Frontend II
**Código:** PFY2202
**Experiencia de aprendizaje:** 1
**Semana:** 1
**Actividad:** Utilizando tecnologías avanzadas de React en sitios web
**Modalidad:** Individual

El proyecto utiliza la temática de una tienda de mascotas, autorizada por el docente como adaptación del caso original.

---

## 📌 Consideraciones

Este proyecto fue desarrollado exclusivamente con fines académicos.

Los productos, precios y cantidades disponibles corresponden a datos ficticios utilizados para demostrar el funcionamiento del inventario.

La aplicación no incluye procesamiento de pagos, autenticación de usuarios ni operaciones comerciales reales.

---

## 🐾 Huellitas de Shiro

**Porque cada huellita deja una historia.** 💙
