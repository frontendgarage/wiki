---
sidebar_position: 3
---

# Recursion

La recursión es como desembalar cajas que contienen cajas más pequeñas. Vas abriendo las cajas hasta que llegas a la más pequeña,
y entonces empiezas a ponerlo todo en su sitio.

Ahora, imagina que una de estas cajas contiene un objeto que estás buscando. ¿Cuál es tu algoritmo para buscar el objeto?  
Piensa en un algoritmo antes de seguir leyendo.

Aquí tienes un enfoque.

1. Haz un montón de cajas para buscar.
2. Coge una caja y mira a través de ella.
3. Si encuentras una caja, añádela a la pila para mirar más tarde.
4. Si encuentras el objeto, ¡has terminado!
5. Repite.

He aquí un enfoque alternativo.

1. Mira a través de la caja.
2. Si encuentras una caja, ve al paso 1.
3. Si encuentras el objeto, ¡has terminado!

¿Qué método te parece más sencillo? El primer método utiliza un bucle while. Mientras la pila no esté vacía, coge una caja
y mira a través de ella:

```py
def look_for_object(main_box):
  pile = main_box.make_a_pile_to_look_through()
  while pile is not empty:
    box = pile.grab_a_box()
    for item in box:
      if item.is_a_box():
        pile.append(item)
      elif item.is_object():
        print "found the object"
```

El segundo utiliza recursion. Recursion is cuando una función se llama a si misma.
Aquí el segundo ejemplo en pseudocode:

```py
def look_for_object(box):
  for item in box:
    if item.is_a_box():
      look_for_object():
    elif item.is_object():
      print "found the object"
```

Ambos enfoques consiguen lo mismo, pero el segundo me parece más claro. La recursión se utiliza cuando hace que la solución sea más clara. No hay ninguna ventaja de rendimiento en usar la recursión; de hecho, los bucles son a veces mejores para el rendimiento.

## La pila

Supongamos que estás organizando una barbacoa. Llevas una lista de tareas para la barbacoa, en forma de pila de notas adhesivas.

¿Recuerdas cuando hablamos de matrices y listas, y tenías una lista de tareas?
Podías añadir tareas en cualquier lugar de la lista o eliminar elementos al azar. La pila de notas adhesivas es mucho más sencilla. Cuando insertas un elemento, se añade al principio de la lista. Cuando lees un elemento, sólo lees el que está más arriba y se quita de la lista. Así que tu lista de tareas sólo tiene dos acciones: push (insertar) y pop (eliminar y leer).

La pila es una estructura de datos.  
¡Has usado una pila todo este tiempo sin darte cuenta!

## La pila de llamadas

Tu ordenador utiliza internamente una pila llamada pila de llamadas. Veámosla en acción.

Aquí una función simple:

```py
def greet(name):
  print "hello, " + name + "!"
  greet2(name)
  print "getting ready to say bye..."
  bye()
```

Esta función te saluda y luego llama a otras dos funciones. Estas son
esas dos funciones:

```py
def greet2(name):
  print "how are you, " + name + "?"
```

```py
def bye():
  print "ok bye!"
```

Veamos qué ocurre cuando llamas a una función.

> **Nota**
> print es una función en Python, pero para hacer las cosas más fáciles para este ejemplo, vamos a pretender que no lo es.

Supongamos que llamas a `greet("maggie)`. Primero, tu ordenador asigna una caja
de memoria para esa llamada a la función.

Ahora vamos a usar la memoria. La variable `name` se asigna a `maggie`. Esta
necesita ser guardada en memoria.

Cada vez que haces una llamada a una función, tu ordenador guarda los valores
para todas las variables de esa llamada en la memoria de esta manera. Luego, imprime `hello maggie!`. Luego llama a `greet2("maggie")`. De nuevo, tu ordenador asigna un espacio de memoria para esta llamada a la función.

Tu ordenador está usando una pila para estas cajas. La segunda caja se añade
encima de la primera. Imprimes `¿cómo estás, maggie?`. Luego regresas
de la llamada a la función. Cuando esto sucede, la caja en la parte superior de la pila
se retira.

Ahora la casilla superior de la pila es para la función `greet`, lo que significa que
que has vuelto a la función `greet`. Cuando llamaste a la función `greet2`,
la función `greet` estaba parcialmente completada. Esta es la gran idea detrás de esta sección:
cuando llamas a una función desde otra función, la función que llama se detiene en un estado parcialmente completado. Todos los valores de las variables de esa función siguen almacenados en memoria.
Ahora que has terminado con la función greet2, vuelves a la función `greet`, y continúas donde lo dejaste. Primero imprimes `getting ready to say bye...`. Llamas a la función `bye`.

Una casilla para esa función se añade a la parte superior de la pila. Luego imprimes `"ok bye!`.

Y vuelves a la función `bye`. No hay nada más que hacer, así que regresas de la función `greet` también.
Esta pila, utilizada para guardar las variables de múltiples funciones, se llama pila de llamadas.

## La pila de llamadas con recursión

Veamos esto en acción con la función factorial. `factorial(5)`, y se define así: `5! = 5*4*3*2*1`.
Del mismo modo, factorial(3) es `3*2*1`. Aquí tienes una función recursiva para calcular el factorial de un número:

```py
def fact(x):
  if x == 1:
    return 1
  else:
    return x * fact(x-1)
```

Ahora llama a `fact(3)`. Repasemos esta llamada línea por línea y veamos cómo cambia la pila.
Recuerda, la casilla superior de la pila te dice en qué llamada a fact estás actualmente.

```markdown
CODE CALL STACK
fact(3): |x = 3|

---

## if x == 1: |x = 3|

## else: |x = 3|

// A RECURSIVE CALL:
return x\*fact(x-1): |x = 3||x = 2|

---

// NOW WE ARE IN THE SECOND CALL TO fact. x is 2
if x == 1: |x = 3||x = 2| <- THE TOPMOST FUNCTION
CALL IS THE CALL WE ARE
CURRENTLY IN

---

else: |x = 3||x = 2| NOTE: BOTH FUNCTION CALL
👆 👆 HAVE A VARIABLE NAMED X
AND THE VALUE OF X IS DIFERENT
IN BOTH.

---

return x\*fact(x-1): |x = 3||x = 2||x = 1|👈[3] YOU CAN'T ACCESS THIS[3]
👆[2] CALL X FROM THIS[2] CALL
AND VICE VERSA.

---

## if x == 1 |x = 3||x = 2||x = 1|

return 1: |x = 3||x = 2| ↪️|x = 1|⤵ THIS THE FIRST BOX TO GET
POPPED OFF THE STACK,
WHICH MEANS ITS THE FIRST
CALL WE RETURN FROM

---

return x \* fact(x-1) |x = 3| ↪️ |x = 2|⤵ RETURNS 2
👆 👆 THIS CALL RETURN 1
X IS 2

---

return x \* fact(x-1) ↪️ |x = 3| ⤵ RETURNS 6
👆 👆 THIS CALL RETURN 2
X IS 3
```

Observa que cada llamada a `fact` tiene su propia copia de `x`. No puedes acceder a la copia de x de una función diferente.

## Recapitulación

- Recursividad es cuando una función se llama a sí misma.
- Cada función recursiva tiene dos casos: el caso base y el caso recursivo.
- Todas las llamadas a funciones van a la pila de llamadas.
- La pila de llamadas puede llegar a ser muy grande, lo que ocupa mucha memoria.
