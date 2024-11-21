<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Sensores 

    .bg-color-1.mb-5
      .row.justify-content-center.align-items-center
        .col-xl(data-aos="fade-left").order-2.order-lg-1
          .p-4
            p.mb-0 Un sensor es un dispositivo capaz de detectar variables físicas, como energía, velocidad, aceleración y tamaño, y de convertirlas en una señal eléctrica, ya sea analógica o digital. 
        .col-xl-auto(data-aos="fade-right").order-1.order-lg-2
          img(src="@/assets/curso/tema3/1.png", style="max-width: 610px", alt="").m-auto.mt-xl-0

    p(data-aos="fade-left").mb-5 Las características de un sensor son:  
    
    .bg-full-width.bg-fondo-3
      .px-4.px-lg-5.pt-0.pb-4.pb-lg-4
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            .carousel-bg
              SlyderF(columnas="col-lg-6 col-xxl-4")(data-aos="zoom-in-up")
                .tarjeta.bg-color-white.p-4.shadow-top-left-right.text-center
                  img(src='@/assets/curso/tema3/2.svg', style="max-width: 90px", alt='').mx-auto.mb-4
                  .bg-color-1.d-inline-block.px-3.py-1.mb-4
                    h5.text-center.mb-0.text-color-black #[strong Rango de medida ]
                  p.text-center Límite de la magnitud que puede detectar el sensor. 


                .tarjeta.bg-color-white.p-4.shadow-top-left-right.text-center
                  img(src='@/assets/curso/tema3/3.svg', style="max-width: 90px", alt='').mx-auto.mb-4
                  .bg-color-1.d-inline-block.px-3.py-1.mb-4
                      h5.text-center.mb-0.text-color-black Precisión 
                  p.text-center Error máximo esperado en la medida. 

                .tarjeta.bg-color-white.p-4.shadow-top-left-right.text-center
                  img(src='@/assets/curso/tema3/3.svg', style="max-width: 90px", alt='').mx-auto.mb-4
                  .bg-color-1.d-inline-block.px-3.py-1.mb-4
                      h5.text-center.mb-0.text-color-black #[em Offset] o desviación de cero  
                  p.text-center Valor de salida cuando no hay entrada. 

                .tarjeta.bg-color-white.p-4.shadow-top-left-right.text-center
                  img(src='@/assets/curso/tema3/4.svg', style="max-width: 90px", alt='').mx-auto.mb-4
                  .bg-color-1.d-inline-block.px-3.py-1.mb-4
                      h5.text-center.mb-0.text-color-black Sensibilidad  
                  p.text-center Relación entre las variaciones en la magnitud de entrada y la salida. 

                .tarjeta.bg-color-white.p-4.shadow-top-left-right.text-center
                  img(src='@/assets/curso/tema3/5.svg', style="max-width: 90px", alt='').mx-auto.mb-4
                  .bg-color-1.d-inline-block.px-3.py-1.mb-4
                      h5.text-center.mb-0.text-color-black Resolución 
                  p.text-center Mínima variación en la entrada que puede detectarse en la salida. 


                .tarjeta.bg-color-white.p-4.shadow-top-left-right.text-center
                  img(src='@/assets/curso/tema3/6.svg', style="max-width: 90px", alt='').mx-auto.mb-4
                  .bg-color-1.d-inline-block.px-3.py-1.mb-4
                      h5.text-center.mb-0.text-color-black Rapidez de respuesta   
                  p.text-center Capacidad para seguir las variaciones en la magnitud medida. 


                .tarjeta.bg-color-white.p-4.shadow-top-left-right.text-center
                  img(src='@/assets/curso/tema3/7.svg', style="max-width: 90px", alt='').mx-auto.mb-4
                  .bg-color-1.d-inline-block.px-3.py-1.mb-4
                      h5.text-center.mb-0.text-color-black Derivas  
                  p.text-center Factores externos (como humedad o temperatura) que afectan la salida. 

                .tarjeta.bg-color-white.p-4.shadow-top-left-right.text-center
                  img(src='@/assets/curso/tema3/8.svg', style="max-width: 90px", alt='').mx-auto.mb-4
                  .bg-color-1.d-inline-block.px-3.py-1.mb-4
                      h5.text-center.mb-0.text-color-black Repetitividad   
                  p.text-center Error esperado al repetir la misma medida. 

        .titulo-tres.mb-5(data-aos="flip-up")
          h4 Criterios para seleccionar un sensor

        p.mb-5 La elección de un sensor depende de la magnitud a medir, características de alimentación y salida, condiciones ambientales y otros factores como peso, dimensiones, vida útil, costo y tiempo de instalación.

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            .bg-color-13.p-5
              h4(data-aos="fade-left").mb-4 La clasificación de los sensores según la señal de salida es: 
              .row.justify-content-center.align-items-center.mb-0
                .col-sm-12.col-lg
                  .ps-3.bg-color-11(data-aos="fade-right").mb-3 #[strong Binarios:] proporcionan una señal de encendido (ON) o apagado (OFF).
                  .ps-3.bg-color-11(data-aos="fade-right").mb-3 #[strong Digitales:] emiten pulsos o palabras digitales.
                  .ps-3.bg-color-11(data-aos="fade-right").mb-0 #[strong Analógicos:] producen una salida continua en valores de tensión o corriente.
                .col-lg-auto.d-none.d-lg-block
                  img(src="@/assets/curso/tema3/10.png", alt="", data-aos="zoom-in") 

        p Los tipos de sensores son: 

    .bg-full-width.bg-fondo-5.mb-5
      .p-4.p-md-5 
        .tarjeta.bg-color-white.p-4.p-lg-5.pb-lg-4.shadow-soft(data-aos="fade-up")
          SlyderA(tipo="b").px-4.pb-4

            .row.justify-content-center.align-items-center.mb-0
              .col-sm-12.col-lg-7
                div(data-aos="fade-right").mb-4
                  .d-flex.align-items-center
                    i.fas.fa-microchip
                    span.ps-2 #[strong Sensor de proximidad] 
                  p.ps-4 Detecta objetos que interrumpen un rayo de luz. 
                
                div(data-aos="fade-right").mb-4
                  .d-flex.align-items-center
                    i.fas.fa-microchip
                    span.ps-2 #[strong Sensor de movimiento] 
                  p.ps-4 Genera una alerta ante la detección de movimiento. 

                div(data-aos="fade-right").mb-4
                  .d-flex.align-items-center
                    i.fas.fa-microchip
                    span.ps-2 #[strong Sensores de presencia o proximidad inductivos y capacitivos ] 
                  p.ps-4 Detectan objetos férricos o materiales según su capacitancia. 

                div(data-aos="fade-right").mb-0
                  .d-flex.align-items-center
                    i.fas.fa-microchip
                    span.ps-2 #[strong Sensor óptico de barrera ] 
                  p.ps-4 Detecta presencia mediante un emisor de luz. 
              .c4l-sm-12.col-lg-4.d-none.d-lg-block
                img(src='@/assets/curso/tema3/11.png')

            .row.justify-content-center.align-items-center.mb-0
              .col-sm-12.col-lg-7
                div(data-aos="fade-right").mb-4
                  .d-flex.align-items-center
                    i.fas.fa-microchip
                    span.ps-2 #[strong Sensor de temperatura] 
                  p.ps-4 Mide la temperatura en líquidos, sólidos o gases. 
                
                div(data-aos="fade-right").mb-4
                  .d-flex.align-items-center
                    i.fas.fa-microchip
                    span.ps-2 #[strong Sensor de nivel] 
                  p.ps-4 Mide el nivel de líquidos y sólidos.

                div(data-aos="fade-right").mb-4
                  .d-flex.align-items-center
                    i.fas.fa-microchip
                    span.ps-2 #[strong Sensor de visión artificial] 
                  p.ps-4 Verifica especificaciones mediante un patrón visual. 


              .col-sm-12.col-lg-4.d-none.d-lg-block
                img(src='@/assets/curso/tema3/12.png')


            .row.justify-content-center.align-items-center.mb-0
              .col-sm-12.col-lg-7
                div(data-aos="fade-right").mb-4
                  .d-flex.align-items-center
                    i.fas.fa-microchip
                    span.ps-2 #[strong Sensor de fuerza y torsión] 
                  p.ps-4 Mide fuerzas en estructuras mecánicas. 
                
                div(data-aos="fade-right").mb-4
                  .d-flex.align-items-center
                    i.fas.fa-microchip
                    span.ps-2 #[strong Sensores de humedad] 
                  p.ps-4 Miden la presión parcial del vapor de agua.

                div(data-aos="fade-right").mb-4
                  .d-flex.align-items-center
                    i.fas.fa-microchip
                    span.ps-2 #[strong Sensores de intensidad LDR] 
                  p.ps-4 Detectan radiación luminosa. 


              .col-sm-12.col-lg-4.d-none.d-lg-block
                img(src='@/assets/curso/tema3/13.png')


            .row.justify-content-center.align-items-center.mb-0
              .col-sm-12.col-lg-7
                div(data-aos="fade-right").mb-4
                  .d-flex.align-items-center
                    i.fas.fa-microchip
                    span.ps-2 #[strong Sensores de aceleración] 
                  p.ps-4 Detectan movimiento y rotación. 
                
                div(data-aos="fade-right").mb-4
                  .d-flex.align-items-center
                    i.fas.fa-microchip
                    span.ps-2 #[strong Sensor de velocidad] 
                  p.ps-4 Mide velocidad de rotación o lineal. 

                div(data-aos="fade-right").mb-4
                  .d-flex.align-items-center
                    i.fas.fa-microchip
                    span.ps-2 #[strong Sensores ultrasónicos] 
                  p.ps-4 Usan ondas ultrasónicas para detectar proximidad. 


              .col-sm-12.col-lg-4.d-none.d-lg-block
                img(src='@/assets/curso/tema3/14.png')

    .titulo-tres.mb-5(data-aos="flip-up")
      h4 Aplicaciones

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/15.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Algunas aplicaciones de los sensores incluyen: sensores ópticos para detección visual, sensores capacitivos para identificar diferentes materiales, celdas fotovoltaicas para generación de electricidad, sensores inductivos para detectar objetos metálicos, y sensores de temperatura para monitoreo térmico en líquidos.

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

<style lang="sass"></style>
