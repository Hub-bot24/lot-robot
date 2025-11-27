function calc() {
  let m1 = parseFloat(document.getElementById("m1").value);
  let m2 = parseFloat(document.getElementById("m2").value);
  let a  = parseFloat(document.getElementById("a").value);
  let dl = parseFloat(document.getElementById("dl").value);

  if (isNaN(m1) || isNaN(m2)) {
    document.getElementById("result").innerHTML = "Please enter M1 and M2";
    return;
  }

  let r1 = (m1 - m2) / a;
  let r2 = (1000 * dl) / r1;

  document.getElementById("result").innerHTML =
    `Spread Rate (Kg/m²): ${r1.toFixed(3)}<br>
     Spread Rate (m³/m²): ${r2.toFixed(0)}`;
}
