import React, {useState} from 'react'
import { Header } from './sections/Header'
import { useRouter } from 'next/router'

const categories = ["All", "Combos", "Main", "Sides", "Drinks"]
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
        "name": "Double Cheeseburger Combo",
        "base_price": 7.50,
        "pic": "https://images.pexels.com/photos/11462923/pexels-photo-11462923.jpeg",
        "description": "Two beef patties, cheese, lettuce, tomato, pickles, onions, ketchup with fries and soft drink",
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
        "type": "combo"
      },
      {
        "id": "4",
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
        "name": "Chicken Sandwich Combo",
        "base_price": 6.25,
        "pic": "https://images.pexels.com/photos/8769141/pexels-photo-8769141.jpeg",
        "description": "Breaded chicken breast, mayo, pickles, lettuce on a brioche bun with fries and soft drink",
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
        "type": "combo"
      },
      {
        "id": "6",
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
        "id": "7",
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
      },
      {
        "id": "8",
        "name": "Soft Drink",
        "base_price": 1.99,
        "pic": "https://images.pexels.com/photos/2983100/pexels-photo-2983100.jpeg",
        "description": "Choice of Coke, Sprite, or Fanta (Small/Medium/Large)",
        "sizes": {
          "small": 0.00,
          "medium": 0.75,
          "large": 1.25
        },
        "type": "drink"
      }
    ]
  }
}
function Demo() {
    const router = useRouter();
    
    const [currentCategory, setCurrentCategory] = useState("All");
  return (
    <>
      <Header currentPage={"demo"} router={router}/>
      <div className='py-12 bg-gray-50 min-h-screen'>
        <div className='mx-auto px-4'>
          <div className='text-center mb-12'>
            <h1 className='text-4xl md:text-5xl mb-4'>Interactive Voice Ordering Demo</h1>
            <p className='text-xl text-gray-600'>See how my AI works by ordering from the menu below</p>
          </div>
          <div className='grid grid-cols-3 lg:gird-cols-3 gap-6 mx-10'>
            <div className='lg:col-span-1'>
              <div className='sticky top-20 shadow-2xl h-fit rounded-b-xl'>
                <div className='bg-gradient-to-br from-blue-600 to-indigo-600 text-white pt-5 pl-5 pb-1.5'>
                  <span className='text-lg'>Voice AI Demo</span>
                </div>
                <div className='p-4 mt-7.5'>
                  <div className='flex gap-2 mb-4'>
                    <button className='flex-1 bg-black rounded-lg p-1.5'>
                      <span className='text-white text-sm'>Start Demo</span>
                    </button>
                    <button className='border p-1.5 border-gray-200 rounded-lg'>
                      <span className='text-sm'>Reset</span>
                    </button>
                  </div>
                  <div className='space-y-3 min-h-[400px] max-h-[500px] overflow-y-auto'>

                  </div>
                </div>
              </div>
            </div>
            <div className='lg:col-span-1'>
              <div className='shadow-2xl mb-6'>
                <div className='p-5'>
                  <span>Menu</span>
                </div>
                <div>
                  <div className='flex flex-wrap gap-2 mb-4 pl-5'>
                    {categories.map((e) => (
                      <button key={e} className={`${currentCategory === e ? 'categoryButton text-white bg-black' : 'categoryButton'}`}>
                        {e}
                      </button>
                    ))}
                  </div>
                  <div className='space-y-4 max-h-[700px] overflow-y-auto pr-2 m-5'>
                    {rules.menu.items.map((e) => (
                      <div key={e.id} className='overflow-hidden border border-gray-300 rounded-lg mb-5'>
                        <div className='flex gap-3 p-3'>
                          <div className='relative w-20 h-20 rounded-lg overflow-hidden bg-gray-200'>
                            <img src={e.pic} alt={e.name} className='w-full h-full object-cover'/>
                          </div>
                          <div className='flex-1 min-w-0'>
                            <div className='flex justify-between items-start mb-1 mt-1.5'>
                              <h4 className='font-medium text-sm'>{e.name}</h4>
                              <span className='text-blue-600 font-medium text-sm ml-2'>
                                ${e.base_price.toFixed(2)}
                              </span>
                            </div>
                            <p className='text-xs text-gray-600 mb-2 line-clamp-2'>{e.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Demo