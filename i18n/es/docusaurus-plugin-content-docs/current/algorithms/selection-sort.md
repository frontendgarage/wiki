---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Selection Sort

> En informática, la ordenación por selección es un algoritmo de ordenación por comparación en el lugar. - Wikipedia

## Analogía

![Kit de Jazz de batería](../../../../../static/img/drums.webp)

Supongamos que tienes un montón de canciones en tu ordenador.

Para cada artista, tienes un número de reproducciones.

![Canciones sin ordenar](../../../../../static/img/unsorted-songs.webp)

Quieres ordenar esta lista de mayor a menor número de reproducciones, para poder clasificar a tus artistas favoritos. ¿Cómo puedes hacerlo?

Una forma es recorrer la lista y encontrar el artista más reproducido. Añade ese artista a una nueva lista.

![Lado izquierdo: lista sin ordenar. Lado derecho: lista ordenada con una canción (artista más escuchado)](../../../../../static/img/unsorted-songs2.webp)

Vuelve a hacerlo para encontrar el siguiente artista más reproducido.

![Lado izquierdo: lista sin ordenar. Lado derecho: lista ordenada con dos canciones (artistas más escuchados)](../../../../../static/img/unsorted-songs3.webp)

Sigue haciendo esto y obtendrás una lista ordenada.

![Lado izquierdo: lista sin ordenar. Lado derecho: lista ordenada](../../../../../static/img/unsorted-songs4.webp)

## Complejidad temporal

Para encontrar el artista con el mayor número de reproducciones, tienes que comprobar cada elemento de la lista. Esto lleva O(n) tiempo,
como acabas de ver. Así que tienes una operación que lleva O(n) tiempo y tienes que hacerla n veces:

Esto toma O(n x n) tiempo o O(n^2) tiempo.

## Representación visual

Ordenar un array de menor a mayor.

![Animación de ordenación por selección](../../../../../static/img/Selection-Sort-Animation.gif)

## Resumen

La ordenación por selección es el algoritmo de ordenación más simple que funciona encontrando repetidamente el elemento mínimo (considerando orden ascendente)
de la parte no ordenada y poniéndolo al principio.

## Implementación del Selection Sort

<Tabs>
<TabItem value="ts" label="TypeScript">

```ts
function findSmallest(nums: number[], index: number) {
  let smallest = nums[index];
  let swapIndex = index;
  for (let i = index + 1; i <= nums.length; i++) {
    if (nums[i] < smallest) {
      smallest = nums[i];
      swapIndex = i;
    }
  }
  return { swapIndex, smallest };
}

export default function selectionSort(nums: number[]): number[] {
  for (let i = 0; i < nums.length - 1; i++) {
    const { smallest, swapIndex } = findSmallest(nums, i);
    if (i !== swapIndex) {
      // if smallest is not the current index, swap
      const tmp = nums[i];
      nums[i] = smallest;
      nums[swapIndex] = tmp;
    }
  }
  return nums;
}
```

</TabItem>
<TabItem value="py" label="Python">

```py
def selection_sort(nums):
    # Iterate through the list
    for i in range(len(nums)):
        # Find the index of the minimum element in the unsorted portion
        min_index = i
        for j in range(i + 1, len(nums)):
            if nums[j] < nums[min_index]:
                min_index = j

        # Swap the current element with the minimum element
        nums[i], nums[min_index] = nums[min_index], nums[i]

    # Return the sorted list
    return nums
```

</TabItem>
</Tabs>
