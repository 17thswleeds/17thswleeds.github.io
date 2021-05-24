function isIE() {
  if (document.documentMode) {
  	document.getElementById("ie-warning").style.display = 'block'
  }
}

isIE()