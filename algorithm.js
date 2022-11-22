const shopName = document.getElementById("shopName");
const shopAddress = document.getElementById("shopAddress");
const openingTime = document.getElementById("openingTime");
const closingTime = document.getElementById("closingTime");
const shopForm = document.getElementById("shopForm");

function focusBorderColorChange(e){
    e.target.style = 'outline-color:purple'
}

function valueChange(e){
    console.log(e.target.value)
}

function preparingLog(e){
    console.log('Preparando envio do formulário...');
    event.preventDefault();
}

shopName.addEventListener('focus', focusBorderColorChange);
shopName.addEventListener('change', valueChange);

shopAddress.addEventListener('focus', focusBorderColorChange);
shopAddress.addEventListener('change', valueChange);

openingTime.addEventListener('focus', focusBorderColorChange);
openingTime.addEventListener('change', valueChange);

closingTime.addEventListener('focus', focusBorderColorChange);
closingTime.addEventListener('change', valueChange);

shopForm.addEventListener('submit', preparingLog);