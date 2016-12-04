var orders = {};

$(document).ready(function(){
  $("#menuItems .container .row .col-md-2 select").each(function( index ) {
    $(this).change(function(){
      orderChanged($(this));
    });
  $("#orderbtn").click(function(){
    $(".overlay, .overlay-message").show();
  });
  $(".overlay, .overlay-message").hide();
    //console.log( index + ": " + $( this ).text() );
  });
});

function orderChanged(thisObj){
  $("#orderDetails").show();

  //quantity
  var quantity = $(thisObj).val();

  //siblings
  var siblings = $(thisObj).parent().parent().parent().children();
  var name = $(siblings).eq(0).children().text();
  var cost = $(siblings).eq(1).children().text();

  console.log(name+"\t"+cost+"\t"+quantity);

  orders[name] = [cost, quantity];

  printOrder();
}

function printOrder(){
  var itemNames = Object.keys(orders);
  var runningTotal = 0;
  $("#orderList").html("");
  for(var i=0; i<itemNames.length; i++){
    var thisItem = itemNames[i];
    var infoPair = orders[thisItem];
    var thisCost = infoPair[0];
    var thisQuantity = infoPair[1];

    $("#orderList").append('<div class="row"><div class="col-md-6"><p>'+thisItem+'</p></div><div class="col-md-4"><p>'+thisQuantity+'</p></div><div class="col-md-2"><p>$'+thisCost+'</p></div></div>');
    runningTotal += parseInt(thisCost)*parseInt(thisQuantity);
  }
  $("#orderList").append('<div class="row"><div class="col-md-10"></div><div class="col-md-2"><h2>$'+runningTotal+'</h2></div></div>');
}
