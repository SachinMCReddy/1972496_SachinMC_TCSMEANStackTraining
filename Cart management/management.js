var cartItems = [];
var ShoppingCart = /** @class */ (function () {
    function ShoppingCart(product, price) {
        this.product = product;
        this.price = price;
    }
    ShoppingCart.prototype.addProduct = function () {
        var cart = { product: this.product, price: this.price };
        var storage = sessionStorage.getItem("shoppingCartItems");
        if (storage != null) {
            cartItems = JSON.parse(storage);
        }
        cartItems.push(cart);
        sessionStorage.setItem("shoppingCartItems", JSON.stringify(cartItems));
        console.log(cartItems);
        var cartItemsLength = cartItems.length;
        document.getElementById("size").innerHTML = cartItemsLength.toString();
        insertNewRecord(cart);
    };
    return ShoppingCart;
}());
function add_iphone() {
    var data = new ShoppingCart(document.getElementById("iphone").innerHTML, document.getElementById("iphonePrice").innerHTML);
    data.addProduct();
}
function add_ipad() {
    var data = new ShoppingCart(document.getElementById("ipad").innerHTML, document.getElementById("ipadPrice").innerHTML);
    data.addProduct();
}
function add_imac() {
    var data = new ShoppingCart(document.getElementById("imac").innerHTML, document.getElementById("imacPrice").innerHTML);
    data.addProduct();
}
function add_ipod() {
    var data = new ShoppingCart(document.getElementById("ipod").innerHTML, document.getElementById("ipodPrice").innerHTML);
    data.addProduct();
}
function add_itv() {
    var data = new ShoppingCart(document.getElementById("itv").innerHTML, document.getElementById("itvPrice").innerHTML);
    data.addProduct();
}
function add_iglasses() {
    var data = new ShoppingCart(document.getElementById("iglasses").innerHTML, document.getElementById("iglassesPrice").innerHTML);
    data.addProduct();
}
function insertNewRecord(data) {
    var table = document.getElementById("budget");
    var body = table.getElementsByTagName("tbody")[0];
    var newRow = body.insertRow();
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.product;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.price;
}
