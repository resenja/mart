function velicinaSlova() {
  const sredina = document.querySelector("#sredina");
  if (document.querySelector("#velika-slova").checked) sredina.innerHTML = sredina.innerHTML.toUpperCase();
  else sredina.innerHTML = sredina.innerHTML.toLowerCase();
}

function bojaSlova() {
  const sredina = document.querySelector("#sredina");
  if (document.querySelector("#plava-slova").checked) sredina.style.color = "blue";
  else if (document.querySelector("#crvena-slova").checked) sredina.style.color = "red";
  else sredina.style.color = "green";
}

function bojaPozadine() {
  const sredina = document.querySelector("#sredina");
  if (document.querySelector("#zuta-pozadina").checked) sredina.style.backgroundColor = "yellow";
  else sredina.style.backgroundColor = "black";
}

function ubaciTekst() {
  document.querySelector("#unos-teksta").textContent = document.querySelector("textarea").value;
}
