function calculate() {
  const M1 = parseFloat(document.getElementById("M1").value);
  const M2 = parseFloat(document.getElementById("M2").value);
  const A  = parseFloat(document.getElementById("A").value);
  const DL = parseFloat(document.getElementById("DL").value);

  if (isNaN(M1)) return alert("Enter M1");

  const R1 = (M1 - M2) / A;
  const R2 = (1000 * DL) / R1;

  document.getElementById("output").innerHTML = `
    <b>Spread Rate (Kg/m²):</b> ${R1.toFixed(3)}<br>
    <b>Spread Rate (m²/m³):</b> ${R2.toFixed(0)}
  `;
}

