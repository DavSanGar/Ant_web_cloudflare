# David Sánchez · Cortador Profesional de Jamón Ibérico

Sitio web personal y corporativo para servicio de **Maestro Cortador de Jamón Ibérico en Eventos, Bodas y Envasados al Vacío Gourmet**.

---

## 🌟 Características Principales

1. **Identidad Visual y Elegancia Gourmet**:
   - **Nombre de Marca**: Integrado a partir del archivo vectorial `DavidSanchezDefi.svg` en blanco sobre el fondo rojo ibérico del Hero.
   - **Isotipo / Logotipo**: Integrado a partir del archivo vectorial `DDefin.svg` en Header, sellos flotantes y Footer.
   - **Estética de Contraste Fijo**: Fondo rojo intenso "jamón ibérico curado" con los archivos vectoriales en blanco puro (`#FFFFFF`) y acentos en oro envejecido (`#C5A059`).

2. **Secciones Integradas**:
   - **Header & Navegación**: Menú responsive con enlace a secciones, botón CTA a presupuesto y menú móvil.
   - **Hero Principal**: Presentación de alto impacto con firma SVG, frase de presentación gourmet y botones de acción.
   - **Sobre Mí**: Historia de David Sánchez, técnica de corte a cuchillo fino, valores de higiene y aprovechamiento de la pieza.
   - **Servicios**:
     - Corte en directo para bodas y celebraciones privadas.
     - Loncheado artesanal a cuchillo y envasado al vacío en sobres de 100g.
     - Eventos corporativos, ferias y congresos.
     - Catas de Denominaciones de Origen y talleres de iniciación al corte.
   - **Envasado al Vacío**: Explicación del proceso en 4 pasos (recepción, loncheado manual, termosellado, taquitos y huesos).
   - **Galería de Proyectos**: Galería con filtros interactivos (*Todos, Bodas, Corporativo, Envasados*).
   - **Calculadora Rápida de Presupuesto**: Estimación dinámica en función del tipo de evento, número de piezas e invitados, con envío del presupuesto formateado directamente a WhatsApp.
   - **Redes Sociales**: Enlaces a Instagram, WhatsApp, TikTok, Facebook y LinkedIn, además de botón flotante de WhatsApp.
   - **Footer Gourmet**: Cierre institucional con el logotipo en blanco y enlaces de navegación y legales.

---

## 📂 Estructura de Archivos

```
Ant_web_cloudflare/
├── index.html                  # Estructura semántica, accesibilidad y contenidos
├── style.css                   # Estilos gourmet (paleta ibérica, responsive, variables CSS)
├── script.js                   # Lógica de interacción, calculadora y scrollspy
├── assets/
│   ├── DavidSanchezDefi.svg     # Archivo SVG del Nombre adaptado en blanco
│   ├── DDefin.svg               # Archivo SVG del Logo adaptado en blanco
│   ├── DavidSanchezDefi_orig.svg# Archivo original con atributos intactos
│   ├── DDefin_orig.svg          # Archivo original con atributos intactos
│   └── jamon_evento_1.jpg ... jamon_evento_19.jpg # 19 fotografías reales de eventos de corte y jamón ibérico
└── README.md
```

---

## 🚀 Cómo Visualizar en Local

Puedes abrir el archivo `index.html` directamente haciendo doble clic sobre él en tu explorador de archivos, o iniciar un servidor local rápido mediante cualquiera de estos métodos:

### Opción 1: Python
```bash
python3 -m http.server 8000
```
Luego abre tu navegador en `http://localhost:8000`.

### Opción 2: Node.js (npx)
```bash
npx serve .
```

---

## ☁️ Despliegue en Cloudflare Pages

El proyecto está preparado para desplegarse de manera directa y gratuita en **Cloudflare Pages**:

1. Sube los cambios a tu repositorio de GitHub:
   ```bash
   git add .
   git commit -m "feat: web cortador de jamon david sanchez"
   git push origin main
   ```
2. En el panel de **Cloudflare Dashboard**:
   - Dirígete a **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
   - Selecciona este repositorio (`Ant_web_cloudflare`).
   - Deja el campo de comando de construcción vacío (Build command: *vacío*) y el directorio de salida en la raíz (`/` o `.`).
   - Pulsa **Save and Deploy**. En pocos segundos tendrás tu URL pública lista con CDN global y certificado SSL automático.

---

## ⚙️ Personalización Rápida

- **Número de WhatsApp**: En `script.js` (línea ~170) y en los enlaces `href="https://wa.me/34600000000"` de `index.html`, sustituye `34600000000` por tu número de teléfono con prefijo internacional.
- **Redes Sociales**: En `index.html`, actualiza los enlaces `https://instagram.com`, `https://tiktok.com`, etc., con tus usuarios reales.
- **Precios de la Calculadora**: En `script.js`, dentro de la función `calculateEstimate()`, puedes ajustar las tarifas base de bodas, eventos y sobres de envasado al vacío.
