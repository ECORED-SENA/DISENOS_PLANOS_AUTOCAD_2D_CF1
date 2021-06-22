<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 7
      h1 Rastreo a objetos y puntos de referencia 2D
    p.mb-4 Según Autodesk (2019) el rastreo de referencia a objetos funciona junto con las referencias a objetos. Utilice el rastreo de referencia a objetos para rastrear a lo largo de rutas de alineación basadas en puntos de referencia a objetos. Los puntos adquiridos muestran un pequeño signo más (+), tras precisar un punto, las rutas de alineación horizontal, vertical o polar relativas al punto aparecen a medida que desplaza el cursor sobre las rutas de dibujo; puede designar, por ejemplo, un punto de una ruta basado en un punto final, punto medio de objeto o una intersección entre objetos.
    .cajon.color-secundario.p-4.mb-4
      p.mb-0 #[b Nota: es posible realizar un seguimiento de las referencias a objetos perpendicular y tangente desde el último punto designado en un comando, incluso si el rastreo de referencia a objetos está desactivado.]
    p.mb-5 En la siguiente figura está activada la referencia a objetos punto final. Para iniciar una línea haga clic en su punto inicial (1), desplace el cursor sobre el punto final de la línea (2) para adquirirlo y vuelva a desplazarlo a lo largo de la ruta de alineación horizontal, para colocar el punto final que desea para la línea que está dibujando (3).
    .row.justify-content-center.mb-5
      .col-lg-8
        figure
          img(src='@/assets/curso/img33.svg', style="margin: auto; max-width: 100%;")
          figcaption.mt-4 Nota. Autodesk (2019).
    h4 Consejos para el uso del rastreo de referencias a objetos
    p.mb-5 A medida que utilice AutoTrack (el rastreo polar y las referencias a objetos) descubrirá técnicas que le facilitarán determinadas tareas de diseño.
    .row.justify-content-center
      .col-lg-10
        .row.align-items-center.mb-5
          .col-2
            figure
              img(src='@/assets/curso/img34.svg', style="margin: auto; max-width: 80%;")
          .col-10
            p.mb-0 Utilice las referencias a objetos perpendicular, final o medio con el rastreo de referencia a objetos para dibujar puntos perpendiculares a los puntos medios y finales de los objetos.
        hr
        .row.align-items-center.my-5
          .col-2
            figure
              img(src='@/assets/curso/img34.svg', style="margin: auto; max-width: 80%;")
          .col-10
            p.mb-0 Utilice las referencias a objetos tangente y final con el rastreo de referencia a objetos para dibujar en puntos tangentes a los puntos finales de arcos.
        hr
        .row.align-items-center.my-5
          .col-2
            figure
              img(src='@/assets/curso/img34.svg', style="margin: auto; max-width: 80%;")
          .col-10
            p.mb-0 Utilice el rastreo de referencia a objetos con puntos de rastreo temporales. En una solicitud de punto, escriba tt y, a continuación, precise un punto de rastreo temporal. Un pequeño signo + aparece en el punto. Las rutas de alineación de AutoTrack aparecen relativas al punto temporal, a medida que se desplaza el cursor. Para eliminar el punto, vuelva a desplazar el cursor sobre el signo +.
        hr
        .row.align-items-center.my-5
          .col-2
            figure
              img(src='@/assets/curso/img34.svg', style="margin: auto; max-width: 80%;")
          .col-10
            p Una vez adquirido un punto de referencia a objetos, utilice la distancia directa para precisar puntos en distancias determinadas a lo largo de rutas de alineación, desde el punto de referencia a objetos adquirido. Para responder a una solicitud de punto seleccione una referencia a objetos, desplace el cursor para ver una ruta de alineación y, a continuación, indique una distancia en la solicitud.
            p.mb-0 Nota: el método de introducción directa de distancia no está disponible mientras se esté utilizando la tecla de modificación temporal para el rastreo de referencia a objetos.
        hr
        .row.align-items-center.my-5
          .col-2
            figure
              img(src='@/assets/curso/img34.svg', style="margin: auto; max-width: 80%;")
          .col-10
            p Utilice las opciones “automática” y “mayús” para adquirir opciones definidas en la ficha dibujo del cuadro de diálogo, opciones para controlar la adquisición de puntos. La adquisición de puntos está definida por defecto como automática. Al trabajar con cuartos aproximados pulse “mayús”, para evitar adquirir puntos temporalmente.
    p.mb-5 Todo lo anterior, como se muestra en la siguiente figura.
    .row.justify-content-center.mb-5
      .col-10
        figure
          img(src='@/assets/curso/img35.svg', style="margin: auto; max-width: 100%;")
    p.mb-5 Además, observe el siguiente videotutorial de rastreo a objetos.
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Tema7',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
