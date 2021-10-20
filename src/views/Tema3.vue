<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Venta y portafolio en el sector funerario
    



    #t_3_1.titulo-segundo
      .h2 3.1 Tipos de venta




    separador
    #t_3_2.titulo-segundo
      .h2 3.2  ¿Qué se vende en una funeraria?




    separador
    #t_3_3.titulo-segundo
      .h2 3.3  Calidad y cultura de servicio




    separador
    #t_3_4.titulo-segundo
      .h2 3.4 Proceso de venta

</template>

<script>
export default {
  name: 'Tema3',
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
