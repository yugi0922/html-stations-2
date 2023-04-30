function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  let check = document.getElementById("check");
  if (check.checked) {
    console.log("led");
    document.getElementById("text").style.backgroundColor = "red";
  } else {
    console.log("white");
    document.getElementById("text").style.backgroundColor = "white";
  }
}
