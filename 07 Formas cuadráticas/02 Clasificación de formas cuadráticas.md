---
schema: nabla-phi-note/v1
title: Clasificación de formas cuadráticas
aliases:
  - Signo de una forma cuadrática
  - Criterio de Sylvester
asignatura: Álgebra Lineal y Geometría Analítica
rama:
  - Álgebra lineal
tipo:
  - lección
  - clasificación
  - teorema
nivel: universitario-introductorio
estado: borrador
capa: curricular
requiere:
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/07 Formas cuadráticas/01 Formas cuadráticas y matrices simétricas|Formas cuadráticas y matrices simétricas]]"
desbloquea: []
relacionado:
  - "[[Matemáticas/Álgebra lineal/Diagonalización|Valores propios y diagonalización]]"
key concepts:
  - "[[Matemáticas/Álgebra lineal/Teorema espectral|Teorema espectral]]"
  - "[[Matemáticas/Álgebra lineal/Criterio de Sylvester|Criterio de Sylvester]]"
fsrs_goal: Clasifica una forma cuadrática real mediante valores propios, vectores de prueba o el criterio de Sylvester, y determina cómo cambia la clasificación al variar un parámetro.
tags:
  - matematicas
  - algebra-lineal
  - formas-cuadraticas
  - definida-positiva
  - criterio-sylvester
  - fcul
---
```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "start" })
```
# Clasificación de formas cuadráticas
Clasificar una forma cuadrática significa determinar qué signos puede tomar fuera del origen. La matriz simétrica permite responder mediante tres lecturas compatibles: los valores propios, ciertos menores principales y la evaluación sobre vectores elegidos con intención.[^1]

Sea $q(x)=x^TAx$ con $A\in M_n(\mathbb R)$ simétrica.

## Clases según el signo
### Definida positiva
> [!definicion] Forma definida positiva
> $q$ es **definida positiva** si
> $$
> q(x)>0
> $$
> para todo $x\neq0$.

### Definida negativa
> [!definicion] Forma definida negativa
> $q$ es **definida negativa** si $q(x)<0$ para todo $x\neq0$.

### Semidefinida positiva
> [!definicion] Forma semidefinida positiva
> $q$ es **semidefinida positiva** si $q(x)\geq0$ para todo $x$ y existe algún $x\neq0$ con $q(x)=0$.

### Semidefinida negativa
> [!definicion] Forma semidefinida negativa
> $q$ es **semidefinida negativa** si $q(x)\leq0$ para todo $x$ y existe algún $x\neq0$ con $q(x)=0$.

### Indefinida
> [!definicion] Forma indefinida
> $q$ es **indefinida** si existen vectores $u,v$ tales que
> $$
> q(u)>0,
> \qquad
> q(v)<0.
> $$

La forma nula es simultáneamente no negativa y no positiva. Con la convención anterior se considera semidefinida positiva y semidefinida negativa, pero nunca definida.

```anki
deck: Física::Álgebra Lineal::Formas cuadráticas
tags:
  - matematicas
  - algebra-lineal
  - clasificacion
---
> [!note] Pregunta
> ¿Qué evidencia basta para demostrar que una forma cuadrática es indefinida?
===
> [!important] Respuesta
> Encontrar dos vectores $u,v$ con $q(u)>0$ y $q(v)<0$.
```

## Clasificación por valores propios
Por el [[Matemáticas/Álgebra lineal/Teorema espectral|teorema espectral]] existe una matriz ortogonal $Q$ tal que
$$
Q^TAQ=D=\operatorname{diag}(\lambda_1,\ldots,\lambda_n).
$$
Con $x=Qy$,
$$
q(x)=\lambda_1y_1^2+\cdots+\lambda_ny_n^2.
$$
Como $Q$ es invertible, $x\neq0$ equivale a $y\neq0$. El signo queda determinado por los valores propios.[^1]

