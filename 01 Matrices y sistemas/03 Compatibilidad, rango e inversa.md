---
title: Compatibilidad, rango e inversa
aliases:
  - Rango de una matriz e invertibilidad
asignatura: Álgebra Lineal y Geometría Analítica
rama:
  - Álgebra lineal
  - Sistemas de ecuaciones lineales
tipo:
  - teoría
  - definición
  - procedimiento
nivel: universitario-introductorio
estado: borrador
capa: curricular
requiere:
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/01 Matrices y operaciones|Matrices y operaciones]]"
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/02 Eliminación y matrices elementales|Eliminación y matrices elementales]]"
desbloquea:
  - "[[Matemáticas/Álgebra lineal/Determinantes|Determinantes]]"
relacionado:
  - "[[Matemáticas/Álgebra lineal/Matrices|Matrices]]"
  - "[[Matemáticas/Álgebra lineal/Espacios vectoriales/07 Núcleo, imagen, rango y nulidad|Rango, núcleo e imagen]]"
fsrs_goal: Clasifica sistemas por sus rangos, calcula la inversa por Gauss–Jordan, comprueba inversas bilaterales de matrices elementales, escalares, transpuestas y conjugadas transpuestas, resuelve AX=B con una matriz invertible y justifica por qué AB invertible fuerza la invertibilidad de A y B.
simbolos:
  - \operatorname{rg}(A)
  - "[A\\mid\\mathbf b]"
  - A^{-1}
  - I_n
tags:
  - matemáticas
  - álgebra-lineal
  - sistemas-lineales
  - rango
  - matriz-inversa
  - curricular
---

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "start" })
```

# Compatibilidad, rango e inversa

Una fila $0=1$ basta para concluir que un sistema no tiene solución. Si no aparecen contradicciones, los pivotes indican qué incógnitas se pueden calcular y cuáles quedan libres. Contarlos permite clasificar el sistema sin necesidad de escribir primero todas sus soluciones.[^a9]

En lo que sigue, $K$ es $\mathbb R$ o $\mathbb C$, y los vectores que aparecen en productos matriciales se representan mediante columnas.

## Rango y pivotes

### Rango de una matriz

> [!definicion] Rango
> El [[Matemáticas/Álgebra lineal/Rango de una matriz|rango]] de una matriz $A$, denotado $\operatorname{rg}(A)$, es el número de pivotes de cualquiera de sus formas escalonadas por filas.[^a6-rango]

==Las operaciones elementales no cambian ese número.== Para calcularlo, se reduce la matriz y se cuentan las filas no nulas de la forma escalonada: cada una contiene un pivote.

#### Ejemplo: contar pivotes

La matriz

$$
R=\begin{pmatrix}1&1\\0&0\end{pmatrix}
$$

ya está escalonada. Tiene un solo pivote, en la primera columna, por lo que $\operatorname{rg}(R)=1$.

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - rango
---
> [!note] Pregunta
> ¿Cómo se calcula el rango de una matriz mediante eliminación por filas?
===
> [!important] Respuesta
> Se obtiene una forma escalonada y se cuentan sus pivotes, uno por fila no nula. Las operaciones elementales conservan el rango.
```

### Cotas del rango

#### Propiedad

> [!teorema] El rango está limitado por el tamaño
> Para $A\in M_{m\times n}(K)$,
>
> $$
> \boxed{0\leq\operatorname{rg}(A)\leq\min(m,n)}.
> $$

#### Demostración

> [!demostracion] Demostración
> El rango cuenta pivotes, por lo que no puede ser negativo. En una forma escalonada hay como máximo un pivote por fila y uno por columna. Por tanto, su número no supera ni las $m$ filas ni las $n$ columnas. Así,
>
> $$
> 0\leq\operatorname{rg}(A)\leq\min(m,n).\qquad\blacksquare
> $$
> [^a9]

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - rango
---
> [!note] Pregunta
> ¿Cuál es el mayor rango posible de una matriz $m\times n$?
===
> [!important] Respuesta
> $\min(m,n)$: no puede haber más de un pivote en una misma fila ni en una misma columna.
```

> [!opcional]- Relación con los espacios generados
> El rango también es la dimensión del espacio generado por las columnas y del generado por las filas. El espacio generado reúne todas sus combinaciones lineales; su dimensión es el número de vectores de una base, es decir, de una familia independiente que genera ese espacio. Esta interpretación se desarrolla en [[Matemáticas/Álgebra lineal/Espacios vectoriales/07 Núcleo, imagen, rango y nulidad|núcleo, imagen, rango y nulidad]].[^rango-espacios]

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

## Criterio de compatibilidad

### Sistema compatible

> [!definicion] Compatibilidad
> Un [[Matemáticas/Álgebra/Sistemas de ecuaciones lineales|sistema lineal]] es **compatible** si tiene al menos una solución.[^a9]

Por ejemplo, $x+y=2$ es compatible: $(2,0)$ satisface la ecuación. Para decidir la compatibilidad de un sistema completo, se compara el rango de sus coeficientes con el de su matriz ampliada.

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - compatibilidad
---
> [!note] Pregunta
> ¿Qué significa que un sistema sea compatible?
===
> [!important] Respuesta
> Que existe al menos una tupla que satisface todas sus ecuaciones.
```

### Teorema de Rouché–Capelli

Sean $A\in M_{m\times n}(K)$ y $\mathbf b\in K^m$. Añadir una columna a $A$ puede aumentar su rango en uno o dejarlo igual. En particular,

$$
\operatorname{rg}(A)\leq\operatorname{rg}([A\mid\mathbf b])\leq\operatorname{rg}(A)+1.
$$

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - rango
---
> [!note] Pregunta
> ¿Cuánto puede aumentar el rango al añadir una columna a una matriz?
===
> [!important] Respuesta
> Como máximo, en uno: la nueva columna aporta a lo sumo un pivote. El rango nunca disminuye.
```

#### Propiedad

> [!teorema] Criterio de Rouché–Capelli
> El sistema $A\mathbf x=\mathbf b$ es compatible si, y sólo si,
>
> $$
> \boxed{\operatorname{rg}(A)=\operatorname{rg}([A\mid\mathbf b])}.
> $$
> [^a9]

#### Demostración

> [!demostracion] Demostración
> Reducimos la matriz ampliada mediante operaciones elementales. Estas conservan las soluciones y los rangos.
>
> **Si los rangos son distintos**, la última columna añade un pivote que no está en la parte de coeficientes. Aparece entonces una fila
>
> $$
> [0\ \cdots\ 0\mid c],\qquad c\ne0.
> $$
>
> Su ecuación es $0=c$, imposible para cualquier valor de las incógnitas. El sistema es incompatible.
>
> **Si los rangos son iguales**, no hay pivote en la última columna y no aparece ninguna ecuación imposible. Se pueden elegir las variables sin pivote y resolver las restantes por sustitución desde la última fila no nula. Si no hay variables libres, la sustitución determina directamente todas las incógnitas. En ambos casos se obtiene al menos una solución.
>
> Por tanto, la igualdad de rangos equivale a la compatibilidad. $\blacksquare$[^a9]

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - rango
  - compatibilidad
---
> [!note] Pregunta
> ¿Cuál es el criterio de Rouché–Capelli para que $A\mathbf x=\mathbf b$ tenga solución?
===
> [!important] Respuesta
> Que $\operatorname{rg}(A)=\operatorname{rg}([A\mid\mathbf b])$.
```

