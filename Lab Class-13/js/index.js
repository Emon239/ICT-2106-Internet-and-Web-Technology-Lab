function addstyle() {
  var para = document.getElementById("paraId");
  para.style.color = "blue";
  para.style.fontSize = "20px";
  para.style.fontWeight = "bold";
}

function removeStyle() {
  var para = document.getElementById("paraId");
  para.style = ""; // removes inline styles
}

function back() {
  window.history.back(); // goes back to previous page
}
