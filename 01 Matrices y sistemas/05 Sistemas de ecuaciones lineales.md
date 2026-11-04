---
title: Sistemas de ecuaciones lineales
asignatura: Álgebra Lineal y Geometría Analítica
capa: curricular
tipo:
  - teoría
  - procedimiento
nivel: universitario-introductorio
estado: completo
requiere:
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/01 Matrices y operaciones|Matrices y operaciones]]"
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/02 Eliminación y matrices elementales|Eliminación y matrices elementales]]"
fsrs_goal: Traduce un sistema a AX=B, comprueba soluciones, clasifica los casos por pivotes y resuelve mediante Gauss o Gauss–Jordan; expresa la solución compatible como particular más núcleo y verifica cada vector obtenido.
simbolos:
  - AX=B
  - "[A\\mid B]"
tags:
  - matemáticas
  - álgebra-lineal
  - sistemas-lineales
  - curricular
---

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "start" })
```

# Sistemas de ecuaciones lineales

La ecuación $2x-3y=-6$ admite muchas soluciones: $(0,2)$ y $(3,4)$ son dos de ellas. Si se añade otra ecuación, las incógnitas deben satisfacer **las dos a la vez**. Resolver un sistema consiste en encontrar todos los valores que cumplen simultáneamente sus ecuaciones.[^a8-sistemas]

## Ecuaciones lineales

### Definición y coeficientes

En una ecuación lineal, cada incógnita aparece multiplicada por un coeficiente. Esos productos se suman y el resultado se iguala a un término independiente. Los coeficientes son datos conocidos; las incógnitas son los valores que se buscan.

> [!definicion] Ecuación lineal
> Una ecuación lineal en $x_1,\ldots,x_n$ tiene la forma
>
> $$
> \boxed{a_1x_1+\cdots+a_nx_n=b}.
> $$
>
> Los coeficientes $a_1,\ldots,a_n$ y el término independiente $b$ pertenecen a un cuerpo $K$, aquí $\mathbb R$ o $\mathbb C$. Las soluciones se buscan en ese mismo cuerpo.[^a8-ecuaciones]

#### Ejemplo: reconocer los coeficientes

En la ecuación

$$
3x+5y=-1,
$$

los coeficientes de $x$ e $y$ son $3$ y $5$, y el término independiente es $-1$. Del mismo modo,

$$
-2x_1+x_2-7x_3-x_4=5
$$

tiene cuatro incógnitas, con coeficientes $-2,1,-7,-1$.

Las expresiones

$$
3x^2-y=8
$$

y

$$
x-3y-5xz=0
$$

no son ecuaciones lineales en sus incógnitas: en la primera aparece $x^2$ y en la segunda, el producto $xz$.

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - sistemas-lineales
  - ecuacion-lineal
---
> [!note] Pregunta
> ¿Qué forma tiene una ecuación lineal en $x_1,\ldots,x_n$ y qué representan sus coeficientes?
===
> [!important] Respuesta
> $a_1x_1+\cdots+a_nx_n=b$, con $a_i,b\in K$ conocidos. Cada $a_i$ multiplica a una incógnita; $b$ es el término independiente. No aparecen productos ni potencias superiores de incógnitas.
```

### Ecuación homogénea

> [!definicion] Ecuación lineal homogénea
> Una ecuación lineal es **homogénea** cuando su término independiente es cero:
>
> $$
> a_1x_1+\cdots+a_nx_n=0.
> $$

#### Ejemplo: un coeficiente irracional

La ecuación

$$
\frac14x+\sqrt2\,y-z=0
$$

es lineal y homogénea. Sus coeficientes son $\frac14$, $\sqrt2$ y $-1$; que uno de ellos sea irracional no cambia la linealidad.[^a8-ecuaciones]

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - sistemas-lineales
  - homogeneidad
---
> [!note] Pregunta
> ¿Cuándo es homogénea una ecuación lineal?
===
> [!important] Respuesta
> Cuando su término independiente es cero: $a_1x_1+\cdots+a_nx_n=0$.
```

## Geometría de una ecuación

### Ejemplo: una recta en el plano

Para describir todas las soluciones reales de

$$
2x-3y=-6,
$$

despejamos $y$:

$$
y=2+\frac23x.
$$

Se puede elegir cualquier valor real de $x$; una vez elegido, $y$ queda determinado. Si llamamos $\alpha$ a ese valor libre, las soluciones son

$$
(x,y)=\left(\alpha,2+\frac23\alpha\right),
\qquad \alpha\in\mathbb R.
$$

Separando la parte constante de la que depende de $\alpha$,

$$
\boxed{(x,y)=(0,2)+\alpha\left(1,\frac23\right)},
\qquad \alpha\in\mathbb R.
$$

Esta es la recta que pasa por $(0,2)$ y tiene vector director $\left(1,\frac23\right)$. Para comprobarlo en la ecuación original,

$$
2\alpha-3\left(2+\frac23\alpha\right)=-6.
$$

La igualdad se cumple para cualquier $\alpha$: la expresión describe toda la recta.[^a8-geometria]

### Ejemplo: un plano en el espacio

En la ecuación

$$
x-3y+z=5,
$$

podemos elegir $y$ y $z$ libremente y calcular después $x=5+3y-z$. Si $y=\alpha$ y $z=\beta$,

$$
(x,y,z)=(5+3\alpha-\beta,\alpha,\beta).
$$

Al separar las dos contribuciones,

$$
\boxed{(x,y,z)=(5,0,0)+\alpha(3,1,0)+\beta(-1,0,1)},
\qquad \alpha,\beta\in\mathbb R.
$$

El punto $(5,0,0)$ pertenece al plano. Los vectores $(3,1,0)$ y $(-1,0,1)$ dan dos direcciones que no son múltiplos entre sí. La sustitución confirma que todos los puntos descritos cumplen la ecuación:

$$
(5+3\alpha-\beta)-3\alpha+\beta=5.
$$

> [!recuerda] Cuándo aparecen una recta y un plano
> Sobre $\mathbb R$, una ecuación lineal en dos incógnitas representa una recta si sus coeficientes no son ambos cero. En tres incógnitas representa un plano si al menos un coeficiente es distinto de cero.[^a8-geometria]

Si todos los coeficientes son cero, queda $0=b$: se cumple para cualquier elección de las incógnitas cuando $b=0$, y para ninguna cuando $b\ne0$.

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - sistemas-lineales
  - geometria
---
> [!note] Pregunta
> ¿Qué representan una ecuación lineal real en dos incógnitas y otra en tres, si sus coeficientes no son todos cero?
===
> [!important] Respuesta
> Una recta en $\mathbb R^2$ y un plano en $\mathbb R^3$, respectivamente.
```