## Clasificación de los sistemas

Una vez comprobada la compatibilidad, se cuentan las columnas de coeficientes sin pivote. Si hay $n$ incógnitas y $r$ pivotes, quedan $n-r$ variables libres.[^a9]

### Sistema compatible determinado

> [!definicion] Compatible determinado
> Un sistema es compatible determinado cuando tiene **una única solución**. El criterio es
>
> $$
> \boxed{\operatorname{rg}(A)=\operatorname{rg}([A\mid\mathbf b])=n}.
> $$

Cada incógnita tiene un pivote. Por ejemplo, si la ampliada reducida es $[I_n\mid\mathbf c]$, la única solución es $\mathbf x=\mathbf c$.

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - compatibilidad
---
> [!note] Pregunta
> ¿Cuándo es compatible determinado un sistema de $n$ incógnitas?
===
> [!important] Respuesta
> Cuando tiene una única solución, lo que equivale a $\operatorname{rg}(A)=\operatorname{rg}([A\mid\mathbf b])=n$.
```

### Sistema compatible indeterminado

> [!definicion] Compatible indeterminado
> Un sistema es compatible indeterminado cuando tiene **más de una solución**. Sobre $\mathbb R$ o $\mathbb C$, el criterio es
>
> $$
> \boxed{\operatorname{rg}(A)=\operatorname{rg}([A\mid\mathbf b])<n}.
> $$

Al menos una variable es libre. Puede tomar infinitos valores reales o complejos, y cada valor distinto cambia una coordenada de la solución. Por eso un sistema lineal compatible indeterminado sobre estos cuerpos tiene infinitas soluciones.

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - compatibilidad
---
> [!note] Pregunta
> ¿Cuándo es compatible indeterminado un sistema real o complejo de $n$ incógnitas?
===
> [!important] Respuesta
> Cuando $\operatorname{rg}(A)=\operatorname{rg}([A\mid\mathbf b])<n$. Tiene variables libres y, por tanto, infinitas soluciones.
```

### Sistema incompatible

> [!definicion] Incompatible
> Un sistema es incompatible cuando **no tiene solución**. Esto equivale a
>
> $$
> \boxed{\operatorname{rg}(A)<\operatorname{rg}([A\mid\mathbf b])}.
> $$

La ampliada escalonada contiene una fila $[0\ \cdots\ 0\mid c]$ con $c\ne0$.

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - compatibilidad
---
> [!note] Pregunta
> ¿Cómo se reconoce un sistema incompatible en su matriz ampliada escalonada?
===
> [!important] Respuesta
> Aparece una fila $[0\ \cdots\ 0\mid c]$ con $c\ne0$: expresa $0=c$. Entonces el rango de la ampliada supera al de los coeficientes.
```

### Grado de indeterminación

> [!definicion] Grado de indeterminación
> Para un sistema compatible indeterminado de $n$ incógnitas, el grado de indeterminación es el número de parámetros independientes de su solución general:
>
> $$
> \boxed{p=n-\operatorname{rg}(A)}.
> $$
> [^a9]

Por ejemplo, un sistema compatible de cinco incógnitas y rango tres tiene dos parámetros. **Discutir** un sistema consiste en clasificarlo e indicar, si procede, ese número; **resolverlo** exige además determinar sus soluciones.

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - variables-libres
---
> [!note] Pregunta
> ¿Cuál es el grado de indeterminación de un sistema compatible indeterminado con $n$ incógnitas y rango $r$?
===
> [!important] Respuesta
> $n-r$: el número de variables libres y de parámetros independientes de su solución general.
```

```anki
deck: Matemáticas::Álgebra lineal::Sistemas lineales
tags:
  - matemáticas
  - compatibilidad
---
> [!note] Pregunta
> ¿Qué diferencia hay entre discutir un sistema lineal y resolverlo?
===
> [!important] Respuesta
> Discutirlo es clasificarlo e indicar su grado de indeterminación, si procede. Resolverlo es determinar su conjunto solución.
```

### Ejemplo trabajado: el segundo miembro decide la compatibilidad

Clasifiquemos la ampliada escalonada

$$
\left[\begin{array}{cc|c}1&1&2\\0&0&0\end{array}\right].
$$

Ambos rangos valen $1$. Hay dos incógnitas y un pivote; queda una variable libre. La única ecuación efectiva es $x+y=2$. Si $y=t$,

$$
\operatorname{Sol}(S)=\{(2-t,t):t\in K\}.
$$

La sustitución da $(2-t)+t=2$ para cualquier $t$. El sistema es compatible indeterminado, de grado uno.

Si sólo cambia el último término independiente,

$$
\left[\begin{array}{cc|c}1&1&2\\0&0&1\end{array}\right],
$$

la última fila exige $0=1$. Ahora $\operatorname{rg}(A)=1$ y $\operatorname{rg}([A\mid\mathbf b])=2$: el sistema es incompatible.

> [!advertencia] El rango de $A$ no basta
> Los dos ejemplos tienen la misma matriz de coeficientes. Para decidir si un segundo miembro concreto admite solución, hay que estudiar también la columna ampliada.

## Inversa de una matriz cuadrada

En los números reales, multiplicar por $\frac13$ deshace una multiplicación por $3$; de igual modo, $\sqrt5\cdot\frac1{\sqrt5}=1$. La existencia del inverso depende del conjunto en el que se trabaja: $3$ tiene inverso en $\mathbb R$, pero no dentro de $\mathbb N$.[^a6]

Para matrices cuadradas, el papel de $1$ corresponde a $I_n$.

### Matriz inversa e invertibilidad

