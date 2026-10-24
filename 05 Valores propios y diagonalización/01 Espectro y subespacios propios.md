---
schema: nabla-phi-note/v1
title: Espectro y subespacios propios
aliases:
  - Valores y vectores propios
  - Autovalores, autovectores y espectro
asignatura: Álgebra Lineal y Geometría Analítica
rama:
  - Álgebra lineal
tipo:
  - lección
  - definición
  - teorema
nivel: universitario-introductorio
estado: borrador
capa: curricular
requiere:
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/04 Transformaciones lineales/03 Representación matricial e isomorfismos|Representación matricial e isomorfismos]]"
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/02 Determinantes/02 Propiedades y aplicaciones|Propiedades y aplicaciones de los determinantes]]"
desbloquea:
  - "[[Física/Grado/1º/Álgebra Lineal y Geometría Analítica/05 Valores propios y diagonalización/02 Diagonalización y matrices simétricas|Diagonalización y matrices simétricas]]"
relacionado:
  - "[[Matemáticas/Álgebra lineal/Diagonalización|Valores propios y diagonalización]]"
fsrs_goal: Calcula el espectro y bases de los subespacios propios de un operador o matriz, distingue multiplicidad algebraica y geométrica y justifica sus desigualdades e independencia.
tags:
  - matematicas
  - algebra-lineal
  - valores-propios
  - vectores-propios
  - espectro
  - fcul
---
```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "start" })
```
# Espectro y subespacios propios
Un operador suele mezclar las direcciones de una base. Algunas rectas que pasan por el origen, sin embargo, permanecen invariantes: cualquier vector de una de esas rectas sólo cambia por un factor escalar. Los valores propios identifican esos factores y los subespacios propios reúnen todas las direcciones que comparten uno de ellos.[^1]

Se trabaja con un operador lineal $T:V\to V$ sobre un espacio vectorial de dimensión finita y un cuerpo $K$. Para una matriz cuadrada $A\in M_n(K)$ se usa el mismo lenguaje.

## Valores y vectores propios
### Definición
> [!definicion] Valor propio y vector propio
> Un escalar $\lambda\in K$ es un **valor propio** de $T$ si existe un vector no nulo $v\in V$ tal que
> $$
> T(v)=\lambda v.
> $$
> El vector $v$ es un **vector propio** asociado a $\lambda$.[^1]

El vector cero se excluye porque satisface $T(0_V)=\lambda0_V$ para cualquier escalar y no distingue ninguna dirección. Todo múltiplo no nulo de un vector propio vuelve a ser propio para el mismo valor.

Geométricamente, la recta $\operatorname{span}\{v\}$ queda invariante. Si $\lambda>0$ sobre $\mathbb R$, se conserva el sentido; si $\lambda<0$, se invierte; si $\lambda=0$, la dirección queda anulada.

### Forma matricial
Para $A\in M_n(K)$,
$$
Av=\lambda v
\quad\Longleftrightarrow\quad
(\lambda I-A)v=0.
$$
Existe una solución no nula exactamente cuando $\lambda I-A$ no es invertible. Por tanto, los valores propios se detectan mediante un determinante.

> [!teorema] El valor propio cero
> $0$ es valor propio de $A$ si y sólo si $A$ es singular.

En efecto, $Av=0$ para algún $v\neq0$ equivale a que el núcleo sea no trivial, y eso equivale a que $A$ no sea invertible.

```anki
deck: Física::Álgebra Lineal::Valores propios y diagonalización
tags:
  - matematicas
  - algebra-lineal
  - valores-propios
---
> [!note] Pregunta
> ¿Qué condiciones deben satisfacer un valor propio $\lambda$ y un vector propio $v$ de un operador $T$?
===
> [!important] Respuesta
> $v\neq0$ y $T(v)=\lambda v$.
```

## Polinomio característico y espectro
### Polinomio característico
> [!definicion] Polinomio característico
> El **polinomio característico** de $A\in M_n(K)$ es
> $$
> \chi_A(t)=\det(tI-A).
> $$
> Es un polinomio mónico de grado $n$ y sus raíces en $K$ son exactamente los valores propios de $A$.[^2]

