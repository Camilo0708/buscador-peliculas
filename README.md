# 🎬 Buscador de Películas

Aplicación web que te permite buscar y explorar películas, series o episodios utilizando la API pública de OMDb. Muestra información relevante de cada título e incluye una interfaz moderna y responsive hecha en React + Vite.

---

## 🚀 Tecnologías Utilizadas

- **React** (Cliente)
- **Vite** (Herramienta de desarrollo)
- **JavaScript ES6+**, **CSS3**
- **OMDb API** para datos de películas

---

## ⚙️ Requisitos Previos

Antes de la instalación, asegúrate de tener lo siguiente:
- [Node.js LTS](https://nodejs.org/) (recomendado, versión 18 o superior)
- npm (incluido con Node.js)
- [Git](https://git-scm.com/) (opcional, para clonar el repositorio)

---

## 🔥 Instalación y Primer uso

1. **Clonar el repositorio:**

   
   git clone https://github.com/Camilo0708/buscador-peliculas.git
   cd buscador-peliculas
   

2. **Instalar dependencias del proyecto:**

   
   npm install
   

3. **Obtener tu API Key de OMDb:**
   
   - Ve a [https://www.omdbapi.com/apikey.aspx](https://www.omdbapi.com/apikey.aspx)
   - Ingresa tu correo, solicita la API key y revisa tu email.

4. **Configura tu archivo de variables de entorno:**

   - Copia el archivo `.env.example` como `.env`:

     ```
     cp .env.example .env
     ```
   - Abre el archivo `.env` y pega tu API KEY:


     VITE_OMDB_API_KEY=tu_api_key_aqui


5. **Ejecuta el proyecto en modo desarrollo:**


   npm run dev


   El servidor arrancará y deberías ver tu app en:  
   `http://localhost:5173/`

---

## 🌟 Características principales

- Buscador en tiempo real de películas, series y episodios (OMDb)
- Modal de detalle al hacer clic en cualquier tarjeta
- Interfaz moderna, responsive y accesible
- Barra lateral informativa y de búsqueda rápida
- Animaciones suaves y experiencia agradable en desktop y móvil
- Código 100% abierto y documentado

---

## 📚 Créditos y referencias

- [OMDb API](https://www.omdbapi.com/)
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Repositorio original](https://github.com/Camilo0708/buscador-peliculas)

---

Proyecto académico - Ingeniería de Sistemas  
Desarrollado por **Camilo Arambula Cortes**

