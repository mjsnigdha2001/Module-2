angular.module('ShoppingListApp', [])
  .controller('ShoppingListController', ShoppingListController);

function ShoppingListController() {
  var listCtrl = this;

  // Initial shopping list
  listCtrl.toBuyList = [
    { name: "cookies", quantity: 10 },
    { name: "apples", quantity: 5 },
    { name: "milk", quantity: 2 },
    { name: "eggs", quantity: 12 },
    { name: "bread", quantity: 1 }
  ];

  listCtrl.alreadyBoughtList = [];

  listCtrl.markAsBought = function (index) {
    var item = listCtrl.toBuyList.splice(index, 1)[0];
    listCtrl.alreadyBoughtList.push(item);
  };
}