## Sistemas, soluciones y equivalencia

### Sistema de ecuaciones lineales

Un [[Matemáticas/Álgebra/Sistemas de ecuaciones lineales|sistema lineal]] exige que las mismas incógnitas cumplan varias ecuaciones. El número de ecuaciones no tiene por qué coincidir con el de incógnitas.

> [!definicion] Sistema lineal
> Un sistema de $m$ ecuaciones lineales en $n$ incógnitas tiene la forma
>
> $$
> \sum_{j=1}^{n}a_{ij}x_j=b_i,
> \qquad \forall i\in\{1,\ldots,m\}.
> $$
>
> El coeficiente $a_{ij}\in K$ multiplica a $x_j$ en la ecuación $i$, y $b_i\in K$ es su término independiente.[^a8-sistemas]

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - sistemas-lineales
  - definición
---
> [!note] Pregunta
> ¿Qué es un sistema de ecuaciones lineales?
===
> [!important] Respuesta
> Un conjunto de ecuaciones lineales que deben cumplirse simultáneamente con los mismos valores de las incógnitas.
```

#### Ejemplo: cinco ecuaciones y cuatro incógnitas

$$
\begin{cases}
2x_1-7x_2+6x_3+x_4=1,\\
x_1+x_2-5x_3-3x_4=0,\\
-3x_1-3x_2-3x_3+x_4=-2,\\
-5x_1+4x_2+9x_3+8x_4=-1,\\
-6x_1+3x_2-4x_3+3x_4=-3.
\end{cases}
$$

Aquí $m=5$ y $n=4$. Por ejemplo, $a_{23}=-5$ es el coeficiente de $x_3$ en la segunda ecuación.

#### Ejemplo: incógnitas que no aparecen en una ecuación

$$
\begin{cases}
2x_1-x_2+2x_3+x_4=0,\\
5x_2-x_3-\sqrt5\,x_4=-6,\\
x_1+3x_2+2x_4=-1.
\end{cases}
$$

Hay tres ecuaciones y cuatro incógnitas. La ausencia de $x_1$ en la segunda ecuación significa que $a_{21}=0$; la ausencia de $x_3$ en la tercera significa que $a_{33}=0$. Esos ceros deben conservarse al escribir la matriz de coeficientes.

#### Ejemplo: dos ecuaciones y dos incógnitas

$$
\begin{cases}
2x-4y=-1,\\
3x+y=0.
\end{cases}
$$

Una solución debe satisfacer ambas ecuaciones con los mismos valores de $x$ e $y$.

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - sistemas-lineales
  - coeficientes
---
> [!note] Pregunta
> En un sistema de $m$ ecuaciones y $n$ incógnitas, ¿qué representa $a_{ij}$? ¿Qué valor tiene si $x_j$ no aparece en la ecuación $i$?
===
> [!important] Respuesta
> Es el coeficiente de $x_j$ en la ecuación $i$. Si esa incógnita no aparece, $a_{ij}=0$.
```

### Solución de un sistema

> [!definicion] Solución
> Una solución de un sistema de $n$ incógnitas sobre $K$ es una tupla ordenada $(s_1,\ldots,s_n)\in K^n$ que, al sustituir $x_j=s_j$, satisface **todas sus ecuaciones**.[^a8-soluciones]

#### Ejemplo: comprobar una tupla

Para la ecuación

$$
5x_1-x_2+2x_3-x_4=8,
$$

las sustituciones dan:

| Tupla | Valor del primer miembro | ¿Es solución? |
|---|---|---|
| $(1,0,1,-1)$ | $5-0+2+1=8$ | Sí |
| $(3,6,-2,-3)$ | $15-6-4+3=8$ | Sí |
| $(3,6,-2,0)$ | $15-6-4=5$ | No |

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - sistemas-lineales
  - soluciones
---
> [!note] Pregunta
> ¿Qué hay que comprobar para afirmar que una tupla es solución de un sistema?
===
> [!important] Respuesta
> Que sus coordenadas, sustituidas en el orden de las incógnitas, satisfacen todas las ecuaciones del sistema.
```

### Conjunto solución y cuerpo de resolución

> [!definicion] Conjunto solución
> El conjunto solución de un sistema $S$, denotado $\operatorname{Sol}(S)$, reúne todas sus soluciones en $K^n$. **Resolver el sistema** significa determinar ese conjunto.[^a8-soluciones]

Encontrar una tupla que funciona no basta si existen otras. En la recta anterior, por ejemplo, hay que conservar el parámetro:

$$
\operatorname{Sol}(2x-3y=-6)
=\left\{(0,2)+\alpha\left(1,\frac23\right):\alpha\in K\right\}.
$$

El cuerpo elegido importa: con $K=\mathbb R$ se obtienen pares reales; con $K=\mathbb C$ también se admiten valores complejos del parámetro. En los ejemplos numéricos siguientes se buscan soluciones reales, salvo que se indique otro cuerpo.

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - sistemas-lineales
  - conjunto-solucion
---
> [!note] Pregunta
> ¿Qué significa determinar el conjunto solución de un sistema sobre $K$?
===
> [!important] Respuesta
> Describir todas las tuplas de $K^n$ que satisfacen el sistema, y ninguna que no lo satisfaga; no basta con encontrar una solución particular.
```

