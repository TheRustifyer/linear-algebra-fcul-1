---
title: Ejercicios 31–34 — sistemas lineales
asignatura: Álgebra Lineal y Geometría Analítica
capa: curricular
tipo: ejercicios
nivel: universitario-introductorio
estado: revisado
fsrs_goal: Reconocer ecuaciones lineales, resolver sistemas por Gauss–Jordan y clasificar su compatibilidad según el rango y los parámetros.
tags:
  - matematicas
  - algebra-lineal
  - sistemas-lineales
  - ejercicios
  - fcul
---

# Sistemas lineales · ejercicios 31–34

> [!tip] Cómo leer las soluciones
> 📘 reproduce o desarrolla una respuesta de las fichas del curso. 🤖 identifica una resolución o comprobación añadida por IA. En los ejercicios con 🤖, el último apartado propone un control que puedes repetir antes de mirar la respuesta.

## Reconocer ecuaciones lineales

### Ejercicio 31 · Linealidad de una ecuación 🤖

#### Enunciado

Decide si cada ecuación es lineal en las incógnitas $x$, $y$ y $z$:

1. $x+\pi y+\sqrt[3]{2}\,z=e$.
2. $x^2+xy+z=2$.
3. $x+\operatorname{sen}y+2z=0$.
4. $4x+\left(\operatorname{sen}\frac{\pi}{10}\right)^2y+23z=\cos\frac{\pi}{5}$.
5. $(-x+8y-2z)^2=1$.
6. $ax+6y-3z=9$, con $a\in\mathbb R$ fijo.

> [!example]- Resolución
>
> Una ecuación lineal tiene la forma $c_1x+c_2y+c_3z=d$, con coeficientes independientes de las incógnitas.
>
> - **a), d) y f) son lineales.** Los números $\pi$, $\sqrt[3]{2}$ y $e$, los valores trigonométricos de ángulos fijos y el parámetro fijo $a$ son constantes.
> - **b) no es lineal:** aparecen $x^2$ y $xy$.
> - **c) no es lineal:** $\operatorname{sen}y$ depende de una incógnita de manera no lineal.
> - **e) no es lineal:** al desarrollar el cuadrado aparecen términos cuadráticos y productos de incógnitas.

> [!success]- Comprobación
>
> Sustituye cada coeficiente aparentemente complicado por un número. Las ecuaciones a), d) y f) siguen siendo sumas de constantes por $x,y,z$. En b), c) y e) permanece alguna función no lineal de las incógnitas.

---

## Eliminación de Gauss–Jordan

### Ejercicio 32 · Soluciones generales y sistema homogéneo 📘🤖

#### Enunciado

Resuelve por Gauss–Jordan los dos sistemas. Para cada uno, indica tres soluciones particulares y la solución general del sistema homogéneo asociado.

**a)** Incógnitas $x_1,x_2,x_3,x_4,x_5$:

$$
\begin{cases}
x_1-3x_2+2x_3+2x_4+7x_5=8,\\
x_1-3x_2+2x_3+3x_4+11x_5=11,\\
3x_1-9x_2+6x_3-3x_4-15x_5=-3,\\
-2x_1+6x_2-4x_3+2x_4+10x_5=2.
\end{cases}
$$

**b)** Incógnitas $x_1,x_2,x_3,x_4$:

$$
\begin{cases}
3x_1+7x_3+5x_4=21,\\
x_1+3x_3+3x_4=9,\\
2x_1+5x_3+4x_4=15,\\
x_1+2x_3+x_4=6.
\end{cases}
$$

> [!example]- Resolución de a) 📘
>
> La ficha da la siguiente forma escalonada reducida de la matriz ampliada:
>
> $$
> \left[
> \begin{array}{ccccc|c}
> 1&-3&2&0&-1&2\\
> 0&0&0&1&4&3\\
> 0&0&0&0&0&0\\
> 0&0&0&0&0&0
> \end{array}
> \right].
> $$
>
> Hay dos pivotes y tres variables libres. Si $s=x_2$, $t=x_3$ y $u=x_5$, se lee
>
> $$
> (x_1,x_2,x_3,x_4,x_5)
> =(2,0,0,3,0)
> +s(3,1,0,0,0)
> +t(-2,0,1,0,0)
> +u(1,0,0,-4,1).
> $$
>
> Tres soluciones, obtenidas con $(s,t,u)=(0,0,0)$, $(1,0,0)$ y $(-1,0,0)$, son
>
> $$
> (2,0,0,3,0),\qquad(5,1,0,3,0),\qquad(-1,-1,0,3,0).
> $$
>
> El sistema homogéneo asociado tiene como solución general la parte sin vector particular:
>
> $$
> (x_1,x_2,x_3,x_4,x_5)
> =s(3,1,0,0,0)+t(-2,0,1,0,0)+u(1,0,0,-4,1).
> $$

