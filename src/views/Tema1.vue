<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Diseño de producto 

    .bg-full-width.bg-fondo-2
      .px-4.px-lg-5.pt-0.pb-4.pb-lg-5
        .row.justify-content-center.align-items-center.mb-5
          .col-sm-12.col-lg-9
            .bg-color-1
              .row.justify-content-center.align-items-center
                .col-xl-auto(data-aos="fade-right")
                  img(src="@/assets/curso/tema1/1.svg", style="max-width: 420px", alt="").m-auto.mt-xl-0
                .col-xl(data-aos="fade-left")
                  .py-4.pe-5.ps-3
                    p.mb-0 Un diseño es un plan final que integra consideraciones funcionales y estéticas, requiriendo múltiples fases de investigación, análisis, modelado, ajustes y adaptaciones previas a la producción definitiva del objeto. Además, implica la colaboración de diversas disciplinas y oficios, en función del objeto a diseñar y de la participación de una o varias personas en el proceso

          .col-lg-3.d-none.d-lg-block
            figure
              img(src="@/assets/curso/tema1/2.png", alt="")


        .titulo-tres.mb-5(data-aos="flip-up")
          h4 Fases del ciclo de desarrollo de un producto  
        p.mb-5 El desarrollo de un producto sigue una serie de fases clave, cada una enfocada en aspectos específicos que optimizan su diseño, evaluación y producción. Estas etapas van desde la conceptualización inicial, pasando por la creación de prototipos virtuales y físicos, hasta la producción de preseries, asegurando que el producto final cumpla con los requisitos técnicos, funcionales y comerciales esperados. 
        .row.justify-content-center.mb-5
          .col-sm-12.col-lg-8
            LineaTiempoD.color-primario
              .row(numero="1" titulo="Concepto del producto ")
                .col-sm-12.col-lg-12
                  p.mb-0 Definición del producto electrónico a desarrollar, generando ideas a partir de la demanda del mercado o de avances tecnológicos. La identificación de necesidades del mercado promueve la creación de nuevas tecnologías y productos. Incluye vigilancia estratégica y un análisis de viabilidad técnico-económica. 
              .row(numero="2" titulo="Diseño conceptual")
                .col-sm-12.col-lg-12
                  p.mb-0 Establecimiento de las especificaciones técnicas del producto, incluyendo normas, exigencias y procedimientos necesarios para todas las etapas de construcción o desarrollo. 
              .row(numero="3" titulo="Diseño funcional")
                .col-sm-12.col-lg-12
                  p.mb-0 Desarrollo del diseño de hardware (componentes físicos) y software (componentes lógicos) del producto. 
              .row(numero="4" titulo="Prototipado virtual")
                .col-sm-12.col-lg-12
                  p.mb-0 Creación de un modelo virtual del producto con características clave para su evaluación, reduciendo costos y tiempos, y permitiendo un análisis técnico y funcional sin necesidad de un modelo físico. 
              .row(numero="5" titulo="Prototipo funcional")
                .col-sm-12.col-lg-12
                  p.mb-0 Prototipo físico que permite realizar pruebas para verificar el cumplimiento de especificaciones, presentado como una muestra representativa para el cliente y que aproxima al producto final. 
              .row(numero="6" titulo="Preseries")
                .col-sm-12.col-lg-12
                  p.mb-0 Realización de asesorías y ensayos especiales, tales como pruebas de seguridad eléctrica y climáticas, además de la validación de los procesos de producción antes de la fabricación a gran escala. 
          .col-sm-12.col-lg-4.d-none.d-lg-block
            img(src="@/assets/curso/tema1/3.png", alt="")
        

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