### Sistemas equivalentes

> [!definicion] Equivalencia de sistemas
> Dos sistemas en las mismas incógnitas son equivalentes sobre $K$ si tienen el mismo conjunto solución en $K^n$.[^a8-soluciones]

Por ejemplo, $2x-3y=-6$ e $y=2+\frac23x$ son expresiones equivalentes de la misma ecuación: el despeje permite pasar de una a otra sin perder ni añadir soluciones.

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - sistemas-lineales
  - equivalencia
---
> [!note] Pregunta
> ¿Cuándo son equivalentes dos sistemas sobre el mismo cuerpo y en las mismas incógnitas?
===
> [!important] Respuesta
> Cuando tienen exactamente el mismo conjunto solución.
```

### Sistema homogéneo y solución nula

> [!definicion] Sistema homogéneo
> Un sistema lineal es homogéneo cuando **todos** sus términos independientes son cero.[^a8-soluciones]

#### Ejemplo: comprobar todas las ecuaciones

Consideremos

$$
\begin{cases}
2x+y-4z=0,\\
x+2y+z=0.
\end{cases}
$$

La tupla $(3,-2,1)$ es solución, pues

$$
2(3)-2-4(1)=0,
\qquad 3+2(-2)+1=0.
$$

En cambio, $(1,2,1)$ satisface la primera ecuación, pero en la segunda da $1+4+1=6$. Por ello no es solución del sistema.

La tupla $(0,0,0)$ satisface ambas. Esto ocurre en cualquier sistema homogéneo: sustituir todas las incógnitas por cero hace cero cada primer miembro. Esta es la **solución nula** o **trivial**.

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - sistemas-lineales
  - homogeneidad
---
> [!note] Pregunta
> ¿Qué condición define un sistema homogéneo?
===
> [!important] Respuesta
> Todos sus términos independientes son cero; en forma matricial, $AX=0$.
```

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - sistemas-lineales
  - solucion-nula
---
> [!note] Pregunta
> ¿Por qué un sistema lineal homogéneo siempre tiene solución?
===
> [!important] Respuesta
> La solución nula, con todas las incógnitas iguales a cero, satisface cada ecuación: todos sus términos se anulan.
```

### Interpretación geométrica del conjunto solución

En $\mathbb R^2$, satisfacer varias ecuaciones de rectas significa pertenecer a todas ellas: el conjunto solución es su intersección. Puede ser una recta, un punto o el conjunto vacío.

En $\mathbb R^3$, la intersección de planos puede ser un plano, una recta, un punto o el conjunto vacío. Estas descripciones suponen que cada ecuación tiene algún coeficiente no nulo, de modo que realmente representa una recta o un plano.[^a8-geometria]

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - sistemas-lineales
  - geometria
---
> [!note] Pregunta
> ¿Cómo se interpreta geométricamente la solución de un sistema de ecuaciones de rectas o de planos?
===
> [!important] Respuesta
> Como la intersección de todas las rectas o de todos los planos: los puntos que pertenecen simultáneamente a cada uno.
```

## Forma matricial

### Matriz de coeficientes y columnas del sistema

Al conservar el orden de las ecuaciones y de las incógnitas, los coeficientes forman una [[Matemáticas/Álgebra lineal/Matrices|matriz]].

> [!definicion] Matriz de coeficientes
> La matriz de coeficientes —también llamada **matriz simple**— de un sistema de $m$ ecuaciones y $n$ incógnitas es
>
> $$
> A=(a_{ij})\in M_{m\times n}(K).
> $$
>
> La fila $i$ contiene los coeficientes de la ecuación $i$, incluidos los ceros.[^a8-matriz]

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - sistemas-lineales
  - matriz-coeficientes
---
> [!note] Pregunta
> ¿Cómo se construye la matriz de coeficientes de un sistema de $m$ ecuaciones y $n$ incógnitas?
===
> [!important] Respuesta
> Se coloca en la fila $i$ el coeficiente de cada incógnita de la ecuación $i$, respetando su orden e incluyendo los ceros. Su tamaño es $m\times n$.
```

Las incógnitas se agrupan en la columna

$$
X=\begin{pmatrix}x_1\\\vdots\\x_n\end{pmatrix}\in M_{n\times1}(K),
$$

y los términos independientes, en

$$
B=\begin{pmatrix}b_1\\\vdots\\b_m\end{pmatrix}\in M_{m\times1}(K).
$$

La fila $i$ del producto $AX$ es precisamente $a_{i1}x_1+\cdots+a_{in}x_n$. Por eso todas las ecuaciones del sistema quedan reunidas en

> [!formula] Ecuación matricial del sistema
> $$
> \boxed{A_{m\times n}X_{n\times1}=B_{m\times1}}.
> $$

Los subíndices indican los tamaños. El producto tiene $m$ filas, una por ecuación.

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - sistemas-lineales
  - forma-matricial
---
> [!note] Pregunta
> ¿Qué representan $A$, $X$ y $B$ en $AX=B$ para un sistema de $m$ ecuaciones y $n$ incógnitas?
===
> [!important] Respuesta
> $A$ es la matriz de coeficientes ($m\times n$); $X$, la columna de incógnitas ($n\times1$); $B$, la columna de términos independientes ($m\times1$).
```

### Matriz ampliada

> [!definicion] Matriz ampliada
> La [[Matemáticas/Álgebra lineal/Matriz ampliada|matriz ampliada]] se obtiene añadiendo a $A$ la columna $B$:
>
> $$
> [A\mid B]\in M_{m\times(n+1)}(K).
> $$
>
> La barra separa los coeficientes de los términos independientes.[^a8-matriz]

Por ejemplo,

$$
\begin{cases}
x-y+2z=1,\\
-2x+3y-3z=-1,\\
-3x+4y-4z=1
\end{cases}
$$

se representa mediante

