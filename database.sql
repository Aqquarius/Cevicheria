-- =======================================================
-- SCRIPT DE BASE DE DATOS PARA CEVICHERÍA LA CASERITA
-- Compatible con SQL Server (2012 o superior)
-- =======================================================

-- 1. Crear Base de Datos si no existe
IF NOT EXISTS (SELECT * FROM sys.databases WHERE name = 'CaseritaDB')
BEGIN
    CREATE DATABASE CaseritaDB;
END
GO

USE CaseritaDB;
GO

-- 2. Eliminar tablas si existen (en orden de dependencia)
IF OBJECT_ID('OrderItems', 'U') IS NOT NULL DROP TABLE OrderItems;
IF OBJECT_ID('Orders', 'U') IS NOT NULL DROP TABLE Orders;
IF OBJECT_ID('Bookings', 'U') IS NOT NULL DROP TABLE Bookings;
IF OBJECT_ID('Dishes', 'U') IS NOT NULL DROP TABLE Dishes;
GO

-- 3. Crear Tabla de Platillos (Dishes)
CREATE TABLE Dishes (
    id INT IDENTITY(1,1) PRIMARY KEY,
    name NVARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    category NVARCHAR(50) NOT NULL,
    rating DECIMAL(2,1) NOT NULL DEFAULT 5.0,
    reviews INT NOT NULL DEFAULT 0,
    description NVARCHAR(500) NOT NULL,
    imageKey NVARCHAR(50) NOT NULL, -- Almacena 'ceviche_hero', 'arroz_mariscos', 'tiradito'
    spiceLevel INT NOT NULL DEFAULT 0
);
GO

-- 4. Crear Tabla de Reservas (Bookings)
CREATE TABLE Bookings (
    id INT IDENTITY(1,1) PRIMARY KEY,
    name NVARCHAR(100) NOT NULL,
    phone NVARCHAR(30) NOT NULL,
    date DATE NOT NULL,
    time NVARCHAR(10) NOT NULL,
    guests NVARCHAR(20) NOT NULL,
    createdAt DATETIME DEFAULT GETDATE()
);
GO

-- 5. Crear Tabla de Pedidos (Orders)
CREATE TABLE Orders (
    id INT IDENTITY(1,1) PRIMARY KEY,
    totalAmount DECIMAL(10,2) NOT NULL,
    createdAt DATETIME DEFAULT GETDATE()
);
GO

-- 6. Crear Tabla de Detalles de Pedido (OrderItems)
CREATE TABLE OrderItems (
    id INT IDENTITY(1,1) PRIMARY KEY,
    orderId INT FOREIGN KEY REFERENCES Orders(id) ON DELETE CASCADE,
    dishId INT FOREIGN KEY REFERENCES Dishes(id) ON DELETE SET NULL,
    dishName NVARCHAR(100) NOT NULL, -- Guardar nombre histórico por si cambia el plato
    quantity INT NOT NULL DEFAULT 1,
    spiceLevel NVARCHAR(20) NOT NULL,
    extras NVARCHAR(255),
    subtotal DECIMAL(10,2) NOT NULL
);
GO

-- 7. Insertar Platillos Principales por Defecto
INSERT INTO Dishes (name, price, category, rating, reviews, description, imageKey, spiceLevel)
VALUES 
(
    N'Ceviche Carretillero', 
    32.00, 
    N'Ceviches', 
    4.9, 
    145, 
    N'El clásico indiscutible: trozos de pesca del día marinados en zumo puro de limón de Chulucanas, cebolla morada en pluma, ají limo fresco, acompañado de choclo tierno, camote glaseado y coronado con crujiente chicharrón de pota.', 
    N'ceviche_hero', 
    3
),
(
    N'Arroz con Mariscos "El Puerto"', 
    36.00, 
    N'Segundos', 
    4.8, 
    120, 
    N'Festival de sabores marinos: langostinos, calamares, pulpo y conchas de abanico flameados al pisco, mezclados con arroz al aderezo de ají amarillo cremoso, arvejas tiernas y pimiento, espolvoreado con culantro y queso parmesano.', 
    N'arroz_mariscos', 
    1
),
(
    N'Tiradito Tradicional Tres Ajíes', 
    34.00, 
    N'Ceviches', 
    4.7, 
    95, 
    N'Láminas delicadas de lenguado fresco en corte sashimi, bañadas armoniosamente por tres salsas cremosas emulsionadas a base de ají amarillo, rocoto picante y la tradicional crema de ají limo de la casa. Servido con camote glaseado.', 
    N'tiradito', 
    2
),
(
    N'Leche de Tigre Caserita', 
    18.00, 
    N'Ceviches', 
    4.9, 
    210, 
    N'Poderoso concentrado de jugo de ceviche fresco licuado con pescado, culantro y ají limo. Servido en una copa copeteada con cebolla, choclo desgranado, cancha chulpe crujiente y una generosa porción de chicharrón de pota caliente.', 
    N'tiradito', 
    2
),
(
    N'Lomo Saltado Marino al Wok', 
    39.00, 
    N'Segundos', 
    4.8, 
    88, 
    N'Nuestra versión del clásico peruano: jugosos trozos de filete de pescado y mariscos salteados al wok a fuego alto con cebolla roja, tomates frescos, ají amarillo y cebollita china. Servido con crujientes papas fritas y arroz blanco graneado.', 
    N'arroz_mariscos', 
    1
),
(
    N'Ceviche Clásico de Lenguado', 
    38.00, 
    N'Ceviches', 
    4.9, 
    175, 
    N'Pescado fino lenguado cortado en dados perfectos, curado al instante con limón norteño y sazonado al estilo tradicional. Servido sobre una cama de lechuga fresca con abundante cebolla roja, camote dulce, choclo tierno y canchita.', 
    N'ceviche_hero', 
    2
),
(
    N'Chicha Morada de Maíz Orgánico', 
    8.00, 
    N'Bebidas', 
    4.9, 
    240, 
    N'Bebida helada y reconfortante preparada en casa de forma natural: maíz morado hervido lentamente con cáscaras de piña, manzanas, membrillo, clavo de olor y canela de olor. Endulzado en su punto con azúcar y unas gotas de limón.', 
    N'tiradito', 
    0
),
(
    N'Maracuyá Frozen Refrescante', 
    9.00, 
    N'Bebidas', 
    4.7, 
    110, 
    N'Zumo puro de maracuyá (fruta de la pasión) licuado a punto de nieve con abundante hielo y azúcar. Ácido, dulce y sumamente refrescante para apagar el picante de tu ceviche carretillero.', 
    N'ceviche_hero', 
    0
);
GO

-- 8. Validar inserción
SELECT * FROM Dishes;
GO
