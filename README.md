# To-Do List App

Una sencilla aplicación de lista de tareas (To-Do List) construida con **React**, **TypeScript** y **ViteJS**. Esta aplicación permite a los usuarios gestionar tareas y categorías, proporcionando una experiencia intuitiva y funcional.

---

## Características

### Gestión de Tareas

- **Agregar Tareas**: Los usuarios pueden añadir nuevas tareas con facilidad.
- **Completar Tareas**: Las tareas pueden marcarse como completadas o no completadas.
- **Eliminar Tareas**: Permite eliminar tareas que ya no son necesarias.

### Gestión de Categorías

- **Crear Categorías**: Los usuarios pueden añadir nuevas categorías para organizar sus tareas.
- **Editar Categorías**: Modificar el nombre de las categorías existentes.

### Funcionalidades Adicionales

- **Asignar Categorías**: Cada tarea puede ser asignada a una categoría específica.
- **Filtrar por Categorías**: Ver solo las tareas de una categoría seleccionada.
- **Almacenamiento Local**: Todas las tareas y categorías se guardan en el almacenamiento local del navegador, asegurando que los datos persistan entre sesiones.

---

## Tecnologías Utilizadas

- **React**: Biblioteca para construir interfaces de usuario.
- **TypeScript**: Añade tipado estático para mayor robustez y mantenimiento.
- **ViteJS**: Herramienta de desarrollo para aplicaciones web rápidas.
- **CSS Modules**: Gestión de estilos modular para evitar conflictos.

---

## Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Felipelo94/todo-app
   ```

## Estructura del proyecto

```
└── 📁todo-app
    └── 📁public
        └── 📁images
            └── home-img.svg
            └── step1.svg
            └── step2.svg
            └── step3.svg
        └── favicon.svg
        └── Prueba Técnica para Desarrollador Mobile - Aplicación Ionic nueva.pdf
    └── 📁src
        └── 📁components
            └── 📁atoms
                └── 📁Button
                    └── Button.module.scss
                    └── Button.tsx
            └── 📁molecules
                └── 📁CategorySelector
                    └── CategorySelector.module.scss
                    └── CategorySelector.tsx
                └── 📁DatePicker
                    └── DatePicker.module.scss
                    └── DatePicker.tsx
                └── 📁Modal
                    └── Modal.module.scss
                    └── Modal.tsx
                └── 📁PrioritySelector
                    └── PrioritySelector.module.scss
                    └── PrioritySelector.tsx
                └── 📁TaskItem
                    └── TaskCard.module.scss
                    └── TaskCard.tsx
            └── 📁organisms
                └── OnboardingStepper.module.scss
                └── OnboardingStepper.tsx
            └── 📁templates
                └── HomePage.module.scss
                └── HomePage.tsx
                └── OnboardingPage.tsx
        └── 📁context
            └── TaskContext.tsx
        └── 📁hooks
            └── useLocalStorage.ts
        └── 📁styles
        └── 📁types
            └── types.ts
        └── App.css
        └── App.tsx
        └── index.css
        └── main.tsx
        └── vite-env.d.ts
    └── .gitignore
    └── eslint.config.js
    └── index.html
    └── package-lock.json
    └── package.json
    └── README.md
    └── tsconfig.app.json
    └── tsconfig.json
    └── tsconfig.node.json
    └── vite.config.ts
```

## Scripts Disponibles

```
npm run dev: Inicia el servidor de desarrollo.
```

```
npm run build: Genera una versión de producción de la aplicación.
```

```
npm run preview: Previsualiza la versión de producción generada.
```