$$
[A\mid B]=
\left[\begin{array}{ccc|c}
1&-1&2&1\\
-2&3&-3&-1\\
-3&4&-4&1
\end{array}\right].
$$

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - sistemas-lineales
  - matriz-ampliada
---
> [!note] Pregunta
> ¿Qué contiene la matriz ampliada $[A\mid B]$ y qué tamaño tiene si el sistema tiene $m$ ecuaciones y $n$ incógnitas?
===
> [!important] Respuesta
> Contiene los coeficientes y, como última columna, los términos independientes. Tiene tamaño $m\times(n+1)$.
```

### Ejemplo: verificar una solución mediante un producto

Queremos comprobar si $(1,0,-1,2)$ resuelve el sistema

$$
\begin{cases}
x_1+2x_3-x_4=-3,\\
-x_1+3x_2-x_3+x_4=2,\\
2x_1+3x_2+6x_3=-4.
\end{cases}
$$

Multiplicamos la matriz de coeficientes por la columna propuesta:

$$
\begin{pmatrix}
1&0&2&-1\\
-1&3&-1&1\\
2&3&6&0
\end{pmatrix}
\begin{pmatrix}1\\0\\-1\\2\end{pmatrix}
=
\begin{pmatrix}1-2-2\\-1+1+2\\2-6\end{pmatrix}
=
\begin{pmatrix}-3\\2\\-4\end{pmatrix}.
$$

El resultado coincide con $B$, por lo que la tupla satisface las tres ecuaciones.[^a8-matriz]

### Identificación de vectores con columnas

Al escribir $u=(u_1,\ldots,u_n)\in K^n$, se enumeran sus coordenadas. Para calcular $Au$, se representa ese vector mediante una columna:

$$
u=(u_1,\ldots,u_n)
\quad\longleftrightarrow\quad
\begin{pmatrix}u_1\\\vdots\\u_n\end{pmatrix}.
$$

Con esta convención,

$$
\operatorname{Sol}(AX=B)=\{u\in K^n:Au=B\}.
$$

En un producto escrito explícitamente se usará la columna, o bien $(u_1,\ldots,u_n)^T$. Una matriz fila $1\times n$ es otro objeto y no puede sustituir a la columna $n\times1$ en ese producto.[^a10-columna]

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - sistemas-lineales
  - vectores-columna
---
> [!note] Pregunta
> Si $A$ tiene $n$ columnas, ¿cómo se representa un vector $u\in K^n$ al calcular $Au$?
===
> [!important] Respuesta
> Como una matriz columna de tamaño $n\times1$, con las coordenadas de $u$ en el orden correspondiente a las columnas de $A$.
```

## Operaciones equivalentes y algoritmos

### Operaciones que conservan las soluciones

Las [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/02 Eliminación y matrices elementales|operaciones elementales]] permiten simplificar las ecuaciones sin cambiar sus soluciones:

| Operación | Cómo se deshace |
|---|---|
| Intercambiar dos ecuaciones | Intercambiarlas otra vez |
| Multiplicar una ecuación por $\lambda\ne0$ | Multiplicarla por $1/\lambda$ |
| Sumar a una ecuación un múltiplo de otra | Restar ese mismo múltiplo de la otra ecuación, que permanece intacta |

La reversibilidad garantiza la equivalencia: toda solución del sistema inicial satisface el transformado, y la operación inversa permite volver al inicial.[^a8-gauss]

> [!advertencia] La operación afecta a toda la fila
> Al operar en $[A\mid B]$, también se modifica el término independiente. Cambiar sólo los coeficientes produciría, en general, un sistema distinto.

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - sistemas-lineales
  - operaciones-elementales
---
> [!note] Pregunta
> ¿Por qué las operaciones elementales sobre las filas completas de una matriz ampliada conservan las soluciones?
===
> [!important] Respuesta
> Porque son operaciones reversibles sobre las ecuaciones: intercambio, escalado por un número no nulo y suma de un múltiplo de otra ecuación. Se aplican también al término independiente.
```

### Eliminación de Gauss y de Gauss–Jordan

La [[Matemáticas/Álgebra lineal/Eliminación de Gauss|eliminación de Gauss]] conduce a una forma escalonada: cada pivote está a la derecha del anterior y tiene ceros debajo. Si el sistema es compatible, se resuelve desde la última ecuación no nula hacia arriba, por **sustitución regresiva**.

La [[Matemáticas/Álgebra lineal/Eliminación de Gauss-Jordan|eliminación de Gauss–Jordan]] continúa hasta la forma escalonada reducida: cada pivote vale $1$ y es el único elemento no nulo de su columna. Así se leen directamente las incógnitas básicas en función de las libres.[^a8-gauss]

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - sistemas-lineales
  - gauss
---
> [!note] Pregunta
> ¿Cómo se termina de resolver un sistema compatible después de la eliminación de Gauss?
===
> [!important] Respuesta
> Por sustitución regresiva: se empieza en la última ecuación no nula y se sustituyen los valores obtenidos en las ecuaciones superiores, conservando como parámetros las variables libres.
```

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - sistemas-lineales
  - gauss-jordan
---
> [!note] Pregunta
> ¿Qué reducción adicional realiza Gauss–Jordan respecto de Gauss?
===
> [!important] Respuesta
> Hace que cada pivote valga $1$ y anula también las entradas que tiene encima; obtiene la forma escalonada reducida.
```

### Filas imposibles: condiciones de compatibilidad

Una fila reducida

$$
\left[\begin{array}{ccc|c}0&\cdots&0&c\end{array}\right],
\qquad c\ne0,
$$

expresa la igualdad imposible $0=c$. ==Basta una fila así para que el sistema no tenga solución.== Si también el término independiente es cero, la fila expresa $0=0$ y no añade ninguna restricción.[^a9]

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - sistemas-lineales
  - compatibilidad
---
> [!note] Pregunta
> ¿Qué diferencia hay entre las filas reducidas $[0\ \cdots\ 0\mid c]$, con $c\ne0$, y $[0\ \cdots\ 0\mid0]$?
===
> [!important] Respuesta
> La primera expresa una contradicción y hace incompatible el sistema. La segunda expresa $0=0$ y no impone ninguna restricción.
```

