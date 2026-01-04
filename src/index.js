// ===== MODAL PROYECTOS =====
const projects = [
  {
    title: "Sistema Web – Obras Públicas",
    images: [
      "./src/assets/images/web - Obras Publicas/imgCal.webp",
      "./src/assets/images/web - Obras Publicas/imgCal2.webp",
      "./src/assets/images/web - Obras Publicas/imgCal3.webp",
      "./src/assets/images/web - Obras Publicas/Inf.png",
      "./src/assets/images/web - Obras Publicas/Inf (2).png"
    ],
    description: `Plataforma web desarrollada para la gestión, coordinación y evaluación de proyectos de obras públicas.
            El sistema permite a los clientes registrar obras, agendar fechas de visita y solicitar evaluaciones técnicas.
            Los inspectores acceden a la plataforma para revisar las solicitudes, realizar la evaluación en terreno y 
            emitir un informe de aprobación o rechazo, indicando observaciones y requisitos pendientes en caso de ser necesario.
            El cliente puede visualizar el estado de su obra en tiempo real, incluyendo:`,
    features: [
      "   - Resultado de la evaluación (aprobada / rechazada)",
      "   - Observaciones técnicas",
      "   - Requisitos faltantes",
      "   - Historial de visitas e inspecciones"
    ],
    tech: ["HTML ", "CSS ", "Java Script ", "React ", "Express.js ", "MongoDB "],
    git: "https://github.com/EstebanA1/proyectoISW"
  },
  {
    title: "UbícameApp",
    images: [
      "./src/assets/images/app - UbicameUBB/Cap 1.jpeg",
      "./src/assets/images/app - UbicameUBB/Cap 2.jpeg",
      "./src/assets/images/app - UbicameUBB/Cap 3.jpeg",
      "./src/assets/images/app - UbicameUBB/Cap 4.jpeg",
      "./src/assets/images/app - UbicameUBB/Cap 5.jpeg",
      "./src/assets/images/app - UbicameUBB/Cap 6.jpeg",
      "./src/assets/images/app - UbicameUBB/Cap 7.jpeg",
      "./src/assets/images/app - UbicameUBB/Cap 8.jpeg",
      "./src/assets/images/app - UbicameUBB/Cap 9.jpeg",
      "./src/assets/images/app - UbicameUBB/Cap 10.jpeg",
      "./src/assets/images/app - UbicameUBB/Cap 11.jpeg",
      "./src/assets/images/app - UbicameUBB/Cap 12.jpeg",
      "./src/assets/images/app - UbicameUBB/Cap 13.jpeg",
      "./src/assets/images/app - UbicameUBB/Cap 14.jpeg",
      "./src/assets/images/app - UbicameUBB/Cap 15.jpeg",
      "./src/assets/images/app - UbicameUBB/Cap 16.jpeg",
      "./src/assets/images/app - UbicameUBB/Cap 17.jpeg",
      "./src/assets/images/app - UbicameUBB/Imagen1.jpeg",
      "./src/assets/images/app - UbicameUBB/Imagen2.jpeg"
    ],
    description: `Aplicación móvil desarrollada para facilitar la orientación y navegación dentro del entorno universitario.
    La plataforma permite a estudiantes, docentes y visitantes localizar salas, edificios y dependencias de la universidad de forma rápida e intuitiva.
    Además, incorpora un chatbot informativo que asiste a los usuarios en la realización de trámites académicos y administrativos, entregando orientación paso a paso según el tipo de consulta.
    El sistema incluye un módulo de preguntas frecuentes con información clara y actualizada, mejorando el acceso a servicios institucionales y reduciendo la carga de atención presencial.`,
    features: [
    " - Localización de salas y edificios universitarios",
    " - Mapa interactivo con puntos de interés",
    " - Chatbot para consultas académicas y administrativas",
    " - Orientación para la realización de trámites universitarios",
    " - Acceso a preguntas frecuentes",
    " - Información institucional centralizada"
    ],
    tech: ["Flutter ", "Dart ", "Firebase ", "Google Maps ", "Google Places API ", "Android Studio "],
    git: "https://github.com/TheDanger01/Gps-AppMovil"
  },
  {
    title: "Traductor Lengua de Señas Chilena",
    images: [
      "./src/assets/images/app - Traductor Lengua De Señas/C1.jpeg",
      "./src/assets/images/app - Traductor Lengua De Señas/C2.jpeg",
      "./src/assets/images/app - Traductor Lengua De Señas/C3.png",
      "./src/assets/images/app - Traductor Lengua De Señas/C4.png",
      "./src/assets/images/app - Traductor Lengua De Señas/C5.png",
      "./src/assets/images/app - Traductor Lengua De Señas/C6.png",
      "./src/assets/images/app - Traductor Lengua De Señas/C7.png",
      "./src/assets/images/app - Traductor Lengua De Señas/C8.png",
      "./src/assets/images/app - Traductor Lengua De Señas/C9.png"
    ],
    description: `Aplicación móvil desarrollada con inteligencia artificial para el reconocimiento y traducción de Lengua de Señas Chilena (LSCh) a partir de video.
    El sistema procesa secuencias de video capturadas por el dispositivo móvil, detectando y clasificando gestos de señas mediante modelos de visión por computador y aprendizaje profundo.
    La aplicación permite identificar letras y palabras en tiempo real a partir de videos grabados, entregando una traducción comprensible al usuario.
    Este proyecto tiene un enfoque inclusivo, orientado a mejorar la comunicación entre personas sordas y oyentes, demostrando la aplicación práctica de modelos de inteligencia artificial en dispositivos móviles.`,
    features: [
    " - Reconocimiento de señas chilenas mediante video",
    " - Procesamiento de imágenes con visión por computador",
    " - Uso de modelos de aprendizaje profundo",
    " - Traducción de gestos a texto",
    " - Soporte para videos grabados y/o en tiempo real",
    " - Aplicación móvil con enfoque inclusivo"
    ],
    tech: ["Flutter ", "Dart ", "Python ", "YOLO ", "TensorFlow ", "Google Colab ", "Roboflow ", "Android Studio "],
    git: "https://github.com/TheDanger01/lengua_de_senas"
  }
];

