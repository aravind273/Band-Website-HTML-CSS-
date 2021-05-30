function onhappy() {
  var name1 = document.getElementById("name1").value;
  var radio = "";
  if (document.getElementById("male").checked) {
    radio += document.getElementById("male").value;
  } else {
    radio += document.getElementById("female").value;
  }
  var textfield = document.getElementById("textarea").value;
  alert(`name is ${name1}
  selected gender is ${radio}
  entered textfield is ${textfield}`);
}