### Variables básicas

> [!definicion] Variable básica
> Una incógnita es básica si su columna de coeficientes contiene un pivote en la forma escalonada. En un sistema compatible, se calcula a partir de las variables libres y de los términos independientes.[^a9]

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - sistemas-lineales
  - variables-basicas
---
> [!note] Pregunta
> ¿Qué son las variables básicas de un sistema reducido?
===
> [!important] Respuesta
> Las incógnitas correspondientes a columnas de coeficientes con pivote; sus valores se obtienen a partir de los términos independientes y de las variables libres.
```

### Variables libres

> [!definicion] Variable libre
> Una incógnita es libre si su columna de coeficientes no contiene un pivote en la forma escalonada. En un sistema compatible puede elegirse libremente en $K$.

> [!recuerda] La última columna no es una incógnita
> Los parámetros se cuentan entre las columnas de $A$. La columna $B$ contiene los términos independientes.

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - sistemas-lineales
  - variables-libres
---
> [!note] Pregunta
> En un sistema compatible reducido, ¿cómo se identifican las variables libres?
===
> [!important] Respuesta
> Son las incógnitas cuyas columnas de coeficientes no tienen pivote. Se asigna un parámetro independiente a cada una.
```

## Ejemplo 1: solución única, por Gauss y Gauss–Jordan

Resolvamos el sistema[^a8-ej1]

$$
\begin{cases}
x_2+x_3-x_4=-7,\\
4x_1+x_2+2x_3-x_4=-7,\\
3x_1+x_3+x_4=1,\\
-5x_1+2x_2+2x_3-x_4=-5.
\end{cases}
$$

### Obtener un primer pivote igual a uno

Su matriz ampliada es

$$
M_0=\left[\begin{array}{rrrr|r}
0&1&1&-1&-7\\
4&1&2&-1&-7\\
3&0&1&1&1\\
-5&2&2&-1&-5
\end{array}\right].
$$

La primera entrada es cero. Intercambiamos $R_1$ y $R_2$ y hacemos $R_1\leftarrow R_1-R_3$: como $4-3=1$, obtenemos un pivote que permite eliminar sin fracciones.

$$
\left[\begin{array}{rrrr|r}
1&1&1&-2&-8\\
0&1&1&-1&-7\\
3&0&1&1&1\\
-5&2&2&-1&-5
\end{array}\right].
$$

### Anular las entradas inferiores

Aplicamos $R_3\leftarrow R_3-3R_1$ y $R_4\leftarrow R_4+5R_1$ para anular las entradas de la primera columna:

$$
\left[\begin{array}{rrrr|r}
1&1&1&-2&-8\\
0&1&1&-1&-7\\
0&-3&-2&7&25\\
0&7&7&-11&-45
\end{array}\right].
$$

En la segunda columna ya hay un pivote igual a $1$. Hacemos

$$
R_3\leftarrow R_3+3R_2,
\qquad R_4\leftarrow R_4-7R_2.
$$

La última fila resulta $(0,0,0,-4\mid4)$. Al multiplicarla por $-\frac14$, queda la forma escalonada

$$
M_E=\left[\begin{array}{rrrr|r}
1&1&1&-2&-8\\
0&1&1&-1&-7\\
0&0&1&4&4\\
0&0&0&1&-1
\end{array}\right].
$$

### Resolver por sustitución regresiva

La última ecuación determina $x_4$. Sustituyendo sucesivamente hacia arriba,

$$
\begin{aligned}
x_4&=-1,\\
x_3&=4-4x_4=8,\\
x_2&=-7-x_3+x_4=-16,\\
x_1&=-8-x_2-x_3+2x_4=-2.
\end{aligned}
$$

> [!ejemplo] Solución del sistema
> $$
> \boxed{(x_1,x_2,x_3,x_4)=(-2,-16,8,-1)}.
> $$
>
> Cada columna de coeficientes tiene un pivote; no hay variables libres.

### Continuar con Gauss–Jordan

También podemos partir de $M_E$ y anular las entradas situadas encima de cada pivote. Primero eliminamos las de la cuarta columna:

$$
R_3\leftarrow R_3-4R_4,
\quad R_2\leftarrow R_2+R_4,
\quad R_1\leftarrow R_1+2R_4.
$$

Resulta

$$
\left[\begin{array}{rrrr|r}
1&1&1&0&-10\\
0&1&1&0&-8\\
0&0&1&0&8\\
0&0&0&1&-1
\end{array}\right].
$$

Después, $R_2\leftarrow R_2-R_3$ y $R_1\leftarrow R_1-R_3$ anulan las entradas superiores de la tercera columna:

$$
\left[\begin{array}{rrrr|r}
1&1&0&0&-18\\
0&1&0&0&-16\\
0&0&1&0&8\\
0&0&0&1&-1
\end{array}\right].
$$

Por último, $R_1\leftarrow R_1-R_2$ da

$$
\left[\begin{array}{rrrr|r}
1&0&0&0&-2\\
0&1&0&0&-16\\
0&0&1&0&8\\
0&0&0&1&-1
\end{array}\right].
$$

Ahora la solución se lee directamente. Ambos métodos han conservado el mismo conjunto solución.

### Comprobar en el sistema original

Con $(-2,-16,8,-1)$, los cuatro primeros miembros valen

$$
\begin{aligned}
-16+8-(-1)&=-7,\\
4(-2)-16+2(8)-(-1)&=-7,\\
3(-2)+8-1&=1,\\
-5(-2)+2(-16)+2(8)-(-1)&=-5.
\end{aligned}
$$

Coinciden con los cuatro términos independientes.

## Ejemplo 2: dos variables libres

Resolvamos ahora[^a8-ej2]

