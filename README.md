# 📇 Administrador de Contactos – Frontend

Este proyecto representa el **frontend** de una aplicación web full stack para la gestión de contactos. Permite al usuario **crear, editar, eliminar, listar y agrupar contactos**, así como **visualizar los contactos asociados a cada grupo**. La interfaz es moderna, responsiva y construida con tecnologías actuales del ecosistema React.

El frontend está desarrollado con:

- **React** y **TypeScript** – Para construir interfaces de usuario robustas y tipadas.
- **Vite** – Herramienta de desarrollo rápida y ligera.
- **Zustand** – Manejo de estado global simple y eficiente.
- **Zod** – Validación de formularios y estructuras de datos.
- **CSS** y **HTML** – Para el diseño visual y estructura del contenido.

Este frontend se comunica con una **API REST desarrollada en ASP.NET Core** que actúa como backend del sistema.

> ⚠️ Este repositorio incluye únicamente la parte de cliente. La lógica del servidor y la persistencia de datos están en un repositorio backend separado.

## ⚙️ Funcionalidades

- 📋 **Listado de contactos**
- ➕ **Creación de nuevos contactos**
- ✏️ **Edición de contactos existentes**
- ❌ **Eliminación de contactos**
- 🧑‍🤝‍🧑 **Agrupación de contactos por grupo**.
- 👁️ **Visualización de contactos por grupo específico**.
- ⚡ **Interacción en tiempo real** con la API REST (creación, actualización y borrado sin recarga de página).
- ✅ **Validación de datos** con **Zod** para asegurar integridad en los formularios.
- 💾 **Manejo de estado global** con **Zustand**

## 🛠️ Tecnologías Usadas

### 🧑‍💻 Core
- **[React](https://reactjs.org/)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[Vite](https://vitejs.dev/)**

### ⚙️ Estado y Validación
- **[Zustand](https://zustand-demo.pmnd.rs/)**
- **[Zod](https://zod.dev/)**

### 🎨 Estilos y UI
- **CSS**
- **HTML5**

### 🌐 Comunicación
- **Fetch API** – Para consumir la API REST desarrollada en ASP.NET Core.

## 🚀 Instalación y Ejecución Local
Sigue estos pasos para clonar, instalar y ejecutar el frontend de la aplicación en tu entorno local:

### 1. Clona el repositorio
```
git clone https://github.com/Manuel-dev-ing/AdministradorContactos-Full-Stack-FrontEnd.git

```
### 2. Instala las dependencias
Asegúrate de tener Node.js (v16 o superior recomendado) y npm o yarn instalados
Con npm:
```
  npm install 
```
Con Yarn:
```
  yarn install
```
### 3. Ejecuta la aplicación en modo desarrollo
Con npm:
```
  npm run dev
```
Con Yarn: 
```
  yarn dev

```
Esto iniciará el servidor de desarrollo. Abre tu navegador y visita:

```
  http://localhost:5173

```

## Licencia

Administrador de Contactos es [MIT licensed](./LICENSE).

## Contacto
**Nombre:** Manuel Tamayo Montero.

**Correo:** manueltamayo9765@gmail.com
