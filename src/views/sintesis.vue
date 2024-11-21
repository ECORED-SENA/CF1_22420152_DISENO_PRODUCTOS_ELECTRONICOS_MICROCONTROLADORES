<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se presenta una síntesis de la temática estudiada en el componente formativo.  

    .row.justify-content-center
      .col-lg-11.mb-5
        figure.bg-color-sintesis.p-5.brounded
          img(src="@/assets/curso/sintesis.svg", alt="El diagrama presenta el diseño y control electrónico con microcontroladores y sensores. Incluye fases como conceptualización, diseño funcional, prototipado y pruebas. Los microcontroladores gestionan tareas en sistemas electrónicos, y los sensores convierten variables físicas en señales eléctricas, con clasificación en binarios, digitales y analógicos.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
