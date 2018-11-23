/************************
 * Adds a new item to existent list.
 * @param {*} item
 *  
 */

 function addItemToShoppingList(item) {
     let listString = localStorage.getItem("shoppingList");
     let list = JSON.parse(listString);

     // if there is no list 
     if (list == undefined) {
         list = new Array();
     }
     list.unshift( {
        "name": item,
        "added": false
     });

     listString = JSON.stringify(list);
     localStorage.setItem("shoppingList", listString);

     return list;
 }

 /***************
  * 
  * Find item in the list and mark it. 
  * Then move it to the and of list
  * @param{*} name
  */

  function checkItemAsDone(name) {
      let listString = localStorage.getItem("shoppingList");
      let list = JSON.parse(listString);
      let item = list.find(item => item.name === name);
      item.added = true;
      listString = JSON.stringify(list);
      localStorage.setItem("shoppingList", listString);
  }
 