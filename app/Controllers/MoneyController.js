import { ProxyState } from "../AppState.js";
import {moneyService} from "../Services/MoneyService.js"


function _draw(){
    document.getElementById('Money').innerText = ProxyState.totalMoney.toString()
}


export default class MoneyController{
    constructor(){
        _draw()
        ProxyState.on('totalMoney', _draw)
    }

    addMoney(){
        console.log(ProxyState.totalMoney)
        moneyService.addMoney()
    }
}