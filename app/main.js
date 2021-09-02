import ItemController from './Controllers/ItemController.js'
import MoneyController from './Controllers/MoneyController.js';
class App {
  moneyController = new MoneyController()
  itemController = new ItemController()
}

window["app"] = new App();
