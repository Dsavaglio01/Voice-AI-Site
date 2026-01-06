import React, { useEffect, useState } from 'react'
import { Header } from './sections/Header';
import { useRouter } from 'next/router';
import MenuCard from '@/components/MenuCard';
interface Menu {
    name: String,
    id: String,
    pic: String,
    base_price: Number,
    sizes: Object,
    modifiers: Object,
    meal_upgrade: Object
}
const rules = {
  "menu": {
    "items": [
      {
        "id": "1",
        "name": "Cheeseburger",
        "base_price": 4.00,
        "pic": "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg",
        "description": "Beef patty, cheese, lettuce, tomato, pickles, onions, ketchup",
        "sizes": {
          "small": 0.00,
          "medium": 0.50,
          "large": 1.00
        },
        "modifiers": {
          "cheese": { "extra": 0.75, "none": 0.00 },
          "pickles": { "extra": 0.25, "none": 0.00 },
          "onions": { "extra": 0.25, "none": 0.00 },
          "ketchup": { "none": 0.00 }
        },
        "meal_upgrade": {
          "price": 2.50,
          "drinks": ["coke", "sprite", "water", "fanta", "diet coke"]
        },
        "type": "main"
      },
      {
        "id": "2",
        "name": "Double Cheeseburger",
        "base_price": 5.50,
        "pic": "https://images.pexels.com/photos/2089717/pexels-photo-2089717.jpeg",
        "description": "Two beef patties, cheese, lettuce, tomato, pickles, onions, ketchup",
        "sizes": {
          "medium": 0.50,
          "large": 1.25
        },
        "modifiers": {
          "cheese": { "extra": 1.00 },
          "bacon": { "add": 1.50 },
          "lettuce": { "extra": 0.25, "none": 0.00 },
          "tomato": { "extra": 0.25, "none": 0.00 }
        },
        "meal_upgrade": {
          "price": 3.00,
          "drinks": ["coke", "sprite", "water", "fanta", "diet coke"]
        },
        "type": "main"
      },
      {
        "id": "3",
        "name": "Chicken Sandwich",
        "base_price": 4.25,
        "pic": "https://images.pexels.com/photos/35438304/pexels-photo-35438304.jpeg",
        "description": "Breaded chicken breast, mayo, pickles, lettuce on a brioche bun",
        "sizes": {
          "regular": 0.00,
          "spicy": 0.50
        },
        "modifiers": {
          "mayo": { "none": 0.00 },
          "lettuce": { "extra": 0.25, "none": 0.00 },
          "pickles": { "extra": 0.25, "none": 0.00 }
        },
        "meal_upgrade": {
          "price": 2.75,
          "drinks": ["coke", "sprite", "water", "fanta", "iced tea"]
        },
        "type": "main"
      },
      {
        "id": "4",
        "name": "Chicken Nuggets",
        "base_price": 3.50,
        "pic": "https://images.pexels.com/photos/18188572/pexels-photo-18188572.jpeg",
        "description": "Crispy golden chicken nuggets with your choice of sauce",
        "sizes": {
          "6pc": 0.00,
          "10pc": 2.00,
          "20pc": 5.00
        },
        "modifiers": {
          "sauces": { "bbq": 0.25, "ranch": 0.25, "honey mustard": 0.25, "buffalo": 0.25 }
        },
        "type": "main"
      },
      {
        "id": "5",
        "name": "French Fries",
        "base_price": 2.00,
        "pic": "https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg",
        "description": "Crispy golden fries, lightly salted",
        "sizes": {
          "small": 0.00,
          "medium": 0.75,
          "large": 1.25
        },
        "modifiers": {
          "cheese": { "add": 1.00 },
          "chili": { "add": 1.25 }
        },
        "type": "side"
      }
    ]
  }
}
const categories = ["All", "Combos", "Main", "Sides", "Drinks"]
function Menu() {
  const router = useRouter();
    const [ruleMenu, setRuleMenu] = useState<Menu[]>([]);
    const [currentCategory, setCurrentCategory] = useState("All");
    useEffect(() => {
        rules.menu.items.map((e): Menu => {
            setRuleMenu(prevValue => [...prevValue, e])
        })
    }, [])
    //{`${currentPage === 'menu' ? "text-blue-600": "text-gray-600"} navButton hover:text-gray-900`}
  return (
    <>
      <Header currentPage={"menu"} router={router}/>
      <div className='py-12 bg-gray-50 min-h-screen'>
        <div className='mx-auto px-4'>
          <div className='text-center mb-12'>
            <h1 className='text-4xl md:text-5xl mb-4'>The Menu</h1>
            <p className='text-xl text-gray-600'>Delicious food, fast service</p>
          </div>
          <div className='flex flex-wrap gap-2 justify-center mb-8'>
            {categories.map((e) => (
              <button onClick={() => setCurrentCategory(e)}
              className={`${currentCategory === e ? 'categoryButton text-white bg-black' : 'categoryButton'}`} key={e}>
                {e}
              </button>
            ))} 
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'> 
            {rules.menu.items.map((e) => (
              <MenuCard item={e}/>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Menu