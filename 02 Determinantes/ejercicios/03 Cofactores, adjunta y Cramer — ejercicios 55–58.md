---
title: Ejercicios 55–58 — cofactores, adjunta y Cramer
asignatura: Álgebra Lineal y Geometría Analítica
capa: curricular
tipo:
  - ejercicios
  - preparatoria
nivel: universitario-introductorio
estado: revisado
fsrs_goal: Calcula la inversa y entradas aisladas mediante cofactores, demuestra la relación entre adjunta e inversa y decide cuándo puede aplicar la regla de Cramer para resolver un sistema.
tags:
  - matematicas
  - algebra-lineal
  - determinantes
  - cofactores
  - ejercicios
  - fcul
---

# Cofactores, adjunta y Cramer · ejercicios 55–58

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "start" })
```

Los [[Matemáticas/Álgebra lineal/Determinantes|cofactores]] permiten pasar del determinante a la [[Matemáticas/Álgebra lineal/Matriz inversa|inversa]]. La transposición de sus índices es decisiva: para hallar una entrada de $A^{-1}$ se necesita el cofactor de la posición intercambiada. En un sistema con solución única, la regla de Cramer utiliza determinantes para obtener cada incógnita directamente.[^teoria]

> [!tip] Procedencia
> Todas las resoluciones y comprobaciones de estos ejercicios son propias (🤖). Los enunciados conservan la notación de las fichas del curso; en particular, $\widehat A$ y $\operatorname{adj}(A)$ no designan la misma matriz.[^base]

## Cofactores e inversa

### Complementos algebraicos y adjunta

Para $A=(a_{ij})\in M_n(K)$, el cofactor $C_{ij}$ es $(-1)^{i+j}\det A_{ij}$, donde $A_{ij}$ resulta de eliminar la fila $i$ y la columna $j$.[^teoria]

> [!definicion] Matriz de complementos algebraicos
> La matriz $\widehat A=(C_{ij})$ reúne los cofactores en las mismas posiciones que las entradas correspondientes de $A$.

```anki
deck: Matemáticas::Álgebra lineal::Determinantes
tags:
  - matemáticas
  - determinantes
  - cofactores
---
> [!note] Pregunta
> ¿Qué entrada ocupa la posición $(i,j)$ de la matriz de complementos algebraicos $\widehat A$?
===
> [!important] Respuesta
> El cofactor $C_{ij}=(-1)^{i+j}\det A_{ij}$, con la fila $i$ y la columna $j$ eliminadas para formar $A_{ij}$.
```

> [!definicion] Adjunta clásica
> La **adjunta clásica** es la transpuesta de la matriz de cofactores: $\operatorname{adj}(A)=\widehat A^T$. Su entrada $(i,j)$ es $C_{ji}$.

Esta adjunta clásica se construye con menores y signos. La [[Matemáticas/Álgebra lineal/Conjugada transpuesta de una matriz|conjugada transpuesta]] $A^*$ se construye conjugando entradas y transponiendo, mediante una operación distinta.[^teoria]

```anki
deck: Matemáticas::Álgebra lineal::Determinantes
tags:
  - matemáticas
  - determinantes
  - cofactores
---
> [!note] Pregunta
> ¿Cómo se obtiene la adjunta clásica a partir de la matriz de cofactores?
===
> [!important] Respuesta
> Transponiéndola: $\operatorname{adj}(A)=\widehat A^T$. Por tanto, su entrada $(i,j)$ es el cofactor $C_{ji}$.
```

```anki
deck: Matemáticas::Álgebra lineal::Determinantes
tags:
  - matemáticas
  - determinantes
  - cofactores
