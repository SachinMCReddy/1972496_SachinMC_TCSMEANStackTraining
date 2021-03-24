var cartItems:Array<any>= [];

interface CartItem {
    product:string;
    price:string;
}

class ShoppingCart {
    product: string;
    price: string;
    constructor(product:string,price:string) {
            this.product = product;
            this.price = price;
    }
    addProduct() : void {
        let cart:CartItem={product:this.product, price:this.price}; 

        let storage = sessionStorage.getItem("shoppingCartItems");
        if (storage != null) {
            cartItems = JSON.parse(storage);
        }
        cartItems.push(cart)
        sessionStorage.setItem("shoppingCartItems", JSON.stringify(cartItems));
        console.log(cartItems);

        let cartItemsLength:number = cartItems.length;
        document.getElementById("size").innerHTML= cartItemsLength.toString();
        insertNewRecord(cart)
    }
}

function add_iphone(){
    let data = new ShoppingCart(document.getElementById("iphone").innerHTML,document.getElementById("iphonePrice").innerHTML);
    data.addProduct();
}

function add_ipad(){
    let data = new ShoppingCart(document.getElementById("ipad").innerHTML,document.getElementById("ipadPrice").innerHTML);
    data.addProduct();
}

function add_imac(){
    let data = new ShoppingCart(document.getElementById("imac").innerHTML,document.getElementById("imacPrice").innerHTML);
    data.addProduct();
}

function add_ipod(){
    let data = new ShoppingCart(document.getElementById("ipod").innerHTML,document.getElementById("ipodPrice").innerHTML);
    data.addProduct();
}

function add_itv(){
    let data = new ShoppingCart(document.getElementById("itv").innerHTML,document.getElementById("itvPrice").innerHTML);
    data.addProduct();
}

function add_iglasses(){
    let data = new ShoppingCart(document.getElementById("iglasses").innerHTML,document.getElementById("iglassesPrice").innerHTML);
    data.addProduct();
}

function insertNewRecord(data){
    var table = document.getElementById("budget")
    var body = table.getElementsByTagName("tbody")[0];
    var newRow = body.insertRow(); 
   
    var cell1 = newRow.insertCell(0);          
    cell1.innerHTML=data.product;                 
    var cell2 = newRow.insertCell(1);          
    cell2.innerHTML=data.price;                 
   
}