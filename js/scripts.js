var pizzaPrices;
var pizzaSize;
var pizzaCrusts;
var pizzaToppings;
var sizePrices;
var totalToppingCost = 0;
var pizzaCost = 0;





function PizzaConstruct(size, crust, topping, total) {
  this.pizzaSize = size;
  this.pizzaCrust = crust;
  this.pizzaTopping = topping;
  this.total = total;
}
PizzaConstruct.prototype.calcPrice = function () {
  return this.pizzaSize + this.pizzaCrusts + pizzaToppings;
};


$(document).ready(function () {
  $("#checkout").hide();
  $("#show-contact").hide();

  $("#add").click(function (event) {
    $("#checkout").show();
    $("#add").hide();


    event.preventDefault()

    var sizePrices = parseInt($("select#siz").children("option:selected").val());
    var crustPrice = parseInt($("select#crust").children("option:selected").val());
    var quantity = $("#myInput").val();

    console.log(sizePrices);
    console.log(crustPrice);

    var totalTops = [];

    $.each($("input[name='top']:checked"), function () {
      totalTops.push($(this).val());
    });


    function totalPizzaPrice() {
      var pizzaCost = sizePrices + crustPrice + (totalTops.length * 100);
      pizzaCost = pizzaCost * quantity;
      console.log(pizzaCost);
    }
    totalPizzaPrice();

    $("#checkout").click(function (event) {
      event.preventDefault();
      $("#show-contact").show();

      $("#p-size").append(sizePrices);
      $("#p-crust").append(crustPrice);
      $("#p-topping").append((totalTops.length * 100));  
      $("#t-price").append(pizzaCost);
    });
    
  });
  $("#btn1").click(function(){
    event.preventDefault();
    var name_data = document.getElementById("#name").value
    $("#output1").text(name_data);
    var location_data = document.getElementById("#location").value
    $("#output1").text(location_data)
    var email_data = document.getElementById("#email").value
    $("#output1").text(email_data)
    var phone_data = document.getElementById("#phone").value
    $("#output1").text(phone_data)
    

    
  })

});
