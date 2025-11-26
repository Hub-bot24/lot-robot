
function calc(test){
let M1=parseFloat(document.getElementById(`M1_T${test}`).value)||0;
let M2=parseFloat(document.getElementById(`M2_T${test}`).value)||0;
let A=parseFloat(document.getElementById(`A_T${test}`).value)||0.97;
let DL=parseFloat(document.getElementById(`DL_T${test}`).value)||1.45;
let R1=(M1-M2)/A;
let R2=1000*DL/R1;
document.getElementById(`R1_T${test}`).value=isFinite(R1)?R1.toFixed(3):'';
document.getElementById(`R2_T${test}`).value=isFinite(R2)?R2.toFixed(0):'';
}
[1,2,3].forEach(t=>{
['M1','M2','A','DL'].forEach(f=>{
document.getElementById(`${f}_T${t}`).addEventListener('input',()=>calc(t));
});
});