> [!teorema] Criterio espectral
> Para una matriz simétrica real:
> - todos los valores propios positivos $\Longleftrightarrow$ definida positiva;
> - todos negativos $\Longleftrightarrow$ definida negativa;
> - todos no negativos y alguno cero $\Longleftrightarrow$ semidefinida positiva;
> - todos no positivos y alguno cero $\Longleftrightarrow$ semidefinida negativa;
> - valores propios de ambos signos $\Longleftrightarrow$ indefinida.

La cantidad de valores propios positivos, negativos y nulos, contados con multiplicidad, se llama **inercia** de la forma. Esos tres números no cambian bajo transformaciones por congruencia; esta invariancia es la ley de inercia de Sylvester.[^2]

## Vectores de prueba
Evaluar $q$ en vectores sencillos puede resolver parte de la clasificación sin calcular todo el espectro.

Los vectores canónicos satisfacen
$$
q(e_i)=a_{ii}.
$$
Por ello, una entrada diagonal negativa impide que la forma sea definida positiva, y una positiva impide que sea definida negativa.

Para demostrar indefinición basta encontrar signos opuestos. Por ejemplo,
$$
q(x,y)=x^2-y^2
$$
satisface $q(1,0)=1$ y $q(0,1)=-1$.

Sin embargo, varios valores positivos no demuestran positividad global. La forma
$$
q(x,y)=x^2+4xy+y^2
$$
vale $1$ en ambos vectores canónicos, pero
$$
q(1,-1)=-2.
$$
Es indefinida. Los vectores de prueba son decisivos para refutar una clase, pero una clasificación universal requiere un criterio completo.

## Menores principales iniciales
El [[Matemáticas/Álgebra lineal/Criterio de Sylvester|criterio de Sylvester]] permite reconocer definitud positiva o negativa a partir de estos menores.

Para $A\in M_n(\mathbb R)$, el menor principal inicial de orden $k$ es
$$
\Delta_k=det A_k,
$$
donde $A_k$ es la submatriz formada por las primeras $k$ filas y columnas.

> [!teorema] Criterio de Sylvester: positividad
> La forma $q(x)=x^TAx$ es definida positiva si y sólo si
> $$
> \Delta_1>0,\quad\Delta_2>0,\quad\ldots,\quad\Delta_n>0.
> $$

> [!teorema] Criterio de Sylvester: negatividad
> La forma es definida negativa si y sólo si los menores iniciales alternan de signo:
> $$
> \Delta_1<0,\quad\Delta_2>0,\quad\Delta_3<0,\quad\ldots
> $$
> Equivalentemente, $(-1)^k\Delta_k>0$ para cada $k$.[^2]

El criterio puede entenderse mediante una factorización por congruencia $A=LDL^T$ sin intercambios: los cocientes $\Delta_k/\Delta_{k-1}$ aparecen en la diagonal de $D$. Que todos sean positivos equivale a positividad; aplicar el mismo argumento a $-A$ produce el patrón alternante para negatividad.

### Ejemplo trabajado con Sylvester
Para
$$
A=\begin{pmatrix}2&2\\2&5\end{pmatrix},
$$
se tiene
$$
\Delta_1=2>0,
\qquad
\Delta_2=10-4=6>0.
$$
La forma $2x^2+4xy+5y^2$ es definida positiva. Esto coincide con sus valores propios $1$ y $6$.

## El caso semidefinido exige más cuidado
El criterio basado sólo en menores principales **iniciales** no se extiende sustituyendo $>$ por $\geq$. Por ejemplo,
$$
A=\begin{pmatrix}0&0\\0&-1\end{pmatrix}
$$
tiene $\Delta_1=0$ y $\Delta_2=0$, ambos no negativos, pero $q(0,1)=-1$ y la forma no es semidefinida positiva.

Para una matriz simétrica, la semidefinición positiva equivale a que todos sus valores propios sean no negativos. También equivale a que **todos** los menores principales, no sólo los iniciales, sean no negativos. En dimensión pequeña, el método espectral suele ser el criterio más directo y menos ambiguo.[^1]

## Ejemplo con parámetro
Considérese
$$
A_a=\begin{pmatrix}a&1\\1&a\end{pmatrix},
\qquad
q_a(x,y)=a x^2+2xy+a y^2.
$$
Los valores propios son
$$
\lambda_1=a+1,
\qquad
\lambda_2=a-1.
$$
Por tanto:

- si $a>1$, ambos son positivos y $q_a$ es definida positiva;
- si $a=1$, son $2$ y $0$, luego es semidefinida positiva;
- si $-1<a<1$, tienen signos opuestos y es indefinida;
- si $a=-1$, son $0$ y $-2$, luego es semidefinida negativa;
- si $a<-1$, ambos son negativos y es definida negativa.

El mismo resultado se obtiene con Sylvester para los casos definidos:
$$
\Delta_1=a,
\qquad
\Delta_2=a^2-1.
$$
La condición $a>0$ y $a^2-1>0$ da $a>1$; el patrón $a<0$ y $a^2-1>0$ da $a<-1$. Los valores frontera requieren el análisis espectral.

## Concordancia de métodos
La diagonalización ortogonal transforma la forma sin cambiar los signos posibles. El criterio espectral lee esos signos en la diagonal resultante. Sylvester detecta los casos definidos mediante determinantes, mientras que los vectores de prueba pueden refutar rápidamente una clasificación o demostrar indefinición.

Una estrategia fiable es:

1. buscar primero señales inmediatas mediante vectores sencillos;
2. usar Sylvester si se sospecha positividad o negatividad definida;
3. calcular valores propios cuando aparecen menores nulos, parámetros o casos semidefinidos;
4. comprobar la conclusión evaluando la forma en direcciones representativas.

## Práctica de transferencia y solución razonada

### Ejercicio — tres patrones de signo

Clasifica mediante Sylvester las matrices $A=\operatorname{diag}(2,3)$ y $B=\operatorname{diag}(-2,-1)$. Explica qué permite concluir el resultado para $C=\operatorname{diag}(0,-1)$.

### Soluciones razonadas

Para $A$, los menores iniciales son $\Delta_1=2$ y $\Delta_2=6$; ambos son positivos, así que la forma es definida positiva. Para $B$, $\Delta_1=-2$ y $\Delta_2=2$, por lo que $(-1)^k\Delta_k>0$ en los dos órdenes y la forma es definida negativa. Para $C$, los menores iniciales son $0$ y $0$; el criterio estricto no decide. Al evaluar $q_C(0,1)=-1$, se descarta la semidefinición positiva y se confirma que no basta con reemplazar desigualdades estrictas por no estrictas.

## Condiciones de validez y errores frecuentes
Los criterios suponen que se usa la matriz simétrica representante. Una matriz no simétrica debe reemplazarse por $(A+A^T)/2$ antes de clasificar la forma.

Un determinante positivo no garantiza definición positiva: sólo informa del producto de los valores propios. En dimensión par también puede corresponder a un número par de valores negativos. Tampoco debe llamarse indefinida a una forma sólo porque se anule en un vector no nulo; puede ser semidefinida.

## 📚 Fuentes
### Material base
- Faculdade de Ciências da Universidade de Lisboa, [*Álgebra Linear e Geometria Analítica — programa 2026/27*](https://fenix.ciencias.ulisboa.pt/courses/algana-2817829258658182/programa), alcance curricular de clasificación por valores propios y menores principales.

### Ampliación académica
[^1]: MIT OpenCourseWare, [*Positive Definite Matrices and Minima*](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/positive-definite-matrices-and-applications/positive-definite-matrices-and-minima/), clasificación espectral y formas definidas positivas.
[^2]: Jim Hefferon, [*Linear Algebra*](https://hefferon.net/linearalgebra/), texto universitario abierto; congruencia, ley de inercia y criterio de Sylvester.

## 🧑‍🏫 Prompt para tutor conversacional
Actúa como tutor universitario de Álgebra Lineal. Presenta una forma cuadrática y pide clasificarla primero con vectores de prueba, después con valores propios y, si procede, con el criterio de Sylvester. Incluye un parámetro que produzca casos definidos, semidefinidos e indefinidos. Exige explicar por qué los métodos concuerdan y por qué los menores principales iniciales no bastan para certificar semidefinición.

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "end" })
```