---
> [!note] Pregunta
> ¿Qué diferencia la adjunta clásica $\operatorname{adj}(A)$ de la conjugada transpuesta $A^*$?
===
> [!important] Respuesta
> La primera transpone la matriz de cofactores; la segunda transpone la matriz de entradas conjugadas. Son construcciones distintas.
```

### Ejercicio 55 · Inversa mediante la matriz de cofactores 🤖

#### Enunciado

Sea[^55]

$$
A=\begin{pmatrix}2&1&0\\1&0&1\\2&2&0\end{pmatrix}.
$$

**a)** Calcula $\det A$ y concluye que $A$ es invertible. **b)** Determina $\widehat A$, matriz de complementos algebraicos. **c)** Calcula $A^{-1}$ usando b).

> [!resolucion]- Resolución
> **a)** La tercera columna tiene un único elemento no nulo, $a_{23}=1$, de signo de cofactor negativo:
>
> $$
> \det A=-\begin{vmatrix}2&1\\2&2\end{vmatrix}=-(4-2)=\boxed{-2}.
> $$
>
> Como el determinante no es cero, $A$ es invertible.
>
> **b)** Calculamos cada cofactor eliminando su fila y su columna. Los signos de las tres filas son $(+,-,+)$, $(-,+,-)$ y $(+,-,+)$. Para la primera fila:
>
> $$
> C_{11}=0\cdot0-1\cdot2=-2,\quad
> C_{12}=-(1\cdot0-1\cdot2)=2,\quad
> C_{13}=1\cdot2-0\cdot2=2.
> $$
>
> Para la segunda:
>
> $$
> C_{21}=-(1\cdot0-0\cdot2)=0,\quad
> C_{22}=2\cdot0-0\cdot2=0,\quad
> C_{23}=-(2\cdot2-1\cdot2)=-2.
> $$
>
> Para la tercera:
>
> $$
> C_{31}=1\cdot1-0\cdot0=1,\quad
> C_{32}=-(2\cdot1-0\cdot1)=-2,\quad
> C_{33}=2\cdot0-1\cdot1=-1.
> $$
>
> Así,
>
> $$
> \boxed{\widehat A=\begin{pmatrix}-2&2&2\\0&0&-2\\1&-2&-1\end{pmatrix}.}
> $$
>
> **c)** La fórmula $A^{-1}=\operatorname{adj}(A)/\det A$ exige transponer $\widehat A$ antes de dividir:
>
> $$
> A^{-1}=-\frac12\begin{pmatrix}-2&0&1\\2&0&-2\\2&-2&-1\end{pmatrix}
> =\boxed{\begin{pmatrix}1&0&-1/2\\-1&0&1\\-1&1&1/2\end{pmatrix}}.
> $$

> [!recuerda]- Comprobación
> Multiplica $A$ por la matriz obtenida, en ambos órdenes: resultan $AA^{-1}=A^{-1}A=I_3$. Otra comprobación de los cofactores es $A\widehat A^T=-2I_3$, cuyo factor coincide con $\det A$.

```anki
deck: Matemáticas::Álgebra lineal::Determinantes
tags:
  - matemáticas
  - determinantes
  - invertibilidad
