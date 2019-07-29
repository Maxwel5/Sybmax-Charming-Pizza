var small = { name: "Small :Ksh.500", price: 677 };
var medium = { name: "Medium :Ksh.750" };
var large = { name: "Large :Ksh.1000", price: 1001 };

var pizzaSize = { name: "Sybmax", varriety: [small, medium, large] };

var crispy = { name: "Crispy Ksh.120", price: 802};
var stuffed = { name: "Stuffed Ksh.110" };
var glutten = { name: "Glutten-free Ksh.100" };
var custom = { name: "Custom Ksh.105" };
var thick = { name: "Thick Ksh.140", price: 141 };
var thin = { name: "Thin Ksh.100" };
var foccacia = { name: "Focaccia Ksh.125" };
var fired = { name: "Authentic wood fired Ksh.100" };

var pizzaCrust = { name: "Charming", varriety: [crispy, stuffed, glutten, custom, thick, thin, foccacia, fired] };

var sausage = { name: "Sausage Ksh.80", price: 268 };
var pepperoni = { name: "Pepperoni Ksh.70" };
var bacon = { name: "bBacon Ksh.110" };
var mushroom = { name: "Mushroom Ksh.120" };
var cheese = { name: "Extra cheese Ksh.90" };
var onions = { name: "Onions Ksh.50" };
var spinach = { name: "Spinach Ksh.40" };
var gPeppers = { name: "Green peppers Ksh.70" };
var pinapple = { name: "Pinapple Ksh.80" };
var bOlives = { name: "Black olives Ksh.90", price: 699 };

var pizzaToppings = { name: "Sourced", varriety: [sausage, pepperoni, bacon, mushroom,cheese, onions, spinach, gPeppers, pinapple,bOlives] };

var pizza = [pizzaSize, pizzaCrust, pizzaToppings];

var pizza = function(pizzaSize, pizzaCrust, pizzaToppings) {
    return pizzaSize + pizzaCrust + pizzaToppings;
  };
  $(document).ready(function() {
    $("form#pizza").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#siz").val());
    var number2 = parseInt($("#crust").val());
    var number2 = parseInt($("#top").val());
    var result = pizza(pizzaSize, pizzaCrust, pizzaToppings);
    $("#output").text(result);
    });
    });
   $("#siz").val();
  $("#crust").val();
  $("#top").val();



// pizza.forEach(function(pizza) {
//  console.log(pizza.name + " sells:");
//  pizza.varriety.forEach(function(varriety) {
//    console.log(varriety.name);
//  });
//  console.log("\n");
// });


// var add = function(number1, number2) {
//     return number1 + number2;
//   };
//   $(document).ready(function() {
//     $("form#add").submit(function(event) {
//     event.preventDefault();
//     var number1 = parseInt($("#add1").val());
//     var number2 = parseInt($("#add2").val());
//     var result = add(number1, number2);
//     $("#output").text(result);
//     });
//     });
//    $("#add1").val();
//   $("#add2").val();