function submitMeta() {
  var inputMeta = document.getElementById("meta");

  inputMeta.value = "rating:" + document.getElementById("rating").value;

  if(document.getElementById("order").value != "none")
    inputMeta.value += "order:" + document.getElementById("order").value;

  if(document.getElementById("duration").value > 0 && !document.getElementById("loopable").checked)
    inputMeta.value += "+duration:>" + document.getElementById("duration").value;

  if(document.getElementById("score").value > 0)
    inputMeta.value += "+score:>" + document.getElementById("score").value;

}

function updateRange() {
    document.getElementById('lblDuration').innerHTML = "Minimum Duration: " + (document.getElementById('duration').value / 60) + " minutes";
    document.getElementById('lblScore').innerHTML = "Minimum Score: " + document.getElementById('score').value;
}
updateRange();