> [!definicion] Matriz inversa
> Sea $A\in M_n(K)$. Una matriz $B\in M_n(K)$ es una [[Matemáticas/Álgebra lineal/Matriz inversa|inversa]] de $A$ si
>
> $$
> \boxed{AB=BA=I_n}.
> $$
>
> Si existe, $A$ se llama **invertible**. La inversa es única y se denota $A^{-1}$.[^a6]

La identidad es su propia inversa, puesto que $I_nI_n=I_n$. Una matriz sin inversa se llama **singular**. A diferencia de un escalar real, una matriz puede ser no nula y no tener inversa.

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matrices
  - inversa
---
> [!note] Pregunta
> ¿Qué debe cumplir $B\in M_n(K)$ para ser la inversa de $A\in M_n(K)$?
===
> [!important] Respuesta
> $AB=BA=I_n$. Si existe tal $B$, la matriz $A$ es invertible y se escribe $B=A^{-1}$.
```

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matrices
  - inversa
---
> [!note] Pregunta
> ¿Qué significa que una matriz cuadrada sea singular?
===
> [!important] Respuesta
> Que no tiene inversa. Ser una matriz no nula no garantiza la invertibilidad.
```

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matemáticas
  - inversa
---
> [!note] Pregunta
> ¿Cuál es la inversa de la matriz identidad?
===
> [!important] Respuesta
> $I_n^{-1}=I_n$, porque $I_nI_n=I_n$.
```

#### Ejemplo: una fila o una columna nula

La matriz

$$
C=\begin{pmatrix}1&0\\0&0\end{pmatrix}
$$

no es nula, pero no puede tener inversa. Para cualquier matriz $D$, la segunda fila de $CD$ es nula; por tanto, $CD\ne I_2$.

En general, una fila nula de $A$ permanece nula en $AB$, y una columna nula permanece nula en $BA$. Cualquiera de esas condiciones impide que ambos productos sean la identidad.[^a6]

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matrices
  - inversa
---
> [!note] Pregunta
> ¿Por qué una matriz cuadrada con una fila nula no puede ser invertible?
===
> [!important] Respuesta
> Esa fila permanece nula en cualquier producto $AB$, por lo que $AB$ nunca puede ser la identidad. Una columna nula impide análogamente que $BA=I$.
```

### Unicidad de la inversa

#### Propiedad

> [!teorema] La inversa es única
> Si $B,C\in M_n(K)$ son inversas de $A\in M_n(K)$, entonces
>
> $$
> \boxed{B=C}.
> $$

#### Demostración

> [!demostracion] Demostración
> Por las hipótesis, $BA=I_n$ y $AC=I_n$. Calculamos el producto $BAC$ agrupándolo de dos formas:
>
> $$
> B(AC)=BI_n=B,
> $$
>
> $$
> (BA)C=I_nC=C.
> $$
>
> La asociatividad garantiza que $B(AC)=(BA)C$. Por tanto, $B=C$: dos inversas de la misma matriz necesariamente coinciden. $\blacksquare$[^unicidad]

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matrices
  - inversa
---
> [!note] Pregunta
> ¿Qué producto permite demostrar que dos inversas $B$ y $C$ de una misma matriz $A$ coinciden?
===
> [!important] Respuesta
> $BAC$: por un lado, $B(AC)=B$; por otro, $(BA)C=C$. La asociatividad da $B=C$.
```

### Ejemplo trabajado: cálculo por Gauss–Jordan

Calculemos la inversa de

$$
A=\begin{pmatrix}1&2\\3&7\end{pmatrix}.
$$

Escribimos $A$ junto a $I_2$ y aplicamos las mismas operaciones a toda la fila. Primero, $R_2\leftarrow R_2-3R_1$:

$$
\left[\begin{array}{cc|cc}1&2&1&0\\3&7&0&1\end{array}\right]
\longrightarrow
\left[\begin{array}{cc|cc}1&2&1&0\\0&1&-3&1\end{array}\right].
$$

Después, $R_1\leftarrow R_1-2R_2$:

$$
\left[\begin{array}{cc|cc}1&0&7&-2\\0&1&-3&1\end{array}\right].
$$

A la izquierda ha quedado la identidad. El bloque derecho es

$$
A^{-1}=\begin{pmatrix}7&-2\\-3&1\end{pmatrix}.
$$

La comprobación por ambos lados da

$$
AA^{-1}=\begin{pmatrix}7-6&-2+2\\21-21&-6+7\end{pmatrix}=I_2,
$$

$$
A^{-1}A=\begin{pmatrix}7-6&14-14\\-3+3&-6+7\end{pmatrix}=I_2.
$$

La justificación general de este procedimiento se apoya en las inversas de las matrices elementales.[^a7-calculo]

## Inversas y operaciones matriciales

### Inversa de una matriz elemental de permutación

#### Propiedad

> [!teorema] Deshacer un intercambio
> Sea $P_{ij}$ la matriz obtenida de $I_n$ al intercambiar las filas distintas $i$ y $j$. Entonces
>
> $$
> \boxed{P_{ij}^{-1}=P_{ij}}.
> $$
> [^a6-elementales]

#### Demostración

> [!demostracion] Demostración
> Multiplicar por $P_{ij}$ a la izquierda intercambia esas dos filas. Al hacerlo dos veces sobre $I_n$, cada fila vuelve a su lugar:
>
> $$
> P_{ij}P_{ij}=I_n.
> $$
>
> Como el candidato a inversa es el propio $P_{ij}$, ambos órdenes producen exactamente este mismo producto. Por la definición de inversa, $P_{ij}^{-1}=P_{ij}$. $\blacksquare$

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matrices
  - inversa
  - matrices-elementales
---
> [!note] Pregunta
> ¿Cuál es la inversa de una matriz elemental que intercambia dos filas?
===
> [!important] Respuesta
> Ella misma: repetir el intercambio devuelve las filas a sus posiciones iniciales.
```

### Inversa de una matriz elemental de escalado

#### Propiedad

> [!teorema] Deshacer un escalado
> Si $D_i(\lambda)$ multiplica la fila $i$ por $\lambda\ne0$, entonces
>
> $$
> \boxed{D_i(\lambda)^{-1}=D_i(\lambda^{-1})}.
> $$
> [^a6-elementales]

#### Demostración

> [!demostracion] Demostración
> Como $\lambda\ne0$, existe $\lambda^{-1}\in K$. Escalar la fila $i$ por $\lambda$ y después por $\lambda^{-1}$ la multiplica en total por $\lambda^{-1}\lambda=1$. Las otras filas no cambian.
>
> En el orden contrario, el factor total es $\lambda\lambda^{-1}=1$. Aplicando ambas composiciones a $I_n$,
>
> $$
> D_i(\lambda^{-1})D_i(\lambda)=I_n,
> $$
>
> $$
> D_i(\lambda)D_i(\lambda^{-1})=I_n.
> $$
>
> Queda comprobada la inversa bilateral. $\blacksquare$

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matrices
  - inversa
  - matrices-elementales
