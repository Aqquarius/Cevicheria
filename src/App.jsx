import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import Welcome from './components/Welcome';
import DishList from './components/DishList';
import DishModal from './components/DishModal';
import Footer from './components/Footer';
import './App.css';

// Import assets
import plat from './assets/plat.PNG';
import chicharron from './assets/chicharron.png';
import arrozMariscos from './assets/arroz_Mariscos.png';
import sudado from './assets/sudado.PNG';
import FuenteCeviche from './assets/Fuente_ceviche.png';
import FuenteSimple from './assets/Fuente_simple.png';
import TrioMarino from './assets/Trio_marino.PNG';
import duoCev from './assets/Duo_cev.png';
import duo from './assets/duo.png';
import Combinado from './assets/combinado.PNG';
import Huancaina from './assets/huancaina.PNG';
import Cuy from './assets/cuy.png';
import gorditaa from './assets/gorditaa.png';
import inkalitro from './assets/Inka_litro.png';
import cocalitro from './assets/coca_litro.png';
import cocados from './assets/coca_dos.png';
import inkados from './assets/inka_dos.png';
import cervezaTrujillo from './assets/cerveza_Trujillo.png';
import cervezaNegra from './assets/cerveza_Negra.png';
import cervezaTrigo from './assets/cerveza_Trigo.png';
import cervezaCallao from './assets/cerveza_Callao.png';
import limonada from './assets/limonada.png';
import maracuya from './assets/maracuya.png';


