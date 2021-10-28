<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    

    .row.justify-content-center.mb-2.fondo-bg1
      .col-lg-12.px-md-5

        .row.justify-content-around.fondo-cajon.mb-5(style="border-radius: 8px; border-bottom: 4px solid #008F85")
          .col-md-3.col-sm-1
            //vacio
          .col-lg-7.py-md-5
            .row.justify-content-center
              .col-auto.align-self-center
                figure
                  img.mx-auto(src='@/assets/curso/img-intro1.svg', alt='imagen ambiental', style='width: 110px;')
              .col.align-self-center
                p.mb-0
                  b(style="color: #008F85;") Apreciado aprendiz, 
                  b-none bienvenido a este momento de aprendizaje. Con la intención de 
                  b identificar el servicio al cliente en el contexto funerario 
                  b-none se invita a observar el siguiente recurso educativo. 
                  
        .row.justify-content-center.mb-4
          .col-lg-12
            figure.mb-4
              .video
                <iframe width="699" height="393" src="https://www.youtube.com/embed/LF5k803BGPI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>






    
    

    
      

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
