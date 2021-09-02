export class Item{
    constructor(itemData){
        this.name = itemData.name
        this.price = itemData.price
        this.quantity = itemData.quantity
        this.imgUrl = itemData.imgUrl
    }

//NOTE The ternary on line 15 can be used to change classes on HTML elements dynamically! This allows for buttons to be disabled when an item is out of stock. This can also be handy for things like checkboxes!
    get ItemTemplate(){
        return /*html*/`
        <div class="col-2">
            <div class="card">
                <img height="290" width="290" src='${this.imgUrl}' alt="it's broken">
                <button class="btn ${this.quantity <= 2 ? 'btn-danger':  this.quantity <= 5 ? 'btn-warning' : 'btn-primary'}" ${this.quantity == 0 ? 'disabled' : ''} onclick="app.itemController.buyItem('${this.name}')">${this.name} - ${this.quantity}</button>
            </div>
        </div>
        `
    }
}