$$
\begin{cases}
4x_1+9x_2-2x_3-5x_4-12x_5=-9,\\
5x_1+11x_2-3x_3-5x_4-10x_5=-10,\\
3x_1+7x_2-x_3-3x_4-8x_5=-6,\\
2x_1+3x_2-4x_3-6x_4-9x_5=-8.
\end{cases}
$$

### Reducir la primera columna

La ampliada inicial es

$$
M_0=\left[\begin{array}{rrrrr|r}
4&9&-2&-5&-12&-9\\
5&11&-3&-5&-10&-10\\
3&7&-1&-3&-8&-6\\
2&3&-4&-6&-9&-8
\end{array}\right].
$$

Con $R_1\leftarrow R_1-R_3$ obtenemos la primera fila $(1,2,-1,-2,-4\mid-3)$. Usamos ese pivote para hacer

$$
R_2\leftarrow R_2-5R_1,
\quad R_3\leftarrow R_3-3R_1,
\quad R_4\leftarrow R_4-2R_1.
$$

Queda

$$
\left[\begin{array}{rrrrr|r}
1&2&-1&-2&-4&-3\\
0&1&2&5&10&5\\
0&1&2&3&4&3\\
0&-1&-2&-2&-1&-2
\end{array}\right].
$$

### Obtener la forma escalonada

Las operaciones $R_3\leftarrow R_3-R_2$ y $R_4\leftarrow R_4+R_2$ producen las filas

$$
R_3=(0,0,0,-2,-6\mid-2),
\qquad R_4=(0,0,0,3,9\mid3).
$$

Multiplicamos $R_3$ por $-\frac12$ y $R_4$ por $\frac13$. Las dos filas pasan a ser iguales; al hacer $R_4\leftarrow R_4-R_3$, la última se anula:

$$
M_E=\left[\begin{array}{rrrrr|r}
1&2&-1&-2&-4&-3\\
0&1&2&5&10&5\\
0&0&0&1&3&1\\
0&0&0&0&0&0
\end{array}\right].
$$

Los pivotes están en las columnas **1, 2 y 4**. La tercera columna no tiene pivote: el siguiente aparece en la cuarta. Por ello, las variables libres son $x_3$ y $x_5$. La fila nula representa $0=0$ y no impide que existan soluciones.

### Obtener la forma reducida

Hacemos $R_2\leftarrow R_2-5R_3$ y $R_1\leftarrow R_1+2R_3$:

$$
\left[\begin{array}{rrrrr|r}
1&2&-1&0&2&-1\\
0&1&2&0&-5&0\\
0&0&0&1&3&1\\
0&0&0&0&0&0
\end{array}\right].
$$

Con $R_1\leftarrow R_1-2R_2$ llegamos a

$$
M_R=\left[\begin{array}{rrrrr|r}
1&0&-5&0&12&-1\\
0&1&2&0&-5&0\\
0&0&0&1&3&1\\
0&0&0&0&0&0
\end{array}\right].
$$

### Expresar todas las soluciones

Las ecuaciones reducidas son

$$
\begin{cases}
x_1=-1+5x_3-12x_5,\\
x_2=-2x_3+5x_5,\\
x_4=1-3x_5.
\end{cases}
$$

Elegimos $x_3=a$ y $x_5=b$, con $a,b\in\mathbb R$ independientes. Al colocar las cinco coordenadas en su orden,

$$
(x_1,x_2,x_3,x_4,x_5)=(-1+5a-12b,-2a+5b,a,1-3b,b).
$$

Separando la parte constante y los coeficientes de cada parámetro,

> [!ejemplo] Solución del sistema
> $$
> \boxed{X=u+a v_1+b v_2},\qquad a,b\in\mathbb R,
> $$
>
> donde, representados por sus coordenadas,
>
> $$
> u=(-1,0,0,1,0),
> $$
>
> $$
> v_1=(5,-2,1,0,0),\qquad v_2=(-12,5,0,-3,1).
> $$

Con $a=b=0$ se obtiene la solución $u$. Para comprobar la expresión completa usando la matriz original $A$, se obtiene

$$
Au=\begin{pmatrix}-9\\-10\\-6\\-8\end{pmatrix}=B,
\qquad Av_1=0,
\qquad Av_2=0.
$$

Por la distributividad del producto matricial,

$$
A(u+a v_1+b v_2)=Au+aAv_1+bAv_2=B.
$$

Todas las elecciones de $a,b$ dan soluciones. Además, ninguna queda fuera de la parametrización: cualquier solución tiene ciertos valores de $x_3$ y $x_5$, y las otras tres coordenadas quedan determinadas por las ecuaciones reducidas.

## Homogéneo asociado y solución general

### Sistema homogéneo asociado

El ejemplo anterior separa una solución concreta, $u$, de dos direcciones que no modifican el segundo miembro. Estas direcciones satisfacen el sistema con términos independientes nulos.

> [!definicion] Sistema homogéneo asociado
> Al sistema $AX=B$ le corresponde el sistema homogéneo asociado
>
> $$
> AX=0.
> $$
>
> Se conserva la matriz $A$ y se sustituyen por cero todos los términos independientes.[^a10-general]

El homogéneo asociado siempre tiene la solución nula, incluso si el sistema original es incompatible.

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - sistemas-lineales
  - homogeneo-asociado
---
> [!note] Pregunta
> ¿Cómo se obtiene el sistema homogéneo asociado a $AX=B$?
===
> [!important] Respuesta
> Se conserva $A$ y se sustituyen por cero todos los términos independientes: $AX=0$.
```

### Núcleo de una matriz

> [!definicion] Núcleo
> El [[Matemáticas/Álgebra lineal/Espacios vectoriales/07 Núcleo, imagen, rango y nulidad|núcleo]] de $A\in M_{m\times n}(K)$ es el conjunto de soluciones del sistema homogéneo:
>
> $$
> \ker(A)=\{v\in K^n:Av=0\}.
> $$

En el ejemplo de cinco incógnitas, $v_1$ y $v_2$ pertenecen al núcleo. Sus combinaciones $a v_1+b v_2$ también pertenecen a él, porque $A(a v_1+b v_2)=aAv_1+bAv_2=0$.[^general]

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - sistemas-lineales
  - nucleo
---
> [!note] Pregunta
> ¿Qué vectores forman el núcleo de una matriz $A$?
===
> [!important] Respuesta
> Todos los vectores $v$ que satisfacen $Av=0$: las soluciones del sistema homogéneo asociado a $A$.
```

