<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.mb-0
      .titulo-principal__numero
        span 4
      h1 Protección de datos
  
    .row.justify-content-center.mb-2.fondo-bg3
      .col-lg-12.px-md-5.mt-5
        .row.justify-content-center.mb-5
          p.mb-0 
            b La normativa de protección de datos personales reconoce y protege el derecho de las personas 
            b(style="color: #B42218") conocer, rectificar y actualizar su información 
            b-none  almacenada en base de datos o archivos que sean susceptibles de tratamiento por parte de entidades privadas o públicas. 
            b(style="color: #008F85") En Colombia rige la siguiente normativa.
            
        .row.justify-content-center.mb-5
          .col-7.col-lg-5.mb-4.mb-lg-0.align-self-center
            figure
              img.mx-auto(src='@/assets/curso/tema4/img1.svg', alt='imagen ambiental', style='width: 400px;')
          .col-lg-7.align-self-center
            LineaTiempoD.color-primario
              .row(numero="1" titulo="Constitución Política de Colombia")
                .col-md-12.mb-4.mb-md-0
                  p.mb-0 Con respecto al manejo de los datos la Constitución, en el Artículo 15 menciona que todas las personas tienen derecho a su intimidad personal y familiar y a su buen nombre, y el Estado debe respetarlos y hacerlos respetar. De igual modo, tienen derecho a conocer, actualizar y rectificar las informaciones que se hayan recogido sobre ellas en bancos de datos y en archivos de entidades públicas y privadas. En la recolección, tratamiento y circulación de datos se respetarán la libertad y demás garantías consagradas en la Constitución.
              
              .row(numero="2" titulo="Ley 1266 de 2008")
                .col-md-12.mb-4.mb-md-0
                  p.mb-0 En el marco de esta ley se dictan las disposiciones generales del habeas data y regulando el manejo de la información contenida en bases de datos personales, en especial la financiera, crediticia, comercial, de servicios. En los Artículos 2 y 4 se definen las normas especiales para la confidencialidad de los datos y los principios administrativos de estos. 
              
              .row(numero="3" titulo="Ley 1581 de 2012 ")
                .col-md-12.mb-4.mb-md-0
                  p.mb-4 Esta ley establece los lineamientos para la protección de datos y la autorización de los titulares para el tratamiento de dichos datos y, define  que datos personales  es  cualquier tipo de información asociada a una o varias personas naturales, determinables, como el nombre, la edad, el sexo, el estado civil, el domicilio, entre otros. Y define que hay diferentes tipos de datos:
                  .row.justify-content-center
                    .col-lg-8
                      ol.lista-ol--cuadro.lista-ol--separador
                        li 
                          .lista-ol--cuadro__vineta
                            span #[strong 1]
                          p.mb-0 Dato privado. 
                              
                        li 
                          .lista-ol--cuadro__vineta
                            span #[strong 2]
                          p.mb-0 Dato semiprivado. 
                              
                        li 
                          .lista-ol--cuadro__vineta
                            span #[strong 3]
                          p.mb-0 Dato público. 
                              
              .row(numero="4" titulo="Decreto 1377 de 2013")
                .col-md-12.mb-4.mb-md-0
                  p.mb-0 Por el cual se reglamenta parcialmente la Ley 1581 de 2013, donde se comunica a través de los Artículos 4, 11 y 23 la recolección de datos personales que puede limitarse y su duración en el tiempo.  Finalmente, se establecen los medios para la protección de datos personales. 
              
              
        .row.justify-content-center.mb-4
          p.mb-0 Sumado a lo anterior, durante un 
            b(style="color: #B42218") servicio al cliente 
            b-none  se debe pensar en la 
            b  protección del consumidor. 
            b(style="color: #008F85") En Colombia la Ley 1480 de 2011, aprobada por el Congreso de Colombia, 
            b-none hace mención especial a la 
            b protección al consumidor como el conjunto de normas que regulan las relaciones de consumo 
            b-none que nacen en la cadena de comercialización de bienes y servicios entre productores, proveedores y expendedores. 

        .row.justify-content-center.mb-4
          .col-lg-7
            p.mb-4 Cuando se habla de 
              b(style="color: #008F85") protección al consumidor en el sector funerario 
              b  se debe brindar la información adecuada y concreta para la realización de la toma de decisiones sobre el servicio a tomar. 
              b-none Muchas veces este servicio es prepagado, que quiere decir, que con anterioridad se ha hecho el pago por medio de previsión exequial o pólizas, en este caso algunos trabajadores querrán ofrecer servicios extras o mejoras con el fin de obtener un mejor ritual. 
              b(style="color: #B42218") La Superintendencia de Industria y Comercio 
              b-none  aconseja a los deudos que:
              
            .row.justify-content-center.mb-2
              .col-lg-9
                ol.lista-ol--cuadro.lista-ol--separador
                  li 
                    .lista-ol--cuadro__vineta
                      span #[strong 1]
                    p.mb-0 Exijan su factura del servicio con todos los costos desglosados.
                          
                  li 
                    .lista-ol--cuadro__vineta
                      span #[strong 2]
                    p.mb-0 Leer con detenimiento el contrato de la prestación del servicio exequial, pidiendo información exacta sobre lo que está incluido o no.
                      
                  li 
                    .lista-ol--cuadro__vineta
                      span #[strong 3]
                    p.mb-0 Cuando acceda a cambiar o comprar algo que no está incluido asegurarse de pedir un presupuesto del gasto extra.
              
            .row.justify-content-center.mb-4
              p.mb-0 
                b(style="color: #008F85") El empleado funerario 
                b-none deberá tener en cuenta que el cliente tiene derechos como consumidor. En caso tal que 
                b durante el servicio funerario se llegase a incurrir en alguna falta, la empresa funeraria podría enfrentarse a demandas y denuncias por parte de la familia. 
                b-none Así que se aconseja conocer anticipadamente los 
                b(style="color: #B42218")  estatutos de protección al consumidor.
          .col-7.col-lg-5.align-self-center
            figure
                img.mx-auto(src='@/assets/curso/tema4/img2.svg', alt='imagen ambiental', style='width: 430px;')

        .tarjeta-avatar-b.mb-0
          .tarjeta-avatar-b__img(style='max-width: 160px;')
            img.mx-auto(src='@/assets/curso/tema4/img3.svg' alt='imagen ambiental' style='width: 158px;')
          .tarjeta.bg-line2(style='background-color:#fff; align-self: center; box-shadow: 0px 0px 8px 0px #DEDEDE; border-radius: 10px 10px 0px 0px')
            .p-5
              p.mb-0 Hasta aquí se ha llegado en esta experiencia de aprendizaje, que más allá de brindarle información espera que la apropie, para que sea competente y alcance los resultados de aprendizaje. Recuerde mantener una actitud de curiosidad y aprendizaje a  lo largo de la vida para que sea un excelente colaborador o empresario.



</template>

<script>
export default {
  name: 'Tema4',
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
