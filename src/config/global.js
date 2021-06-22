export default {
  global: {
    componenteFormativo: 'Interfaz de usuario, diseños y vistas en AutoCAD 2D',
    descripcionCurso:
      'La importancia del software AutoCAD está dada en entender la definición de diseño asistido por computador con las siglas CAD y deducir sus características y diferencias entre versiones. Todo lo anterior centrado en comprender el orden de su interfaz y la disposición de herramientas para crear dibujos y diseños, entendiendo para quién o para qué se crea un diseño y en equivalente al uso correcto de las herramientas disponibles para materializar dichas geometrías.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'El diseño asistido por computador (CAD)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Tipos de AutoCAD',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Interfaz de usuario y configuración del software',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Conceptos técnicos para dibujo en 2D',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Expresión gráfica',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Tipos de diseño',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Relación del CAD con la organización',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Fases de un diseño CAD',
            hash: 't_4_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.5',
            titulo: 'Breve explicación de dibujo técnico',
            hash: 't_4_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.6',
            titulo: 'Sistemas de unidades de longitud',
            hash: 't_4_6',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Comandos básicos de dibujo 2D',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Herramientas de dibujo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Línea, polilínea y tipos de selección',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Círculos, arcos y spline',
            hash: 't_6_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.3',
            titulo: 'Elipse, rectángulos y polígonos',
            hash: 't_6_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.4',
            titulo: 'Achurado o sombreado',
            hash: 't_6_4',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Rastreo a objetos y puntos de referencia 2D',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Relaciones geométricas y paramétricas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',
        icono: 'far fa-file-alt',
        numero: '9',
        titulo: 'Isoplanos y dibujo de isometrías',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
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
  referencias: [
    {
      referencia:
        'Autodesk. (2021). Acerca de la especificación de distancias, longitudes y ángulos. AutoCAD. Soporte y aprendizaje.',
      link:
        'https://knowledge.autodesk.com/es/support/autocad/learn-explore/caas/CloudHelp/cloudhelp/2018/ESP/AutoCAD-Core/files/GUID-92BDE481-49D0-4AED-A6C5-0B78051EAE99-htm.html',
    },
    {
      referencia:
        'Autodesk. (2021). Acerca del ajuste de la rejilla y referencia de la rejilla. AutoCAD. Soporte y aprendizaje.',
      link:
        'https://knowledge.autodesk.com/es/support/autocad/learn-explore/caas/CloudHelp/cloudhelp/2018/ESP/AutoCAD-Core/files/GUID-FEA6BC6E-D81E-4AD2-BD4C-70078C57709A-htm.html',
    },
    {
      referencia:
        'Autodesk. (2021). Acerca del bloqueo ortogonal (modo Orto). AutoCAD. Soporte y aprendizaje.',
      link:
        'https://knowledge.autodesk.com/es/support/autocad/learn-explore/caas/CloudHelp/cloudhelp/2018/ESP/AutoCAD-Core/files/GUID-C3B5D7B3-8057-4D8B-A3A2-0F5F0778BF37-htm.html',
    },
    {
      referencia:
        'Autodesk. (2021). Acerca del dibujo isométrico 2D. AutoCAD. Soporte y aprendizaje.',
      link:
        'https://knowledge.autodesk.com/es/support/autocad/learn-explore/caas/CloudHelp/cloudhelp/2021/ESP/AutoCAD-Core/files/GUID-37463F74-0B06-46E2-8791-6C5B852A069D-htm.html',
    },
    {
      referencia:
        'Autodesk. (2021). Acerca del rastreo polar y PolarSnap. AutoCAD. Soporte y aprendizaje.',
      link:
        'https://knowledge.autodesk.com/es/support/autocad/learn-explore/caas/CloudHelp/cloudhelp/2018/ESP/AutoCAD-Core/files/GUID-7EC3C63D-EA4E-4E65-A676-C3A3627E3F19-htm.html',
    },
    {
      referencia:
        'Autodesk. (2021). Acerca del uso de espacios de trabajo basados en tareas. AutoCAD. Soporte y aprendizaje.',
      link:
        'https://knowledge.autodesk.com/es/support/autocad/getting-started/caas/CloudHelp/cloudhelp/2018/ESP/AutoCAD-Core/files/GUID-52902E88-41B8-4890-A2FF-E47332CBD0D8-htm.html',
    },
    {
      referencia:
        'Autodesk. (2021). Acerca del uso de referencias a objetos. AutoCAD. Soporte y aprendizaje.',
      link:
        'https://knowledge.autodesk.com/es/support/autocad/learn-explore/caas/CloudHelp/cloudhelp/2018/ESP/AutoCAD-Core/files/GUID-8F5E5431-9EFB-414E-BC6D-2C65EFB2DAC3-htm.html',
    },
    {
      referencia:
        'Autodesk. (2021). Para trabajar con espacios de trabajo. AutoCAD. Soporte y aprendizaje.',
      link:
        'https://knowledge.autodesk.com/es/support/autocad/getting-started/caas/CloudHelp/cloudhelp/2018/ESP/AutoCAD-Core/files/GUID-51E1D144-1EC4-4B4B-B4FA-F8456D40A4AF-htm.html',
    },
    {
      referencia:
        'Bertoline, Wiebe, Miller & Mohler. (1999). Dibujo en ingeniería y comunicación gráfica. McGraw-Hill.',
    },
    {
      referencia:
        'Santamaría, G. S. (2020). La comunicación gráfica [video]. YouTube.',
      link: 'https://youtu.be/hUTzaI1bNt4',
    },
  ],
  glosario: [
    {
      termino: 'Achurado',
      significado:
        'la técnica del achurado es la creación de efectos sombreados mediante líneas paralelas estrechamente separadas. Cuando se aplica correctamente, el achurado permite crear texturas, tonos, sombras o patrones. Al usar esta técnica se crea una serie de marcas irregulares o regulares en un área, y estas crean tonos.',
    },
    {
      termino: 'Acotar',
      significado:
        'es la propiedad anotativa de referenciar, medir y describir las características dimensionales del elemento acotado, describiendo la dimensión de su geometría en ancho, alto, profundo, número de agujeros, soldadura, conexión, etc. ',
    },
    {
      termino: 'CAD',
      significado:
        'son las siglas de (diseño asistido por computadora en inglés), y el significado corresponde a un tipo de programa que maneja esbozos en dos dimensiones o tres (2D o 3D). ',
    },
    {
      termino: 'Colineal',
      significado:
        'el adjetivo colineal se emplea en geometría para calificar al punto que está ubicado en la misma recta que otro punto. Si se supone que, en la recta A, es posible encontrar los puntos r, s y t; estos tres puntos, por lo tanto, son colineales, es decir, que se hallan en la misma recta.',
    },
    {
      termino: 'Interfaz',
      significado:
        'es el tipo de entorno definido por el tipo de herramientas con el que se trabajará, en este caso se señala la subdivisión de partes y materiales que se encuentran en el programa. Este entorno o espacio tiene cualidades o propiedades diferentes dispuestas por el mismo software.',
    },
    {
      termino: 'Ortogonal',
      significado:
        'término que expresa el concepto de perpendicularidad. En una superficie toda proyección ortogonal se fundamenta en un ángulo recto, y puede desarrollarse tanto horizontal como verticalmente. ',
    },
    {
      termino: 'Perpendicular',
      significado:
        'es un término utilizado en la geometría para nombrar al plano o a la línea que, con otro plano o línea, crea un ángulo de noventa grados. ',
    },
    {
      termino: 'Plano cartesiano',
      significado:
        'hace referencia al espacio de trabajo de dos dimensiones, comprendido en ancho y alto, perceptible desde una hoja de papel o desde la interfaz base de AutoCAD. Este se encuentra definido por las coordenadas en Y y X; todo dibujo tiene una referencia cartesiana en el sentido de que cualquier tipo de línea está hecho por una consecución de puntos, los cuales tienen una coordenada o espacio en el plano de trabajo 2D.',
    },
    {
      termino: 'Simetría',
      significado:
        'decimos que una figura es simétrica respecto a una recta cuando cada punto a un lado de esa recta tiene otro punto al otro lado y, a la misma distancia de esa recta.',
    },
    {
      termino: 'Tangente',
      significado:
        'la tangente a una curva en un punto P es una recta que toca a la curva solo en dicho punto, llamado punto de tangencia. Se puede decir que la tangente forma un ángulo nulo con la curva en la vecindad de dicho punto. Esta noción se puede generalizar desde la recta tangente a un círculo, una curva o a figuras tangentes en dos dimensiones.',
    },
  ],
  complementario: [
    {
      texto:
        'Autodesk. (2021). Acerca del uso de espacios de trabajo basados en tareas. AutoCAD. Soporte y aprendizaje.',
      tipo: 'Página web',
      link:
        'https://knowledge.autodesk.com/es/support/autocad/getting-started/caas/CloudHelp/cloudhelp/2018/ESP/AutoCAD-Core/files/GUID-52902E88-41B8-4890-A2FF-E47332CBD0D8-htm.html',
    },
    {
      texto:
        'Autodesk. (2021). Para trabajar con espacios de trabajo. AutoCAD. Soporte y aprendizaje.',
      tipo: 'Página web',
      link:
        'https://knowledge.autodesk.com/es/support/autocad/getting-started/caas/CloudHelp/cloudhelp/2018/ESP/AutoCAD-Core/files/GUID-51E1D144-1EC4-4B4B-B4FA-F8456D40A4AF-htm.html',
    },
    {
      texto:
        'Autodesk. (2021). Acerca del ajuste de la rejilla y referencia de la rejilla. AutoCAD. Soporte y aprendizaje.',
      tipo: 'Página web',
      link:
        'https://knowledge.autodesk.com/es/support/autocad/learn-explore/caas/CloudHelp/cloudhelp/2018/ESP/AutoCAD-Core/files/GUID-FEA6BC6E-D81E-4AD2-BD4C-70078C57709A-htm.html',
    },
    {
      texto:
        'Autodesk. (2021). Acerca del bloqueo ortogonal (modo Orto). AutoCAD. Soporte y aprendizaje.',
      tipo: 'Página web',
      link:
        'https://knowledge.autodesk.com/es/support/autocad/learn-explore/caas/CloudHelp/cloudhelp/2018/ESP/AutoCAD-Core/files/GUID-C3B5D7B3-8057-4D8B-A3A2-0F5F0778BF37-htm.html',
    },
    {
      texto:
        'Autodesk. (2021). Acerca del rastreo polar y PolarSnap. AutoCAD. Soporte y aprendizaje.',
      tipo: 'Página web',
      link:
        'https://knowledge.autodesk.com/es/support/autocad/learn-explore/caas/CloudHelp/cloudhelp/2018/ESP/AutoCAD-Core/files/GUID-7EC3C63D-EA4E-4E65-A676-C3A3627E3F19-htm.html',
    },
    {
      texto:
        'Autodesk. (2021). Acerca de la especificación de distancias, longitudes y ángulos. AutoCAD. Soporte y aprendizaje.',
      tipo: 'Página web',
      link:
        'https://knowledge.autodesk.com/es/support/autocad/learn-explore/caas/CloudHelp/cloudhelp/2018/ESP/AutoCAD-Core/files/GUID-92BDE481-49D0-4AED-A6C5-0B78051EAE99-htm.html',
    },
    {
      texto:
        'Autodesk. (2021). Acerca del uso de referencias a objetos. AutoCAD. Soporte y aprendizaje.',
      tipo: 'Página web',
      link:
        'https://knowledge.autodesk.com/es/support/autocad/learn-explore/caas/CloudHelp/cloudhelp/2018/ESP/AutoCAD-Core/files/GUID-8F5E5431-9EFB-414E-BC6D-2C65EFB2DAC3-htm.html',
    },
    {
      texto:
        'Autodesk. (2021). Acerca del dibujo isométrico 2D. AutoCAD. Soporte y aprendizaje.',
      tipo: 'Página web',
      link:
        'https://knowledge.autodesk.com/es/support/autocad/learn-explore/caas/CloudHelp/cloudhelp/2021/ESP/AutoCAD-Core/files/GUID-37463F74-0B06-46E2-8791-6C5B852A069D-htm.html',
    },
    {
      texto:
        'Santamaría, G. S. (2020). La comunicación gráfica [video]. YouTube.',
      tipo: 'Página web',
      link: 'https://youtu.be/hUTzaI1bNt4',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
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