### Solución particular

> [!definicion] Solución particular
> Una solución particular de $AX=B$ es un vector concreto $u$ que cumple $Au=B$.[^a10-general]

En el ejemplo anterior, $u=(-1,0,0,1,0)$ se obtiene fijando ambos parámetros en cero. Elegir otros valores da otra solución particular, pero no cambia el conjunto completo de soluciones.

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - sistemas-lineales
  - solucion-particular
---
> [!note] Pregunta
> ¿Qué es una solución particular de $AX=B$?
===
> [!important] Respuesta
> Un vector concreto $u$ que satisface $Au=B$; es un elemento del conjunto solución.
```

### Solución general como particular más homogénea

#### Propiedad

> [!teorema] Descripción de todas las soluciones
> Sea $A\in M_{m\times n}(K)$. Si $u$ es una solución particular de $AX=B$, entonces
>
> $$
> \boxed{\operatorname{Sol}(AX=B)=u+\ker(A)}.
> $$
>
> Esto significa que todas las soluciones, y sólo ellas, tienen la forma $u+v$ con $Av=0$.[^a10-general][^general]

#### Demostración

> [!demostracion] Demostración
> **Primero, cualquier vector de esa forma es solución.** Sea $v\in\ker(A)$. Las hipótesis dan $Au=B$ y $Av=0$. Por la distributividad,
>
> $$
> A(u+v)=Au+Av=B+0=B.
> $$
>
> Por tanto, sumar a $u$ una solución del homogéneo produce otra solución del sistema original.
>
> **Después, toda solución se obtiene así.** Sea $X$ cualquier solución de $AX=B$. Su diferencia con $u$ satisface
>
> $$
> A(X-u)=AX-Au=B-B=0.
> $$
>
> Luego $v=X-u$ pertenece a $\ker(A)$, y $X=u+v$.
>
> Las dos implicaciones prueban la igualdad de conjuntos:
>
> $$
> \boxed{\operatorname{Sol}(AX=B)=u+\ker(A)}.\qquad\blacksquare
> $$

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - sistemas-lineales
  - solucion-general
---
> [!note] Pregunta
> Conocida una solución particular $u$ de $AX=B$, ¿cómo se obtienen todas las soluciones?
===
> [!important] Respuesta
> Sumando a $u$ cada solución del homogéneo: $\operatorname{Sol}(AX=B)=u+\ker(A)$. Si $X$ es cualquier solución, $A(X-u)=B-B=0$.
```

### Base del núcleo y parámetros

Si el núcleo se describe mediante direcciones $v_1,\ldots,v_p$ que generan todas sus soluciones y son linealmente independientes —ninguna se obtiene combinando las otras—, esas direcciones forman una **base del núcleo**. La solución general queda entonces

$$
X=u+\alpha_1v_1+\cdots+\alpha_pv_p,
\qquad \alpha_1,\ldots,\alpha_p\in K.
$$

Hay un parámetro independiente por dirección de la base. En un sistema compatible con $n$ incógnitas y rango $r$, su número es $n-r$, como se justifica en [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/03 Compatibilidad, rango e inversa|Compatibilidad, rango e inversa]].[^a9][^rango-nulidad]

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - sistemas-lineales
  - base-del-nucleo
