import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      name: "Напій Monster Energy Super Fuel Watermelon 500 ml",
      price: 150,
      id: 1,
      category: "Японська їжа і солодощі",
      quantity: 1
    },
    {
      name: "Жувальна гумка Canels Gum 4pc Fruit",
      price: 20,
      id: 2,
      category: "Японська їжа і солодощі",
      quantity: 1
    },
    {
      name: "Напій MONSTER ENERGY ULTRA WATERMELON 500 ml",
      price: 150,
      id: 3,
      category: "Японська їжа і солодощі",
      quantity: 1
    },
    {
      name: "Напій MONSTER ENERGY ASSAULT 500 ml",
      price: 150,
      id: 4,
      category: "Японська їжа і солодощі",
      quantity: 1
    },
    {
      name: "Палички Pocky Biscuit Stick, Matcha Green Tea, 1.38 Ounce",
      price: 220,
      id: 5,
      category: "Японська їжа і солодощі",
      quantity: 1
    },

    {
      name: "Шопер «Junji Itou Collection» [Morze Pulsar] v 3",
      price: 450,
      id: 6,
      category: "Сумки",
      quantity: 1
    },
    {
      name: "Шопер «Danganronpa»",
      price: 400,
      id: 7,
      category: "Сумки",
      quantity: 1
    },
    {
      name: "Сумка - бананка «Naruto»",
      price: 390,
      id: 8,
      category: "Сумки",
      quantity: 1
    },
    {
      name: "Шопер «Demon Slayer: Kimetsu no Yaiba» tape 2",
      price: 550,
      id: 9,
      category: "Сумки",
      quantity: 1
    },
    {
      name: "Шопер «Junji Itou Collection» [Morze Pulsar] v 2",
      price: 450,
      id: 10,
      category: "Сумки",
      quantity: 1
    },

    {
      name: "Рюкзак за мотивами аніме серіалу «Клинок, розтинає демонів» [Demon Slayer: Kimetsu no Yaiba] tape 19",
      price: 1100,  
      id: 11,
      category: "Рюкзаки",
      quantity: 1
    },
    {
      name: "Рюкзак за мотивами «Shingeki no Kyojin / Attack on Titan» tape 6",
      price: 950,  
      id: 12,
      category: "Рюкзаки",
      quantity: 1
    },
    {
      name: "Рюкзак за мотивами аніме серіалу «Наруто» [Naruto] tape 8",
      price: 950,  
      id: 13,
      category: "Рюкзаки",
      quantity: 1
    },  
    {
      name: "Рюкзак за мотивами аніме серіалу «Ван Піс» [One Piece] tape 6",
      price: 1100,  
      id: 14,
      category: "Рюкзаки",
      quantity: 1
    }, 
    {
      name: "Рюкзак за мотивами аніме серіалу «Вторгнення Гігантів» (Shingeki No Kyojin) tape 6",
      price: 1000,  
      id: 15,
      category: "Рюкзаки",
      quantity: 1
    },

    {
      name: "Манга Бродячі пси - літературні генії | Bungo Stray Dogs | Bungou Stray Dogs том 1",
      price: 150,
      id: 16,
      category: "Манга",
      quantity: 1
    },
    {
      name: "Манга «Магічна битва» [Jujutsu Kaisen] том 1",
      price: 150,
      id: 17,
      category: "Манга",
      quantity: 1
    },
    {
      name: "Манга Токійський гуль том 1",
      price: 150,
      id: 18,
      category: "Манга",
      quantity: 1
    },
    {
      name: "Манга «Клинок, розтинаючий демонів» том 1",
      price: 150,
      id: 19,
      category: "Манга",
      quantity: 1
    },
    {
      name: "Манга JoJo's Bizarre Adventure (Неймовірна пригода ДжоДжо — Частина 1: Примарна кров) том 1",
      price: 150,
      id: 20,
      category: "Манга",
      quantity: 1
    },

    {
      name: "Ранобе «Нехай буде благословенний цей прекрасний світ!» [Kono Subarashii Sekai ni Shukufuku wo!] Том 1",
      price: 160,
      id: 21,
      category: "Ранобе",
      quantity: 1
    },
    {
      name: "Ранобе «Благословення небожителів» (Новела) том 1",
      price: 220,
      id: 22,
      category: "Ранобе",
      quantity: 1
    },
    {
      name: "Ранобе Вовчиця і прянощі (Spice and Wolf) том 1",
      price: 160,
      id: 23,
      category: "Ранобе",
      quantity: 1
    },
    {
      name: "Ранобе Майстри Меча Онлайн (Sword Art Online) том 1",
      price: 160,
      id: 24,
      category: "Ранобе",
      quantity: 1
    },
    {
      name: "Ранобе No Game No Life / Без гри немає життя том 1",
      price: 160,
      id: 25,
      category: "Ранобе",
      quantity: 1
    },
  ]);

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;