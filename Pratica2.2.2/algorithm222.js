const circle1 = document.getElementById("circle1");
const circle2 = document.getElementById("circle2");
const circle3 = document.getElementById("circle3");
const circle4= document.getElementById("circle4");
const circle5 = document.getElementById("circle5");
const circle6 = document.getElementById("circle6");
const circle7 = document.getElementById("circle7");
const circle8 = document.getElementById("circle8");
const circle9 = document.getElementById("circle9");
const circle10 = document.getElementById("circle10");

const star1 = document.getElementById("star1");
const star2 = document.getElementById("star2");
const star3 = document.getElementById("star3");
const star4= document.getElementById("star4");
const star5 = document.getElementById("star5");

function changeImg(e) {
    var iconT = e.target.id;
    if (iconT.includes("star")) {
        console.log('Nota para monitoria: ' + e.target.name);
        e.target.src="./starFull.png";
    } else{
        console.log('Chance de recomendar: ' + e.target.name);
        e.target.src="./circleFull.png";
    }
}

circle1.addEventListener('click', changeImg);
circle2.addEventListener('click', changeImg);
circle3.addEventListener('click', changeImg);
circle4.addEventListener('click', changeImg);
circle5.addEventListener('click', changeImg);
circle6.addEventListener('click', changeImg);
circle7.addEventListener('click', changeImg);
circle8.addEventListener('click', changeImg);
circle9.addEventListener('click', changeImg);
circle10.addEventListener('click', changeImg);

star1.addEventListener('click', changeImg);
star2.addEventListener('click', changeImg);
star3.addEventListener('click', changeImg);
star4.addEventListener('click', changeImg);
star5.addEventListener('click' ,changeImg);