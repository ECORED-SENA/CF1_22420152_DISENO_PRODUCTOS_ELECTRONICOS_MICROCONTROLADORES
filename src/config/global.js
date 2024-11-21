export default {
  global: {
    componenteFormativo: 'Diseño de un producto electrónico',
    descripcionCurso:
      'El componente formativo abarca el diseño de productos electrónicos, microcontroladores y sensores. Cada uno cubre conceptos, características, y aplicaciones clave. El diseño incluye fases como el prototipado; los microcontroladores facilitan el control en sistemas electrónicos; y los sensores miden variables físicas y las convierten en señales. Estos elementos son esenciales en la electrónica moderna, mejorando precisión, eficiencia y funcionalidad.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Diseño de producto',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Microcontrolador',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Sensores',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Diseño de producto',
      referencia:
        'Tecnocom Ingeniería. (2021). Diseño de Productos Electrónicos #1 || Tip de Electrónica. [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=JbS_UPN_R-g',
    },
    {
      tema: 'Microcontrolador',
      referencia:
        'Alejandro Pérez. (2021). Así son los Mini Ordenadores SÚPER BARATOS que Controlan el Mundo | Microcontrolador ESP32. [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=2s6M24PaTKA',
    },
    {
      tema: 'Microcontrolador',
      referencia:
        'Instituto Nacional de Educación Tecnológica. (2004). Microprocesadores y microcontroladores: Fichas 1 y 2. Ministerio de Educación, Ciencia y Tecnología de la Nación.',
      tipo: 'Documento',
      link: 'http://bnm.me.gov.ar/giga1/documentos/EL007282.pdf',
    },
    {
      tema: 'Sensores',
      referencia:
        'Ideatronic (2021). 37 Sensores Básicos PARA ARDUINO/Ideatronic. [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=aCyxsQoqaD4',
    },
    {
      tema: 'Sensores',
      referencia:
        'Torres, F., y Fernández, C. (s.f.). Clase 2. Sensores y detectores. Universidad de Alicante, Departamento de Física, Ingeniería de Sistemas y Teoría de la Señal, Grupo de Automática, Robótica y Visión Artificial.',
      tipo: 'Documento',
      link:
        'https://rua.ua.es/dspace/bitstream/10045/18433/1/Tema%202_Sensores%20y%20Detectores.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Actuador',
      significado:
        'Dispositivo que convierte una señal eléctrica en movimiento u otra acción física.',
    },
    {
      termino: 'Circuito Integrado',
      significado:
        'Chip que contiene múltiples componentes electrónicos interconectados.',
    },
    {
      termino: 'Microcontrolador',
      significado:
        'Dispositivo programable que ejecuta tareas específicas dentro de sistemas electrónicos.',
    },
    {
      termino: 'Precisión',
      significado:
        'Grado de exactitud en las mediciones realizadas por un sensor o dispositivo.',
    },
    {
      termino: 'Procesador',
      significado:
        'Componente de un microcontrolador que ejecuta instrucciones y procesa datos.',
    },
    {
      termino: 'Prototipado',
      significado:
        'Creación de modelos preliminares, físicos o virtuales, para evaluar un diseño.',
    },
    {
      termino: 'Rango de Medida',
      significado:
        'Extensión dentro de la cual un sensor puede medir una variable física con precisión.',
    },
    {
      termino: 'Sensor',
      significado:
        'Dispositivo que detecta cambios físicos y convierte estos en señales eléctricas.',
    },
    {
      termino: 'Señal Analógica',
      significado:
        'Señal continua que representa valores variables de una magnitud física.',
    },
    {
      termino: 'Señal Digital',
      significado:
        'Señal que representa datos en forma binaria, como pulsos de encendido y apagado.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alciatore, D. G., & Histand, M. B. (2011). <i>Introduction to Mechatronics and Measurement Systems</i> (4th ed.). McGraw-Hill Education.',
      link: '',
    },
    {
      referencia:
        'Frank, R. (2000). <i>Understanding Smart Sensors</i> (2nd ed.). Artech House.',
      link: '',
    },
    {
      referencia:
        'Barrett, S. F., & Pack, D. J. (2006). <i>Embedded Systems: Design and Applications with the 68HC12 and HCS12</i> (1st ed.). Pearson.',
      link: '',
    },
    {
      referencia:
        'Horenstein, M. N. (2012). <i>Design Concepts for Engineers</i> (5th ed.). Pearson.',
      link: '',
    },
    {
      referencia:
        'Texas Instruments. (2021). <i>Guide to Selecting Sensors for Industrial Applications</i>.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortes García',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
