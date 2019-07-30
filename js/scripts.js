var pizzaPrices;
var pizzaSize;
var pizzaCrusts;
var pizzaToppings;
var sizePrices;
var totalTops=0;


function PizzaConstruct(size, crust, topping) {
  this.pizzaSize = size;
  this.pizzaCrust = crust;
  this.pizzaTopping = topping;
}
PizzaConstruct.prototype.calcPrice = function() {
  return this.pizzaSize + this.pizzaCrust + pizzaTopping;
};


$(document).ready(function(){
  $("form#pizza").submit(function(event){
    event.preventDefault()

    var sizePrices=parseInt($("select#siz").children("option:selected").val());
    
    // function test(){
    //   alert(sizePrices);
    // }
    // var pizzaPrices= $("#siz").children("option").filter(":checked").val();
    var crustPrice=$("input[name='crust']:checked").val();
    var totalTops=[];
    var totalToppingCost=0;
    $("input[name='top']:checked").each(function(){
     totalTops.push(parseInt($(this).val()));

     var totalToppingCost=totalTops.reduce((totalToppingCost,totalTops)=>totalToppingCost+totalTops);
     
      });
    function test(){
      alert(sizePrices);
    }
    test();
   
    
  });
  $("#btn1").click(function(){
    var name = $("#name").val()   
    $(".output").text(name);

  })
});