---
> [!note] Pregunta
> ¿Bajo qué condición se calcula la inversa con la adjunta y cuál es la fórmula?
===
> [!important] Respuesta
> Si $\det A\ne0$, $A^{-1}=\operatorname{adj}(A)/\det A=\widehat A^T/\det A$. Hay que transponer la matriz de cofactores.
```

### Ejercicio 56 · Dos entradas de la inversa sin calcularla entera 🤖

#### Enunciado

Sea[^56]

$$
A=\begin{pmatrix}4&3&1&6\\0&-3&-3&1\\4&1&0&14\\4&-1&-2&2\end{pmatrix}.
$$

**a)** Calcula $\det A$ y concluye que $A$ es invertible. **b)** Sin calcular toda $A^{-1}$, calcula sus entradas en las posiciones $(2,3)$ y $(3,2)$.

> [!resolucion]- Resolución
> **a)** Hacemos $R_3\leftarrow R_3-R_1$ y $R_4\leftarrow R_4-R_1$. La primera columna queda $(4,0,0,0)^T$, de modo que
>
> $$
> \det A=4\begin{vmatrix}-3&-3&1\\-2&-1&8\\-4&-3&-4\end{vmatrix}.
> $$
>
> Laplace por la primera fila de este menor da
>
> $$
> (-3)(4+24)+3(8+32)+(6-4)=-84+120+2=38.
> $$
>
> Por tanto, $\boxed{\det A=152\ne0}$ y $A$ es invertible.
>
> **b)** La posición de los índices cambia al transponer la matriz de cofactores:
>
> $$
> (A^{-1})_{23}=\frac{C_{32}}{152},\qquad
> (A^{-1})_{32}=\frac{C_{23}}{152}.
> $$
>
> Para $C_{32}$ eliminamos la **tercera fila y segunda columna**. Como $(-1)^{3+2}=-1$,
>
> $$
> C_{32}=-\begin{vmatrix}4&1&6\\0&-3&1\\4&-2&2\end{vmatrix}.
> $$
>
> El menor vale $4(-6+2)-(0-4)+6(0+12)=-16+4+72=60$. Luego $C_{32}=-60$ y
>
> $$
> \boxed{(A^{-1})_{23}=-\frac{60}{152}=-\frac{15}{38}.}
> $$
>
> Para $C_{23}$ eliminamos la **segunda fila y tercera columna**, también con signo negativo:
>
> $$
> C_{23}=-\begin{vmatrix}4&3&6\\4&1&14\\4&-1&2\end{vmatrix}.
> $$
>
> Restar la primera fila de las otras dos permite desarrollar por la primera columna. El menor vale
>
> $$
> 4\begin{vmatrix}-2&8\\-4&-4\end{vmatrix}=4(8+32)=160.
> $$
>
> Así, $C_{23}=-160$ y $\boxed{(A^{-1})_{32}=-160/152=-20/19}$.

> [!recuerda]- Comprobación
> Se pueden comprobar las dos entradas resolviendo sólo dos sistemas, sin formar la inversa entera. Las columnas
>
> $$
> u=\frac1{19}(-7,14,-20,1)^T,\qquad
> v=\frac1{152}(11,-60,64,12)^T
> $$
>
> satisfacen $Au=(0,1,0,0)^T$ y $Av=(0,0,1,0)^T$, como se comprueba por multiplicación. Son, respectivamente, la segunda y la tercera columnas de la inversa. Sus entradas $u_3=-20/19$ y $v_2=-60/152$ coinciden con los resultados.

```anki
deck: Matemáticas::Álgebra lineal::Determinantes
tags:
  - matemáticas
  - determinantes
  - cofactores
---
> [!note] Pregunta
> ¿Qué cofactor permite calcular la entrada $(i,j)$ de una inversa sin hallar toda la matriz?
===
> [!important] Respuesta
> El cofactor $C_{ji}$: $(A^{-1})_{ij}=C_{ji}/\det A$, siempre que $\det A\ne0$. Los índices se intercambian.
```

### Ejercicio 57 · Inversa de la adjunta 🤖

#### Enunciado

Sea $A\in M_n(K)$, con $n\ge2$. Demuestra que, si $A$ es invertible, su adjunta también lo es y[^57]

$$
\bigl(\operatorname{adj}(A)\bigr)^{-1}
=\frac1{|A|}A
=\operatorname{adj}(A^{-1}).
$$

La notación $|A|$ significa $\det A$.

> [!demostracion]- Demostración
> Como $A$ es invertible, $d=\det A$ es un escalar no nulo. La fórmula de la inversa da $\operatorname{adj}(A)=dA^{-1}$. Proponemos $B=d^{-1}A$ como inversa de la adjunta y verificamos ambos productos:
>
> $$
> \operatorname{adj}(A)B=(dA^{-1})(d^{-1}A)=A^{-1}A=I_n,
> $$
>
> $$
> B\operatorname{adj}(A)=(d^{-1}A)(dA^{-1})=AA^{-1}=I_n.
> $$
>
> Los factores escalares $d,d^{-1}$ conmutan con las matrices y su producto es $1$. Estas dos igualdades prueban que la adjunta es invertible y que su inversa es $d^{-1}A$.
>
> Falta identificar ese resultado con $\operatorname{adj}(A^{-1})$. Aplicamos la misma fórmula a la matriz invertible $A^{-1}$:
>
> $$
> \operatorname{adj}(A^{-1})=\det(A^{-1})(A^{-1})^{-1}.
> $$
>
> Se tiene $\det(A^{-1})=1/d$ y $(A^{-1})^{-1}=A$. Sustituyendo,
>
> $$
> \operatorname{adj}(A^{-1})=d^{-1}A
> =\bigl(\operatorname{adj}(A)\bigr)^{-1}.
> $$
>
> La hipótesis de invertibilidad permite todas las divisiones por $d$ y el uso de $A^{-1}$.

> [!recuerda]- Comprobación
> Para $A=\operatorname{diag}(2,3,4)$ se tiene $d=24$ y $\operatorname{adj}(A)=\operatorname{diag}(12,8,6)$. Su inversa es $\operatorname{diag}(1/12,1/8,1/6)=A/24$. La adjunta de $A^{-1}=\operatorname{diag}(1/2,1/3,1/4)$ da las mismas tres entradas por productos de los otros dos elementos diagonales.

```anki
deck: Matemáticas::Álgebra lineal::Determinantes
tags:
  - matemáticas
  - determinantes
  - cofactores
