<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Microcontrolador 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-12.col-lg-5
        p.mb-0(data-aos="fade-right") Un microcontrolador es un dispositivo electrónico diseñado para controlar máquinas más que para interactuar con humanos. Se trata de un circuito integrado que contiene todos los componentes esenciales de una computadora. Gracias a su tamaño compacto, puede integrarse directamente en el dispositivo que controla, donde se le conoce como controlador empotrado. 
      .col-lg-7.d-none.d-lg-block
          img(src="@/assets/curso/tema2/1.png", alt="", data-aos="zoom-in")

    .bg-full-width.bg-fondo-3
      .px-4.px-lg-5.pt-0.pb-0.pb-lg-4
        .row.justify-content-center.mb-3
          .col-lg-auto.d-none.d-lg-block
            img(src="@/assets/curso/tema2/2.png", alt="", style="max-width: 300px", data-aos="zoom-in")
          .col-sm-12.col-lg
            p(data-aos="fade-left") Diferencias entre microcontrolador y microprocesador: 
            .row.justify-content-center.align-items-stretch
              .col-sm-12.col-md-6.col-lg-6.col-xl-6.mb-4
                .tarjeta--boton.bg-color-white.shadow-soft.p-4.p-lg-5.h-100.mb-cus(data-aos="fade-right")
                  .row.justify-content-center.mb-3
                    .col-4
                        img(src='@/assets/curso/tema2/3.svg')

                  h5.text-center.bg-color-9.m-auto.mb-3 Microcontrolador
                  p.text-center Es una computadora completa de prestaciones limitadas en un solo chip, diseñada para ejecutar una tarea específica mediante un programa almacenado en memoria. Al integrar todos los elementos en un solo circuito, simplifica la circuitería y reduce tanto los costos como el tiempo de desarrollo.
              .col-sm-12.col-md-6.col-lg-6.col-xl-6.mb-4
                .tarjeta--boton.bg-color-white.shadow-soft.p-4.p-lg-5.h-100(data-aos="fade-left")
                  .row.justify-content-center.mb-3
                    .col-4
                        img(src='@/assets/curso/tema2/4.svg')
                  h5.text-center.bg-color-9.m-auto.mb-3 Microprocesador
                  p.text-center Es un dispositivo digital complejo que forma parte de sistemas más grandes y se encarga de ejecutar instrucciones. A diferencia del microcontrolador, sus componentes están separados, lo que incrementa la complejidad, el costo y el tiempo de desarrollo de la tarjeta.
        
        .row.justify-content-center.align-items-center.mt-lg-5
          .col-lg-6.d-none.d-lg-block
              img(src="@/assets/curso/tema2/5.png", alt="", data-aos="zoom-in") 
          .col-sm-12.col-lg-6
            p.mb-3(data-aos="fade-left") Los componentes básicos de un  son: 
            ul.lista-ul--color.color-adicional-1
              li.d-flex(data-aos="fade-right")
                i.fas.fa-microchip
                span Procesador o Unidad Central de Proceso (UCP).
              li.d-flex(data-aos="fade-right")
                i.fas.fa-microchip
                span Memoria RAM para datos.
              li.d-flex(data-aos="fade-right")
                i.fas.fa-microchip
                span Memoria para el programa (ROM/PROM/EPROM).
              li.d-flex(data-aos="fade-right")
                i.fas.fa-microchip
                span Líneas de entrada/salida (E/S) para comunicación.
              li.d-flex(data-aos="fade-right")
                i.fas.fa-microchip
                span Módulos periféricos (temporizadores, convertidor analógico/digital, etc.)
              li.d-flex(data-aos="fade-right")
                i.fas.fa-microchip
                span Generador de impulsos de reloj.
    
    .bg-full-width.bg-fondo-4
      .px-4.px-lg-5.pt-0.pb-4.pb-lg-5
        .row.justify-content-center.mb-5.pt-5
          .col-sm-12.col-lg-10
            .bg-color-10.p-5
              h4(data-aos="fade-left").mb-4 Ventajas del uso de microcontroladores
              .row.justify-content-center.align-items-center.mb-0
                .col-sm-12.col-lg
                  p.bg-color-11(data-aos="fade-right") Mejor control y capacidad en el producto.
                  p.bg-color-11(data-aos="fade-right") Mayor fiabilidad al reducir el número de componentes.
                  p.bg-color-11(data-aos="fade-right") Menor tamaño y menos requerimientos de mano de obra.
                  p.bg-color-11(data-aos="fade-right") Flexibilidad para modificar mediante cambios en el programa de instrucciones.
                .col-lg-auto.d-none.d-lg-block
                  img(src="@/assets/curso/tema2/6.png", alt="", data-aos="zoom-in") 
        h4 Aplicaciones de los microcontroladores
        p.mb-5 Los microcontroladores se encuentran en productos cotidianos como juguetes, electrodomésticos y vehículos, así como en aplicaciones avanzadas de instrumentación electrónica y control de sistemas espaciales. Las industrias comunes de uso incluyen:
        .row
          .col-sm-12.col-md-6.col-lg-3.mb-0
            .tarjeta--boton.color-primario.p-4.h-card-2.mb-cus
              .row.justify-content-center.mb-3
                .col-sm-6.col-md-10.col-lg-10
                    img(src='@/assets/curso/tema2/7.png')
              p.mb-0 #[b Automotriz:] control de motor, alarmas, sistemas de freno.
          .col-sm-12.col-md-6.col-lg-3.mb-0
            .tarjeta--boton.color-primario.p-4.h-card-2.mb-cus
              .row.justify-content-center.mb-3
                .col-sm-6.col-md-10.col-lg-10
                    img(src='@/assets/curso/tema2/8.png')
              p.mb-0 #[b Electrodomésticos:] control en lavadoras, calefactores.
          .col-sm-12.col-md-6.col-lg-3.mb-0
            .tarjeta--boton.color-primario.p-4.h-card-2.mb-cus
              .row.justify-content-center.mb-3
                .col-sm-6.col-md-10.col-lg-10
                    img(src='@/assets/curso/tema2/9.png')
              p.mb-0 #[b Informática:] controladores de periféricos (impresoras, cámaras).
          .col-sm-12.col-md-6.col-lg-3.mb-0
            .tarjeta--boton.color-primario.p-4.h-card-2.mb-cus
              .row.justify-content-center.mb-3
                .col-sm-6.col-md-10.col-lg-10
                    img(src='@/assets/curso/tema2/10.png')
              p.mb-0 #[b Imagen y sonido], procesamiento de imagen y sonido, control de motores en dispositivos de grabación.
    p.mb-5 Las familias de microcontroladores son: 

    .bg-full-width.bg-fondo-5
      .p-4.p-md-5 
        .tarjeta.bg-color-white.p-4.p-lg-5.pb-lg-4.shadow-soft(data-aos="fade-up")
          SlyderA(tipo="b").px-4.pb-4

            .row.justify-content-center.align-items-center.mb-0
              .col-sm-12.col-lg-7
                h4 ALTAIR
                p.mb-0 Compatibles con la familia 51, programables desde una computadora. Ofrecen 256 bytes de memoria interna y puertos de entrada/salida, con hasta 128 KB direccionables.
              .c4l-sm-12.col-lg-4.d-none.d-lg-block
                img(src='@/assets/curso/tema2/11.png')

            .row.justify-content-center.align-items-center.mb-0
              .col-sm-12.col-lg-7
                h4 INTEL (Familia 8051)
                p.mb-0 Microcontroladores de 8 bits que pueden direccionar hasta 64 KB de memoria de programa y datos. Incluyen modelos como el 8031 y 8032, con variaciones en la RAM interna.
              .col-sm-12.col-lg-4.d-none.d-lg-block
                img(src='@/assets/curso/tema2/12.png')

            .row.justify-content-center.align-items-center.mb-0
              .col-sm-12.col-lg-7
                h4  SIEMENS (SAB80C515)
                p.mb-0 Basado en la familia 8051, ofrece mejoras como puertos adicionales y un convertidor análogo a digital, además de modos de ahorro de energía.
              .col-sm-12.col-lg-4.d-none.d-lg-block
                img(src='@/assets/curso/tema2/13.png')

            .row.justify-content-center.align-items-center.mb-0
              .col-sm-12.col-lg-7
                h4 MOTOROLA (68hc11)
                p.mb-0 Microcontrolador de 8 bits con un conjunto de instrucciones similar a la familia 68xx, utilizado en aplicaciones de telecomunicaciones.
              .col-sm-12.col-lg-4.d-none.d-lg-block
                img(src='@/assets/curso/tema2/14.png')

            .row.justify-content-center.align-items-center.mb-0
              .col-sm-12.col-lg-7
                h4 MICROCHIP (Familia PIC)
                p.mb-0 Reconocidos por su calidad y bajo costo, se emplean en una amplia variedad de aplicaciones, desde periféricos de computadora hasta sistemas de seguridad.
              .col-sm-12.col-lg-4.d-none.d-lg-block
                img(src='@/assets/curso/tema2/15.png')

            .row.justify-content-center.align-items-center.mb-0
              .col-sm-12.col-lg-7
                h4 BASIC STAMP (Parallax Inc.)
                p.mb-0 Microcontroladores sencillos de programar en PBASIC, utilizados principalmente en proyectos educativos y de control básico.
              .col-sm-12.col-lg-4.d-none.d-lg-block
                img(src='@/assets/curso/tema2/16.png')

            .row.justify-content-center.align-items-center.mb-0
              .col-sm-12.col-lg-7
                h4 ATMEL
                p.mb-0 Fabrica microcontroladores derivados de la familia 8051 y de arquitectura AVR propia, utilizados en electrónica de consumo, automotriz y aplicaciones de seguridad.
              .col-sm-12.col-lg-4.d-none.d-lg-block
                img(src='@/assets/curso/tema2/17.png')
            
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

<style lang="sass"></style>