let currentProjectIndex = 0;
let currentImageIndex = 0;

function openProject(index) {
  const p = projects[index];
  currentProjectIndex = index;
  currentImageIndex = 0;

  document.getElementById("projectTitle").textContent = p.title;
  document.getElementById("projectDescription").textContent = p.description;
  document.getElementById("projectGit").href = p.git;

  // Carga de las características
  const featuresList = document.getElementById("projectFeatures");
  featuresList.innerHTML = p.features
    .map(item => `<li>${item}</li>`)
    .join("");

  // Imagen inicial
  document.getElementById("galleryImage").src = p.images[0];

  // Tecnologías
  const tech = document.getElementById("projectTech");
  const techIcons = {
    "Java Script ": "web/javascript.svg",
    "HTML ": "web/html.svg",
    "CSS ": "web/css.svg",
    "React ": "web/react-js.svg",
    "Next.js ": "web/nextdot.js.svg",
    "Node.js ": "web/node-js.svg",
    "Express.js ": "web/express-js.svg",
    "Java ": "desktop/java.svg",
    "Python ": "desktop/python.svg",
    "C ": "desktop/c.svg",
    "C++ ": "desktop/c-plus-plus.svg",
    "Flutter ": "mobile/flutter.svg",
    "Dart ": "mobile/dart.svg",
    "PostgreSQL ": "db/postgresql.svg",
    "MySQL ": "db/mysql.svg",
    "MongoDB ": "db/mongodb.svg",
    "Firebase ": "db/firebase.svg",
    "SQL - PL/SQL ": "db/sql-pl-sql.svg",
    "YOLO ": "ai/yolo (111F68).svg",
    "TensorFlow ": "ai/tensorflow.svg",
    "PyTorch ": "ai/pytorch.svg",
    "Roboflow ": "ai/roboflow.svg",
    "Git ": "tools/git.svg",
    "Visual Studio Code ": "tools/visual-studio-code.svg",
    "Android Studio ": "tools/android-studio.svg",
    "Postman ": "tools/postman.svg",
    "Thunder Client ": "tools/thunderclient-23467E.svg",
    "Figma ": "tools/figma.svg",
    "Docker ": "tools/docker.svg",
    "Office ": "tools/Microsoft-365.svg",
    "Linux ": "cibersecurity/linux.svg",
    "Kali ": "cibersecurity/kali.svg",
    "Windows ": "cibersecurity/windows.svg",
    "Nmap ": "cibersecurity/nmap.svg",
    "Metasploit ": "cibersecurity/metasploit.svg",
    "Wireshark ": "cibersecurity/wireshark.svg",
    "pfSense ": "cibersecurity/pfSense.svg",
    "Google Maps ": "google-map.svg",
    "Google Places API ": "Google-Places-API.svg",
    "Google Colab ": "ai/google-colab.svg"
  };

  // Grupos Especiales para cambio de color
  const techGroups = {
    yolo: ["YOLO"],
    negro: ["Thunder Client", "Next.js", "Express.js", "Metasploit", "Wireshark", "pfSense", "Google Places API"]
  };

  tech.innerHTML = p.tech.map(t => {
    const cleanTech = t.trim();
    let groupClass = "";
    if (techGroups.yolo.includes(cleanTech)) groupClass = "img-yolo2";
    if (techGroups.negro.includes(cleanTech)) groupClass = "img-negro2";
    
    return`
      <div class="${groupClass}">
        <img src="./src/assets/tools/${techIcons[t]}" alt="${cleanTech}" />
        <span>${cleanTech}</span>
      </div>
    `;
  }).join("");

  document.getElementById("projectModal").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeProject() {
  document.getElementById("projectModal").classList.remove("active");
  document.body.style.overflow = "auto"; 
}

// Botones de la galería
// Botón Siguiente
function nextImage() {
  const images = projects[currentProjectIndex].images;
  currentImageIndex = (currentImageIndex + 1) % images.length;
  updateImage();
}

// Botón Anterior
function prevImage() {
  const images = projects[currentProjectIndex].images;
  currentImageIndex =
    (currentImageIndex - 1 + images.length) % images.length;
  updateImage();
}

// Actualiza la imagen
function updateImage() {
  document.getElementById("galleryImage").src = projects[currentProjectIndex].images[currentImageIndex];
}