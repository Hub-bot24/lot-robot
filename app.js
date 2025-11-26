// --------------------------
// Auto-Calculate Functions
// --------------------------

function calculateAll() {
    for (let t = 1; t <= 3; t++) {
        let M1 = parseFloat(document.getElementById(`M1_${t}`).value) || 0;
        let M2 = parseFloat(document.getElementById(`M2_${t}`).value) || 0;
        let A  = parseFloat(document.getElementById(`A_${t}`).value)  || 0;
        let DL = parseFloat(document.getElementById(`DL_${t}`).value) || 0;

        // R1 = (M1 - M2) / A
        let R1 = A > 0 ? (M1 - M2) / A : 0;

        // R2 = (1000 × DL) / R1
        let R2 = R1 > 0 ? (1000 * DL) / R1 : 0;

        document.getElementById(`R1_${t}`).value = R1.toFixed(3);
        document.getElementById(`R2_${t}`).value = R2.toFixed(0);
    }
}

// Trigger recalculation whenever inputs change
document.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", calculateAll);
});


// --------------------------
// PDF EXPORT FUNCTION
// --------------------------

async function downloadPDF() {
    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();
    let y = 10;

    doc.setFontSize(14);
    doc.text("Field Spread Rate Report", 10, y);
    y += 10;

    doc.setFontSize(11);

    // HEADER FIELDS
    const fields = [
        ["Project", document.getElementById("proj").value],
        ["Road", document.getElementById("road").value],
        ["Job/Contract #", document.getElementById("job").value],
        ["Site Location", document.getElementById("site").value],
        ["Quarry Source", document.getElementById("quarry").value],
        ["Aggregate Size", document.getElementById("agg").value],
        ["Truck Rego #", document.getElementById("rego").value],
        ["Truck Fleet #", document.getElementById("fleet").value],
        ["Tested By", document.getElementById("tester").value],
        ["Date", document.getElementById("date").value]
    ];

    fields.forEach(f => {
        doc.text(`${f[0]}: ${f[1]}`, 10, y);
        y += 7;
    });

    y += 5;

    // TEST TABLES
    for (let t = 1; t <= 3; t++) {
        doc.setFontSize(12);
        doc.text(`TEST ${t}`, 10, y);
        y += 8;

        const keys = ["M1", "M2", "A", "R1", "DL", "R2"];

        keys.forEach(key => {
            const val = document.getElementById(`${key}_${t}`).value;
            doc.setFontSize(10);
            doc.text(`${key}: ${val}`, 12, y);
            y += 6;
        });

        y += 4;
    }

    doc.save("LOT-Robot-Report.pdf");
}


// First calculation on load
calculateAll();