---
> [!note] Pregunta
> ¿Cómo se invierte el escalado de una fila por $\lambda\ne0$?
===
> [!important] Respuesta
> Escalándola por $1/\lambda$: $D_i(\lambda)^{-1}=D_i(1/\lambda)$.
```

### Inversa de una matriz elemental de reemplazo

#### Propiedad

> [!teorema] Deshacer la suma de un múltiplo
> Si $i\ne j$ y $E_{ij}(\lambda)$ representa $R_i\leftarrow R_i+\lambda R_j$, entonces
>
> $$
> \boxed{E_{ij}(\lambda)^{-1}=E_{ij}(-\lambda)}.
> $$
> [^a6-elementales]

#### Demostración

> [!demostracion] Demostración
> La fila $j$ no cambia, porque $i\ne j$. Por eso podemos deshacer la operación restando el mismo múltiplo:
>
> $$
> (R_i+\lambda R_j)-\lambda R_j=R_i.
> $$
>
> En el orden contrario ocurre lo mismo:
>
> $$
> (R_i-\lambda R_j)+\lambda R_j=R_i.
> $$
>
> Las demás filas permanecen intactas. Aplicadas a $I_n$, estas operaciones prueban
>
> $$
> E_{ij}(-\lambda)E_{ij}(\lambda)=I_n
> =E_{ij}(\lambda)E_{ij}(-\lambda).
> $$
>
> Por tanto, cada matriz es la inversa de la otra. $\blacksquare$

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matrices
  - inversa
  - matrices-elementales
---
> [!note] Pregunta
> ¿Qué operación deshace $R_i\leftarrow R_i+\lambda R_j$, con $i\ne j$?
===
> [!important] Respuesta
> $R_i\leftarrow R_i-\lambda R_j$. La fila fuente $j$ permanece intacta, por lo que $E_{ij}(\lambda)^{-1}=E_{ij}(-\lambda)$.
```

### Doble inversa

#### Propiedad

> [!teorema] Inversa de la inversa
> Para toda matriz invertible $A\in M_n(K)$,
>
> $$
> \boxed{(A^{-1})^{-1}=A}.
> $$
> [^a7]

#### Demostración

> [!demostracion] Demostración
> Las igualdades $A^{-1}A=I_n$ y $AA^{-1}=I_n$ muestran que $A$ es una inversa bilateral de $A^{-1}$. Como la inversa es única, $(A^{-1})^{-1}=A$. $\blacksquare$

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matrices
  - inversa
---
> [!note] Pregunta
> Si $A$ es invertible, ¿cuál es la inversa de $A^{-1}$?
===
> [!important] Respuesta
> La propia matriz $A$: $(A^{-1})^{-1}=A$.
```

### Inversa de un producto

#### Propiedad

> [!teorema] Invertir un producto
> Si $A,B\in M_n(K)$ son invertibles, entonces
>
> $$
> \boxed{(AB)^{-1}=B^{-1}A^{-1}}.
> $$
> [^a7]

#### Demostración

> [!demostracion] Demostración
> Comprobamos que $B^{-1}A^{-1}$ da la identidad al multiplicar por $AB$ en ambos órdenes. La asociatividad permite agrupar los factores contiguos $B$ y $B^{-1}$:
>
> $$
> (AB)(B^{-1}A^{-1})
> =A(BB^{-1})A^{-1}
> =AI_nA^{-1}
> =I_n.
> $$
>
> En el otro orden, los factores contiguos que se cancelan primero son $A^{-1}$ y $A$:
>
> $$
> (B^{-1}A^{-1})(AB)
> =B^{-1}(A^{-1}A)B
> =B^{-1}I_nB
> =I_n.
> $$
>
> Ambos productos valen $I_n$, por lo que $(AB)^{-1}=B^{-1}A^{-1}$. No se ha intercambiado ningún factor: sólo se han cambiado los paréntesis. $\blacksquare$

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matrices
  - inversa
---
> [!note] Pregunta
> Si $A$ y $B$ son matrices invertibles del mismo orden, ¿cuál es la inversa de $AB$?
===
> [!important] Respuesta
> $(AB)^{-1}=B^{-1}A^{-1}$: se invierte el orden de los factores.
```

### Inversa de un múltiplo escalar

#### Propiedad

> [!teorema] Invertir un múltiplo no nulo
> Si $A\in M_n(K)$ es invertible y $\alpha\in K\setminus\{0\}$, entonces
>
> $$
> \boxed{(\alpha A)^{-1}=\alpha^{-1}A^{-1}}.
> $$
> [^a7-tpc][^escalar]

#### Demostración

> [!demostracion] Demostración · TPC resuelto
> La condición $\alpha\ne0$ permite usar el escalar $\alpha^{-1}$. Para comprobar la fórmula, multiplicamos $\alpha A$ por $\alpha^{-1}A^{-1}$.
>
> Los escalares pueden sacarse del producto matricial. Así,
>
> $$
> (\alpha A)(\alpha^{-1}A^{-1})
> =(\alpha\alpha^{-1})(AA^{-1})
> =1_KI_n=I_n.
> $$
>
> En el orden contrario,
>
> $$
> (\alpha^{-1}A^{-1})(\alpha A)
> =(\alpha^{-1}\alpha)(A^{-1}A)
> =I_n.
> $$
>
> El candidato es inversa por ambos lados; por tanto, $(\alpha A)^{-1}=\alpha^{-1}A^{-1}$. $\blacksquare$

Si $\alpha=0$, el producto $\alpha A$ es la matriz nula y no tiene inversa para $n\geq1$.

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matrices
  - inversa
