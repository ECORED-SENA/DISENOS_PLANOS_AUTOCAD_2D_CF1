<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 El diseño asistido por computador (CAD)
    .row.mb-5
      .col-lg-6
        p Las siglas CAD hacen referencia al diseño asistido por computadora, el cual dispone de muchas aplicaciones dentro de distintas industrias, diseños de ingenierías, puentes, edificios, máquinas, plantas industriales, diseño paisajístico, diseño y distribuciones de espacios de producción y almacenamiento, y un sinfín de aplicaciones que solo requieren la creatividad del sector económico que la requiera. 
        p El diseño CAD está dividido en dos grandes partes: una es el diseño 2D de dibujo, anotaciones, textos y planos, y otra gran división es el diseño de modelos 3D, que también pueden llegar a crear planos, vistas 2D, animaciones, fotografías, renderizados, impresiones físicas 3D e incluso aplicar texturas y materiales a un modelo digital.
        .cajon.color-primario.p-4.mb-4
          p.mb-0 A continuación, se describen las herramientas y conocimientos necesarios para el desarrollo del curso de AutoCAD 2D.
      .col-lg-6
        figure
          img(src='@/assets/curso/img1.svg', alt='Texto que describa la imagen')
    .h4 Introducción al CAD
    p.mb-5 En la siguiente presentación encontrará una descripción más completa del CAD.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-4 CAD son las siglas en inglés para diseño asistido por computadora y, AutoCAD es la herramienta que permite hacer la gran mayoría de diseños, permitiendo trabajar dibujos en 2 dimensiones y su modelado en 3 dimensiones si se requiere. Los dibujos en 2D se realizan a través de vectores, que consisten en un conjunto de líneas curvas y puntos mediante los cuales puede formar polígonos y elementos más complejos como superficies y dibujos en 3D.
    .row.justify-content-center
      .col-10
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 Para aprender el uso de herramientas CAD debe repasar sus conocimientos de geometría en la que aprendió a trazar puntos en el eje cartesiano, los conceptos de línea punto y plano, las partes de la circunferencia, elipse tangentes, ángulos, etc.
    p También debe aprender la simbología arquitectónica, eléctrica, hidrosanitaria, de gas o del área en la que quiera utilizar el diseño asistido por computadora AutoCAD como complemento posterior al curso.
    .bloque-texto-a.color-secundario.p-4.p-md-5
      .row.m-0.align-items-center.justify-content-between
        .col-lg-3.mb-4.mb-lg-0
          h2.mb-0 ¡Reflexión!
        .col-lg-9
          .bloque-texto-a__texto.p-4
            p.mb-0 #[b Cuestiónese y responda de manera individual la siguiente pregunta:]
            p.mb-0 #[span(style="color:#D32F2F") #[b ¿Cuáles actividades puede realizar con el diseño asistido por computador CAD en su sector económico o profesión?]]
  
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
