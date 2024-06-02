const btn = document.querySelector("#btn")
const slider = document.querySelector("#range")
const rangeVal = document.querySelector("#rangeVal")
const NewPass = document.querySelector("#NewPass")
const UpperCase = document.querySelector("#UpperCase")
const LowerCase = document.querySelector("#LowerCase")
const Number = document.querySelector("#Number")
const Symbol = document.querySelector("#Symbol")
const cpy = document.querySelector("#cpybtn")
let flag =0;

rangeVal.innerHTML=slider.value; 
slider.addEventListener('input',(e) =>{
    rangeVal.innerHTML=e.target.value; 

});
btn.addEventListener('click',() =>{
    let capletter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let smallLetter = "abcdefghijklmnopqrstuvwxyz";
    let numberstr = "0123456789";
    let symbolstr ="!@#$%^&*?~";
    
    let fnlstr = "";
    
    if(UpperCase.checked){
        fnlstr += capletter;
    }
    if(LowerCase.checked){
        fnlstr += smallLetter;
    }
    if(Number.checked){
        fnlstr += numberstr;
    }
    if(Symbol.checked){
        fnlstr += symbolstr;
    }
    if(fnlstr === ''){
        alert("Select at least one field")
    }
    let lattestPass ='';

    for(let i=0;i<slider.value;i++){
        let rndnum = Math.floor(Math.random() * fnlstr.length)
        // lattestPass +=fnlstr(rndnum);
        lattestPass += fnlstr.charAt(rndnum);

    }

    NewPass.innerHTML=`${lattestPass}`
})
cpy.addEventListener('click',() => {
    window.navigator.clipboard.writeText(NewPass.innerHTML);
    
    cpy.style.color="limegreen";
    
})