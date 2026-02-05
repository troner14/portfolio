# Portafolio Personal - Backend & DevSecOps

Este es mi portafolio personal, diseñado para mostrar mis habilidades en desarrollo **Backend**, **Infraestructura** y **DevSecOps**. La aplicación es dinámica y consume la API de GitHub para mantener actualizados mis repositorios y perfil en tiempo real.

## 🚀 Características

-   **Integración con GitHub API**: Muestra automáticamente mis repositorios públicos más recientes y estadísticas.
-   **Renderizado Dinámico**: Construido con **Node.js** y **EJS** para generar contenido en el servidor.
-   **Diseño Moderno**: Interfaz oscura con acentos neón, totalmente responsiva y animaciones sutiles.
-   **Secciones**:
    -   Stack Tecnológico (Backend, Seguridad, DevOps).
    -   Experiencia Laboral (Hardcoded/Dinámico).
    -   Proyectos Destacados (Filtrado automático).
    -   Contacto.

## 🛠️ Stack Tecnológico

-   **Backend**: Node.js, Express.js
-   **Template Engine**: EJS
-   **Estilos**: CSS3 (Variables, Flexbox, Grid)
-   **Servicios**: Axios (Peticiones HTTP), GitHub REST API

## 🔧 Instalación y Despliegue

1.  **Clonar el repositorio**
    ```bash
    git clone https://github.com/troner14/portfolio.git
    cd portfolio
    ```

2.  **Instalar dependencias**
    ```bash
    npm install
    ```

3.  **Configurar variables de entorno**
    Crea un archivo `.env` en la raíz del proyecto:
    ```env
    PORT=3000
    GITHUB_USERNAME=troner14
    GITHUB_TOKEN=tu-personal-access-token # Opcional, para aumentar el rate limit
    ```

4.  **Iniciar en desarrollo**
    ```bash
    npm run dev
    ```

5.  **Producción**
    ```bash
    npm start
    ```

## 📝 Licencia

Este proyecto está bajo la licencia ISC.
