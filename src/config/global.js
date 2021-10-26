export default {
  global: {
    componenteFormativo: 'Servicio funerario',
    descripcionCurso:
      'En este componente se realizará un recorrido por los fundamentos básicos del servicio y atención al cliente, enfocados en el sector funerario, con el objetivo de desarrollar en los aprendices las competencias necesarias para reconocer procesos y procedimientos de los servicios administrativos de la funeraria de acuerdo con políticas institucionales.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner.png'),
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
        titulo: '¿Qué es una organización?',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Fundamentos del servicio al cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: '¿Quién es un cliente?',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Tipos y técnicas de servicio al cliente',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Canales del servicio al cliente',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'La comunicación con el cliente',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Trazabilidad del servicio',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Venta y portafolio en el sector funerario',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Tipos de venta',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: '¿Qué se vende en una funeraria?',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Calidad y cultura de servicio',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Proceso de venta',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Protección de datos',
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
        'Ariño, J. J. (2018). Ventas para emprendedores: todo lo que necesitas saber, gira los resultados de tu emprendimiento por medio de la venta efectiva y sostenible. Ecoe Ediciones. ',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=7414',
    },
    {
      referencia:
        'Constitución Política de Colombia [Const.] (1991). Art. 15. ',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/constitucion_politica_1991.html',
    },
    {
      referencia:
        'Da Silva, D. (2020). Etapas del proceso de ventas: 7 pasos para cerrar más tratos. Zendesk. ',
      link: 'https://www.zendesk.com.mx/blog/etapas-proceso-ventas/',
    },
    {
      referencia:
        'Decreto 1377 de 2013. [Presidencia de la República de Colombia]. Por el cual se reglamenta parcialmente la Ley 1581 de 2012. ',
      link:
        'http://wsp.presidencia.gov.co/Normativa/Decretos/2013/Documents/JUNIO/27/DECRETO%201377%20DEL%2027%20DE%20JUNIO%20DE%202013.pdf',
    },
    {
      referencia:
        'Ecosistema de recursos educativos digitales SENA. (2020). Servicio al cliente [ video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=p2I7GFzVh44',
    },
    {
      referencia:
        'ICONTEC. (2017). Norma Técnica Colombiana - Servicios Funerarios. ',
      link:
        'https://e-collection-icontec-org.bdigital.sena.edu.co/pdfview/viewer.aspx?locale=en-US&Q=AF60935720F13C6466C0297B7F80FF16&Req=',
    },
    {
      referencia:
        'Leadera Marketing Solutions. (2018). Sistemas para mantener la trazabilidad de leads. Leadera Marketing Solutions. ',
      link: 'https://www.leaderasolutions.com/blog/trazabilidad-de-leads',
    },
    {
      referencia:
        'Ley 1266 del 2008. [Congreso de la República de Colombia]. Por cual se dictan las disposiciones generales del habeas data y regulando el manejo de la información. Art. 2-4. ',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_1266_2008.html',
    },
    {
      referencia:
        'Ley 1480 de 2011. [Congreso de la República de Colombia]. Por medio de la cual se expide el estatuto del consumidor y se dictan otras disposiciones. ',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_1480_2011.html',
    },
    {
      referencia:
        'Ley 1581 de 2012. [Congreso de la República de Colombia]. Por la cual se dictan disposiciones generales para la protección de datos personales. ',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_1581_2012.html',
    },
    {
      referencia:
        'Macon, C. F. (2017). Programa para el mejoramiento de la calidad de atención al usuario. Universidad Católica Andrés Bello. ',
      link:
        'http://biblioteca2.ucab.edu.ve/anexos/biblioteca/marc/texto/AAU7630.pdf',
    },
    {
      referencia:
        'Medina, W. D. (2009). Calidad, productividad y competitividad: la salida de la crisis. Díaz de Santos.',
    },
    {
      referencia:
        'Montoya, C. y Boyero, M. (2013). El CRM como herramienta para el servicio al cliente en la organización.',
    },
    {
      referencia:
        'Morín, E. (2001). El Método, Tomo I. La naturaleza de la naturaleza. Cátedra.',
    },
    {
      referencia:
        'Muente, G. (2018). Tipos de ventas. ¿Cuáles existen y en qué se distinguen? ',
      link: 'https://rockcontent.com/es/blog/tipos-de-ventas/',
    },
    {
      referencia:
        'Ocampo, E. (2007). Administración, diseño y modelamiento de cadenas de abastecimiento. Universidad Autónoma de Colombia. ',
    },
    {
      referencia:
        'RD Station. (2021). Ventas: estrategias, técnicas y todo lo que necesitas saber. ',
      link: 'https://www.rdstation.com/mx/ventas/',
    },
    {
      referencia:
        'Pérez, V. (2016). Calidad total en la atención al cliente. Pautas para garantizar la excelencia en el servicio ',
      link:
        'https://www.academia.edu/8910048/CALIDAD_TOTAL_EN_LA_ATENCI%C3%93N_AL_CLIENTE_Pautas_para_Garantizar_la_Excelencia_en_el_Servicio',
    },
    {
      referencia:
        'Superintendencia de Industria y Comercio. (s.f.) Régimen general protección de datos personales. ',
      link:
        'https://www.sic.gov.co/sites/default/files/files/Nuestra_Entidad/Publicaciones/Compendio%202%20FINAL%20V%2012%20Dic20.pdf',
    },
    {
      referencia:
        'Universia. (2020). Portafolio de servicios: ejemplo para que aprendas a hacerlo. ',
      link:
        'https://www.universia.net/co/actualidad/empleo/portafolio-de-servicios-ejemplo-para-que-aprendas-a-hacerlo.html',
    },
    {
      referencia:
        'Vera, J. y Trujillo, A. (2013). Factores relevantes de calidad en el servicio en el sector de concreto en el mercado de clientes pequeños y de hogar. Panorama Socioeconómico, 31(46), 14-28. ',
      link: 'https://www.redalyc.org/articulo.oa?id=39929212003',
    },
  ],
  glosario: [
    {
      termino: 'Cliente',
      significado:
        'Persona que adquiere un producto o servicio con la finalidad de suplir una necesidad.',
    },
    {
      termino: 'Corporativo',
      significado: 'Perteneciente o relativo a una corporación.',
    },
    {
      termino: 'Cultura organizacional',
      significado:
        'Conjunto de normas que se tienen en una organización en todas sus áreas basadas en respeto, valores, ética, integridad, actitudes, hábitos; todo esto genera una persona íntegra y un buen ambiente laboral.',
    },
    {
      termino: 'Estándares',
      significado: 'Proceso de generar lealtad y confianza.',
    },
    {
      termino: 'Fidelización',
      significado:
        'Comprende todas aquellas actividades de una empresa u organismo para conseguir y demostrar la calidad en esta.',
    },
    {
      termino: 'Garantía de la calidad',
      significado:
        'Es la forma en que tiene el cliente de mostrar su inconformidad con un servicio o producto que esté adquiriendo.',
    },
    /*{
      termino: '',
      terminoHtml: '<em>Suftware</em>',
      significado:
        '',
    },*/
  ],
  complementario: [
    {
      texto:
        'Ecosistema de recursos educativos digitales SENA. (2020). Servicio al cliente [ video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=p2I7GFzVh44',
    },
    {
      texto:
        'Superintendencia de Industria y Comercio. (s.f.). Régimen general protección de datos.',
      tipo: 'Documento',
      descarga: '/downloads/Compendio2.pdf',
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
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      /*{
        nombre: '',
        cargo: '',
        centro:
          '',
      },*/
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: ['Jesus Antonio Vecino Valero'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Felipe Herrera Roldan',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Andres Ayala Angarita',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
