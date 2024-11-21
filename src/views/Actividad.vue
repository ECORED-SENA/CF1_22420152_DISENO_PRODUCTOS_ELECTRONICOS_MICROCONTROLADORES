<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Identificar los conceptos básicos, características, componentes y aplicaciones de los microcontroladores y sensores, así como las diferencias entre estos dispositivos y sus diversas clasificaciones.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es la principal función de un microcontrolador?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Controlar sistemas complejos con múltiples usuarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Controlar máquinas sin necesidad de interacción humana.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Procesar grandes cantidades de datos en redes informáticas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ejecutar aplicaciones de software para usuarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de los siguientes es un componente básico de un microcontrolador?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Disco duro.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Memoria RAM para datos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sistema operativo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Interfaz de usuario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'En el desarrollo de productos, ¿qué etapa implica definir las especificaciones técnicas?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Prototipado virtual.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Concepto del producto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Prototipo funcional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Diseño conceptual.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué ventaja ofrece el uso de microcontroladores en dispositivos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mayor complejidad en el diseño.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mayor control y fiabilidad del producto.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aumento del tamaño del dispositivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducción de costos sin cambios en prestaciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es una aplicación común de los sensores de temperatura?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Monitoreo de niveles de líquido.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Medición de temperatura en líquidos y sólidos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Verificación de especificaciones mediante patrones visuales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Control de objetos metálicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál de los siguientes sensores es ideal para detectar radiación luminosa?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sensor de nivel.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sensor de proximidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sensor de intensidad LDR.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Sensor de movimiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿En qué tipo de aplicaciones son comunes los microcontroladores de la familia PIC de Microchip?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Procesamiento de imágenes complejas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sistemas de seguridad y periféricos de computadoras.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Computadoras personales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Control de grandes bases de datos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál de los siguientes sensores utiliza ondas ultrasónicas para detectar proximidad?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sensor de fuerza y torsión.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sensor de temperatura.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sensor óptico de barrera.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sensor ultrasónico.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'Los microcontroladores generalmente contienen todos los componentes de un sistema de cómputo en un solo chip.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'Los sensores binarios tienen una salida continua de valores en tensión o corriente.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Cuál es la característica que define la capacidad de un sensor para detectar cambios mínimos en la entrada?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Resolución.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Sensibilidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Rango de medida.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Rapidez de respuesta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué componente de un microcontrolador se encarga de realizar los cálculos y operaciones lógicas?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Memoria RAM.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Unidad Central de Proceso (UCP).',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Líneas de entrada/salida.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Generador de impulsos de reloj.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Cuál es el objetivo del prototipado virtual en el desarrollo de un producto?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Evaluar características claves sin necesidad de un modelo físico.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Crear un prototipo físico para pruebas de usuario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Integrar el software con el hardware.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Realizar pruebas climáticas de resistencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué tipo de sensor es ideal para medir la fuerza aplicada en un conjunto mecánico?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sensor de temperatura.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sensor de velocidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sensor de fuerza y torsión.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Sensor de nivel.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Cuál de las siguientes es una ventaja del uso de microcontroladores?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumento en la complejidad de los dispositivos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reducción en el tamaño y simplificación de la mano de obra.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Necesidad de más componentes externos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Disminución de la confiabilidad en el producto final.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
