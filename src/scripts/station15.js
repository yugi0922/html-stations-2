function displayList() {
  var textList = document.getElementById("fruits").innerHTML;
  console.log(textList);
  //   var pList = textList.getElementsByTagName("p");
  //   console.log(pList);
  //   var fruitsList;
  //   for (var i = 0; pList.length; i++) {
  //     console.log(pList[i].textContent);
  //   }
  document.getElementById("fruits").innerHTML =
    "<ul><li>リンゴ</li><li>イチゴ</li><li>ブドウ</li></ul>";
  console.log(document.getElementById("fruits").innerHTML);
}