---
> [!note] Pregunta
> ¿Qué debe cumplir una familia de vectores para ser una base del núcleo de $A$?
===
> [!important] Respuesta
> Sus combinaciones lineales deben producir todas las soluciones de $Av=0$, y los vectores deben ser linealmente independientes. Cada vector de la base aporta un parámetro independiente.
```

> [!advertencia] Condiciones de validez: existencia de una solución particular
> La expresión $u+\ker(A)$ requiere que el sistema sea compatible. Si no existe ninguna solución $u$, su conjunto solución es vacío; el homogéneo asociado sigue teniendo la solución nula.

### Ejemplo: del homogéneo al sistema con segundo miembro

Consideremos[^a10-ejemplo]

$$
H:\quad
\begin{cases}
x_1-2x_2-x_4=0,\\
-3x_1+4x_2-2x_3-x_4=0,\\
-x_1-2x_3-3x_4=0.
\end{cases}
$$

La matriz de coeficientes y su forma reducida son

$$
A=\begin{pmatrix}
1&-2&0&-1\\
-3&4&-2&-1\\
-1&0&-2&-3
\end{pmatrix},
$$

$$
R=\begin{pmatrix}
1&0&2&3\\
0&1&1&2\\
0&0&0&0
\end{pmatrix}.
$$

Para obtener $R$, se hacen $R_2\leftarrow R_2+3R_1$ y $R_3\leftarrow R_3+R_1$; las dos últimas filas quedan iguales. Después se aplican $R_3\leftarrow R_3-R_2$, $R_2\leftarrow-\frac12R_2$ y $R_1\leftarrow R_1+2R_2$.

Las ecuaciones no nulas son

$$
x_1=-2x_3-3x_4,
\qquad x_2=-x_3-2x_4.
$$

Tomando $x_3=\alpha$ y $x_4=\beta$,

$$
\operatorname{Sol}(H)=
\{\alpha(-2,-1,1,0)+\beta(-3,-2,0,1):\alpha,\beta\in\mathbb R\}.
$$

Las dos direcciones son independientes: en la tercera coordenada de su combinación aparece $\alpha$, y en la cuarta, $\beta$. Para que la combinación sea nula deben anularse ambos parámetros.

Ahora conservamos $A$ y tomamos

$$
B=\begin{pmatrix}1\\3\\5\end{pmatrix}.
$$

El vector $u=(-7,-4,1,0)$ es una solución particular, porque

$$
Au=\begin{pmatrix}-7+8\\21-16-2\\7-2\end{pmatrix}
=\begin{pmatrix}1\\3\\5\end{pmatrix}.
$$

Por la propiedad demostrada, todas las soluciones de $AX=B$ son

$$
\boxed{X=(-7,-4,1,0)+\alpha(-2,-1,1,0)+\beta(-3,-2,0,1)},
\qquad \alpha,\beta\in\mathbb R.
$$

El rango de $A$ es $2$ y hay cuatro incógnitas. Cualquier segundo miembro compatible dará dos parámetros libres; si resulta incompatible, no habrá soluciones.

## Práctica graduada

### Ejercicio 1 — Justificar la solución general

Si $Au=B$ y $Av=0$, demuestra que $u+v$ es solución de $AX=B$ y que toda solución $X$ se escribe $u+(X-u)$, con $X-u$ en el núcleo.

> [!resolucion]- Resolución
> La distributividad da $A(u+v)=Au+Av=B+0=B$.
>
> Recíprocamente, si $AX=B$, entonces $A(X-u)=AX-Au=B-B=0$. Así, $X-u\in\ker(A)$ y $X=u+(X-u)$. Se han probado ambas inclusiones del conjunto solución.

### Ejercicio 2 — Elegir otra solución

En el último ejemplo, toma $u=(-7,-4,1,0)$ y las dos direcciones del homogéneo. Escribe una solución distinta de $u$ y compruébala.

> [!resolucion]- Resolución
> Con $\alpha=1$ y $\beta=0$ resulta $X=(-9,-5,2,0)$. La sustitución da
>
> $$
> \begin{aligned}
> -9-2(-5)&=1,\\
> -3(-9)+4(-5)-2(2)&=3,\\
> -(-9)-2(2)&=5.
> \end{aligned}
> $$
>
> Los tres resultados coinciden con $B$, como garantiza la expresión particular más homogénea.

## 📚 Fuentes

### Material base aportado

[^a8-ecuaciones]: FCUL, *Álgebra Linear e Geometria Analítica*, aula 8, 02/10/2026, diapositivas 2–6. Archivo `ALGA-2026-27-AulasTeo-slides-Aula8-Sistemas-impressao.pdf`. Ecuación lineal, coeficientes, homogeneidad y ejemplos.
[^a8-geometria]: FCUL, aula 8, diapositivas 2–6 y 13–15. Mismo archivo. Rectas, planos y geometría de los conjuntos solución.
[^a8-sistemas]: FCUL, aula 8, diapositivas 7–10. Mismo archivo. Definición y ejemplos de sistemas.
[^a8-soluciones]: FCUL, aula 8, diapositivas 9–15. Mismo archivo. Soluciones, cuerpo de resolución y equivalencia.
[^a8-matriz]: FCUL, aula 8, diapositivas 16–20. Mismo archivo. Forma matricial, ampliada y comprobación de una solución.
[^a8-gauss]: FCUL, aula 8, diapositivas 21–23. Mismo archivo. Operaciones equivalentes y métodos de eliminación.
[^a8-ej1]: FCUL, aula 8, diapositivas 24–27. Mismo archivo. Sistema de cuatro incógnitas, reducciones de Gauss y Gauss–Jordan.
[^a8-ej2]: FCUL, aula 8, diapositivas 28–31. Mismo archivo. Sistema de cinco incógnitas y dos parámetros.
[^a9]: FCUL, aula 9, 07/10/2026, diapositivas 2–11. Archivo `ALGA-2026-27-AulasTeo-slides-Aula9-Sistemas-impressao.pdf`. Compatibilidad, variables libres y número de parámetros.
[^a10-general]: FCUL, aula 10, 09/10/2026, diapositivas 2–4. Archivo `ALGA-2026-27-AulasTeo-slides-Aula10-Sistemas-impressao.pdf`. Homogéneo asociado y solución general.
[^a10-ejemplo]: FCUL, aula 10, diapositivas 5–7. Mismo archivo. Reducción del homogéneo y solución particular $(-7,-4,1,0)$.
[^a10-columna]: FCUL, aula 10, diapositiva 11. Mismo archivo. Identificación de vectores con columnas.

### Contraste académico

[^general]: Dan Margalit y Joseph Rabinoff, [*Interactive Linear Algebra*, §2.4, “Solution Sets”](https://textbooks.math.gatech.edu/ila/solution-sets.html), Georgia Institute of Technology. La subsección 2.4.2 demuestra las dos inclusiones de «particular más homogénea». La prueba se adapta al castellano y a la notación $AX=B$; la sección también respalda la interpretación de las direcciones paramétricas.

[^rango-nulidad]: Dan Margalit y Joseph Rabinoff, [*Interactive Linear Algebra*, §2.9, “The Rank Theorem”](https://textbooks.math.gatech.edu/ila/rank-thm.html), Georgia Institute of Technology. Relación entre rango, número de variables libres y dimensión del núcleo.

## 🧑‍🏫 Prompt para tutor conversacional

Trabaja con un estudiante que conoce las operaciones matriciales pero está aprendiendo a resolver sistemas. Usa exclusivamente los ejemplos y ejercicios de esta nota, sin generar otros. Pide primero distinguir ecuación, sistema, solución y conjunto solución; después, comprobar una tupla en todas las ecuaciones.

En los ejemplos de eliminación, pide justificar una operación concreta y explicar por qué afecta también al segundo miembro. Comprueba que distingue una fila nula de una contradicción y que identifica $x_3,x_5$ como libres en el sistema de cinco incógnitas. Antes de usar la expresión $u+\ker(A)$, pide definir cada objeto y reconstruir las dos implicaciones de la demostración. Da pistas graduales, sin anticipar toda la resolución. La respuesta final debe verificarse en el sistema original.

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "end" })
```