---
> [!note] Pregunta
> Si $A$ es invertible, ¿cómo se relacionan $(\operatorname{adj}A)^{-1}$, $A$ y $\operatorname{adj}(A^{-1})$?
===
> [!important] Respuesta
> La adjunta es invertible y $(\operatorname{adj}A)^{-1}=A/\det A=\operatorname{adj}(A^{-1})$, pues $\operatorname{adj}A=(\det A)A^{-1}$.
```

## Solución de sistemas mediante determinantes

### Condición para aplicar la regla de Cramer

La regla requiere tantos pivotes como incógnitas; un número igual de ecuaciones e incógnitas no garantiza por sí solo que pueda utilizarse.[^teoria]

> [!definicion] Sistema de Cramer
> Un sistema $AX=B$ es **de Cramer** si $A$ es cuadrada y $\det A\ne0$. Entonces tiene una única solución.

```anki
deck: Matemáticas::Álgebra lineal::Determinantes
tags:
  - matemáticas
  - determinantes
  - sistemas-lineales
---
> [!note] Pregunta
> ¿Qué dos condiciones definen un sistema de Cramer?
===
> [!important] Respuesta
> Que su matriz de coeficientes sea cuadrada y que su determinante sea no nulo. Tener el mismo número de ecuaciones e incógnitas sólo verifica la primera condición.
```

Si $A_j$ se obtiene de $A$ sustituyendo su columna $j$ por el término independiente $B$, la regla es $x_j=\det(A_j)/\det A$. En el ejercicio siguiente se comprueban primero las condiciones y se calculan los cocientes sólo en los casos que las cumplen.[^teoria]

```anki
deck: Matemáticas::Álgebra lineal::Determinantes
tags:
  - matemáticas
  - determinantes
  - sistemas-lineales