Si se adopta la convención $\det(A-tI)$, el polinomio puede diferir por el factor $(-1)^n$, pero tiene las mismas raíces y multiplicidades.

### Espectro
> [!definicion] Espectro
> El **espectro** de $T$ sobre $K$, denotado $\sigma_K(T)$, es el conjunto de sus valores propios pertenecientes a $K$.

El cuerpo importa. La rotación real de $90^\circ$ tiene matriz
$$
R=\begin{pmatrix}0&-1\\1&0\end{pmatrix},
\qquad
\chi_R(t)=t^2+1.
$$
Su espectro real es vacío, mientras que sobre $\mathbb C$ es $\{i,-i\}$. Un polinomio característico de grado $n$ tiene $n$ raíces complejas contadas con multiplicidad, pero puede no descomponerse completamente sobre otro cuerpo.

### Invariancia frente al cambio de base
Si $B=P^{-1}AP$ representa el mismo operador en otra base, entonces
$$
\det(tI-B)
=\det\bigl(P^{-1}(tI-A)P\bigr)
=\det(tI-A).
$$
El polinomio característico y el espectro pertenecen al operador, aunque se calculen mediante una matriz concreta.

## Subespacios propios
### Definición
> [!definicion] Subespacio propio
> Para un valor propio $\lambda$, el **subespacio propio** asociado es
> $$
> E_\lambda(T)=\ker(T-\lambda I_V).
> $$
> Sus elementos no nulos son exactamente los vectores propios asociados a $\lambda$; se añade el cero para obtener un subespacio.[^1]

Como es el núcleo de una transformación lineal, $E_\lambda(T)$ es un subespacio de $V$. En forma matricial se calcula resolviendo
$$
(A-\lambda I)x=0.
$$
Una base del conjunto de soluciones es una base del subespacio propio.

### Procedimiento de cálculo
El cálculo completo sigue una secuencia estable:

1. formar $tI-A$ y calcular $\chi_A(t)$;
2. factorizar el polinomio en el cuerpo elegido;
3. para cada raíz $\lambda$, reducir $A-\lambda I$;
4. parametrizar su núcleo y extraer una base de $E_\lambda$;
5. comprobar cada vector $v$ mediante $Av=\lambda v$.

## Ejemplo trabajado: espectro y subespacios
Considérese
$$
A=\begin{pmatrix}
2&1&0\\
0&2&0\\
0&0&3
\end{pmatrix}.
$$
Al ser triangular,
$$
\chi_A(t)=(t-2)^2(t-3),
$$
de modo que $\sigma(A)=\{2,3\}$.

Para $\lambda=2$,
$$
A-2I=
\begin{pmatrix}0&1&0\\0&0&0\\0&0&1\end{pmatrix}.
$$
Las ecuaciones imponen $y=0$ y $z=0$, mientras $x$ es libre. Por tanto,
$$
E_2=\operatorname{span}\{(1,0,0)\}.
$$
Para $\lambda=3$,
$$
A-3I=
\begin{pmatrix}-1&1&0\\0&-1&0\\0&0&0\end{pmatrix},
$$
de donde $x=y=0$ y
$$
E_3=\operatorname{span}\{(0,0,1)\}.
$$
La comprobación directa da $Ae_1=2e_1$ y $Ae_3=3e_3$.

## Multiplicidades
### Multiplicidad algebraica
> [!definicion] Multiplicidad algebraica
> La **multiplicidad algebraica** $m_a(\lambda)$ es la multiplicidad de $\lambda$ como raíz de $\chi_A(t)$.

En el ejemplo, $m_a(2)=2$ y $m_a(3)=1$.

### Multiplicidad geométrica
> [!definicion] Multiplicidad geométrica
> La **multiplicidad geométrica** $m_g(\lambda)$ es
> $$
> m_g(\lambda)=\dim E_\lambda(T)=\dim\ker(T-\lambda I_V).
> $$

En el ejemplo, $m_g(2)=1$ y $m_g(3)=1$. La raíz $2$ aparece dos veces en el polinomio, pero sólo aporta una dirección propia independiente.

### Por qué $1\leq m_g(\lambda)\leq m_a(\lambda)$
La desigualdad inferior se debe a que un valor propio posee al menos un vector propio no nulo, de modo que su espacio propio tiene dimensión positiva.

