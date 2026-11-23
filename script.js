// Saves the promo code that the customer used
var couponCode = "";

// 1. Calculate all prices
function calculateTotal() {
  var qty1 = Number(document.getElementById("qty1").value);
  var qty2 = Number(document.getElementById("qty2").value);

  var line1 = qty1 * 2450;
  var line2 = qty2 * 1290;
  var subtotal = line1 + line2;

  var shipping = Number(document.querySelector('input[name="delivery"]:checked').value);
  var method = document.querySelector('input[name="payment"]:checked').value;

  // cash on delivery fee
  var fee = 0;
  if (method == "cod") {
    fee = 30;
  }

  // promo code discount
  var discount = 0;
  if (couponCode == "SAVE10") {
    discount = Math.round(subtotal * 0.1);
  } else if (couponCode == "WELCOME50") {
    discount = 50;
  }

  var total = subtotal + shipping + fee - discount;

  // show the numbers on the page
  document.getElementById("line1").innerText = line1;
  document.getElementById("line2").innerText = line2;
  document.getElementById("subtotal").innerText = subtotal;
  document.getElementById("shipping").innerText = shipping;
  document.getElementById("discount").innerText = discount;
  document.getElementById("total").innerText = total;

  // show or hide the fee and discount lines
  if (fee > 0) {
    document.getElementById("feeRow").style.display = "block";
  } else {
    document.getElementById("feeRow").style.display = "none";
  }

  if (discount > 0) {
    document.getElementById("discountRow").style.display = "block";
  } else {
    document.getElementById("discountRow").style.display = "none";
  }
}

// 2. Promo code button
function applyCoupon() {
  var code = document.getElementById("coupon").value.toUpperCase();
  var msg = document.getElementById("couponMsg");

  if (code == "SAVE10" || code == "WELCOME50") {
    couponCode = code;
    msg.style.color = "green";
    msg.innerText = "Code " + code + " applied.";
  } else {
    couponCode = "";
    msg.style.color = "red";
    msg.innerText = "This code is not valid.";
  }

  calculateTotal();
}

// 3. Show the correct payment box
function showPayment() {
  var method = document.querySelector('input[name="payment"]:checked').value;

  // hide all boxes first
  document.getElementById("walletBox").style.display = "none";
  document.getElementById("cardBox").style.display = "none";
  document.getElementById("codBox").style.display = "none";

  if (method == "bkash") {
    document.getElementById("walletBox").style.display = "block";
    document.getElementById("walletText").innerText =
      "Send the total to 01700-000000 by bKash, then write your number and Transaction ID.";
  } else if (method == "nagad") {
    document.getElementById("walletBox").style.display = "block";
    document.getElementById("walletText").innerText =
      "Send the total to 01800-000000 by Nagad, then write your number and Transaction ID.";
  } else if (method == "card") {
    document.getElementById("cardBox").style.display = "block";
  } else {
    document.getElementById("codBox").style.display = "block";
  }

  calculateTotal();
}

// 4. Check the form when Place Order is clicked
function placeOrder() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var division = document.getElementById("division").value;
  var address = document.getElementById("address").value;
  var method = document.querySelector('input[name="payment"]:checked').value;

  if (name.length < 3) {
    alert("Please enter your full name");
    return false;
  }

  if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
    alert("Please enter a correct email");
    return false;
  }

  if (phone.length != 11 || phone.substring(0, 2) != "01") {
    alert("Mobile number must be 11 digits and start with 01");
    return false;
  }

  if (division == "") {
    alert("Please select your division");
    return false;
  }

  if (address.length < 10) {
    alert("Please enter your full address");
    return false;
  }

  // bKash or Nagad checks
  if (method == "bkash" || method == "nagad") {
    var walletNumber = document.getElementById("walletNumber").value;
    var trxId = document.getElementById("trxId").value;

    if (walletNumber.length != 11) {
      alert("Enter the 11 digit number you paid from");
      return false;
    }
    if (trxId.length < 8) {
      alert("Enter the Transaction ID (at least 8 characters)");
      return false;
    }
  }

  // card checks
  if (method == "card") {
    var cardName = document.getElementById("cardName").value;
    var cardNumber = document.getElementById("cardNumber").value;
    var expiry = document.getElementById("expiry").value;
    var cvv = document.getElementById("cvv").value;

    if (cardName == "") {
      alert("Enter the name on the card");
      return false;
    }
    if (cardNumber.length != 16) {
      alert("Card number must be 16 digits");
      return false;
    }
    if (expiry.length != 5 || expiry.charAt(2) != "/") {
      alert("Expiry must be like 08/28");
      return false;
    }
    if (cvv.length != 3) {
      alert("CVV must be 3 digits");
      return false;
    }
  }

  if (document.getElementById("terms").checked == false) {
    alert("Please agree to the terms");
    return false;
  }

  alert("Order placed! Total: " + document.getElementById("total").innerText + " Tk. Thank you for shopping at KenakataBD.");
  return false; // stay on the same page
}

// When the page opens
showPayment();