> [!example]- Resolución de b) 📘
>
> La matriz ampliada reducida es
>
> $$
> \left[
> \begin{array}{cccc|c}
> 1&0&0&-3&0\\
> 0&0&1&2&3\\
> 0&0&0&0&0\\
> 0&0&0&0&0
> \end{array}
> \right].
> $$
>
> Tomando $s=x_4$ y $t=x_2$, se obtiene
>
> $$
> (x_1,x_2,x_3,x_4)
> =(0,0,3,0)+s(3,0,-2,1)+t(0,1,0,0).
> $$
>
> Tres soluciones de la ficha son
>
> $$
> (0,0,3,0),\qquad(0,1,3,0),\qquad(3,4,1,1).
> $$
>
> El sistema homogéneo asociado tiene solución general
>
> $$
> (x_1,x_2,x_3,x_4)=s(3,0,-2,1)+t(0,1,0,0).
> $$

> [!success]- Comprobación 🤖
>
> Sustituye cada vector particular en las ecuaciones originales: los miembros izquierdos deben coincidir con los términos independientes. Sustituye por separado cada vector director de las soluciones generales: debe producir ceros. El número de vectores directores es $n-r(A)$: tres en a) y dos en b).

---

## Compatibilidad y número de soluciones

### Ejercicio 33 · ¿Qué determina el tamaño de un sistema? 🤖

#### Enunciado

Sea $(S)$ un sistema lineal de $m$ ecuaciones y $n$ incógnitas. Justifica si son verdaderas o falsas las afirmaciones:

1. Si $m>n$, entonces $(S)$ es incompatible.
2. Si $m<n$, entonces $(S)$ es incompatible.
3. Si $m<n$, entonces $(S)$ es incompatible o compatible indeterminado.
4. Si $(S)$ es compatible determinado, entonces $m=n$.
5. Si $m=n$, entonces $(S)$ es compatible determinado.

> [!example]- Resolución
>
> - **a) Falsa.** $x=0$ y $x=0$ son dos ecuaciones en una incógnita y tienen una única solución.
> - **b) Falsa.** $x+y=0$ es una ecuación en dos incógnitas y tiene infinitas soluciones.
> - **c) Verdadera.** Si el sistema es compatible, $r(A)\le m<n$. Hay por tanto al menos $n-r(A)>0$ variables libres.
> - **d) Falsa.** El ejemplo de a) es compatible determinado y cumple $m>n$.
> - **e) Falsa.** El sistema $x+y=0$, $0=1$ tiene dos ecuaciones y dos incógnitas, pero es incompatible. También $x+y=0$, $2x+2y=0$ es cuadrado y tiene infinitas soluciones.

> [!success]- Comprobación
>
> La condición de solución única es
>
> $$
> r(A)=r([A\mid b])=n,
> $$
>
> independientemente de que $m$ sea igual o mayor que $n$. Si el sistema es compatible y $r(A)<n$, hay variables libres y no puede ser determinado.

---

### Ejercicio 34 · Discusión con un parámetro 📘🤖

#### Enunciado

Discute los sistemas en función de $a\in\mathbb R$. Si son compatibles indeterminados, indica su grado de indeterminación.

**a)**

$$
\begin{cases}
x+y-az=0,\\
ax+y-z=1-a,\\
x+ay-z=1-a.
\end{cases}
$$

**b)**

$$
\begin{cases}
x+y-z=0,\\
ay+(2a-1)z=a,\\
ax+2ay=0,\\
ax+ay+(1-2a)z=a-1.
\end{cases}
$$

> [!example]- Resolución de a) 📘
>
> La matriz de coeficientes tiene determinante
>
> $$
> \det A=-(a-1)^2(a+2).
> $$
>
> - Si $a\notin\{-2,1\}$, el determinante no se anula: **solución única**.
> - Si $a=1$, las tres ecuaciones se reducen a $x+y-z=0$: **compatible indeterminado de grado 2**.
> - Si $a=-2$, el sistema es **incompatible**.

> [!example]- Resolución de b) 📘
>
> El sistema es **compatible determinado únicamente cuando $a=\frac12$**. En ese caso,
>
> $$
> (x,y,z)=(-2,1,-1).
> $$
>
> Para todo $a\ne\frac12$, es incompatible.

> [!success]- Comprobación 🤖
>
> En a), para $a=-2$, la suma de las ecuaciones segunda y tercera tiene miembro izquierdo $-(x+y+2z)$ y derecho $6$, mientras la primera exige $x+y+2z=0$: contradicción. Para $a=1$, una sola ecuación independiente deja dos parámetros libres.
>
> En b), $(-2,1,-1)$ satisface las cuatro ecuaciones cuando $a=\frac12$. Si $a=0$, las ecuaciones segunda y cuarta exigen respectivamente $z=0$ y $z=-1$. Si $a=1$, se deduce a la vez $y+z=1$ e $y+z=0$. Para $a\ne0,1$, las ecuaciones primera, tercera y cuarta fuerzan $y=1$, $z=-1$; la segunda solo se cumple si $a=\frac12$.

## 📚 Fuentes

### Material base

- [Ficha de enunciados ALGA 2026/27](../../ALGA-2026-27-Exerc-Aulas-Enunc_1-34.pdf), p. 8.
- [Ficha de soluciones ALGA 2026/27](../../ALGA-2026-27-Exerc-Aulas-Solucoes.pdf), p. 2, para los ejercicios 32 y 34.
