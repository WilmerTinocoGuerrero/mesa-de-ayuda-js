# Sistema de Mesa de Ayuda - Frontend

# Integrante 3: Componentes reutilizables, formularios y diseño UI/UX

## Descripción del aporte

El desarrollo realizado corresponde al módulo frontend del Sistema de Mesa de Ayuda, enfocado en la creación de componentes reutilizables, diseño de interfaz, validaciones de formularios y experiencia de usuario.

El objetivo principal fue desarrollar una interfaz moderna, responsiva y organizada, preparada para una futura integración con el backend mediante componentes independientes y reutilizables.

---

# Tecnologías utilizadas

- React 18
- Vite
- Tailwind CSS
- React Router DOM v6
- Lucide React
- JavaScript ES6+

---

# Responsabilidades desarrolladas

## Creación de componentes reutilizables

Se desarrollaron componentes independientes para mejorar la organización, mantenimiento y reutilización del código.

### Navbar.jsx

Componente encargado de la navegación principal del sistema.

Características:
- Diseño responsive.
- Enlaces dinámicos con rutas activas.
- Identidad visual institucional.
- Uso de iconos mediante Lucide React.

---

### IncidentForm.jsx

Formulario utilizado para registrar y editar incidencias.

Características:
- Validación de campos.
- Manejo de información mediante props.
- Preparado para recibir datos desde un backend.
- Reutilizable para creación y edición de registros.

---

### IncidentCard.jsx

Componente encargado de representar visualmente cada incidencia.

Características:
- Diseño mediante tarjetas.
- Clasificación visual por prioridad:
  - Crítica: rojo.
  - Alta: naranja.
  - Media: amarillo.
  - Baja: verde.
- Acciones de editar y eliminar.
- Efectos hover y animaciones.

---

### DashboardStats.jsx

Componente utilizado para mostrar estadísticas generales del sistema.

Características:
- Resumen de incidencias.
- Visualización de estados.
- Presentación clara de información importante.

---

### DeleteModal.jsx

Modal reutilizable para confirmar la eliminación de incidencias.

Características:
- Confirmación antes de eliminar.
- Control mediante propiedades.
- Diseño integrado con la interfaz.

---

### LoadingSpinner.jsx

Componente utilizado para mostrar estados de carga.

Características:
- Animación de carga.
- Diseño reutilizable.
- Mejora la experiencia del usuario durante procesos.

---

# Diseño UI/UX implementado

Se aplicaron mejoras visuales para obtener una interfaz moderna y profesional:

- Diseño adaptable para móviles, tablets y escritorio.
- Uso de colores institucionales.
- Animaciones suaves mediante CSS y Tailwind.
- Efectos hover en botones y tarjetas.
- Transiciones para mejorar la interacción.
- Organización visual mediante componentes separados.

---

# Estructura del proyecto

```
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── IncidentForm.jsx
│   ├── IncidentCard.jsx
│   ├── DashboardStats.jsx
│   ├── DeleteModal.jsx
│   └── LoadingSpinner.jsx
│
├── pages/
│   ├── Dashboard.jsx
│   ├── RegisterIncident.jsx
│   └── IncidentsList.jsx
│
├── App.jsx
├── main.jsx
├── index.css
└── animations.css
```

---

# Instalación

Instalar las dependencias del proyecto:

```bash
npm install
```

Ejecutar el proyecto en modo desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en:

```
http://localhost:5173/
```

---

# Generar versión de producción

Para crear la versión optimizada del proyecto:

```bash
npm run build
```

---

# Conexión con Backend

La estructura del frontend fue preparada para integrarse con servicios backend mediante APIs REST.

Los componentes permiten realizar futuras conexiones para:

- Obtener incidencias mediante solicitudes GET.
- Registrar incidencias mediante solicitudes POST.
- Actualizar incidencias mediante solicitudes PUT.
- Eliminar incidencias mediante solicitudes DELETE.

Actualmente se utilizan datos simulados para pruebas visuales, pero la arquitectura permite reemplazarlos fácilmente por información proveniente del backend.

---

# Mejoras implementadas

- Arquitectura basada en componentes reutilizables.
- Separación entre páginas y componentes.
- Validaciones en formularios.
- Diseño moderno con Tailwind CSS.
- Animaciones personalizadas.
- Interfaz responsive.
- Uso de iconografía profesional con Lucide React.
- Preparación para integración con backend.