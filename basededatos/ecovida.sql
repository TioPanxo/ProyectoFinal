-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-06-2023 a las 23:30:02
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ecovida`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recetas`
--

CREATE TABLE `recetas` (
  `id_receta` int(11) NOT NULL,
  `nombre` varchar(500) DEFAULT NULL,
  `src` varchar(500) DEFAULT NULL,
  `ingredientes` varchar(1000) DEFAULT NULL,
  `procedimientos` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `recetas`
--

INSERT INTO `recetas` (`id_receta`, `nombre`, `src`, `ingredientes`, `procedimientos`) VALUES
(1, 'Restos de carne de pollo - Flautas de pollo y papa', '../../../assets/Imagenes/Flautas-pollo.jpg', '300 gramos de pechuga de pollo hervida y deshebrada, 12 tortillas de maíz, 1/2 cebolla rebanada en julianas, 3 papas hervidas peladas y cortadas en cubos pequeños, Sal y pimienta al gusto, 1 taza de aceite', 'En un sartén, dora la cebolla con un par de cucharadas de aceite. Posteriormente, agrega la papa y cocina con la cebolla hasta que esté ligeramente dorada por fuera. Luego agrega el pollo y sazona al gusto con sal y pimienta. Una vez listo el relleno, coloca un poco sobre cada una de las tortillas y enróllalas en forma de flauta, utiliza palillos de madera para que no se abran y finalmente fríelas en una olla con aceite durante tres minutos. Retíralas y colócalas sobre papel absorbente para eliminar el aceite excedente. Sírvelas al gusto con crema, queso y/o salsa.'),
(2, 'Restos de verduras cocidas - Yakemishi vegetariano', '../../../assets/Imagenes/y-vegetariano.jpg', '2 tazas de arroz blanco, 2 zanahorias cocidas partidas en cubos pequeños, 2 calabazas cocidas partidas en cubos pequeños, 1 taza de brócoli partido en cubos, 1 cucharada de aceite de oliva, 1/3 de taza de salsa de soya, 2 huevos, 4 tazas de agua, 1/4 de cebolla picada finamente, 1/4 de taza de cebollín picado.', 'Sofríe el arroz en el aceite y cuando esté un poco dorado agrega el agua. Una vez que hierva tapa y baja el fuego. Retira en cuanto el agua se consuma totalmente. En otro sartén, sofríe un poco de aceite con todas las verduras. Por último agrega el cebollín y sigue removiendo un poco. Mientras tanto, en un bowl revuelve los dos huevos y haz una especie de omelette en un sartén pequeño con aceite. Corta el omelette en cuadrados pequeños e incorpóralo junto con el resto de las verduras al arroz, vierte la soya y mezcla. La preparación estará lista cuando el arroz tome el color de la salsa.'),
(3, 'Restos de tortilla de maiz - Nachos gratinados', '../../../assets/Imagenes/nachos.jpg', '400 gramos de tortilla de maíz cortada en forma triangular, Aceite  para freír, 2 jitomates cortados en cubos pequeños, 1/2 cebolla cortada en cubos pequeños, 1 lata de chiles jalapeños rebanados, 1/2 taza de queso cheddar rallado, 1/2 taza de queso monterrey jack rallado, 1 taza de aderezo de queso americano, Crema ácida al gusto', 'En un sartén, fríe los triángulos de tortilla de maíz hasta que queden perfectamente dorados. Una vez listos, colócalos sobre papel absorbente para eliminar el exceso de aceite y finalmente agrégalos a un recipiente para microondas en donde deberás incorporar el queso americano y al final los quesos rallados. Calienta en el microondas durante 40 segundos o hasta que los quesos se hayan derretido. En un bowl aparte, mezcla la cebolla con el jitomate y agrega la mezcla encima de los nachos. Termina la preparación con los jalapeños y un poco de crema ácida.'),
(4, 'Restos de carnes de res - Res oriental con ajonjolí', '../../../assets/Imagenes/res-oriental.jpg', '400 gramos de carne de res cocida y cortada en cubos, 5 cucharadas de salsa teriyaki, 1 cebollín finamente picado, 2 cucharadas de aceite de ajonjolí, 1 diente de ajo picado, 2 tazas de brócoli cocido, 1/2 taza de pimiento rojo cocido y rebanado, 4 cucharadas de ajonjolí', 'Calienta la carne de res con el pimiento, el ajo y el brócoli en un sartén con el aceite de ajonjolí. En un bowl, mezcla la salsa teriyaki con el cebollín y el ajonjolí e incorpóralo al guiso. Mezcla perfectamente y sirve con con un poco más de ajonjolí espolvoreado por encima.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `alias` varchar(200) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  `rol` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `name`, `alias`, `email`, `password`, `rol`) VALUES
(4, 'a', 'a', 'a@a.com', '1c894c0e10982a5e036feb353f433996ea6905fe55ec544447ed1fef962a694f74d516f8cbaf26481675a8160e100514dc8a81fb9247300df741dc6fbefa1f03', 'user'),
(5, 'b', 'b', 'b@a.com', '1c894c0e10982a5e036feb353f433996ea6905fe55ec544447ed1fef962a694f74d516f8cbaf26481675a8160e100514dc8a81fb9247300df741dc6fbefa1f03', 'user'),
(6, 'c', 'c', 'c@a.com', '1c894c0e10982a5e036feb353f433996ea6905fe55ec544447ed1fef962a694f74d516f8cbaf26481675a8160e100514dc8a81fb9247300df741dc6fbefa1f03', 'user'),
(7, 'd', 'd', 'd@a.com', '1c894c0e10982a5e036feb353f433996ea6905fe55ec544447ed1fef962a694f74d516f8cbaf26481675a8160e100514dc8a81fb9247300df741dc6fbefa1f03', 'admin');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `recetas`
--
ALTER TABLE `recetas`
  ADD PRIMARY KEY (`id_receta`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `recetas`
--
ALTER TABLE `recetas`
  MODIFY `id_receta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
