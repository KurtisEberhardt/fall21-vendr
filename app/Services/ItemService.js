import { ProxyState } from "../AppState.js";


class ItemService{
    addToCart(key){
        let foundItem = ProxyState.Items.find(i => i.name == key)
        ProxyState.Cart.push(foundItem)
    }
    //NOTE
    buyItem(key) {
        console.log(key)
        let foundItem = ProxyState.Items.find(i => i.name == key)
        if(ProxyState.totalMoney >= foundItem.price){
            ProxyState.totalMoney -= foundItem.price
            foundItem.quantity--
            ProxyState.Items = ProxyState.Items
        }
    }

}

export const itemService = new ItemService()