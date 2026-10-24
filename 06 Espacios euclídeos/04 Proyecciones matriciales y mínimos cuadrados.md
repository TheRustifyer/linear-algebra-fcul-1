---
schema: nabla-phi-note/v1
title: Proyecciones matriciales y mínimos cuadrados
aliases:
  - Matriz de proyección ortogonal
  - Ecuaciones normales
asignatura: Álgebra Lineal y Geometría Analítica
rama:
  - Álgebra lineal
tipo:
  - lección
  - ampliación
  - procedimiento
nivel: universitario-introductorio
estado: borrador
capa: curricular
alcance: ampliación curricular externa
requiere:
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/06 Espacios euclídeos/02 Bases ortogonales y Gram-Schmidt|Bases ortogonales y Gram–Schmidt]]"
desbloquea: []
relacionado:
  - "[[Matemáticas/Álgebra lineal/Espacios vectoriales/11 Producto escalar y Gram–Schmidt|Producto escalar y Gram–Schmidt]]"
  - "[[Matemáticas/Álgebra/Sistemas de ecuaciones lineales#14. Sistemas sobredeterminados y mínimos cuadrados|Sistemas sobredeterminados y mínimos cuadrados]]"
key concepts:
  - "[[Matemáticas/Álgebra lineal/Matriz de proyección ortogonal|Matriz de proyección ortogonal]]"
  - "[[Matemáticas/Álgebra lineal/Matriz ortogonal|Matriz ortogonal]]"
fsrs_goal: Construye matrices de proyección ortogonal, verifica simetría e idempotencia y obtiene una solución de mínimos cuadrados mediante las ecuaciones normales, interpretando el residuo.
tags:
  - matematicas
  - algebra-lineal
  - proyecciones
  - minimos-cuadrados
  - matrices-ortogonales
  - ampliacion
  - fcul
---
```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "start" })
```
# Proyecciones matriciales y mínimos cuadrados
Una proyección ortogonal separa un vector en una componente perteneciente a un subespacio y un residuo perpendicular. Al escribir esa operación en coordenadas aparece la [[Matemáticas/Álgebra lineal/Matriz de proyección ortogonal|matriz de proyección ortogonal]], que es simétrica e idempotente. La misma geometría convierte un sistema incompatible en un problema con una mejor aproximación bien definida.[^1]

> [!nota] Ampliación curricular externa
> Las matrices de proyección y los mínimos cuadrados prolongan la teoría de ortogonalidad hacia sistemas sobredeterminados y ajuste de datos.

## Proyección sobre una recta
Sea $a\in\mathbb R^m$ no nulo y $L=\operatorname{span}\{a\}$. La proyección de $b\in\mathbb R^m$ sobre $L$ es
$$
\operatorname{proj}_L(b)
=\frac{a^Tb}{a^Ta}a.
$$
Como $a^Tb$ es un escalar, puede reagruparse:
$$
\operatorname{proj}_L(b)
=\left(\frac{aa^T}{a^Ta}\right)b.
$$

> [!definicion] Matriz de proyección sobre una recta
> La matriz de proyección ortogonal sobre $L=\operatorname{span}\{a\}$ es
> $$
> P_L=\frac{aa^T}{a^Ta}.
> $$

Si $a$ es unitario, $P_L=aa^T$. La fórmula exige $a\neq0$ para que $a^Ta>0$.

### Ejemplo trabajado
Para $a=(1,2)^T$,
$$
P_L=\frac15
\begin{pmatrix}1&2\\2&4\end{pmatrix}.
$$
Al proyectar $b=(3,4)^T$,
$$
P_Lb=\frac15\begin{pmatrix}11\\22\end{pmatrix}
=\begin{pmatrix}11/5\\22/5\end{pmatrix}.
$$
El residuo $(4/5,-2/5)^T$ es ortogonal a $a$.

## Proyección sobre un subespacio
Sea $A\in M_{m\times n}(\mathbb R)$ con columnas linealmente independientes. Su espacio columna $U=\operatorname{Col}(A)$ tiene dimensión $n$, y $A^TA$ es invertible.

