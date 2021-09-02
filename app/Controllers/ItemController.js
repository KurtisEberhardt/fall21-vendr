import { ProxyState } from '../AppState.js'
import {itemService} from '../Services/ItemService.js'

function _draw(){
    let template = ''
    ProxyState.Items.forEach(i => template += i.ItemTemplate)

    document.getElementById('Items').innerHTML = template
}


export default class ItemController{
    constructor(){
        _draw()
        ProxyState.on("Items", _draw)
    }

    buyItem(key){
        itemService.buyItem(key)
    }

}