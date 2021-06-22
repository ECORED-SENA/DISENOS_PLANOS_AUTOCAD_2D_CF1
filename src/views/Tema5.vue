<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 5
      h1 Comandos básicos de dibujo 2D
    p Los comandos básicos de AutoCAD son herramientas que facilitarán el esbozo de geometrías en el programa, algunas de estas herramientas permiten crear líneas con restricciones horizontales y verticales para que todas las geometrías queden a 90°, a la vez definir por defecto que el cursor sea forzado a ángulos específicos para que no implique una complicación o condicionante para dibujar.
    p.mb-5 Por lo anterior, es importante que vea el siguiente video tutorial:
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
