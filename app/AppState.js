import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import {Item} from './Models/Item.js'

class AppState extends EventEmitter {

  //NOTE Line 8 gives you intellesense for what kind of attributes your collection/object has! For example: Item has name, price, and quantity.

  /**@type {import('./Models/Item').Item[]} */
  Items = [
    new Item({
      name: 'Shasta Cola',
      price: 0.5,
      quantity: 10,
      imgUrl: 'https://i.imgur.com/F8lJtgh.png'
    }),
    new Item({
      name: 'Crystal Pepsi',
      price: 1.00,
      quantity: 5,
      imgUrl: 'https://i.imgur.com/aPCcUFt.png'
    }),
    new Item({
      name: 'Honey Mustard Pringles',
      price: 1.50,
      quantity: 5,
      imgUrl: 'https://i.imgur.com/KpzsZTU.png'
    })
  ]
  Cart = []
  totalMoney = 0

}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