> [!teorema] Matriz de proyección sobre el espacio columna
> La proyección ortogonal sobre $U$ es
> $$
> P=A(A^TA)^{-1}A^T.
> $$
> Para cada $b\in\mathbb R^m$, el vector proyectado es $p=Pb\in U$.[^1]

Como $p\in U$, se escribe $p=A\widehat x$. La condición de ortogonalidad del residuo $r=b-A\widehat x$ respecto de todas las columnas de $A$ es
$$
A^T(b-A\widehat x)=0.
$$
Por tanto,
$$
A^TA\widehat x=A^Tb,
\qquad
\widehat x=(A^TA)^{-1}A^Tb,
$$
y al sustituir se obtiene la fórmula de $P$.

Si las columnas de $A$ son ortonormales, $A^TA=I$ y la fórmula se simplifica a $P=AA^T$.

## Simetría e idempotencia
> [!teorema] Propiedades de una proyección ortogonal
> Para $P=A(A^TA)^{-1}A^T$,
> $$
> P^T=P,
> \qquad
> P^2=P.
> $$

La matriz $A^TA$ es simétrica y su inversa también. Por ello,
$$
P^T=A(A^TA)^{-1}A^T=P.
$$
Además,
$$
P^2
=A(A^TA)^{-1}A^TA(A^TA)^{-1}A^T
=P.
$$
La idempotencia expresa que proyectar un vector ya proyectado no produce ningún cambio.

La matriz $I-P$ proyecta sobre $U^\perp$: el residuo es
$$
r=(I-P)b,
$$
y satisface $A^Tr=0$.

```anki
deck: Física::Álgebra Lineal::Espacios euclídeos
tags:
  - matematicas
  - algebra-lineal
  - proyeccion-matricial
---
> [!note] Pregunta
> ¿Qué dos identidades caracterizan la matriz de una proyección ortogonal?
===
> [!important] Respuesta
> Es simétrica e idempotente: $P^T=P$ y $P^2=P$.
```

## Mejor aproximación
> [!teorema] Proyección como vector más próximo
> Si $p=Pb$ es la proyección de $b$ sobre $U$, entonces $p$ es el único vector de $U$ que minimiza $\|b-u\|$.

Para cualquier $u\in U$, se descompone
$$
b-u=(b-p)+(p-u).
$$
El primer sumando pertenece a $U^\perp$ y el segundo a $U$. Por Pitágoras,
$$
\|b-u\|^2
=\|b-p\|^2+\|p-u\|^2
\geq\|b-p\|^2.
$$
La igualdad sólo se da para $u=p$. Esta propiedad no afirma que $p=b$; eso ocurre únicamente cuando $b\in U$.

## Mínimos cuadrados y ecuaciones normales
Para un sistema $Ax=b$ posiblemente incompatible, una solución de mínimos cuadrados es un vector $\widehat x$ que minimiza
$$
\|Ax-b\|^2.
$$

> [!definicion] Ecuaciones normales
> La condición de ortogonalidad del residuo produce
> $$
> A^TA\widehat x=A^Tb.
> $$
> Estas igualdades son las **ecuaciones normales**.[^2]

Si las columnas de $A$ son independientes, $A^TA$ es invertible y la solución es única:
$$
\widehat x=(A^TA)^{-1}A^Tb.
$$
El vector $A\widehat x=Pb$ es la mejor aproximación a $b$ dentro del espacio columna. El residuo $b-A\widehat x$ es ortogonal a ese espacio.

### Ejemplo trabajado: dos ecuaciones incompatibles
Las ecuaciones $x=1$ y $x=3$ se escriben
$$
A=\begin{pmatrix}1\\1\end{pmatrix},
\qquad
b=\begin{pmatrix}1\\3\end{pmatrix}.
$$
Las ecuaciones normales dan
$$
2\widehat x=4,
\qquad
\widehat x=2.
$$
La proyección es $A\widehat x=(2,2)^T$ y el residuo
$$
b-A\widehat x=(-1,1)^T
$$
es ortogonal a la columna $(1,1)^T$. La aproximación equilibra los dos errores.

