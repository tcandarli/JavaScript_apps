/********************
 * UI Interactions
 * - Write an item to input box 
 * - Click to plus add sign
 * - After clicked, the element will be added to main list
 * - If delete button is clicked, the element will overlined and 
 *   will be moved to the end of list
 * - If it is clicked to clear deleted, deleted elements will be removed
 */

$(document).ready(() => {

    $("input[type=image]").on("click", function () {
        // Add item to the list
        let listItem = $("#inputItem").val();
        $("#inputItem").val("");
        let list = addItemToShoppingList(listItem);

        renderList(list);
    });

    $("#list_container").on("click", "li", function () {
        // Mark item which is added to shopping basket

        let itemName = $(this).data("name");
        let list = checkItemAsDone(itemName);

        renderList(list);
    });

    $(".remove").on("click", function () {
        // remove item which is added to shopping basket

    });

});