const DISHES_DATA = [
  {
    id: 1,
    name: 'Ceviche Simple',
    price: 25.00,
    category: 'Ceviches',
    description: 'Pescado fresco de Toyo bañado en zumo de limón, acompañado de mariscos seleccionados, camote , choclo desgranado,yuca ',
    image:plat,
    spiceLevel: 3
  },
  {
    id: 2,
    name: 'Chicharron de Pescado',
    price: 25.00,
    category: 'Segundos',
    rating: 4.8,
    description: 'Pescado sazonado y dorado acompañado de yuca frita.',
    image: chicharron,
    spiceLevel: 1
  },
  {
    id: 3,
    name: 'Arroz con Mariscos',
    price: 25.00,
    category: 'Segundos',
    rating: 4.8,
    description: 'arroz sazonado con un aderezo criollo a base de ají amarillo, salteado a fuego alto con jugosos langostinos, calamares y pulpo. Servido con sarsa.',
    image: arrozMariscos,
    spiceLevel: 1
  },
  {
    id: 4,
    name: 'Fuente de ceviche mixto',
    price: 30.00,
    category: 'Ceviches',
    rating: 4.7,
    description: 'Láminas de toyo combinadas con jugosos langostinos, calamares y pulpo en zumo de limón y ají limo. Acompañado de cebolla morada, camote yuca y choclo.',
    image: FuenteCeviche,
    spiceLevel: 2
  },
  {
    id: 5,
    name: 'Sudado',
    price: 40.00,
    category: 'Segundos',
    rating: 4.9,
    description: 'Delicioso pescado cocido en un sabroso caldo con tomate, cebolla, ají y especias, acompañado de camote y yuca.',
    image: sudado,
    spiceLevel: 2
  },
  {
    id: 6,
    name: 'Trio marino',
    price: 30.00,
    category: 'Segundos',
    rating: 4.8,
    description: ' ceviche mixto,arroz con mariscos,chicharron de pescado,papa ala huancaina,yuca frita.',
    image: TrioMarino,
    spiceLevel: 1
  },
  {
    id: 7,
    name: 'Duo Ceviche con chicharron',
    price: 25.00,
    category: 'Segundos',
    rating: 4.8,
    description: 'Ceviche mixto acompañado de chicharrón de pescado, servido con camote, choclo y yuca frita.',
    image: duoCev,
    spiceLevel: 1
  },
  {
    id: 8,
    name: 'Duo Ceviche con arroz con mariscos',
    price: 25.00,
    category: 'Segundos',
    rating: 4.8,
    description: 'Ceviche mixto acompañado de arroz con mariscos, servido con camote, choclo y yuca frita.',
    image: duo,
    spiceLevel: 1
  },
  
  {
    id: 9,
    name: 'Combinado',
    price: 10.00,
    category: 'Segundos',
    rating: 4.9,
    description: 'tallarin acompañado de papa ala huancaina y una porcion de ceviche.',
    image: Combinado,
    spiceLevel: 2
  },
   {
    id: 10,
    name: 'Huancaína',
    price: 10.00,
    category: 'Segundos',
    rating: 4.9,
    description: 'rodajas de papa bañadas en nuestra crema de huancaína, acompañadas de aceituna y lechuga.',
    image: Huancaina,
    spiceLevel: 2
  },
  {
    id: 11,
    name: 'Cuy',
    price: 25.00,
    category: 'Segundos',
    rating: 4.9,
    description: 'Cuy frito acompañado de arroz con ajiaco y sarsa.',
    image: Cuy,
    spiceLevel: 2
  },
  {
    id: 12,
    name: 'Fuente de ceviche simple',
    price: 30.00,
    category: 'Ceviches',
    rating: 4.9,
    description: 'Láminas de toyo en zumo de limón y ají limo. Acompañado de cebolla morada, camote yuca y choclo.',
    image: FuenteSimple,
    spiceLevel: 2
  },
  {
    id: 13,
    name: 'Jarra de Maracuya',
    price: 10.00,
    category: 'Bebidas',
    rating: 4.9,
    description: 'Bebida helada de maracuyá con azúcar y abundante hielo.',
    image: maracuya,
    spiceLevel: 0
  },
  {
    id: 14,
    name: 'Jarra de Limonada Frozen',
    price: 10.00,
    category: 'Bebidas',
    rating: 4.7,
    description: 'Zumo puro de limón licuado a punto de nieve con abundante hielo y azúcar. Ácido, dulce y sumamente refrescante.',
    image: limonada,
    spiceLevel: 0
  },
  {
    id: 15,
    name: 'Gaseosa Inka medio litro',
    price: 4.00,
    category: 'Bebidas',
    rating: 4.7,
    description: 'Gaseosa Inka Kola de medio litro, ideal para acompañar tu plato de mariscos o para compartir con amigos.',
    image: gorditaa,
    spiceLevel: 0
  },
  {
    id: 16,
    name: 'Gaseosa Inka Kola 1 Litro',
    price: 6.00,
    category: 'Bebidas',
    rating: 4.7,
    description: 'Gaseosa Inka Kola de 1 litro, ideal para acompañar tu plato de mariscos.',
    image: inkalitro,
    spiceLevel: 0
  },
  {
    id: 17,
    name: 'Gaseosa Coca Cola 1 Litro',
    price: 6.00,
    category: 'Bebidas',
    rating: 4.7,
    description: 'Gaseosa Coca Cola de 1 litro, ideal para acompañar tu plato de mariscos.',
    image: cocalitro,
    spiceLevel: 0
  },
 {
    id: 18,
    name: 'Gaseosa Coca Cola 2 Litro',
    price: 10.00,
    category: 'Bebidas',
    rating: 4.7,
    description: 'Gaseosa Coca Cola de 2 litros, ideal para acompañar tu plato de ceviche.',
    image: cocados,
    spiceLevel: 0
  },
  {
    id: 19,
    name: 'Gaseosa inka Cola 2 Litro',
    price: 10.00,
    category: 'Bebidas',
    rating: 4.7,
    description: 'Gaseosa Inka Kola de 2 litros, ideal para acompañar tu plato de ceviche.',
    image: inkados,
    spiceLevel: 0
  },
  {
    id: 20,
    name: 'Cerveza Trujillo',
    price: 8.00,
    category: 'Bebidas',
    rating: 4.7,
    description: 'Cerveza rubia fría con el sello de Trujillo, ideal para acompañar tu plato de mariscos o para compartir con amigos.',
    image: cervezaTrujillo,
    spiceLevel: 0
  },
   {
    id: 21,
    name: 'Cerveza Negra',
    price: 9.00,
    category: 'Bebidas',
    rating: 4.7,
    description: 'Cerveza negra fría.',
    image: cervezaNegra,
    spiceLevel: 0
  },
   {
    id: 22,
    name: 'Cerveza Trigo',
    price: 9.00,
    category: 'Bebidas',
    rating: 4.7,
    description: 'Cerveza rubia fría .',
    image: cervezaTrigo,
    spiceLevel: 0
  },
   {
    id: 23,
    name: 'Cerveza Callao',
    price: 9.00,
    category: 'Bebidas',
    rating: 4.7,
    description: 'Cerveza rubia fría con el sello de Callao, ideal para acompañar tu plato de mariscos.',
    image: cervezaCallao,
    spiceLevel: 0
  }

];

function App() {
  const [dishes, setDishes] = useState(DISHES_DATA);
  const [selectedDish, setSelectedDish] = useState(null);

  // Fetch dishes from SQL Server via Backend API
  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/dishes');
        if (!response.ok) throw new Error('Error al obtener datos del servidor');
        const data = await response.json();
        
        const imageMap = {
          ceviche_hero: cevicheHero,
          arroz_mariscos: arrozMariscos,
          tiradito: tiradito
        };

        const mapped = data.map(dish => ({
          id: dish.id,
          name: dish.name,
          price: dish.price,
          category: dish.category,
          rating: dish.rating,
          description: dish.description,
          image: imageMap[dish.imageKey] || cevicheHero,
          spiceLevel: dish.spiceLevel
        }));
        setDishes(mapped);
      } catch (err) {
        console.warn('Backend API desconectada o SQL Server apagado. Cargando platos locales por defecto para pruebas:', err.message);
      }
    };
    fetchDishes();
  }, []);

  return (
    <>
      <Navbar />

      <main>
        <HeroCarousel />
        <Welcome />

        <DishList 
          dishes={dishes} 
          onSelectDish={(dish) => setSelectedDish(dish)}
        />
      </main>

      <Footer />

      {selectedDish && (
        <DishModal 
          dish={selectedDish} 
          onClose={() => setSelectedDish(null)}
        />
      )}
    </>
  );
}

export default App;
