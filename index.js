const factor = 0.621371

function convertKmToMiles() {
  const kilometers = parseInt(document.getElementById("km").value);
  const miles = kilometers * factor;
  document.getElementById("miles").value = miles;
}

function convertMilesTokm() {
  const Miles = parseInt(document.getElementById("miles").value);
  const kilometers = Miles / factor;
  document.getElementById("km").value = kilometers;
}

