<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Interfaz de usuario y configuración del software
    p.mb-5 La interfaz de usuario de AutoCAD está dividida principalmente por el tipo de trabajo que se quiere realizar, ya que con esto se organiza el tipo de herramientas que se van a manejar. En este caso se trabajará con todas las herramientas 2D posibles para crear los primeros diseños y geometrías.
    .row.justify-content-center.mb-4
      .col-lg-10
        .crd_02
          .crd_02__body
            .crd_02__body__number
              span 1
            .crd_02__body__txt
              p.mb-1(style="font-size: 20px;") #[b Barra inferior de configuración]
              p Permite cambiar el espacio de trabajo antes mencionado, así puede definir las herramientas que va a trabajar durante el curso.
          .crd_02__avatar
            img(src="@/assets/curso/img9.svg", alt="alt")
    .row.justify-content-center.mb-4
      .col-lg-10
        .crd_02
          .crd_02__body
            .crd_02__body__number
              span 2
            .crd_02__body__txt
              p.mb-1(style="font-size: 20px;") #[b Fichas y grupos]
              p Una vez seleccionada la configuración de dibujo y anotación se cuenta con una distribución de herramientas. Las pestañas de home o inicio, insert o inicio, annotate o anotación, parametric o paramétrico se llaman fichas y cada una está subdividida en grupos. 
              p Por el momento se va a trabajar con el grupo home o inicio, el cual está subdividido en draw o dibujo, modify o modifica, annotation o anotación, layers o capas, block o bloque, properties o propiedades, groups o grupos y utilities o utilidades.
          .crd_02__avatar
            img(src="@/assets/curso/img10.svg", alt="alt")
    .row.justify-content-center.mb-4
      .col-lg-10
        .crd_02
          .crd_02__body
            .crd_02__body__number
              span 3
            .crd_02__body__txt
              p.mb-1(style="font-size: 20px;") #[b Espacios de trabajo]
              p A parte de las fichas y grupos se tienen los espacios de trabajo, model o espacio de modelado y layout o presentación.
          .crd_02__avatar
            img(src="@/assets/curso/img11.svg", alt="alt")
    .row.justify-content-center.mb-4
      .col-lg-10
        .crd_02
          .crd_02__body
            .crd_02__body__number
              span 4
            .crd_02__body__txt
              p.mb-1(style="font-size: 20px;") #[b Barra de comandos]
              p Sirve para ingresar los accesos a ediciones y operaciones. Esta a su vez muestra las diferentes selecciones que pueden tener las aplicaciones porque se asemeja a un menú desplegable.
          .crd_02__avatar
            img(src="@/assets/curso/img12.svg", alt="alt")
    .row.justify-content-center.mb-4
      .col-lg-10
        .crd_02
          .crd_02__body
            .crd_02__body__number
              span 5
            .crd_02__body__txt
              p.mb-1(style="font-size: 20px;") #[b Plano cartesiano]
              p Para trabajo en AutoCAD 2D existen solo dos dimensiones de trabajo, medidas en X y Y, y a su vez cotas radiales. Este plano cartesiano puede encontrarlo en los espacios de trabajo antes señalado, model y layout.
          .crd_02__avatar
            img(src="@/assets/curso/img13.svg", alt="alt")
    .row.justify-content-center.mb-5
      .col-lg-10
        .crd_02
          .crd_02__body
            .crd_02__body__number
              span 6
            .crd_02__body__txt
              p.mb-1(style="font-size: 20px;") #[b Cambio de colores de interfaz]
              p En ocasiones es necesario cambiar el color de la interfaz, ya sea para descanso visual o por necesidad de encontrar el contraste visual entre los iconos y colores de capas una vez esté dibujando, por ello se sugiere el color negro para la interfaz.
          .crd_02__avatar
            img(src="@/assets/curso/img14.svg", alt="alt")
    p.mb-5 Observe el siguiente video en el que se describen cada una de las partes.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/slujS36MiwM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p Además, descargue aquí la presentación de la interfaz de usuario y configuración de #[i software]
    .col-lg-6.mb-5
      a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo1.pptx')" target="_blank")
        .anexo__icono
          img(src="@/assets/template/icono-ppt.svg")
        .anexo__texto
          p Anexo. presentación interfaz de usuario
    h4 Empezar a utilizar AutoCAD
    p Para utilizar el software de AutoCAD se puede crear una cuenta en el sitio web #[a(href="https://latinoamerica.autodesk.com/" target="blank") #[b https://latinoamerica.autodesk.com/]]  que ofrece algunas alternativas gratuitas para estudiantes de hasta de 3 años de uso, o de lo contrario, puede activar una prueba gratuita por 30 días.
    p A continuación, observe el tutorial inicial para uso de AutoCAD.
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
