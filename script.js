var width = 0;
function btnProgress() {
  var progValue = document.getElementById("progressbar");
    if (width < 100) {
      width+=10;
      progValue.style.width = width + '%';
      progValue.innerHTML = width * 1 + '%';
    }
}