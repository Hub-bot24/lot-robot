function calcTest(num) {
    let M1 = parseFloat(document.getElementById(`m1_t${num}`).value);
    let M2 = parseFloat(document.getElementById(`m2_t${num}`).value);
    let A  = parseFloat(document.getElementById(`a_t${num}`).value);
    let DL = parseFloat(document.getElementById(`dl_t${num}`).value);

    if (isNaN(M1) || isNaN(M2) || isNaN(A) || isNaN(DL)) {
        alert("Enter all fields");
        return;
    }

    let R1 = (M1 - M2) / A;
    let R2 = 1000 * DL / R1;

    document.getElementById(`result_t${num}`).innerHTML =
        `Spread Rate (Kg/m²): ${R1.toFixed(3)}<br>Spread Rate (m³/m²): ${R2.toFixed(0)}`;
}
