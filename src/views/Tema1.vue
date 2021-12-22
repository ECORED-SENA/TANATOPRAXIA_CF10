<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 ¿Qué es una organización?
  

    .row.justify-content-center.mb-2.fondo-bg2
      .col-lg-12.px-md-5
        
        .row.justify-content-center.mb-4
          .col-lg-7.mb-4.mb-lg-0
            p.mb-4
              b(style="color: #008F85;") Una organización se define como 
              b-none #[i el establecimiento y asociación de actividades y medios necesarios que interactúan entre sí coordinadamente para cumplir con los objetivos planteados en la estructura de la empresa. ]
              b #[i  Para Morin (2001) una organización es la disposición de relaciones entre componentes o individuos que produce una unidad compleja, dotado de cualidades. ]
              b-none En ella se transforma, produce, reúne y mantiene, es decir, una organización es el conjunto del intercambio entre sus elementos esenciales, los roles o cargos, que conforman una red con identidad propia.
              
            .cajon.color-secundario.p-4.mb-4.mb-lg-0
              p.mb-0
                b(style="color: #008F85;") #[i Las organizaciones son entonces, ]
                b #[i formaciones sociales específicas en el tiempo y el espacio, desarrolladas por la sociedad como formas de articulación para resolver problemas concretos y que obran bajo propósitos específicos (Ocampo, 2007). ]
                b-none En conclusión, una organización es una unión compleja y social compuesta por elementos que le aportan identidad, que se encuentra constituida para, por y con el entorno ayudando a alcanzar los objetivos fijados en la empresa. 
              
          .col-8.col-lg-5.align-self-center
            figure.mb-5
              img.mx-auto(src="@/assets/curso/tema1/img1.svg", alt="imagen ambiental" style='width: 445px;')
            
        .row.justify-content-center.mb-4
          .col-lg-12
            p.mb-0
              b En Colombia existen normas jurídicas que estructuran a las organizaciones como empresas. 
              b-none Su creación depende de 
              b(style="color: #008F85;") la normatividad regulada por el Código de Comercio de Colombia. 
              b-none Las personas individuales, empresarios o emprendedores tienen las siguientes opciones para formalizar la empresa:
          
        .row.justify-content-around
          .bg-color3.p-4.mb-4(data-aos="fade-left")
            figure.mb-4
              img(src='@/assets/curso/tema1/icon1.svg', style="width: auto" ,alt='icono que acompaña').mx-auto
            h4.text-center.mb-4 Persona natural comerciante
            p.text-center Son aquellas personas que ejercen alguna actividad que la ley considera mercantil, por eso se deberán inscribir ante el Registro Único Tributario (RUT) y luego formalizar su matrícula mercantil ante la Cámara de Comercio que le corresponda según su ubicación.
          
          .bg-color4.p-4.mb-4(data-aos="fade-left")
            figure.mb-4
              img(src='@/assets/curso/tema1/icon2.svg', style="width: auto" ,alt='icono que acompaña').mx-auto
            h4.text-center.mb-4 Empresa unipersonal
            p.text-center En esta categoría entran los emprendimientos, se puede hacer de forma individual sin necesidad de constituir una sociedad, pero cuenta con personería jurídica.
          
          .bg-color3.p-4.mb-4(data-aos="fade-left")
            figure.mb-4
              img(src='@/assets/curso/tema1/icon3.svg', style="width: auto" ,alt='icono que acompaña').mx-auto
            h4.text-center.mb-4 Sociedad por acciones simplificadas (S.A.S.)
            p.text-center La formación de estas empresas no exige un mínimo de accionistas, por lo cual puede ser una o varias personas, para su conformación se debe de realizar un documento privado que se registrará en la Cámara de Comercio. El o los accionistas solo responderán por el monto aportado, con durabilidad indefinida y con un objeto social indeterminado.
    
    
    .row.justify-content-center.mb-2.fondo-bg3
      .col-lg-12.px-md-5.mt-5
        
        .row.justify-content-center.mb-5
          p.mb-4 Para dos o más personas se establece una sociedad comercial en la que hay socios o compañeros, en este caso aplican las siguientes modalidades:
          .row.justify-content-center
            .col-8.col-lg-5.align-self-center
              figure.mb-4
                img(src='@/assets/curso/tema1/img2.svg', style="width: 400px;" ,alt='imagen ambiental').mx-auto
            .col-lg-7.align-self-center
              LineaTiempoD.color-primario
                p.mb-0(numero="1" titulo="Sociedad colectiva") La administración de la sociedad recae en los socios.
                p.mb-0(numero="2" titulo="Sociedad anónima (S.A.)") Se conforma por escritura pública y se debe de contar con 5 o más asociados y cada uno de ellos solo responde por el monto de su contribución.
                p.mb-0(numero="3" titulo="Sociedad limitada (LTDA)") Se constituyen mediante escritura pública, puede contar con mínimo 2 socios y máximo 25 y el capital se divide en partes iguales entre los asociados.
                p.mb-0(numero="4" titulo="Sociedades en comandita simple (S. en C.)") Se conforma por mínimo un socio y máximo 25 socios comanditarios (quienes aportan el capital), también debe incluir uno o más socios gestores, que son quienes se encargan de las operaciones, administrar y realizar seguimiento a los negocios. 
                p.mb-0(numero="5" titulo="Sociedades en comandita por acciones (S.C.A.)") Se constituyen con al menos 5 socios y no hay límite máximo, también puede incluir un socio gestor y el capital es dividido en partes iguales.
        
        .row.justify-content-center.mb-5
          .col-lg-12
            p.mb-0
              b Con el propósito de mantener el modelo de negocio y la constitución de una empresa 
              b-none las organizaciones establecen su estrategia, táctica, operación y su plan de negocio en un documento, a lo que se llama 
              b(style="color: #008F85;") plan estratégico. 
              b-none Este señala las 
              b bases del funcionamiento de la empresa en la línea de consecución de sus objetivos, 
              b-none este documento tiene:
              
        .row.justify-content-center.mb-5
          .col-lg-12
            TabsC.color-primario
              .py-3.py-md-4(titulo="Objetivos")
                  
                .row.justify-content-around
                  .col-md-7.mb-4.mb-md-0.align-self-center.mb-4.mb-lg-0
                    h3 Objetivos
                    p.mb-4 Son los logros, resultados y condiciones que una empresa aspira a conseguir en un futuro, ya sea a corto, mediano y largo plazo. Se encuentran dos objetivos principales, estos son:
                    ul.lista-ul.ms-lg-4
                      li 
                        i.fas.fa-chevron-right(style='color: #B42218;')
                        p.mb-0 #[strong General: ] es el objetivo que plantea la solución al total, es decir, el fin principal que quiere seguir la empresa para responder a la necesidad principal del negocio y como regla solo debe de existir un objetivo general.
                      
                      li 
                        i.fas.fa-chevron-right(style='color: #B42218;')
                        p.mb-0 #[strong Específicos: ] son los temas concretos que habla de cada estrategia o acciones planteadas para alcanzar el objetivo general, estos deben ser medibles.
                      
                  .col-8.col-md-5.align-self-center
                    figure
                      img.mx-auto(src='@/assets/curso/tema1/img3.svg', alt='imagen ambiental', style='width: 390px;')
                  
              .py-3.py-md-4(titulo="Misión")
                .row.justify-content-around
                  .col-8.col-md-5.align-self-center.mb-4.mb-lg-0
                    figure
                      img.mx-auto(src='@/assets/curso/tema1/img4.svg', alt='imagen ambiental', style='width: 390px;')
                    
                  .col-md-7.mb-4.mb-md-0.align-self-center
                    h3 Misión
                    p.mb-0 Es la actividad que ejerce una empresa dentro del mercado, en otras palabras, su razón de ser. En esta se puede detallar el público hacia el cual se orienta el negocio y así mismo, los factores que la distinguen en el sector. Esta contempla una serie de preguntas tales como ¿qué hacemos?, ¿cuál es el tipo de negocio?, ¿a qué se dedica la empresa?, ¿cuál es su público objetivo?, ¿cuáles son sus ventajas frente a la competencia? y ¿qué la diferencia de las demás empresas del sector?
                    
              .py-3.py-md-4(titulo="Visión")
                .row.justify-content-around
                  .col-md-7.mb-4.mb-md-0.align-self-center.mb-4.mb-lg-0
                    h3 Visión
                    p.mb-4 Es la imagen a futuro que quiere dar la empresa, en otras palabras, su proyección en lo que se quiere convertir. Esta debe ser realista, pero sin dejar de lado la ambición para que se motive el equipo de trabajo a cumplir con los objetivos propuestos. La respuesta a las siguientes preguntas ayudará a formular la visión de una empresa: ¿qué se quiere lograr?, ¿dónde se quiere estar en 1, 5, 10 años?, ¿para quién se hará?.
                
                  .col-8.col-md-5.align-self-center
                    figure
                      img.mx-auto(src='@/assets/curso/tema1/img5.svg', alt='imagen ambiental', style='width: 290px;')
                  
              .py-3.py-md-4(titulo="Indicadores de proceso")
                .row.justify-content-around
                  .col-8.col-md-5.align-self-center.mb-4.mb-lg-0
                    figure
                      img.mx-auto(src='@/assets/curso/tema1/img6.svg', alt='imagen ambiental', style='width: 400px;')
                    
                  .col-md-7.mb-4.mb-md-0.align-self-center
                    h3 Indicadores de proceso
                    p.mb-0 Son los datos que muestran el estado de una actividad, estos indicadores de proceso se encargan de medir alguna característica especifica, observable y medible para demostrar el progreso y los cambios que se llevan a cabo, ya sean de un proceso o un producto donde se ha fijado un objetivo de forma porcentual. Este siempre debe de estar definido por términos precisos que describan clara y exactamente lo que se está midiendo, no por ello no deben ser ambiguos porque podrían aportar información inexacta. 
                    
              .py-3.py-md-4(titulo="Resultado")
                .row.justify-content-around
                  .col-md-7.mb-4.mb-md-0.align-self-center.mb-4.mb-lg-0
                    h3 Resultado
                    p.mb-4 Los resultados son las formas internas de una empresa para medir la eficiencia y eficacia de los sistemas y modelos operativos que en ella interactúan. Los resultados pueden lograrse cuando una organización divide claramente el trabajo en funciones técnicas, comerciales, financieras, contables, seguridad y administrativas. 
                
                  .col-8.col-md-4.align-self-center
                    figure
                      img.mx-auto(src='@/assets/curso/tema1/img7.svg', alt='imagen ambiental', style='width: 320px;')
                  
        .row.justify-content-center.mb-5
          .col-lg-12
            .p-3(style='background-color: #1D272B;')
              h4.mb-0.text-center.text-white Cuando se crea una organización la forma más fácil de realizarla es aplicando el siguiente paso a paso: 
          
        .row.justify-content-center.mb-4
          .col-8.col-lg-5.align-self-center
            figure
              img.mx-auto(src='@/assets/curso/tema1/img8.svg', alt='imagen ambiental', style='width: 440px;')
          .col-lg-7.align-self-center
              
            .tarjeta-avatar-b.mb-2
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema1/icon4.svg' alt='AvatarTop')
              .tarjeta.bg-line1(style='background-color:#fff; align-self: center;')
                .p-4
                  p.mb-0 Claridad de los objetivos de la empresa con respecto a su modelo de negocio para que se constituya en una opción que brinda una solución en el mercado o público segmento de su producto o servicio.
                  
            .tarjeta-avatar-b.mb-2
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema1/icon5.svg' alt='AvatarTop')
              .tarjeta.bg-line2(style='background-color:#fff; align-self: center;')
                .p-4
                  p.mb-0 Valoración de recursos con los que cuenta la empresa para así definir si con estos es posible alcanzar las metas propuestas o si por el contrario si se hace necesario ajustar o cambiar alguno de sus componentes.
              
            .tarjeta-avatar-b.mb-2
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema1/icon6.svg' alt='AvatarTop')
              .tarjeta.bg-line3(style='background-color:#fff; align-self: center;')
                .p-4
                  p.mb-0 División de la organización en secciones que permitan optimizar las tareas y funciones. Teniendo en cuenta que estas sean similares con respecto a: 1. Funciones, 2. Productos, 3. Clientes y 4. Proyectos.
          
        .row.justify-content-center.mb-4
            
          .tarjeta-avatar-b.mb-4
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema1/icon7.svg' alt='AvatarTop')
            .tarjeta.bg-line4(style='background-color:#fff; align-self: center;')
              .p-4
                p.mb-0 Establecimiento de las relaciones jerárquicas para facilitar la coordinación. Para esto se sugiere la creación de un organigrama en el que aparezca la estructura general de la empresa para que todos los trabajadores la conozcan. 
              
          .tarjeta-avatar-b.mb-2
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema1/icon8.svg' alt='AvatarTop')
            .tarjeta.bg-line5(style='background-color:#fff; align-self: center;')
              .p-4
                p.mb-0 Organización de las tareas, creando un listado de actividades para llevar a cabo y así fijar cuáles son los trabajos prioritarios a llevar a cabo por cada trabajador. Cabe mencionar que esta estructuración ayudará a la organización a generar valor para su mercado y la empresa.


























</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
