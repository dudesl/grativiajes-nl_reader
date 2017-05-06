Grativiaje NL Classifier
=========

Implemented whit [Natural](https://github.com/NaturalNode/natural).
Based on [Egghead course about Natural Language Processing](https://egghead.io/courses/natural-language-processing-in-javascript-with-natural)

How to
===========
	   $> npm install && node init.js && node index.js

**`init.js`**
 - Inicializa el entrenamiento
 - Prueba la eficacia del entrenamiento
 - Genera el classifier.json con el Clasificador serializado

 Al finalizar el proceso el script informa del tiempo transcurrido desde el inicio del entrenamiento hasta la generación del clasificador serializado.

**`index.js`**
 - Consume `classifier.json` (el clasificador)
 - Habilita la interfaz para clasificar a traves de un metodo del clasificador

 Para el entrenamiento se usó el último mes de posteos de Grativiajes, la comunidad de dedo virtual y carpooling mas grande de Latinoamérica.

Ejemplo:
------------    

 **Clasificados con la etiqueta `busco`**

```
Buenas tardes! Con mi compa de viaje estamos buscando alguien que nos pueda dar un aventon. Salimos de zona norte, bs as y queremos llegar a villa cura brochero, cordoba. Cualquier tramo que nos puedan alcanzar es de gran ayuda ☆ Cebamos mate, llevamos budines y pan casero ) Buenas rutas para todos! ♡

Hola gente!alguien que viaje para cordoba a fines de mayo? Comparto gastos y mates gracias!!

Buen día !!! alguien que viaje desde Bahía Blanca a Bariloche después del finde largo? Comparto gastos ! Gracias !!

Hola gente alguien que viaje el 28, 29/4 de Mendoza a Buenos Aires.? Se comparte gastos, y mates ricos ????

Amigxs, alguien que viaje el viernes desde LP a Tandil? dividimos gastos, desde ya muchas gracias (:
```
-------
**Clasificados con la etiqueta `sale`**

    Hola #Saleviaje de #BahiaBlanca a #Neuquen mañana sábado alrededor de las 16hs (se puede modificar un poco el horario si lo llegan a necesitar) comparto gastos y la compañía (lo mas importante es la compañía)

	#Saleviaje el martes 2 de Mayo de #Córdoba a #BsAs.

    Here i go again on my own ???? Acá vamos de nuevo... #Saleviaje a #Colon #EntreRios #Palmar desde #BuenosAires #ZonaOeste (donde esta el agite) el viernes 28 a eso de las 19.30.. 20hs (la gente que me conoce sabe que siempre llego tarde pero intentare ser puntual :P) y vuelta el lunes 1 de Mayo a eso de las 16hs aprox. Mismo de siempre si hay lugar no se deja nadie afuera, pero se prioriza al que puede ayudar monetariamente. Según los cálculos si somos 4 en el auto serian 200p por persona (solo

    Hola grupo #SaleViaje desde #Cordoba a #Mendoza él día jueves bien temprano, voy con un amigo, cuento con dos lugares para gente buena onda que le sea útil. Avise por mp y le cuento un poquito más. Saludos. #BuenasRutas.

     #Saleviaje el martes 2 de Mayo de #Córdoba a #Rosario

 ------

Al finalizar el entrenamiento, el clasificador puede deducir si el texto es un pedido de viaje o un ofrecimiento de viaje.

Para la etiqueta `busco` se comprueba una alta eficacia de clasificación, no así para la etiqueta `sale`.