---
> [!note] Pregunta
> ¿Cómo obtiene la regla de Cramer la incógnita $x_j$?
===
> [!important] Respuesta
> $x_j=\det(A_j)/\det A$, con $\det A\ne0$; $A_j$ reemplaza únicamente la columna $j$ de $A$ por el término independiente completo.
```

### Ejercicio 58 · Decidir antes de aplicar Cramer 🤖

#### Enunciado

Determina si cada sistema es de Cramer y, en caso afirmativo, resuélvelo por la regla de Cramer:[^58]

**a)** Incógnitas $x_1,x_2,x_3,x_4$:

$$
\begin{cases}8x_1-x_2+x_3=1,\\x_1+x_2-x_4=2,\\3x_2+x_3-x_4=0.\end{cases}
$$

**b)** Incógnitas $x,y,z$:

$$
\begin{cases}x-y+2z=-3,\\4x+2y-z=1,\\3x+3y-3z=4.\end{cases}
$$

**c)** Incógnitas $x,y,z$:

$$
\begin{cases}x+y+2z=2,\\-x+z=-1,\\2x+y-z=1.\end{cases}
$$

**d)** Incógnitas $x_1,x_2,x_3,x_4$:

$$
\begin{cases}-5x_1+x_4=1,\\x_1+x_2-x_3+2x_4=1,\\-x_1+x_2+x_4=1,\\2x_1+2x_2+x_3-x_4=0.\end{cases}
$$

> [!resolucion]- Resolución de a) y b)
> **a) No es de Cramer.** Hay tres ecuaciones y cuatro incógnitas: la matriz de coeficientes es $3\times4$, de modo que no tiene determinante. No se cumple la condición de matriz cuadrada.
>
> **b) Tampoco es de Cramer.** La matriz es cuadrada, pero su tercera fila es la segunda menos la primera:
>
> $$
> (3,3,-3)=(4,2,-1)-(1,-1,2).
> $$
>
> Así, $R_3\leftarrow R_3-R_2+R_1$ produce una fila nula y el determinante vale cero. Los términos independientes cumplen también $4=1-(-3)$, pero la compatibilidad no subsana la ausencia de determinante no nulo. El enunciado sólo pide resolver por Cramer los casos que sean de Cramer.

> [!resolucion]- Resolución de c)
> La matriz y el término independiente son
>
> $$
> A=\begin{pmatrix}1&1&2\\-1&0&1\\2&1&-1\end{pmatrix},\qquad B=\begin{pmatrix}2\\-1\\1\end{pmatrix}.
> $$
>
> Laplace por la segunda fila da
>
> $$
> D=\det A=\begin{vmatrix}1&2\\1&-1\end{vmatrix}
> -\begin{vmatrix}1&1\\2&1\end{vmatrix}=-3-(-1)=-2.
> $$
>
> Es distinto de cero; el sistema es de Cramer. Sustituimos una columna cada vez:
>
> $$
> D_x=\begin{vmatrix}2&1&2\\-1&0&1\\1&1&-1\end{vmatrix}
> =\begin{vmatrix}1&2\\1&-1\end{vmatrix}
> -\begin{vmatrix}2&1\\1&1\end{vmatrix}=-3-1=-4.
> $$
>
> Para la segunda columna, Laplace por la primera fila da
>
> $$
> D_y=\begin{vmatrix}1&2&2\\-1&-1&1\\2&1&-1\end{vmatrix}
> =1(1-1)-2(1-2)+2(-1+2)=4.
> $$
>
> Para la tercera columna, desarrollamos por la segunda fila:
>
> $$
> D_z=\begin{vmatrix}1&1&2\\-1&0&-1\\2&1&1\end{vmatrix}
> =\begin{vmatrix}1&2\\1&1\end{vmatrix}
> +\begin{vmatrix}1&1\\2&1\end{vmatrix}=-1-1=-2.
> $$
>
> Los cocientes son
>
> $$
> \boxed{x=\frac{-4}{-2}=2,\qquad y=\frac4{-2}=-2,\qquad z=\frac{-2}{-2}=1.}
> $$

> [!resolucion]- Resolución de d)
> Escribimos
>
> $$
> A=\begin{pmatrix}-5&0&0&1\\1&1&-1&2\\-1&1&0&1\\2&2&1&-1\end{pmatrix},
> \qquad B=\begin{pmatrix}1\\1\\1\\0\end{pmatrix}.
> $$
>
> Laplace por la primera fila deja dos términos:
>
> $$
> D=-5\begin{vmatrix}1&-1&2\\1&0&1\\2&1&-1\end{vmatrix}
> -\begin{vmatrix}1&1&-1\\-1&1&0\\2&2&1\end{vmatrix}.
> $$
>
> El primer menor vale $-1-3+2=-2$; el segundo, $1+1+4=6$. Luego $D=(-5)(-2)-6=4\ne0$ y sí es un sistema de Cramer.
>
> Denotemos las columnas originales por $c_1,c_2,c_3,c_4$. La columna de términos independientes cumple
>
> $$
> B=c_3+c_4,
> $$
>
> porque $(0,-1,0,1)^T+(1,2,1,-1)^T=(1,1,1,0)^T$. Esta igualdad simplifica los cuatro determinantes de Cramer utilizando linealidad en la columna sustituida:
>
> - $D_1=\det(B,c_2,c_3,c_4)=0$: al escribir $B=c_3+c_4$, cada uno de los dos determinantes resultantes tiene una columna repetida.
> - $D_2=\det(c_1,B,c_3,c_4)=0$, por la misma razón.
> - $D_3=\det(c_1,c_2,B,c_4)=D+0=4$: el término con $c_3$ recupera $A$ y el término con $c_4$ repite la cuarta columna.
> - $D_4=\det(c_1,c_2,c_3,B)=0+D=4$: el término con $c_3$ repite la tercera columna y el término con $c_4$ recupera $A$.
>
> La regla de Cramer da
>
> $$
> \boxed{(x_1,x_2,x_3,x_4)=\left(\frac04,\frac04,\frac44,\frac44\right)=(0,0,1,1).}
> $$
>
> La resolución sigue siendo por Cramer: se han calculado sus cuatro determinantes por propiedades en lugar de expandirlos entrada por entrada.

> [!recuerda]- Comprobación
> En c), sustituir $(2,-2,1)$ produce $2,-1,1$ en los tres miembros izquierdos. En d), sustituir $(0,0,1,1)$ produce $1,1,1,0$. Estas igualdades comprueban las soluciones en las ecuaciones originales, sin recurrir a los determinantes utilizados para obtenerlas.

```anki
deck: Matemáticas::Álgebra lineal::Determinantes
tags:
  - matemáticas
  - determinantes
