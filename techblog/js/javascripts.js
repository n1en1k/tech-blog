//<!--
function imposeMaxLength(Object, MaxLen) {
  return Object.value.length <= MaxLen;
}

function validateForm() {
  var nimi = document.forms["yhteydenotto"]["nimi"].value;
  var puhelin = document.forms["yhteydenotto"]["puhelin"].value;
  var sposti = document.forms["yhteydenotto"]["sposti"].value;
  var viesti = document.forms["yhteydenotto"]["viesti"].value;

  var nimi = nimi.replace(/^\s+|\s+$/g, "");
  var puhelin = puhelin.replace(/^\s+|\s+$/g, "");
  var sposti = sposti.replace(/^\s+|\s+$/g, "");
  var viesti = viesti.replace(/^\s+|\s+$/g, "");

  if (nimi == "") {
    alert("Kirjoita nimesi!");
    document.getElementById("nimi").focus();
    return false;
  } else if (nimi == "Nimi:") {
    alert("Kirjoita nimesi!");
    document.getElementById("nimi").focus();
    return false;
  } else if (puhelin == "") {
    alert("Kirjoita puhelinnumerosi!");
    document.getElementById("puhelin").focus();
    return false;
  } else if (puhelin == "Puhelin:") {
    alert("Kirjoita puhelinnumerosi!");
    document.getElementById("puhelin").focus();
    return false;
  }

  var e = document.forms["yhteydenotto"]["sposti"].value;
  var atpos = e.indexOf("@");
  var dotpos = e.lastIndexOf(".");

  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= e.length) {
    alert("Virheellinen e-mail osoite");
    document.getElementById("sposti").focus();
    return false;
  } else if (viesti == "") {
    alert("Kirjoita viestisi!");
    document.getElementById("viesti").focus();
    return false;
  } else if (viesti == "Viestisi") {
    alert("Kirjoita viestisi!");
    document.getElementById("viesti").focus();
    return false;
  }
}

function resetti() {
  if (confirm("Haluatko varmasti tyhjentää kentät?")) {
    document.yhteydenotto.reset();
  }
}

function isNumberKey(evt) {
  var charCode = evt.which ? evt.which : event.keyCode;

  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    alert("Van numeroita!");
    return false;
  } else {
    return true;
  }
}

function delayer() {
  window.location = "index.html";
}

var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 3) {
    counter = 1;
  }
}, 4000);

//-->
