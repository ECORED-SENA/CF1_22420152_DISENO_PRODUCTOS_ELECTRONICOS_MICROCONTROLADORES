<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Diseño de producto 

    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        .bg-color-1
          .row.justify-content-center.align-items-center
            .col-xl-auto(data-aos="fade-right")
              img(src="@/assets/curso/tema1/1.svg", style="max-width: 420px", alt="").m-auto.mt-xl-0.mt-4
            .col-xl(data-aos="fade-left")
              .py-4.pe-5.ps-3
                p.mb-0 Un diseño es un plan final que integra consideraciones funcionales y estéticas, requiriendo múltiples fases de investigación, análisis, modelado, ajustes y adaptaciones previas a la producción definitiva del objeto. Además, implica la colaboración de diversas disciplinas y oficios, en función del objeto a diseñar y de la participación de una o varias personas en el proceso

      .col-lg-3
        figure
          img(src="@/assets/curso/tema1/2.png", alt="")


    .titulo-tres.mb-5(data-aos="flip-up")
      h4 Fases del ciclo de desarrollo de un producto  


    p.mb-5 El desarrollo de un producto sigue una serie de fases clave, cada una enfocada en aspectos específicos que optimizan su diseño, evaluación y producción. Estas etapas van desde la conceptualización inicial, pasando por la creación de prototipos virtuales y físicos, hasta la producción de preseries, asegurando que el producto final cumpla con los requisitos técnicos, funcionales y comerciales esperados. 
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

<style lang="sass"></style>
