export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  animal: 'dog' | 'cat';
  category: 'food' | 'toy' | 'health' | 'accessories';
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Pienso Premium para Perro',
    price: 45.99,
    description: 'Pienso seco completo y equilibrado para perros adultos de todas las razas.',
    image: 'https://images.unsplash.com/photo-1588269838422-95b2889c3aa6?q=80&w=500',
    animal: 'dog',
    category: 'food',
  },
  {
    id: 2,
    name: 'Juguete Hueso de Goma',
    price: 12.5,
    description: 'Juguete resistente para morder, ayuda a mantener la salud dental de tu perro.',
    image: 'https://images.unsplash.com/photo-1534795213453-9d69348a21e4?q=80&w=500',
    animal: 'dog',
    category: 'toy',
  },
  {
    id: 3,
    name: 'Comida Húmeda para Gato (Salmón)',
    price: 2.5,
    description: 'Deliciosas latas de comida húmeda con sabor a salmón para gatos exigentes.',
    image: 'https://images.unsplash.com/photo-1596826490697-3c6c98cd8e78?q=80&w=500',
    animal: 'cat',
    category: 'food',
  },
  {
    id: 4,
    name: 'Rascador para Gato con Torre',
    price: 89.99,
    description: 'Centro de actividades multinivel para que tu gato juegue, descanse y se afile las uñas.',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69841006?q=80&w=500',
    animal: 'cat',
    category: 'accessories',
  },
  {
    id: 5,
    name: 'Champú Antipulgas para Perro',
    price: 18.0,
    description: 'Champú medicado para el tratamiento y prevención de pulgas y garrapatas.',
    image: 'https://images.unsplash.com/photo-1558223533-91ac3c43494a?q=80&w=500',
    animal: 'dog',
    category: 'health',
  },
  {
    id: 6,
    name: 'Ratones de Juguete para Gato (Pack 3)',
    price: 8.99,
    description: 'Set de tres ratones de peluche con hierba gatera para estimular el instinto de caza.',
    image: 'https://images.unsplash.com/photo-1516283818350-6a75a7c2f1b4?q=80&w=500',
    animal: 'cat',
    category: 'toy',
  },
  {
    id: 7,
    name: 'Correa y Collar Ajustable',
    price: 25.0,
    description: 'Conjunto de correa y collar de nylon resistente, disponible en varios colores.',
    image: 'https://images.unsplash.com/photo-1556984852-14930d669387?q=80&w=500',
    animal: 'dog',
    category: 'accessories',
  },
  {
    id: 8,
    name: 'Suplemento Articulaciones (Gato)',
    price: 32.5,
    description: 'Suplemento en polvo para promover la salud de las articulaciones en gatos mayores.',
    image: 'https://images.unsplash.com/photo-1571570894242-a535676395d9?q=80&w=500',
    animal: 'cat',
    category: 'health',
  },
];
