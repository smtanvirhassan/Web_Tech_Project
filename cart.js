
// Shopping Cart
let cart = [];


// Add Product

document.getElementById("add").addEventListener("click", function() {

    let productName = document.getElementById("name").value;
    let productPrice = Number(document.getElementById("price").value);
    let productQuantity = Number(document.getElementById("quantity").value);

    let priceValue = document.getElementById("price").value;
    let quantityValue = document.getElementById("quantity").value;

    if (productName.trim() == "" || priceValue == "" || quantityValue == "") {

        alert("Please fill all fields");

    }

    else if (productPrice <= 0 || productQuantity <= 0) {

        alert("Price and Quantity must be greater than 0");

    }

    else {

        let product = {
            name: productName,
            price: productPrice,
            quantity: productQuantity
        };

        cart.push(product);

        showCart();

        document.getElementById("name").value = "";
        document.getElementById("price").value = "";
        document.getElementById("quantity").value = "";

    }

});


// Display Cart

function showCart() {

    let items = document.getElementById("cartitems");
    let total = document.getElementById("total");

    items.innerHTML = "";

    let sum = 0;

    for (let i = 0; i < cart.length; i++) {

        let result = cart[i].price * cart[i].quantity;

        sum = sum + result;

        items.innerHTML += "<tr>" +
            "<td>" + cart[i].name + "</td>" +
            "<td>" + cart[i].price + "</td>" +
            "<td>" + cart[i].quantity + "</td>" +
            "<td>" + result + "</td>" +
            "<td><button type='button' class='remove' onclick='removeProduct(" + i + ")'>Remove</button></td>" +
            "</tr>";

    }

    total.innerHTML = "Total: " + sum + " Tk";

}


// Remove Product

function removeProduct(i) {

    cart.splice(i, 1);

    showCart();

}


// Payment

function payment() {

    if (cart.length == 0) {

        alert("Your Cart is Empty!");

    }

    else {

        window.location.href = "payment.html";

    }

}