---
> [!note] Pregunta
> Para $A$ invertible, ¿cuándo es invertible $\alpha A$ y cuál es su inversa?
===
> [!important] Respuesta
> Cuando $\alpha\ne0$; su inversa es $\alpha^{-1}A^{-1}$. Si $\alpha=0$, se obtiene la matriz nula.
```

### Inversa de la transpuesta

#### Propiedad

> [!teorema] Transponer una inversa
> Si $A\in M_n(K)$ es invertible, entonces $A^T$ es invertible y
>
> $$
> \boxed{(A^T)^{-1}=(A^{-1})^T}.
> $$
> [^a7-tpc][^transpuesta]

#### Demostración

> [!demostracion] Demostración · TPC resuelto
> Partimos de las dos igualdades que definen la inversa: $AA^{-1}=I_n$ y $A^{-1}A=I_n$.
>
> Al transponer un producto se invierte el orden de sus factores. Por tanto, transponer la primera igualdad da
>
> $$
> (AA^{-1})^T=(A^{-1})^TA^T=I_n,
> $$
>
> porque $I_n^T=I_n$. Transponer la segunda da
>
> $$
> (A^{-1}A)^T=A^T(A^{-1})^T=I_n.
> $$
>
> Así, $(A^{-1})^T$ es inversa de $A^T$ por los dos lados. Por definición,
>
> $$
> \boxed{(A^T)^{-1}=(A^{-1})^T}.\qquad\blacksquare
> $$

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matrices
  - inversa
  - transpuesta
---
> [!note] Pregunta
> ¿Cómo se calcula la inversa de $A^T$ si se conoce $A^{-1}$?
===
> [!important] Respuesta
> Se transpone la inversa: $(A^T)^{-1}=(A^{-1})^T$.
```

### Inversa de la conjugada transpuesta

#### Propiedad

> [!teorema] Conjugar y transponer una inversa
> Si $A\in M_n(\mathbb C)$ es invertible y $A^*=\overline A^{\,T}$, entonces
>
> $$
> \boxed{(A^*)^{-1}=(A^{-1})^*}.
> $$
> [^a7-tpc]

#### Demostración

> [!demostracion] Demostración · TPC resuelto
> La conjugada transpuesta invierte el orden de un producto. La conjugación conserva el orden y la transposición lo invierte:
>
> $$
> (XY)^*=\overline{XY}^{\,T}
> =(\overline X\,\overline Y)^T
> =(\overline Y)^T(\overline X)^T
> =Y^*X^*.
> $$
>
> Aplicamos esta regla a $AA^{-1}=I_n$. Como $I_n^*=I_n$, resulta
>
> $$
> (AA^{-1})^*=(A^{-1})^*A^*=I_n.
> $$
>
> Aplicándola a $A^{-1}A=I_n$, obtenemos el otro orden:
>
> $$
> (A^{-1}A)^*=A^*(A^{-1})^*=I_n.
> $$
>
> Las dos igualdades prueban que $(A^{-1})^*$ es la inversa de $A^*$. $\blacksquare$[^conjugada]

Para matrices reales, la conjugación no cambia las entradas: esta propiedad coincide con la de la transpuesta.

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matrices
  - inversa
  - conjugada-transpuesta
---
> [!note] Pregunta
> Si $A$ es una matriz compleja invertible, ¿cuál es la inversa de su conjugada transpuesta $A^*$?
===
> [!important] Respuesta
> $(A^*)^{-1}=(A^{-1})^*$. Sobre $\mathbb R$, coincide con la regla de la transpuesta.
```

### Despejar una matriz multiplicada por la izquierda

Si $BA=C$ y $B$ es invertible, se multiplica **ambos miembros por la izquierda** por $B^{-1}$:

$$
B^{-1}(BA)=B^{-1}C.
$$

Por asociatividad, $(B^{-1}B)A=I_nA=A$. Por tanto,

$$
\boxed{A=B^{-1}C}.
$$

El orden importa: $CB^{-1}$ no es, en general, el resultado de ese despeje.[^a7-despeje]

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matrices
  - inversa
---
> [!note] Pregunta
> Si $BA=C$ y $B$ es invertible, ¿cómo se despeja $A$?
===
> [!important] Respuesta
> Multiplicando ambos miembros por $B^{-1}$ a la izquierda: $A=B^{-1}C$.
```

## Criterio y cálculo por Gauss–Jordan

### Por qué el bloque derecho contiene la inversa

Al reducir $[A\mid I_n]$, cada operación elemental equivale a multiplicar por una matriz elemental a la izquierda. Si se aplican, en ese orden, $E_1,\ldots,E_p$, el producto total es

$$
Q=E_p\cdots E_2E_1.
$$

La primera operación queda junto a $A$; cada nueva operación se añade a la izquierda. Por eso el resultado de actuar sobre los dos bloques es

$$
[A\mid I_n]\longrightarrow[QA\mid QI_n]=[QA\mid Q].
$$

Cada matriz elemental es invertible y su producto $Q$ también lo es.[^a7-calculo]

#### Propiedad

> [!teorema] Criterio de Gauss–Jordan para la inversa
> Para $A\in M_n(K)$, existe $A^{-1}$ si, y sólo si, la forma escalonada reducida de $A$ es $I_n$. En ese caso,
>
> $$
> \boxed{[A\mid I_n]\longrightarrow[I_n\mid A^{-1}]}.
> $$

#### Demostración

> [!demostracion] Demostración
> Sea $R=QA$ la forma escalonada reducida de $A$, con $Q$ el producto invertible de las matrices elementales aplicadas.
>
> **Si $R=I_n$**, tenemos $QA=I_n$. Multiplicando por $Q^{-1}$ a la izquierda,
>
> $$
> A=Q^{-1}.
> $$
>
> Así, $A$ es invertible y su inversa es $Q$, precisamente el bloque derecho de la reducción.
>
> **Si $R\ne I_n$**, a $R$ le falta algún pivote. En efecto, una matriz cuadrada reducida con $n$ pivotes tiene un $1$ en cada posición diagonal y ceros en las demás: es $I_n$. Como $R$ no lo es, tiene una fila nula.
>
> Esa fila sigue siendo nula en cualquier producto $RD$, de modo que $RD$ nunca puede ser $I_n$. Por tanto, $R$ no es invertible.
>
> Si $A$ fuera invertible, $R=QA$ sería un producto de matrices invertibles y también tendría inversa. Esto contradice lo anterior. Luego $A$ no es invertible.
>
> Quedan probados ambos casos y la fórmula del bloque derecho. $\blacksquare$[^a7-calculo]

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matrices
  - inversa
  - gauss-jordan
