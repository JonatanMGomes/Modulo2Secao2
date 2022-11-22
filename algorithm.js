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

function saveLocalS(e){
    window.localStorage.setItem(e.target.name, e.target.value);
}

function preparingLog(e){
    console.log('Preparando envio do formulário...');
    event.preventDefault();
}

function reloadInfo(e){
    shopName.value = window.localStorage.getItem('shopName');
    shopAddress.value = window.localStorage.getItem('shopAddress');
    openingTime.value = window.localStorage.getItem('openingTime');
    closingTime.value = window.localStorage.getItem('closingTime');
}

shopName.addEventListener('focus', focusBorderColorChange);
shopName.addEventListener('change', saveLocalS);

shopAddress.addEventListener('focus', focusBorderColorChange);
shopAddress.addEventListener('change', saveLocalS);

openingTime.addEventListener('focus', focusBorderColorChange);
openingTime.addEventListener('change', saveLocalS);

closingTime.addEventListener('focus', focusBorderColorChange);
closingTime.addEventListener('change', saveLocalS);

shopForm.addEventListener('submit', preparingLog);
window.addEventListener('load', reloadInfo);