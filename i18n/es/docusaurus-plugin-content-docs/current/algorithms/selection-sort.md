---
sidebar_position: 1
---

# Selection Sort

> En informática, la ordenación por selección es un algoritmo de ordenación por comparación en el lugar. - Wikipedia

## Analogía

[Kit de Jazz de batería]

Supongamos que tienes un montón de canciones en tu ordenador.

Para cada artista, tienes un número de reproducciones.

[Canciones sin ordenar]

Quieres ordenar esta lista de mayor a menor número de reproducciones, para poder clasificar a tus artistas favoritos. ¿Cómo puedes hacerlo?

Una forma es recorrer la lista y encontrar el artista más reproducido. Añade ese artista a una nueva lista.

[Lado izquierdo: lista sin ordenar. Lado derecho: lista ordenada con una canción (artista más escuchado)].

Vuelve a hacerlo para encontrar el siguiente artista más reproducido.

[Lado izquierdo: lista sin ordenar. Lado derecho: lista ordenada con dos canciones (artistas más escuchados)].

Sigue haciendo esto y obtendrás una lista ordenada.

[Lado izquierdo: lista sin ordenar. Lado derecho: lista ordenada].

## Complejidad temporal

Para encontrar el artista con el mayor número de reproducciones, tienes que comprobar cada elemento de la lista. Esto lleva O(n) tiempo,
como acabas de ver. Así que tienes una operación que lleva O(n) tiempo y tienes que hacerla n veces:

Esto toma O(n x n) tiempo o O(n^2) tiempo.

## Representación visual

Ordenar un array de menor a mayor.

[Animación de ordenación por selección].

## Resumen

La ordenación por selección es el algoritmo de ordenación más simple que funciona encontrando repetidamente el elemento mínimo (considerando orden ascendente)
de la parte no ordenada y poniéndolo al principio.