---
> [!note] Pregunta
> ¿Cómo decide y calcula Gauss–Jordan si una matriz cuadrada $A$ tiene inversa?
===
> [!important] Respuesta
> Se reduce $[A\mid I]$ aplicando cada operación a ambos bloques. Si el izquierdo llega a $I$, el derecho es $A^{-1}$; si la forma reducida de $A$ no es $I$, no hay inversa.
```

### Matrices invertibles como productos de elementales

#### Propiedad

> [!teorema] Caracterización por matrices elementales
> Una matriz $A\in M_n(K)$ es invertible si, y sólo si, puede escribirse como producto finito de matrices elementales.[^a7-calculo]

#### Demostración

> [!demostracion] Demostración
> Si $A$ es invertible, su reducción produce $E_p\cdots E_1A=I_n$. Despejando,
>
> $$
> A=(E_p\cdots E_1)^{-1}=E_1^{-1}\cdots E_p^{-1}.
> $$
>
> Cada inversa $E_i^{-1}$ es otra matriz elemental: deshace el intercambio, el escalado o el reemplazo correspondiente. Así se obtiene la factorización pedida. Para $A=I_n$ puede usarse, por ejemplo, $D_1(2)D_1(1/2)$.
>
> Recíprocamente, cada matriz elemental es invertible y un producto de matrices invertibles es invertible. Por tanto, cualquier producto finito de elementales tiene inversa. $\blacksquare$

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matrices
  - inversa
  - matrices-elementales
---
> [!note] Pregunta
> ¿Qué matrices cuadradas pueden expresarse como productos de matrices elementales?
===
> [!important] Respuesta
> Exactamente las invertibles: la reducción a $I$ da $A=E_1^{-1}\cdots E_p^{-1}$, y cada inversa elemental sigue siendo elemental.
```

### Ejemplo trabajado: invertir una matriz de orden tres

Calculemos la inversa de[^a7-ejemplo]

$$
A=\begin{pmatrix}1&0&-1\\2&2&-1\\1&4&2\end{pmatrix}.
$$

**Primera columna.** Partimos de

$$
\left[\begin{array}{rrr|rrr}
1&0&-1&1&0&0\\
2&2&-1&0&1&0\\
1&4&2&0&0&1
\end{array}\right].
$$

Las operaciones $R_2\leftarrow R_2-2R_1$ y $R_3\leftarrow R_3-R_1$ dan

$$
\left[\begin{array}{rrr|rrr}
1&0&-1&1&0&0\\
0&2&1&-2&1&0\\
0&4&3&-1&0&1
\end{array}\right].
$$

**Segunda columna.** Como $4=2\cdot2$, hacemos $R_3\leftarrow R_3-2R_2$:

$$
\left[\begin{array}{rrr|rrr}
1&0&-1&1&0&0\\
0&2&1&-2&1&0\\
0&0&1&3&-2&1
\end{array}\right].
$$

**Eliminación hacia arriba.** El último pivote vale $1$. Con $R_2\leftarrow R_2-R_3$ y $R_1\leftarrow R_1+R_3$ queda

$$
\left[\begin{array}{rrr|rrr}
1&0&0&4&-2&1\\
0&2&0&-5&3&-1\\
0&0&1&3&-2&1
\end{array}\right].
$$

Sólo falta normalizar el segundo pivote: $R_2\leftarrow\frac12R_2$. Se obtiene $[I_3\mid A^{-1}]$, con

$$
\boxed{A^{-1}=\begin{pmatrix}
4&-2&1\\
-\frac52&\frac32&-\frac12\\
3&-2&1
\end{pmatrix}}.
$$

Los productos $AA^{-1}$ y $A^{-1}A$ son ambos $I_3$. Por ejemplo, la primera fila de $AA^{-1}$ es

$$
(4-3,\,-2+2,\,1-1)=(1,0,0),
$$

y la segunda fila es

$$
(8-5-3,\,-4+3+2,\,2-1-1)=(0,1,0).
$$

## Equivalencias y sistemas cuadrados

### Relación entre invertibilidad, rango y solución única

#### Propiedad

> [!teorema] Matriz cuadrada de rango completo
> Para $A\in M_n(K)$ son equivalentes:
>
> - $A$ es invertible.
> - Su forma escalonada tiene $n$ pivotes.
> - $\operatorname{rg}(A)=n$.
> - Para **todo** $\mathbf b\in K^n$, el sistema $A\mathbf x=\mathbf b$ tiene una única solución.[^a7-calculo][^a10]

#### Demostración

> [!demostracion] Demostración
> **Invertibilidad, pivotes y rango.** Por el criterio de Gauss–Jordan, $A$ es invertible exactamente cuando su forma reducida es $I_n$. Esto equivale a tener $n$ pivotes y, por definición, rango $n$.
>
> **De la inversa a la solución única.** Para cualquier $\mathbf b$, el vector $\mathbf x=A^{-1}\mathbf b$ es solución, porque
>
> $$
> A(A^{-1}\mathbf b)=(AA^{-1})\mathbf b=\mathbf b.
> $$
>
> Además, cualquier solución debe ser ese vector: al multiplicar $A\mathbf x=\mathbf b$ por $A^{-1}$ a la izquierda, resulta $\mathbf x=A^{-1}\mathbf b$. Esto prueba existencia y unicidad.
>
> **De la solución única al rango completo.** Si hay solución única para todo $\mathbf b$, la ecuación homogénea $A\mathbf x=0$ sólo tiene la solución nula. Si alguna columna careciese de pivote, habría una variable libre. Asignarle $1$ y asignar $0$ a las demás libres permitiría calcular las básicas y producir una solución no nula. La contradicción muestra que todas las columnas tienen pivote, es decir, que el rango es $n$.
>
> Las implicaciones cierran la equivalencia. $\blacksquare$

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matrices
  - inversa
  - rango
