<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Fundamentos del servicio al cliente
    



    #t_2_1.titulo-segundo
      .h2 2.1 ¿Quién es un cliente?




    separador
    #t_2_2.titulo-segundo
      .h2 2.2 Tipos y técnicas de servicio al cliente




    separador
    #t_2_3.titulo-segundo
      .h2 2.3 Canales del servicio al cliente




    separador
    #t_2_4.titulo-segundo
      .h2 2.4 La comunicación con el cliente




    separador
    #t_2_5.titulo-segundo
      .h2 2.5 Trazabilidad del servicio





    
    

</template>

<script>
export default {
  name: 'Tema2',
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
