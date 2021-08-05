<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Tipos de AutoCAD
    p AutoCAD tiene distintas herramientas que se especializan según el sector económico; sin embargo, el #[i software] “base” es el mismo y las herramientas que lo componen son universales, y puede trabajar en cualquiera de las versiones que encuentre.
    p Para especializarse en su uso se necesita entender con anterioridad la distribución del #[i software] y el alcance que puede tener la herramienta.
    p.mb-5 A continuación, puede consultar los tipos de AutoCAD.
    TabsB.color-acento-contenido
      .py-4.py-md-5(titulo="AutoCAD Architecture" :icono="require('@/assets/curso/img2.svg')")
        .row
          .col-lg-6.mb-4.mb-md-0
            p De acuerdo con la página de Autodesk, AutoCAD Architecture agrega funciones para dibujo arquitectónico, documentación y programas, y para automatizar las tareas de boceto.
            p Algunas de las principales características son:
            ul.lista-ul
              li 
                i.fas.fa-pencil-ruler(style="color:#FBA321")
                | Permite crear planos, secciones, elevaciones y otros dibujos de diseño de edificios con herramientas especializadas.
              li 
                i.fas.fa-pencil-ruler(style="color:#FBA321")
                | Entre las características adicionales se incluyen muros, puertas y ventanas.
              li 
                i.fas.fa-pencil-ruler(style="color:#FBA321")
                | Usa más de 8.000 objetos y estilos arquitectónicos inteligentes compatibles.
          .col-lg-6
            figure
              img(src='@/assets/curso/img4.svg', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="AutoCAD Electrical" :icono="require('@/assets/curso/img2.svg')")
        .row
          .col-lg-6.mb-4.mb-md-0
            p De acuerdo con la página de Autodesk, AutoCAD Electrical agrega funciones de diseño eléctrico para ayudarle a crear, modificar y documentar sistemas de controles eléctricos.
            p Algunas de las principales características son: 
            ul.lista-ul
              li 
                i.fas.fa-pencil-ruler(style="color:#FBA321")
                | Crea diseños de paneles, diagramas esquemáticos y otros dibujos eléctricos, usando herramientas especializadas.
              li 
                i.fas.fa-pencil-ruler(style="color:#FBA321")
                | Usa estándares de proyectos coherentes con dibujos organizados en una estructura basada en proyectos.
              li 
                i.fas.fa-pencil-ruler(style="color:#FBA321")
                | Incluye una biblioteca de más de 65.000 símbolos eléctricos inteligentes para soportar distintos estándares.
          .col-lg-6
            figure
              img(src='@/assets/curso/img5.svg', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="AutoCAD Mechanical" :icono="require('@/assets/curso/img2.svg')")
        .row
          .col-lg-6.mb-4.mb-md-0
            p De acuerdo con la página de Autodesk, AutoCAD Mechanical agrega una biblioteca de partes y herramientas basadas en estándares para ayudarle a crear, modificar y documentar diseños mecánicos para la fabricación.
            p Algunas de las principales características son: 
            ul.lista-ul
              li 
                i.fas.fa-pencil-ruler(style="color:#FBA321")
                | Automatiza las tareas de ingeniería mecánica, como la generación de componentes de la máquina, el dimensionamiento y la creación de listas de materiales.
              li 
                i.fas.fa-pencil-ruler(style="color:#FBA321")
                | Crea partes, ensamblajes y otros dibujos para el diseño del producto, usando herramientas especializadas.
              li 
                i.fas.fa-pencil-ruler(style="color:#FBA321")
                | Usa más de 700.000 partes, características y símbolos de fabricación inteligente compatibles con los estándares internacionales.
          .col-lg-6
            figure
              img(src='@/assets/curso/img6.svg', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="AutoCAD Plant 3D" :icono="require('@/assets/curso/img3.svg')")
        .row
          .col-lg-6.mb-4.mb-md-0
            p De acuerdo con la página de Autodesk, AutoCAD Plant 3D agrega funciones para ayudarle a producir P&ID, y luego las integra en un modelo de diseño de planta en 3D.
            p Algunas de las principales características son: 
            ul.lista-ul
              li 
                i.fas.fa-pencil-ruler(style="color:#FBA321")
                | Genera y comparte informes isométricos, ortográficos y de materiales.
              li 
                i.fas.fa-pencil-ruler(style="color:#FBA321")
                | Crea diagramas esquemáticos, diseños de planta y otros dibujos para el diseño de la planta, usando herramientas especializadas.
              li 
                i.fas.fa-pencil-ruler(style="color:#FBA321")
                | Incluye una biblioteca de más de 400 objetos de plantas inteligentes como plantillas de equipos, plantillas de soporte y miembros estructurales compatibles con 40 estándares.
          .col-lg-6
            figure
              img(src='@/assets/curso/img7.svg', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="AutoCAD Civil 3D" :icono="require('@/assets/curso/img3.svg')")
        .row
          .col-lg-6.mb-4.mb-md-0
            p De acuerdo con la página de Autodesk,  AutoCAD Civil 3D experimenta flujos de trabajo más eficaces para el modelado de superficies y carriles, el diseño de emplazamientos, el análisis de aguas pluviales y sanitarias, y la producción y la documentación de planos.
            p Trabaja con georreferencia para la identificación de puntos topográficos.
            p Cuenta con herramientas de fácil acceso para el diseño de emplazamientos y superficies topográficas.
          .col-lg-6
            figure
              img(src='@/assets/curso/img8.svg', alt='Texto que describa la imagen')
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