---
> [!note] Pregunta
> Para $A\in M_n(K)$, ¿qué condición de rango equivale a tener inversa y qué implica para $A\mathbf x=\mathbf b$?
===
> [!important] Respuesta
> $\operatorname{rg}(A)=n$. Entonces, para cada $\mathbf b\in K^n$, existe una única solución: $\mathbf x=A^{-1}\mathbf b$.
```

### Resolver un sistema con la inversa

Cuando $A$ es cuadrada e invertible, la igualdad

$$
\boxed{\mathbf x=A^{-1}\mathbf b}
$$

da la solución de $A\mathbf x=\mathbf b$. La multiplicación debe hacerse en ese orden: $A^{-1}$ actúa por la izquierda sobre la columna $\mathbf b$.[^a10]

#### Ejemplo: usar la inversa calculada

Para la matriz de orden tres del ejemplo anterior y

$$
\mathbf b=\begin{pmatrix}1\\2\\3\end{pmatrix},
$$

el producto es

$$
\mathbf x=
\begin{pmatrix}4&-2&1\\-\frac52&\frac32&-\frac12\\3&-2&1\end{pmatrix}
\begin{pmatrix}1\\2\\3\end{pmatrix}
=
\begin{pmatrix}4-4+3\\-\frac52+3-\frac32\\3-4+3\end{pmatrix}
=
\begin{pmatrix}3\\-1\\2\end{pmatrix}.
$$

La comprobación en el sistema original da

$$
A\mathbf x=
\begin{pmatrix}3-2\\6-2-2\\3-4+4\end{pmatrix}
=
\begin{pmatrix}1\\2\\3\end{pmatrix}=\mathbf b.
$$

### Una identidad de producto fuerza ambas inversas

#### Propiedad

> [!teorema] Basta una identidad para matrices cuadradas
> Si $A,B\in M_n(K)$ y $AB=I_n$, entonces ambas matrices son invertibles y
>
> $$
> \boxed{A^{-1}=B\quad\text{y}\quad B^{-1}=A}.
> $$
> [^a10-corolarios][^lateral]

#### Demostración

> [!demostracion] Demostración
> **El homogéneo de $B$ sólo tiene la solución nula.** Si $B\mathbf x=0$, multiplicar por $A$ a la izquierda da
>
> $$
> A(B\mathbf x)=0.
> $$
>
> Por asociatividad y por $AB=I_n$, ese mismo miembro es
>
> $$
> A(B\mathbf x)=(AB)\mathbf x=I_n\mathbf x=\mathbf x.
> $$
>
> Luego $\mathbf x=0$.
>
> **Esto obliga a que $B$ tenga rango $n$.** Si le faltara un pivote, se podría dar valor $1$ a una variable libre y resolver las básicas, obteniendo una solución no nula del homogéneo. Por tanto, $B$ tiene $n$ pivotes y es invertible.
>
> **Identificamos las inversas.** Multiplicamos $AB=I_n$ por $B^{-1}$ a la derecha:
>
> $$
> A(BB^{-1})=B^{-1},
> $$
>
> de donde $A=B^{-1}$. Así, $A$ también es invertible y $A^{-1}=B$. $\blacksquare$

La hipótesis de que ambas matrices sean cuadradas del mismo orden es esencial. Para matrices rectangulares, un producto puede ser una identidad sin que el producto en el orden contrario lo sea.[^lateral]

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matrices
  - inversa
---
> [!note] Pregunta
> Si $A,B\in M_n(K)$ y $AB=I_n$, ¿es necesario comprobar por separado que $BA=I_n$ para concluir que son inversas?
===
> [!important] Respuesta
> No: para matrices cuadradas del mismo orden, $AB=I_n$ implica $BA=I_n$ y $A^{-1}=B$. La hipótesis cuadrada es esencial.
```

### Invertibilidad de ambos factores de un producto invertible

#### Propiedad

> [!teorema] Factores de un producto invertible
> Si $A,B\in M_n(K)$ y $AB$ es invertible, entonces $A$ y $B$ son invertibles.[^a10-corolarios]

#### Demostración

> [!demostracion] Demostración · TPC resuelto
> Sea $C=(AB)^{-1}$. Por definición, $(AB)C=I_n$ y $C(AB)=I_n$.
>
> Reagrupamos la primera igualdad para que $A$ aparezca como un factor:
>
> $$
> A(BC)=(AB)C=I_n.
> $$
>
> Las matrices $A$ y $BC$ son cuadradas de orden $n$. Por la propiedad anterior, $A$ es invertible y su inversa es $BC$.
>
> La segunda igualdad permite hacer lo mismo con $B$:
>
> $$
> (CA)B=C(AB)=I_n.
> $$
>
> Aplicando la misma propiedad a $CA$ y $B$, concluimos que $B$ es invertible y su inversa es $CA$.
>
> Ambos factores de $AB$ son, por tanto, invertibles. $\blacksquare$[^factores]

```anki
deck: Matemáticas::Álgebra lineal::Matrices
tags:
  - matrices
  - inversa
  - sistemas-lineales
---
> [!note] Pregunta
> Si $AB$ es invertible para $A,B\in M_n(K)$, ¿qué se concluye sobre los factores?
===
> [!important] Respuesta
> $A$ y $B$ son invertibles: con $C=(AB)^{-1}$, $A(BC)=I_n$ y $(CA)B=I_n$.
```

## Condiciones de validez y errores frecuentes

- **Compatibilidad antes que parámetros.** La cuenta $n-r$ describe las variables libres de una solución general sólo si el sistema tiene solución.
- **Matriz cuadrada en los criterios de inversa.** Una matriz rectangular puede tener un pivote en cada columna sin poseer una inversa bilateral.
- **Mismo orden de factores en los despejes.** Multiplicar por una inversa a la izquierda o a la derecha produce igualdades distintas.

Para comprobar una clasificación, se sustituye la solución en el sistema original o se identifica una fila imposible. Para comprobar una inversa, multiplicar por ambos lados permite detectar errores de signos y de orden, aunque el teorema anterior establezca que una sola identidad exacta basta para matrices cuadradas.

## Práctica graduada

### Ejercicio 1 — Resolver y comprobar

Usa la inversa de la matriz de orden tres para resolver $AX=(1,2,3)^T$ y comprueba la respuesta.

> [!resolucion]- Resolución
> El producto $X=A^{-1}(1,2,3)^T$ da $X=(3,-1,2)^T$.
>
> Al sustituir,
>
> $$
> AX=(3-2,\,6-2-2,\,3-4+4)^T=(1,2,3)^T.
> $$

### Ejercicio 2 — Usar el núcleo para probar invertibilidad

Demuestra que, si $A,B\in M_n(K)$ y $AB=I_n$, entonces $B$ es invertible.

> [!resolucion]- Resolución
> Si $B$ fuera singular, su homogéneo tendría una solución no nula $\mathbf c\in K^n$, pues existiría alguna variable libre. Pero entonces
>
> $$
> \mathbf c=I_n\mathbf c=(AB)\mathbf c=A(B\mathbf c)=0,
> $$
>
> contradiciendo $\mathbf c\ne0$. Luego $B$ es invertible; al multiplicar $AB=I_n$ por $B^{-1}$ a la derecha se obtiene $A=B^{-1}$.

### Ejercicio 3 — Separar los factores

Si $AB$ es invertible, con $A,B\in M_n(K)$, obtén dos productos iguales a la identidad que prueben la invertibilidad de ambos factores.

> [!resolucion]- Resolución
> Con $C=(AB)^{-1}$, las identidades buscadas son $A(BC)=I_n$ y $(CA)B=I_n$. Todos los factores son cuadrados del mismo orden; por el criterio de la inversa lateral, $A$ y $B$ son invertibles.

