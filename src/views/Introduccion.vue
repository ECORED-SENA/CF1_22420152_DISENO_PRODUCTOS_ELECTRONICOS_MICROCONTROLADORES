<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción


    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5.pt-0.pb-4.pb-lg-5
        .row.justify-content-center.align-items-center.mb-lg-5.mb-0
          .col-lg-5
            p(data-aos="fade-right") El diseño de productos electrónicos es un proceso que integra fases clave de conceptualización, diseño funcional y prototipado. Estos pasos permiten desarrollar soluciones innovadoras que cumplen con requisitos técnicos y de mercado, adaptándose a diversas necesidades. En este contexto, el uso de microcontroladores y sensores se ha vuelto esencial para mejorar la precisión y funcionalidad de los productos en áreas como la automatización, la informática y los dispositivos de consumo. 

          .col-lg-7.d-none.d-lg-block
            figure
              img(src="@/assets/curso/intro/1.png", alt="")

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-5
            figure
              img(src="@/assets/curso/intro/2.png", alt="").mt-4.mb-5.my-lg-0

          .col-lg-4
            p(data-aos="fade-left") Los microcontroladores, pequeños dispositivos programables, actúan como el “cerebro” de muchos sistemas electrónicos, permitiendo realizar tareas específicas y optimizando el control en aplicaciones variadas. Su capacidad de integrar múltiples funciones en un solo chip simplifica la circuitería y reduce los costos, resultando en soluciones eficientes para sectores como la industria automotriz, la medicina y las telecomunicaciones. 

          .col-lg-3.d-none.d-lg-block
            figure
              img(src="@/assets/curso/intro/3.png", alt="")

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-auto
            figure.d-none.d-lg-block
              img(src="@/assets/curso/intro/4.svg", alt="", style="width: 85px;")

          .col-lg
            .bg-color-border.p-4.brounded
              figure.mb-4.d-lg-none
                img(src="@/assets/curso/intro/4.svg", alt="", style="width: 85px;").mx-auto
              p(data-aos="fade-right").mb-0 Por su parte, los sensores son fundamentales en el proceso de recolección de datos, ya que detectan y convierten variables físicas (como temperatura, luz o velocidad) en señales eléctricas. Estos dispositivos, clasificados en binarios, digitales y analógicos, amplían las posibilidades de control y monitoreo en sistemas electrónicos, siendo empleados en campos como la robótica, la domótica y la electrónica de consumo.  

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
