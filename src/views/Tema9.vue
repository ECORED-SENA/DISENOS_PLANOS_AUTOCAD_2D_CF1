<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 9
      h1 Isoplanos y dibujo de isometrías
    .row.justify-content-center
      .col-10
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5
          .row.m-0.align-items-center.justify-content-between
            .col-lg-5.mb-4.mb-lg-0
              h4.mb-0 Según Autodesk (2019) se permite especificar el plano actual para el dibujo isométrico 2D.
            .col-lg-7
              .bloque-texto-a__texto.p-4
                p.mb-0 Nota: el comando ISOPLANO se ha sustituido por el comando DIBUJOISO. La ventaja principal de DIBUJOISO es que, cuando está activado o desactivado, todos los parámetros relacionados se cambian automáticamente.
    p.mb-5 El comando ISOPLANO incluye los siguientes parámetros y modos al dibujar representaciones isométricas 2D de modelos 3D:
    .row.justify-content-center.mb-5
      .col-10
        ul.lista-ul
          li 
            i.fas.fa-pencil-ruler(style="color:#FBA321")
            span Direcciones ortogonales.
          li 
            i.fas.fa-pencil-ruler(style="color:#FBA321")
            span Orientación forzcursor.
          li 
            i.fas.fa-pencil-ruler(style="color:#FBA321")
            span Orientación y estilo de rejilla (punto).
          li 
            i.fas.fa-pencil-ruler(style="color:#FBA321")
            span Ángulos de rastreo polar.
          li 
            i.fas.fa-pencil-ruler(style="color:#FBA321")
            span Orientación de los círculos isométricos.
    p.mb-5 El plano isométrico solo afecta al movimiento del cursor cuando el estilo forzcursor se ha establecido en isométrico en el cuadro de diálogo parámetros de dibujo, independientemente si la opción forzcursor está activada. Si el estilo de referencia es isométrico, el modo orto utiliza el par de ejes adecuado de 30, 90 y 150 grados.
    .row.justify-content-center.mb-5
      .col-10
        .bloque-texto-a.color-secundario.p-4.p-md-5
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p El plano isométrico actual determina también la orientación de los círculos isométricos creados con la opción isocírculo del comando ELIPSE.
                <br>
                p.mb-0 #[b Un consejo:] puede desplazarse cíclicamente por los planos isométricos pulsando Ctrl + E o F5.
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/img38.svg', style="margin: auto; max-width: 70%;")
    p.mb-5 Observe las solicitudes que se muestran a continuación:
    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/img39.svg' alt='AvatarTop')
          .tarjeta.color-acento-botones
            .p-4
              h2.text-center Izquierdo
              p.text-center Especifica la creación de planos orientados hacia la izquierda, definidos por el par de ejes de 90 y 150 grados.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/img40.svg' alt='AvatarTop')
          .tarjeta.color-acento-botones
            .p-4
              h2.text-center Superior
              p.text-center Especifica la creación de planos orientados hacia la parte superior, definidos por el par de ejes de 30 y 150 grados.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/img41.svg' alt='AvatarTop')
          .tarjeta.color-acento-botones
            .p-4
              h2.text-center Derecho
              p.text-center Especifica la creación de planos orientados hacia la derecha, definidos por el par de ejes de 90 y 30 grados.
    p.mb-5 Finalmente, en el siguiente video tutorial podrá conocer más acerca de los isoplanos y del dibujo de isometrías.
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Tema9',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
