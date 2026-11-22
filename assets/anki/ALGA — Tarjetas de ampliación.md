---
title: ALGA — Tarjetas de ampliación
tipo: preparatoria
capa: curricular
asignatura: Álgebra Lineal y Geometría Analítica
nivel: universitario-introductorio
estado: borrador
tags:
  - álgebra-lineal
  - recuperación-activa
  - ampliación
---

# ALGA — Tarjetas de ampliación

Recuperación activa de las ampliaciones opcionales del curso. Cada apartado enlaza el concepto desarrollado en su nota curricular.

## Matrices — característica dos

[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/01 Matrices#Matriz antisimétrica|Desarrollo del concepto]].

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - escalares
---
> [!note] Pregunta
> ¿Qué significa que un cuerpo tenga característica dos?
===
> [!important] Respuesta
> Que $1_K+1_K=0_K$. En ese caso, la igualdad $2a=0_K$ no obliga a que $a=0_K$.
```

^caracteristica-dos

## Operaciones — combinaciones lineales

[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/02 Operaciones#Combinaciones lineales de vectores|Desarrollo del concepto]].

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - vectores
---
> [!note] Pregunta
> ¿Qué es una combinación lineal de vectores?
===
> [!important] Respuesta
> Una suma de múltiplos escalares de esos vectores: $\lambda_1v_1+\cdots+\lambda_pv_p$, con $\lambda_i\in K$.
```

^combinacion-lineal

## Operaciones — lectura por columnas

[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/02 Operaciones#Lectura por columnas y filas|Desarrollo del concepto]].

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - producto-matricial
---
> [!note] Pregunta
> Si $A$ es $m\times n$ y $B$ es $n\times p$, ¿cómo se interpreta la columna $j$ de $AB$?
===
> [!important] Respuesta
> Es $A\mathbf b_j$, donde $\mathbf b_j$ es la columna $j$ de $B$; por tanto, es una combinación lineal de las columnas de $A$.
```

^producto-por-columnas

## Operaciones — lectura por filas

[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/02 Operaciones#Lectura por columnas y filas|Desarrollo del concepto]].

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - producto-matricial
---
> [!note] Pregunta
> Si $A$ es $m\times n$ y $B$ es $n\times p$, ¿cómo se obtiene la fila $i$ de $AB$?
===
> [!important] Respuesta
> Multiplicando la fila $i$ de $A$ por $B$; en coordenadas, su entrada $j$ es $\sum_{k=1}^n a_{ik}b_{kj}$.
```

^producto-por-filas

## Operaciones — aplicación matricial

[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/02 Operaciones#Producto como composición|Desarrollo del concepto]].

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - aplicaciones-lineales
---
> [!note] Pregunta
> Si $A$ tiene $m$ filas y $n$ columnas, ¿entre qué espacios actúa la aplicación $T_A(\mathbf x)=A\mathbf x$?
===
> [!important] Respuesta
> $T_A:K^n\to K^m$: recibe $n$ coordenadas y devuelve $m$.
```

^aplicacion-matricial

## Operaciones — composición de aplicaciones

[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/02 Operaciones#Producto como composición|Desarrollo del concepto]].

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - producto-matricial
---
> [!note] Pregunta
> Si $B$ representa $S:U\to V$ y $A$ representa $T:V\to W$, ¿qué composición representa $AB$?
===
> [!important] Respuesta
> $T\circ S$: primero actúa $B$ y después $A$.
```

^producto-composicion

## Operaciones — bases compatibles

[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/02 Operaciones#Producto como composición|Desarrollo del concepto]].

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - aplicaciones-lineales
---
> [!note] Pregunta
> Para obtener la matriz de $T\circ S$ multiplicando las matrices de $S:U\to V$ y $T:V\to W$, ¿cómo deben elegirse las bases de $V$?
===
> [!important] Respuesta
> Debe usarse la misma base de $V$ para las coordenadas de salida de $S$ y las de entrada de $T$.
```

^bases-compatibles

## Operaciones — columnas y bases

[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/02 Operaciones#Producto como composición|Desarrollo del concepto]].

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - matrices
  - aplicaciones-lineales
---
> [!note] Pregunta
> ¿Qué representan las columnas de la matriz de una aplicación lineal en las bases elegidas?
===
> [!important] Respuesta
> Las coordenadas de las imágenes de los vectores de la base elegida del dominio.
```

^columnas-matriz-aplicacion

## Matrices elementales — combinación de filas

[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/03 Matrices elementales y operaciones elementales#Lectura de una fila del producto|Desarrollo del concepto]].

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - producto-matricial
---
> [!note] Pregunta
> ¿Qué combinación de filas de $A$ forma la fila $r$ del producto $EA$?
===
> [!important] Respuesta
> Si $E$ tiene orden $m$, es $e_{r1}L_1+\cdots+e_{rm}L_m$: la fila $r$ de $E$ da los coeficientes.
```

^fila-matriz-elemental

## Rango — espacio generado

[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/04 Eliminación de Gauss y Gauss-Jordan#Extra - Lectura mediante espacios generados|Desarrollo del concepto]].

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - rango
---
> [!note] Pregunta
> ¿Qué contiene el espacio generado por una familia de vectores?
===
> [!important] Respuesta
> Todas las combinaciones lineales de esos vectores, con escalares del cuerpo sobre el que se trabaja.
```

^espacio-generado

## Rango — bases

[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/04 Eliminación de Gauss y Gauss-Jordan#Extra - Lectura mediante espacios generados|Desarrollo del concepto]].

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - rango
---
> [!note] Pregunta
> ¿Qué dos condiciones debe cumplir una familia de vectores para ser una base de un espacio vectorial?
===
> [!important] Respuesta
> Debe ser linealmente independiente y generar todo el espacio.
```

^base-espacio-vectorial

## Rango — dimensión

[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/04 Eliminación de Gauss y Gauss-Jordan#Extra - Lectura mediante espacios generados|Desarrollo del concepto]].

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - rango
---
> [!note] Pregunta
> ¿Cómo se obtiene la dimensión de un espacio vectorial de dimensión finita a partir de una base?
===
> [!important] Respuesta
> Contando los vectores de una base. Todas sus bases tienen el mismo número de vectores.
```

^dimension-base

## Rango — espacios de filas y columnas

[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/04 Eliminación de Gauss y Gauss-Jordan#Extra - Lectura mediante espacios generados|Desarrollo del concepto]].

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - rango
---
> [!note] Pregunta
> ¿Cómo se relaciona el rango de una matriz con los espacios generados por sus filas y sus columnas?
===
> [!important] Respuesta
> Es la dimensión de ambos espacios: el número de vectores de una base de cada uno.
```

^rango-espacios-fila-columna

## Producto mixto — volumen

[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/06 Espacios euclídeos/03 Producto externo en R3#Ampliación opcional: producto mixto|Desarrollo del concepto]].

```anki
deck: Física::Álgebra Lineal::Espacios euclídeos
tags:
  - matematicas
  - algebra-lineal
  - producto-mixto
---
> [!note] Pregunta
> ¿Qué interpreta geométricamente $|u\cdot(v\times w)|$?
===
> [!important] Respuesta
> El volumen del paralelepípedo generado por $u$, $v$ y $w$.
```

^producto-mixto-volumen

## Gauss–Jordan — Existencia de forma escalonada reducida

[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/04 Eliminación de Gauss y Gauss-Jordan#Existencia de forma escalonada reducida|Desarrollo del concepto]].

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - forma-escalonada-reducida
---
> [!note] Pregunta
> ¿Toda matriz puede transformarse por filas en una forma escalonada reducida?
===
> [!important] Respuesta
> Sí. Gauss–Jordan la construye mediante un número finito de operaciones elementales.
```

^existencia-forma-reducida

## Gauss–Jordan — Unicidad de forma escalonada reducida

[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/04 Eliminación de Gauss y Gauss-Jordan#Unicidad de forma escalonada reducida|Desarrollo del concepto]].

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - eliminación
  - forma-escalonada-reducida
---
> [!note] Pregunta
> ¿Cuál es el resultado de unicidad para la forma escalonada reducida?
===
> [!important] Respuesta
> Dos formas escalonadas reducidas equivalentes por filas son idénticas.
```

^unicidad-forma-reducida

## Gauss–Jordan — El rango no depende de la forma escalonada elegida

[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/04 Eliminación de Gauss y Gauss-Jordan#El rango no depende de la forma escalonada elegida|Desarrollo del concepto]].

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - rango
  - invariancia
---
> [!note] Pregunta
> ¿Depende de la reducción elegida el número de filas no nulas de una forma escalonada equivalente a $A$?
===
> [!important] Respuesta
> No; toda forma escalonada equivalente tiene el mismo número de filas no nulas.
```

^invariancia-numero-pivotes

## Gauss–Jordan — Sistemas homogéneos

[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/08 Sistemas de ecuaciones lineales#Sistema homogéneo y solución nula|Desarrollo del concepto]].

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - sistemas-lineales
  - homogéneo
---
> [!note] Pregunta
> ¿Qué condición define a un sistema lineal homogéneo $B\mathbf x=\mathbf b$?
===
> [!important] Respuesta
> Su vector de términos independientes es nulo: $\mathbf b=\mathbf 0$.
```

^sistema-homogeneo