La inversa resuelve de una vez la ecuación con cualquier segundo miembro. Si se quiere reutilizar la eliminación sin calcular toda la inversa, los factores triangulares de [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/01 Matrices y sistemas/04 Factorización LU|LU]] permiten resolver sucesivos sistemas mediante dos sustituciones. El [[Matemáticas/Álgebra lineal/Determinantes|determinante]] ofrece, por su parte, otro criterio de invertibilidad.

## 📚 Fuentes

### Material base aportado

[^a6-rango]: FCUL, *Álgebra Linear e Geometria Analítica*, aula 6, 28/09/2026, diapositivas 2–10. Archivo privado `ALGA-2026-27-AulasTeo-slides-aula6-CaractMatrizesInv-impressao.pdf`. Rango —«característica» en el material— y reducción por filas.
[^a6]: FCUL, aula 6, diapositivas 11–13. Mismo archivo. Inversos escalares, definición matricial y ejemplos de invertibilidad.
[^a6-elementales]: FCUL, aula 6, diapositiva 14. Mismo archivo. Inversas de los tres tipos de matrices elementales; las demostraciones desarrollan las operaciones inversas que allí se identifican.
[^a7]: FCUL, aula 7, 30/09/2026, diapositivas 2–3. Archivo privado `ALGA-2026-27-AulasTeo-slides-Aula7-MatrizesInv-impressao.pdf`. Demostraciones de la doble inversa y de la inversa del producto, adaptadas al castellano.
[^a7-tpc]: FCUL, aula 7, diapositivas 2–3. Mismo archivo. Las propiedades 3–4 —múltiplo escalar, transpuesta y conjugada transpuesta— se asignan como TPC. Se desarrollan aquí con las leyes del producto matricial.
[^a7-despeje]: FCUL, aula 7, diapositiva 5. Mismo archivo. Despeje de $BA=C$ por multiplicación a la izquierda.
[^a7-calculo]: FCUL, aula 7, diapositivas 6–7 y 9. Mismo archivo. Argumento con $Q$, criterio de reducción a la identidad y producto de matrices elementales. La demostración conserva sus dos casos y explicita por qué una fila nula impide la inversa.
[^a7-ejemplo]: FCUL, aula 7, diapositiva 8. Mismo archivo. Cálculo de la inversa de orden tres y operaciones intermedias.
[^a9]: FCUL, aula 9, 07/10/2026, diapositivas 2–11. Archivo privado `ALGA-2026-27-AulasTeo-slides-Aula9-Sistemas-impressao.pdf`. Compatibilidad por comparación de rangos, clasificación, grado de indeterminación y cotas del rango. La demostración del criterio reconstruye los casos de las diapositivas 4–7.
[^a10]: FCUL, aula 10, 09/10/2026, diapositivas 8–9. Archivo privado `ALGA-2026-27-AulasTeo-slides-Aula10-Sistemas-impressao.pdf`. Equivalencias para sistemas cuadrados y solución mediante inversa.
[^a10-corolarios]: FCUL, aula 10, diapositiva 10. Mismo archivo. El corolario 1 incluye prueba; el corolario 2 se propone como TPC. En la prueba, la columna no nula pertenece a $M_{n\times1}(K)$, no a $M_n(K)$ como figura por errata en la diapositiva.

### Contraste académico

[^unicidad]: University of Manitoba, [*Linear Algebra*, §2.7, teorema 2.7.3](https://mblinalg.math.umanitoba.ca/section-14.html). Prueba de unicidad comparando las dos agrupaciones de $BAC$, adaptada al castellano.
[^transpuesta]: W. Keith Nicholson, [*Linear Algebra with Applications*, §2.4, ejemplo 2.4.8](https://math.libretexts.org/Bookshelves/Linear_Algebra/Linear_Algebra_with_Applications_%28Nicholson%29/02%3A_Matrix_Algebra/2.04%3A_Matrix_Inverses). Demostración bilateral de la inversa de la transpuesta. El teorema 2.4.4 también enuncia la regla del múltiplo escalar, pero deja su prueba como ejercicio.
[^rango-espacios]: TU Delft, [*Linear Algebra*, §4.2.4, “Row space and rank”, proposición 4.2.5](https://interactivetextbooks.tudelft.nl/linear-algebra/Chapter4/BasisAndDimension.html). Igualdad entre las dimensiones de los espacios de filas y de columnas y su relación con los pivotes.
[^escalar]: Robert A. Beezer, [*A First Course in Linear Algebra*, sección MISLE, teorema MISM](https://linear.pugetsound.edu/fcla/section-MISLE.html), University of Puget Sound. Demostración completa de la inversa de un múltiplo escalar, adaptada al castellano y a la notación del curso.
[^conjugada]: Bruce Ikenaga, [“Unitary Matrices and Hermitian Matrices”](https://sites.millersville.edu/bikenaga/linear-algebra/unitary-and-hermitian-matrices/unitary-and-hermitian-matrices.html), Millersville University, proposición (c) y su demostración: $(UV)^*=V^*U^*$. La prueba aquí desarrolla la inversa de la conjugada transpuesta aplicando esa ley a las dos identidades de inversa; adapta el argumento bilateral de Nicholson, §2.4, ejemplo 2.4.8, citado arriba. No es una transcripción literal de una prueba de Ikenaga.
[^lateral]: University of Manitoba, [§2.7, lemas 2.7.6–2.7.7 y proposición 2.7.8](https://mblinalg.math.umanitoba.ca/section-14.html). Argumento mediante el homogéneo y criterio de inversa lateral.
[^factores]: Desarrollo del TPC de FCUL a partir del criterio de inversa lateral demostrado en University of Manitoba, [§2.7, proposición 2.7.8](https://mblinalg.math.umanitoba.ca/section-14.html). Se explicitan sus dos aplicaciones, a $A(BC)$ y a $(CA)B$; la fuente acredita el criterio utilizado, no esta redacción del TPC.

## 🧑‍🏫 Prompt para tutor conversacional

Usa los ejemplos y ejercicios existentes, sin añadir otros. Pide clasificar las dos matrices ampliadas del ejemplo y justificar la diferencia mediante sus filas. Comprueba que el estudiante cuenta $n-r$ parámetros sólo tras establecer compatibilidad.

Para las inversas, pide explicar por qué cada operación se aplica también a la identidad y cómo aparece el producto $Q$. Después, selecciona una propiedad: solicita sus hipótesis, la matriz propuesta como inversa y las dos multiplicaciones que la verifican. Trabaja con pistas graduales. No aceptes intercambiar factores para cancelarlos ni aplicar un resultado cuadrado a matrices rectangulares. Termina comprobando un resultado numérico en la matriz original.

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "end" })
```