## Matrices ortogonales
> [!definicion] Matriz ortogonal
> Una [[Matemáticas/Álgebra lineal/Matriz ortogonal|matriz ortogonal]] cuadrada real $Q$ satisface
> $$
> Q^TQ=I.
> $$
> Equivalentemente, sus columnas forman una base ortonormal y $Q^{-1}=Q^T$.[^1]

Para $x,y\in\mathbb R^n$,
$$
\langle Qx,Qy\rangle
=x^TQ^TQy
=x^Ty
=\langle x,y\rangle.
$$
Por tanto, $Q$ conserva productos internos, normas, distancias y ángulos. Las rotaciones y reflexiones respecto de subespacios que pasan por el origen son ejemplos.

La matriz
$$
Q=\begin{pmatrix}0&-1\\1&0\end{pmatrix}
$$
representa una rotación de $90^\circ$ y satisface $Q^TQ=I$. Su determinante es $1$; una reflexión ortogonal tiene determinante $-1$.

## Práctica de transferencia y solución razonada

### Ejercicio — proyección sobre una recta

Construye la matriz de proyección sobre $L=\operatorname{span}\{(1,1)^T\}$ y proyecta $b=(2,0)^T$. Comprueba que el residuo es perpendicular a $L$.

### Soluciones razonadas

Con $a=(1,1)^T$, la fórmula da
$$
P_L=\frac{aa^T}{a^Ta}=\frac12\begin{pmatrix}1&1\\1&1\end{pmatrix},\qquad
P_Lb=\begin{pmatrix}1\\1\end{pmatrix}.
$$
El residuo es $r=b-P_Lb=(1,-1)^T$, y $a^Tr=1-1=0$. Además, $P_L^T=P_L$ y $P_L^2=P_L$, como debe ocurrir para una proyección ortogonal.

## Condiciones de validez y límites
La fórmula $A(A^TA)^{-1}A^T$ exige columnas independientes. Si no lo son, $A^TA$ es singular; la proyección sigue existiendo, pero debe construirse a partir de una base de $\operatorname{Col}(A)$, por ejemplo tras eliminar columnas redundantes u ortonormalizar una base.

Una solución de mínimos cuadrados minimiza el residuo, pero no convierte en compatible un sistema originalmente incompatible. Las ecuaciones normales siempre expresan ortogonalidad; la unicidad de $\widehat x$ requiere núcleo trivial de $A$.

## 📚 Fuentes
### Material base
- Faculdade de Ciências da Universidade de Lisboa, [*Álgebra Linear e Geometria Analítica — programa 2026/27*](https://fenix.ciencias.ulisboa.pt/courses/algana-2817829258658182/programa), contexto curricular de proyecciones; mínimos cuadrados como ampliación externa.

### Ampliación académica
[^1]: MIT OpenCourseWare, [*Projection Matrices and Least Squares*](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/orthogonality/projection-matrices-and-least-squares/), matrices de proyección, mejor aproximación y ecuaciones normales.
[^2]: [[Matemáticas/Álgebra/Sistemas de ecuaciones lineales#14. Sistemas sobredeterminados y mínimos cuadrados|Sistemas sobredeterminados y mínimos cuadrados]], desarrollo canónico y trazable del ajuste de sistemas incompatibles.

## 🧑‍🏫 Prompt para tutor conversacional
Actúa como tutor universitario de Álgebra Lineal. Da una matriz con columnas independientes y un vector fuera de su espacio columna. Pide construir la matriz de proyección, comprobar $P^T=P$ y $P^2=P$, calcular la proyección y verificar la ortogonalidad del residuo. Después formula el mismo cálculo como mínimos cuadrados mediante ecuaciones normales y termina comprobando qué magnitudes conserva una matriz ortogonal.

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "end" })
```
