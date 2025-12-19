<div align="center">

# 🎄 Esfera - Recuerdos de Navidad

<img src="https://media.giphy.com/media/3oz8xAFtqoOUUrsh7W/giphy.gif" width="200" alt="Christmas Ornament"/>

### ✨ Una experiencia interactiva mágica para explorar recuerdos navideños ✨

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-0.182-000000?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

[Demo en Vivo](#) · [Reportar Bug](https://github.com/joseorteha/esfera/issues) · [Solicitar Feature](https://github.com/joseorteha/esfera/issues)

</div>

---

## 📖 Sobre el Proyecto

<div align="center">
<img src="https://media.giphy.com/media/xUPGcyi4YBkfNx8Hcs/giphy.gif" width="400" alt="Snow Globe"/>
</div>

**Esfera** es una aplicación web interactiva que presenta una esfera navideña 3D. Al hacer clic en ella, se despliegan fotos flotantes con recuerdos especiales, creando una experiencia mágica y nostálgica perfecta para la temporada navideña.

### 🎯 ¿Por qué Esfera?

- 🎁 **Regalo Digital Único** - Perfecto para compartir recuerdos con familia y amigos
- 🖼️ **Galería Interactiva** - Las fotos orbitan alrededor de la esfera de forma elegante
- 🎨 **Personalizable** - Múltiples temas de colores para adaptarse a tu estilo
- 📱 **Responsive** - Funciona perfectamente en móvil, tablet y desktop

---

## ✨ Características

<table>
<tr>
<td width="50%">

### 🔮 Esfera 3D Interactiva
Una hermosa esfera navideña renderizada con Three.js que responde a tus interacciones.

</td>
<td width="50%">

### ❄️ Partículas de Nieve
Copos de nieve animados que caen suavemente creando ambiente navideño.

</td>
</tr>
<tr>
<td width="50%">

### 📸 Fotos Flotantes
Tus recuerdos orbitan mágicamente alrededor de la esfera con animaciones fluidas.

</td>
<td width="50%">

### 🎨 Temas de Color
Elige entre Arctic Blue, Christmas Red o Forest Green.

</td>
</tr>
<tr>
<td width="50%">

### 🌐 Multiidioma
Soporte completo para Español e Inglés.

</td>
<td width="50%">

### 📱 Diseño Responsive
Optimizado para verse increíble en cualquier dispositivo.

</td>
</tr>
</table>

---

## 🛠️ Tech Stack

<div align="center">

| Frontend | Estilos | 3D & Animaciones | Herramientas |
|:--------:|:-------:|:----------------:|:------------:|
| ![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black) | ![Tailwind](https://img.shields.io/badge/-Tailwind-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white) | ![Three.js](https://img.shields.io/badge/-Three.js-000?style=flat-square&logo=three.js&logoColor=white) | ![Vite](https://img.shields.io/badge/-Vite-646CFF?style=flat-square&logo=vite&logoColor=white) |
| ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) | ![shadcn/ui](https://img.shields.io/badge/-shadcn/ui-000?style=flat-square&logo=shadcnui&logoColor=white) | ![Framer](https://img.shields.io/badge/-Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white) | ![ESLint](https://img.shields.io/badge/-ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white) |

</div>

---

## 🚀 Instalación

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/joseorteha/esfera.git

# 2. Entrar al directorio
cd esfera

# 3. Instalar dependencias
npm install

# 4. Iniciar servidor de desarrollo
npm run dev
```

<div align="center">
<img src="https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif" width="300" alt="Coding"/>
</div>

Abre [http://localhost:8080](http://localhost:8080) en tu navegador 🎉

---

## 📜 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | 🔥 Inicia el servidor de desarrollo |
| `npm run build` | 📦 Genera build de producción |
| `npm run preview` | 👀 Preview del build de producción |
| `npm run lint` | 🔍 Ejecuta ESLint |

---

## 📁 Estructura del Proyecto

```
esfera/
├── 📂 public/              # Archivos estáticos
├── 📂 src/
│   ├── 📂 assets/          # Imágenes y fotos
│   ├── 📂 components/      # Componentes React
│   │   ├── 🎄 ChristmasSphere.tsx
│   │   ├── 📸 FloatingPhotos.tsx
│   │   ├── ❄️ SnowParticles.tsx
│   │   ├── 🎨 ThemeSelector.tsx
│   │   └── 🌐 LanguageToggle.tsx
│   ├── 📂 contexts/        # Context providers
│   ├── 📂 hooks/           # Custom hooks
│   ├── � pages/           # Páginas
│   └── 📄 index.css        # Estilos globales
├── 📄 package.json
├── 📄 tailwind.config.ts
└── 📄 vite.config.ts
```

---

## 🎨 Temas Disponibles

<div align="center">

| Arctic Blue 💙 | Christmas Red ❤️ | Forest Green 💚 |
|:--------------:|:----------------:|:---------------:|
| Tonos fríos y elegantes | Clásico navideño | Natural y acogedor |

</div>

---

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! 

1. Fork el proyecto
2. Crea tu rama (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## � Licencia

Distribuido bajo la licencia MIT. Ver `LICENSE` para más información.

---

## 👨‍💻 Autor

<div align="center">

<img src="https://github.com/joseorteha.png" width="100" style="border-radius: 50%"/>

**Jose Ortega**

[![GitHub](https://img.shields.io/badge/GitHub-joseorteha-181717?style=for-the-badge&logo=github)](https://github.com/joseorteha)

</div>

---

<div align="center">

### ⭐ ¡Dale una estrella si te gustó el proyecto! ⭐

<img src="https://media.giphy.com/media/3oriNZoNvn73MZaFYk/giphy.gif" width="200" alt="Christmas Tree"/>

**¡Felices Fiestas! 🎄🎅❄️**

</div>
