---
sidebar_position: 1
---

# Binary Search

Supongamos que busca a una persona en la guía telefónica. Su nombre empieza por K. Podrías empezar
por el principio y seguir pasando páginas hasta llegar a las K. Pero pero es más probable
que empieces por la página del medio, porque sabes que las K estarán cerca de la
mitad de la guía telefónica.

Supongamos que te conectas a Twitter. Cuando lo haces, Twitter tiene que verificar que tienes una
cuenta en el sitio. Para ello, tiene que buscar tu nombre de usuario en su base de datos. Imagina
que tu nombre de usuario es kemilbeltre. Twitter podría empezar por el principio y buscar
tu nombre, pero tiene más sentido que empiece por la mitad.

Esto es un problema de busqueda. Y todos estos casos usan el mismo algoritmo
para resolver el probema: _binary search_.

Binary search es un algoritmo; su input es una lista ordenada de elementos.
Si el elemento que estes buscando se encuentra en la lista, binary search devolverá
la posición donde se encuentra el elemento. De lo contrario, binary search devolverá _null_.

Por ejemplo:

Imagina que estas jugando a un juego donde tienes que adivinar un número entre el 1 y el 100.
Empiezar adinando 50. Si la respuesta es mayor a 50, tienes que eliminar todos los númeoros
menores a 50 y repetir este proceso con los números entre el 51 y el 100. Si la respuesta es
menor de 50, tienes que eliminar todos los números mayores a 50 y repetir el proceso
con los números entre el 1 y 49.

> **Nota:**
> Binary search solo funciona cuando la lista esta ordenada.

![Binary search animation](../../../../../static/img/bs_animation)

## Implementación del Binary Search

```ts
export default function binarySearch(
  haystack: number[],
  needle: number
): boolean {
  let low = 0; // low and high keep track of which part of the list you'll search in.
  let high = haystack.length;

  do {
    const mid = Math.floor(low + (high - low) / 2); // check middle element...
    const value = haystack[mid];

    if (value === needle) {
      // Found needle.
      return true;
    } else if (value > needle) {
      // The needle was too high.
      high = mid;
    } else {
      // The needle was too low.
      low = mid + 1;
    }
  } while (low < high); // while you haven't narrowed it down to one element...

  return false; // The needle wasn't found.
}
```

## Ejercicios

- Suponga que tiene una lista ordenada de 200 nombres y que realiza una búsqueda binaria. ¿Cuál es el
  número máximo de pasos necesarios?
- Supón que duplicas el tamaño de la lista. ¿Cuál es ahora el número máximo de pasos?