Para la desigualdad superior, sea $g=m_g(\lambda)$ y elíjase una base $(v_1,\ldots,v_g)$ de $E_\lambda$. Se extiende a una base de $V$. En esa base, la matriz de $T$ tiene forma por bloques
$$
[T]=\begin{pmatrix}
\lambda I_g&C\\
0&B
\end{pmatrix},
$$
porque $T(v_i)=\lambda v_i$. Entonces
$$
\chi_T(t)
=\det(tI-[T])
=(t-\lambda)^g\det(tI-B).
$$
El factor $(t-\lambda)^g$ divide al polinomio característico, así que la multiplicidad algebraica de $\lambda$ es al menos $g$.[^2]

```anki
deck: Física::Álgebra Lineal::Valores propios y diagonalización
tags:
  - matematicas
  - algebra-lineal
  - multiplicidades
---
> [!note] Pregunta
> ¿Cómo se comparan las multiplicidades geométrica y algebraica de un valor propio $\lambda$?
===
> [!important] Respuesta
> $1\leq m_g(\lambda)\leq m_a(\lambda)$.
```

## Independencia entre subespacios propios
> [!teorema] Vectores propios de valores distintos
> Los vectores propios asociados a valores propios distintos son linealmente independientes.[^1]

Sean $v_1,\ldots,v_r$ vectores propios asociados a valores distintos $\lambda_1,\ldots,\lambda_r$. La prueba se hace por inducción. Supóngase
$$
c_1v_1+\cdots+c_rv_r=0.
$$
Al aplicar $T-\lambda_rI$, el último término desaparece:
$$
c_1(\lambda_1-\lambda_r)v_1+
\cdots+
c_{r-1}(\lambda_{r-1}-\lambda_r)v_{r-1}=0.
$$
Por la hipótesis inductiva, cada coeficiente $c_i(\lambda_i-\lambda_r)$ es cero. Como los valores son distintos, $c_i=0$ para $i<r$; la relación original da también $c_r=0$.

En particular, si una matriz $n\times n$ tiene $n$ valores propios distintos en $K$, ya posee $n$ vectores propios independientes. Esta condición será suficiente para diagonalizarla.

## Condiciones de validez y errores frecuentes
El polinomio característico sólo está definido para matrices cuadradas u operadores $V\to V$. Una transformación entre espacios distintos no puede comparar un vector con un múltiplo de sí mismo sin una identificación adicional.

Encontrar una raíz de $\chi_A$ no basta para hallar los vectores propios: hay que resolver el núcleo correspondiente. Tampoco debe contarse el vector cero como vector propio. Finalmente, las multiplicidades algebraica y geométrica miden objetos diferentes y pueden no coincidir.

## 📚 Fuentes
### Material base
- Faculdade de Ciências da Universidade de Lisboa, [*Álgebra Linear e Geometria Analítica — programa 2026/27*](https://fenix.ciencias.ulisboa.pt/courses/algana-2817829258658182/programa), alcance curricular de subespacios propios, polinomio característico y multiplicidades.

### Ampliación académica
[^1]: Jim Hefferon, [*Linear Algebra*](https://hefferon.net/linearalgebra/), texto universitario abierto; valores propios, espacios propios e independencia.
[^2]: MIT OpenCourseWare, [*18.06SC Linear Algebra — Eigenvalues and Eigenvectors*](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/positive-definite-matrices-and-applications/eigenvalues-and-eigenvectors/), cálculo del polinomio característico, multiplicidades y estructura de los espacios propios.

## 🧑‍🏫 Prompt para tutor conversacional
Actúa como tutor universitario de Álgebra Lineal. Da una matriz cuadrada pequeña y pide calcular su polinomio característico, espectro y una base de cada subespacio propio. Exige distinguir multiplicidades algebraicas y geométricas, comprobar los vectores obtenidos y justificar por qué vectores propios de valores distintos son independientes. Ofrece pistas graduadas y detén cualquier cálculo que cambie silenciosamente el cuerpo de escalares.

```dataviewjs
await dv.view("Planes/Estudio/Scripts/study-session", { location: "end" })
```
