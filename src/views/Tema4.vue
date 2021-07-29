<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Conceptos técnicos para dibujo en 2D
    p.mb-5 Son necesarios para comprender la importancia y utilidad del diseño CAD en el desarrollo de un proyecto o en la dependencia de una organización. Temas como los tipos de diseño que existen y que son posibles de crear con las herramientas dispuestas en este software, refuerzan conceptos de vistas y dibujo técnico para la correcta interpretación de geometrías en dibujo o creación posterior de planos 2D, como se puede ver en la siguiente figura.
    figure
      img(src='@/assets/curso/img15.svg', style="margin: auto; max-width: 90%;")
    separador
    #t_4_1
    .titulo-segundo
      h2 4.1 Expresión gráfica
    p La formación gráfica del aprendiz de diseño constituye una auténtica introducción al ejercicio de la Arquitectura, la Ingeniería y demás profesiones relacionadas, #[b todas como actividad creativa].
    .row
      .col-lg-7
        p Según Bertoline, Wiebe, Miller & Mohler (1999), #[span(style="background-color: #E4E9EE; padding: 3px;") el dibujo es tan antiguo en su historia y es virtualmente el mismo de la humanidad; tiene un paralelismo muy cercano con el progreso tecnológico. El dibujo bien puede clasificarse como un “lenguaje universal”, como método natural que utilizan los seres humanos para comunicar de manera gráfica las imágenes mentales].
        p La expresión gráfica demuestra que se conlleva a una comunicación con un usuario final y que a su vez el medio por el cual se expresa una idea de dibujo para ese cliente puede ser un plano, un renderizado o un video de animación con la herramienta de AutoCAD.
        a.anexo.mb-4.mb-lg-0(href="https://youtu.be/hUTzaI1bNt4" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p #[b Enlace web]. Conozca más visualizando el material complementario denominado “La comunicación gráfica” de Saúl Santamaría.
      .col-lg-5
        figure
          img(src='@/assets/curso/img16.svg', style="margin: auto; max-width: 100%;")
    separador
    #t_4_2
    .titulo-segundo
      h2 4.2 Tipos de diseño
    p.mb-5 Existen dos tipos de diseño que se pueden crear en AutoCAD, uno el diseño estético y otro el funcional; la intención es entender que dependiendo la profesión u oficio algunas veces se necesitará crear planos 2D de máquinas funcionales para un cliente, o crear el renderizado de un diseño interior de muebles e iluminación para un proyecto de arquitectura e incluso solo el 3D de cómo quedará un puente construido para compartirlo con la comunidad que se beneficiará de ello. Cada tipo de diseño es distinto, pero usa la mayoría de las herramientas que ofrece el software de AutoCAD.
    .row.mb-5
      .col-lg-7
        h4 Diseño estético
        p El arquitecto Louis Sullivan utilizó la frase “la forma viene después de la función”, que significa que la forma de un diseño va unida con la función.
        p Por ejemplo, según Bertoline, Wiebe, Miller & Mohler (1999) la producción de automóviles deportivos requiere un estudio de mercadotecnia, a causa de que por su potencia y velocidad deben tener un diseño corporal que “irradie” velocidad. Esto describe un diseño estético dentro de un diseño funcional.
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 El estilo es la adición de decoración a un punto y está vinculado con la mercadotecnia, por ejemplo, los componentes funcionales básicos de un automóvil no cambian cada año, a diferencia del estilo. Cada año se crean nuevos estilos para generar un interés en el consumidor y aumentar el ciclo de vida del producto, como se muestra en las siguientes figuras.
      .col-lg-5
        SlyderA
          .row
            .col-12
              figure
                img(src='@/assets/curso/img17.svg', style="margin: auto; max-width: 100%;")
                figcaption Estilo moderno
          div
            figure
              img(src='@/assets/curso/img18.svg', style="margin: auto; max-width: 100%;")
              figcaption Estilo clasico
    .row
      .col-lg-7
        h4 Diseño funcional
        p Según Bertoline Wiebe & Miller Mohler (1999) muchos productos son una mezcla de función y estética; pero algunos son diseñados casi exclusivamente de manera funcional. El diseño de un par de muletas se realiza con poca consideración en la estética, ya que su función es ayudar a las personas con daño en las piernas. El radiador utilizado por un automóvil para enfriar la máquina de combustión interna se diseña totalmente, de modo que se cumplan los requerimientos funcionales sin reparar en su estética, como se puede observar en las siguientes figuras.
      .col-lg-5
        SlyderA
          .row
            .col-12
              figure
                img(src='@/assets/curso/img19.svg', style="margin: auto; max-width: 100%;")
                figcaption Muletas
          div
            figure
              img(src='@/assets/curso/img20.svg', style="margin: auto; max-width: 100%;")
              figcaption Radiador
    separador
    #t_4_3
    .titulo-segundo
      h2 4.3 Relación del CAD con la organización
    p.mb-5 Según Bertoline, Wiebe, Miller & Mohler (1999) #[span(style="background-color: #F9E0E0; padding: 3px;") una empresa y compañía de manufactura incluye todas las entradas, procesos y salidas necesarias para construir un producto o construir una estructura. El diseño es uno de los aspectos importantes de la empresa.]
    .row.justify-content-center.mb-5
      .col-lg-10
        figure
          img(src='@/assets/curso/img21.svg', style="margin: auto; max-width: 100%;")
          figcaption.mt-4 Nota. Bertoline, Wiebe, Miller & Mohler (1999).
    p.mb-5 Según Bertoline, Wiebe, Miller & Mohler (1999) #[span(style="background-color: #E4E9EE; padding: 3px;") el modelo de ingeniería concurrente muestra la forma en que se encuentra relacionada cualquier área de la empresa, y la base de datos CAD es el lazo de información entre cada una de estas.]
    .row.justify-content-center.mb-5
      .col-lg-8
        figure
          img(src='@/assets/curso/img22.svg', style="margin: auto; max-width: 100%;")
          figcaption.mt-4 Nota. Bertoline, Wiebe, Miller & Mohler (1999).
    p En las dos figuras anteriores se puede ver que un buen diseño CAD sin importar que sea en 3D o 2D, o que sea un diseño de ingeniería, de diseño gráfico o arquitectura, puede ayudar a una organización a establecer insumos de entrada para otras secciones de una empresa. A la sección de planificación le ayuda a saber sobre los temas constructivos o la aplicación en sitio; a la producción sobre la herramienta o mecanismos que necesita para construir el diseño CAD; a mercadotecnia le sirve la información proveniente de renderizados o videos de animación para publicitar el modelo CAD; y al área de financiamiento le interesa sacar los costos de los insumos que pueden requerirse en la construcción de uno de estos diseños.
    separador
    #t_4_4
    .titulo-segundo
      h2 4.4 Fases de un diseño CAD
    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5
      .row.m-0.align-items-center.justify-content-between
        .col-lg-3.mb-4.mb-lg-0
          h2.mb-0 De una idea a una realidad…
        .col-lg-9
          .bloque-texto-a__texto.p-4
            p.mb-0 En muchas ocasiones no se considera la importancia del CAD, ni el alcance que puede tener dentro del desarrollo de un proyecto, incluso desde la fase de un boceto a mano alzada o explicar y dimensionar todo solo con un modelo 2D. En la siguiente figura puede observar las fases de un diseño CAD.
    .row.justify-content-center.mb-5
      .col-lg-8
        figure
          img(src='@/assets/curso/img23.svg', style="margin: auto; max-width: 100%;")
    h4 Fase 1. Ideación
    p.mb-5 Según Bertoline, Wiebe & Miller Mohler (1999) #[span(style="background-color: #F9E0E0; padding: 3px;") el proceso de ideación incluye la identificación del problema, el desarrollo de las ideas y el diseño preliminares. La ideación es el inicio del proceso de diseño; en la siguiente figura se muestra el proceso.]
    .row.justify-content-center.mb-5
      .col-lg-10
        figure
          img(src='@/assets/curso/img24.svg', style="margin: auto; max-width: 100%;")
          figcaption.mt-4 Nota. Bertoline, Wiebe, Miller & Mohler (1999).
    .cajon.color-primario.p-4.mb-4
      p.mb-0 Esta fase es sin lugar a duda la más importante y donde puede estar representada en gran medida por el diseño 2D, es donde se encuentran croquis, descripción de un proceso, diagrama de flujo, mapa mental o incluso un diagrama de instrumentación y control P&ID para aplicaciones de Ingeniería.
    p.mb-5 A continuación, se visualiza un ejemplo de mapa de proceso que empieza con el dibujo 2D.
    .row.justify-content-center.mb-5
      .col-lg-10
        figure
          img(src='@/assets/curso/img25.svg', style="margin: auto; max-width: 100%;")
    .row.justify-content-end
      .col-auto
        a.boton.color-acento-contenido.mb-5.indicador__container(@click="modal1 = true")
          span Ampliar #[span.fas.fa-search-plus]
          .indicador--click(v-if="mostrarIndicador")
    ModalA(:abrir-modal.sync="modal1")
      .row.align-items-center
        .col-12
          figure
            img(src='@/assets/curso/img26.svg', alt='Texto que describa la imagen')
    h4 Fase 2. Diseño 2D
    p La intención de este paso es dimensionar la idea a escala real, así no se tengan todos los detalles constructivos, pero sí empezar a pensar en el espacio que se tiene, en cómo se tiene que ver y con qué posibilidades se cuenta para darle forma, aquí también se usa el diseño CAD 2D, pero ahora con más prioridad.
    .row.mb-5
      .col-lg-6
        .cajon.color-primario.p-4.mb-4
          p.mb-0 En el caso de una persona que trabaje en logística y necesite distribuir flujos de trabajo en la empresa es necesaria la distribución de la planta que tiene, ver los pasos de montacargas que dispone y así dimensionar sus estanterías para el almacenamiento.
        p Otro ejemplo puede ser para las personas que trabajan en sistemas de seguridad y salud en el trabajo, a veces no se tiene un plano real con medidas de cómo es una planta y se necesita crear una ruta de evacuación o distribuir los extintores en puntos estratégicos, para esto también serviría un diseño 2D de una planta a escala.
        p Los ingenieros sin importar que sean civiles, mecánicos, eléctricos o de telecomunicaciones necesitan también conocer el espacio disponible para el muro, cuarto o edificio que va a crear, la máquina que requiere crear o incluso la instalación eléctrica o de red para la que necesita trazar un espacio definido, tal como se muestra en la siguiente figura.
      .col-lg-6
        figure
          img(src='@/assets/curso/img1.png', alt='Texto que describa la imagen')
    h4 Fase 3. Dibujo de planos
    .row.mb-5
      .col-lg-6
        p Esta fase es muy importante y se define como un punto principal para el resultado del proceso de diseño, ya que es la parte en la que se deja de crear dibujos solo para la interpretación personal y se tiene que crear un documento que sea de fácil lectura para cualquier persona dentro de la organización. Este plano debe cumplir con normativas técnicas y orden de vistas, para que sin importar que la persona que lo lea sea ingeniero, arquitecto o de alguna otra profesión y que al menos cuente con conocimientos básicos de dibujo técnico, entienda la descripción de la información impresa en el plano.
        p En las siguientes figuras puede observar el orden de vistas y la descripción de la información impresa.
      .col-lg-6
        figure
          img(src='@/assets/curso/img2.png', alt='Texto que describa la imagen')
    h4 Fase 4. Construcción o montaje
    p  Sin importar que se diseña la fachada de una casa, una máquina, un puente, un mueble que se acomoda perfectamente a una cocina, el propósito final es crearlo, materializar las ideas, sea con un número distinto de herramientas, pero crear los diseños.
    .cajon.color-secundario.p-4.mb-5
      p.mb-0 A continuación, se puede ver que todo este proceso y fases de diseño conllevan a este resultado, la idea de un proyecto, diseño del modelo 2D y dimensionar los planos a escalas reales según normas técnicas, ya que con esta información se puede materializar.
    figure
      img(src='@/assets/curso/img3.png', alt='Texto que describa la imagen')
    separador
    #t_4_5
    .titulo-segundo
      h2 4.5 Breve explicación de dibujo técnico
    p Para leer, crear y dibujar planos 2D se requiere tener conocimientos de dibujo técnico, vistas auxiliares, vistas de sección, perspectiva y geometría descriptiva.
    p.mb-5 Dado lo anterior puede visualizar el siguiente video.
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2HNNtWVQNOs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    separador
    #t_4_6
    .titulo-segundo
      h2 4.6 Sistemas de unidades de longitud
    .row.mb-5
      .col-lg-6
        p Es importante recordar que uno de los puntos de partida para trabajar cualquier problema que involucre magnitudes es definir el sistema de unidades en el que se trabajará; ya se vio que la referencia estándar para unidades de medida a nivel mundial es el Sistema Internacional de Unidades [SI], que parte del uso de las magnitudes fundamentales longitud, tiempo, masa, fuerza y sus unidades bases que son respectivamente metro, segundo, kilogramo y newton, a partir de las cuales se derivan las demás.
        p También se mencionó que aparte del sistema internacional de unidades es posible emplear otras unidades y sistemas para expresar las medidas, este es el caso del sistema tradicional de unidades de Estados Unidos, también conocido como Sistema gravitacional de unidades inglesas, en el que las unidades para las magnitudes de longitud, tiempo, fuerza y masa son respectivamente el pie, segundo, libra y #[i slug].
        p Para la aplicación solo se necesitará trabajar con unidades de longitud y área, pero pueden estar en cualquiera de los dos sistemas.
      .col-lg-6.mt-4.mt-lg-0
        figure
          img(src='@/assets/curso/img27.svg', style="margin: auto; max-width: 100%;")
    .row.p-4.align-items-center.bg-color1.mx-0.mb-5
      .col-4
        figure
          img(src='@/assets/curso/img28.svg', style="margin: auto; max-width: 60%;")
      .col-8.p-4.bg-color2
        p Para la operación matemática de las diferentes magnitudes se requiere emplear factores de conversión que permitan pasar de múltiplos a submúltiplos y viceversa, al igual que el cambio de otras unidades que no sean del SI. Es entonces donde se debe realizar la respectiva conversión de unidades para obtener al final las correctas dimensiones. La conversión de unidades de longitud se logra mediante el uso de factores de conversión, que indican la relación entre una cantidad expresada en diferentes unidades, como por ejemplo:
        p.mb-0 #[b 1 metro = 1000 mm]
        p.mb-0 #[b 1 pie = 12 pulgadas (inch)]
    p.mb-5 En todos los casos para aplicar el factor de conversión se deben ordenar las unidades de tal manera que puedan ser canceladas para obtener la unidad esperada.
    .row.justify-content-center.bg-color3.mb-5
      .col-lg-10.p-5.mt-4
        p.mb-5 #[b Ejemplo.] Si se tiene un bloque de un auto a importar en AutoCAD, pero está en una escala muy pequeña de 0.12 pulgadas y a escala real se necesita que tenga una longitud total de 3 metros ¿qué conversión se debe hacer?
        hr
        .row.align-items-center.my-5
          .col-lg-6
            p #[b Primero.] Se aplica el factor de conversión de pulgada a metros.
          .col-lg-6.mt-4.mt-lg-0
            figure
              img(src='@/assets/curso/img29.svg', style="margin: auto; max-width: 70%;")
        hr
        .row.align-items-center.my-5
          .col-lg-6
            p #[b Segundo.] Se hace una simple regla de tres.
          .col-lg-6.mt-4.mt-lg-0
            figure
              img(src='@/assets/curso/img30.svg', style="margin: auto; max-width: 50%;")
        hr
        p.my-5 #[b Tercero]. Finalmente, se obtiene el dato para escalar el dibujo 9842.51 veces, para que quede a una escala acorde al diseño donde se va a usar, como se muestra en la siguiente figura.
        figure
          img(src='@/assets/curso/img31.svg', style="margin: auto; max-width: 80%;")
    p.mb-0 Generalmente se emplean tablas para conocer los factores de conversión; sin embargo, hoy es posible el uso de aplicaciones web o aplicaciones que se pueden descargar en los dispositivos móviles, y que presentan datos aceptables.

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    modal1: false,
  }),
}
</script>

<style lang="sass" scoped></style>