---
> [!note] Pregunta
> ¿Cómo se usa una columna que es suma de dos columnas al calcular un determinante?
===
> [!important] Respuesta
> Se descompone en la suma de dos determinantes, cambiando sólo esa columna. Si uno de los sumandos produce dos columnas iguales, ese determinante es cero.
```

El [[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/02 Determinantes/ejercicios/00 Índice de ejercicios|recorrido de ejercicios de determinantes]] conecta el cálculo por operaciones elementales con estas fórmulas de inversión y solución. En ambos casos, la condición decisiva es comprobar que el determinante usado como divisor no sea cero.

## 📚 Fuentes

- FCUL, *ALGA 2026/2027 — Exercícios: Enunciados para as aulas teórico-práticas*, fascículo 1–90, p. 14, ejercicios 55–58; cotejado con el fascículo 1–60 para estos ejercicios.
- [[Matemáticas/Álgebra lineal/Determinantes|Determinantes]], §§3–4: cofactores, adjunta, fórmula de la inversa y regla de Cramer; [[Matemáticas/Álgebra lineal/Matriz inversa|Matriz inversa]]: comprobación por ambos productos. Desarrollos, demostraciones y comprobaciones propios.

[^base]: FCUL, *ALGA 2026/2027 — Exercícios: Enunciados*, 1–90, p. 14, ejercicios 55–58.
[^55]: Misma fuente, p. 14, ejercicio 55, apartados a–c. Se conserva $\widehat A$ para la matriz de complementos algebraicos.
[^56]: Misma fuente, p. 14, ejercicio 56, apartados a–b.
[^57]: Misma fuente, p. 14, ejercicio 57; $|A|=\det A$.
[^58]: Misma fuente, p. 14, ejercicio 58, apartados a–d.
[^teoria]: Premisas consultadas en *Determinantes*, §§3–4: $C_{ij}=(-1)^{i+j}\det A_{ij}$, $A\operatorname{adj}(A)=\det(A)I$, $A^{-1}=\operatorname{adj}(A)/\det A$ y regla de Cramer. La escritura de la adjunta como transpuesta de la matriz de cofactores concreta esa fórmula entrada por entrada; la notación $\widehat A$ procede del ejercicio 55.

## 🧑‍🏫 Prompt para tutor conversacional

Actúa como profesor de Álgebra Lineal de primer curso. Elige un ejercicio entre 55 y 58 y deja que lo intente antes de abrir la resolución. Pide que indique qué fila y columna elimina, el signo del cofactor y cuándo intercambia sus índices. En el ejercicio 57, exige verificar los dos productos de la inversa propuesta. Antes de aplicar Cramer, pregunta si la matriz es cuadrada y si su determinante es no nulo. Comprueba las respuestas por multiplicación o sustitución en el sistema original y corrige primero el paso donde aparezca el error. Mantén visibles $C_{ij}=(-1)^{i+j}\det A_{ij}$, $\operatorname{adj}(A)=\widehat A^T$, $(A^{-1})_{ij}=C_{ji}/\det A$ y $x_j=\det(A_j)/\det A$, con $\det A\ne0$ y $A_j$ obtenida sustituyendo la columna $j$ por $B$. Por ejemplo, el sistema 58 c) tiene determinantes $D=-2,D_x=-4,D_y=4,D_z=-2$ y solución $(2,-2,1)$. Examina una pregunta cada vez, espera mi respuesta y alterna prueba, cálculo y repetición espaciada.

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "end" })
```
