function renderList(itemList) {
    let liList = itemList.map((itemObject) => `<li data-name="${itemObject}"
                    class="${itemObject.added==true ? 'added' : ''}">
                    ${itemObject.name} <sup class="remove">x</sup> </li>`);
    $("#list_container ul").html(liList.join(""));
}