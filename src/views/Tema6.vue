<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 6
      h1 Herramientas de dibujo
    p Las herramientas de dibujo descritas dentro del contenido de este componente formativo son geometrías simples como líneas, círculos, polígonos, arcos, etc. Todos los dibujos que se deseen elaborar en este software se encuentran compuestos por estas geometrías simples, pero a la vez importantes.
    p Se entrará a describir el comportamiento de cada uno de los comandos para el esbozo básico de estas geometrías y posterior uso, para elaborar dibujos más profesionales.
    separador
    #t_6_1
    .titulo-segundo
      h2 6.1 Línea, polilínea y tipos de selección
    p.mb-5 Lo primero a tener en cuenta para empezar a conocer las herramientas básicas e iniciar a crear diseños propios será la herramienta línea:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/iswVptEcsUI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5 Con el fin de reforzar la información mostrada consulte el siguiente video tutorial.
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/x7G1bFjJ6Zk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    separador
    #t_6_2
    .titulo-segundo
      h2 6.2 Círculos, arcos y spline
    p Las herramientas que se verán a continuación son todos los tipos de radios o circunferencias que se pueden crear en AutoCAD 2D, describiendo paso a paso cada uno de los comandos y su aplicación.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5 Con el fin de reforzar la información anterior consulte el siguiente video tutorial que desarrolla el tema de los círculos.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/TbLoHE8dung" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5 Para reforzar la información sobre arcos y spline puede ver el siguiente video tutorial.
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/vnbUtRf_f-c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    separador
    #t_6_3
    .titulo-segundo
      h2 6.3 Elipse, rectángulos y polígonos
    p.mb-5 Una de las formas para elaborar geometrías cerradas sin tener que crear todo un número de líneas individuales es a través del uso de los comandos rectángulos y polígonos, los cuales generan de forma dinámica y conversacional, las dimensiones y número de lados necesarios para el caso del polígono, como se puede ver a continuación.
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/a9BzxTnJx2k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    separador
    #t_6_4
    .titulo-segundo
      h2 6.4 Achurado o sombreado
    p Esta herramienta ayuda a rellenar geometrías que siempre deben cumplir con una condición primordial, estar cerradas, lo cual permitirá crear vistas de sección o cortes como se explicó en el apartado de dibujo técnico, también para diferenciar los cambios de sección como, por ejemplo, de concreto a tierra o ladrillo, etc.
    p.mb-5 En la siguiente figura puede ver el resultado de un posible ejemplo.
    .row.justify-content-center.mb-5
      .col-lg-6
        figure
          img(src='@/assets/curso/img32.svg', style="margin: auto; max-width: 100%;")
    p De igual forma, se recomienda que consulte a continuación, lo referente a achurado o sombreado.
    p.mb-5 Finalmente, con el fin de reforzar la información mostrada anteriormente, puede ver el siguiente video tutorial acerca del achurado o sombreado.
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/VSr5GN_K3BU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
