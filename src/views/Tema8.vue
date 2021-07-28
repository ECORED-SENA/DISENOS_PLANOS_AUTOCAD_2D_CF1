<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 8
      h1 Relaciones geométricas y paramétricas
    p Según Autodesk (2019) el dibujo paramétrico es una tecnología que se utiliza para diseñar, utilizando restricciones, que son asociaciones y restricciones aplicadas a la geometría 2D.
    p.mb-5 Existen dos tipos de restricciones generales:
    .row.justify-content-center
      .col-10.mb-5
        ul.lista-ul
          li 
            i.fas.fa-pencil-ruler(style="color:#FBA321")
            | Las restricciones geométricas controlan las relaciones entre los objetos.
          li 
            i.fas.fa-pencil-ruler(style="color:#FBA321")
            | Las restricciones por cota controlan los valores de distancia, longitud, ángulo y radio de los objetos.
      .col-10.mb-5
        .row.align-items-center
          .col-lg-6
            p En la figura que aparece a continuación, puede verse las #[span(style="background-color: #F9E0E0; padding: 3px;") restricciones geométricas y por cota] que utilizan el formato y la visibilidad por defecto.
          .col-lg-6.mt-4.mt-lg-0
            figure
              img(src='@/assets/curso/img36.svg', style="margin: auto; max-width: 100%;")
              figcaption Nota. Autodesk (2019).
      .col-10.mb-5
        .row.align-items-center
          .col-lg-4
            figure
              img(src='@/assets/curso/img37.svg', style="margin: auto; max-width: 100%;")
              figcaption Nota. Autodesk (2019).
          .col-lg-8.mt-4.mt-lg-0
            p Si un objeto tiene #[span(style="background-color: #F9E0E0; padding: 3px;") restricciones aplicadas] se mostrará un distintivo de cursor al pasarlo sobre este, como se muestra en la siguiente figura.
    p.mb-5 Durante la fase de diseño de un proyecto, las restricciones proporcionan una manera de cumplir con determinados requisitos a la hora de experimentar con distintos diseños o de hacer cambios. Los cambios que se hacen en un objeto pueden ajustar otros objetos de forma automática, y restringir los cambios en los valores de distancia y de ángulo.
    h4 De manera que las restricciones permiten:
    .row.justify-content-center.mb-4
      .col-lg-10
        ul.lista-ul
          li 
            i.fas.fa-pencil-ruler(style="color:#FBA321")
            | Mantener requisitos y especificaciones de diseño, restringiendo la geometría de un dibujo.
          li 
            i.fas.fa-pencil-ruler(style="color:#FBA321")
            | Aplicar varias restricciones geométricas a los objetos de manera instantánea.
          li 
            i.fas.fa-pencil-ruler(style="color:#FBA321")
            | Incluir fórmulas y ecuaciones en las restricciones por cota.
          li 
            i.fas.fa-pencil-ruler(style="color:#FBA321")
            | Hacer cambios de diseño rápidamente, cambiando el valor de una variable.
    .cajon.color-secundario.p-4.mb-5
      p.mb-0 Best practice: se recomienda aplicar las restricciones geométricas, en primer lugar, para determinar la forma del diseño y aplicar, a continuación, las restricciones por cota para determinar el tamaño de los objetos del diseño.
    h4 Cuando se trabaja con restricciones, el dibujo puede estar en uno de estos tres estados:
    .row.justify-content-center.mb-5
      .col-lg-10
        ul.lista-ul
          li 
            i.fas.fa-pencil-ruler(style="color:#FBA321")
            span #[b Sin restricciones.] No se aplican restricciones a la geometría.
          li 
            i.fas.fa-pencil-ruler(style="color:#FBA321")
            span #[b Subrestringido.] Se aplican algunas restricciones a la geometría.
          li 
            i.fas.fa-pencil-ruler(style="color:#FBA321")
            span #[b Totalmente restringido.] Se aplican todas las restricciones geométricas y por cota relevantes a la geometría. Los conjuntos de dibujos totalmente restringidos deben incluir una restricción fija como mínimo para bloquear la ubicación de la geometría.
    h4 Por tanto, existen dos métodos de diseño con restricciones:
    .row.justify-content-center.mb-5
      .col-lg-10
        ul.lista-ul.mb-5
          li 
            i.fas.fa-pencil-ruler(style="color:#FBA321")
            span Puede trabajar con un dibujo subrestringido y realizar cambios sobre la marcha, utilizando una combinación de comandos de edición, pinzamientos y añadiendo o cambiando restricciones.
          li 
            i.fas.fa-pencil-ruler(style="color:#FBA321")
            span O puede crear y restringir por completo el dibujo en primer lugar y, a continuación, controlar el diseño liberando y sustituyendo restricciones geométricas, y cambiando los valores de las restricciones por cota.
        .bloque-texto-a.color-secundario.p-4.p-md-5
          .row.m-0.align-items-center.justify-content-between
            .col-lg-5.mb-4.mb-lg-0
              h4.mb-0 El método escogido dependerá de sus prácticas de diseño y de los requisitos de su disciplina.
            .col-lg-7
              .bloque-texto-a__texto.p-4
                p.mb-0 Nota: el programa no permite la aplicación de restricciones que pueden dar como resultado una geometría sobrerestringida.
    p.mb-5 Finalmente, observe el siguiente video tutorial sobre relaciones geométricas y paramétricas.
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/W1HW0OgvXQ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Tema8',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
