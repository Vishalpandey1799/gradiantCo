

let leftClick = document.querySelector(".left");
let rightClick = document.querySelector(".right");
let copytoClipboard = document.querySelector(".gradiantCopy");
let body = document.querySelector("body");
let inputBox = document.querySelector("input");
let visible = document.querySelector(".sec");
let clickBtn = document.querySelector(".btn");
let formed = document.querySelector(".formed");
 


const gradiantColors = () =>{
    let hexcode = "0123456789abcdef"
    let addhash = "#"
    for(let i = 0; i<6; i++){
       addhash = addhash+hexcode[Math.floor(Math.random()*16)];
    }

    return addhash;
    
}


 
let colorCode = "#5474a7";
let colorcode = "#784245";
let gradiantMix = () =>{
     colorCode = gradiantColors();
    console.log(colorCode);
    leftClick.textContent = `${colorCode}`
    leftClick.style.backgroundColor = `${colorCode}`;
    body.style.backgroundImage = `linear-gradient(to right , ${colorCode} , ${colorcode})`;
   copytoClipboard.textContent = `linear-gradient(to right , ${colorCode} , ${colorcode})`;  

    
}
let gradiantmix = () =>{
    colorcode = gradiantColors();
    console.log(colorcode);
    rightClick.textContent = `${colorcode}`
    rightClick.style.backgroundColor = `${colorcode}`;

    body.style.backgroundImage = `linear-gradient(to right , ${colorCode} , ${colorcode})`;

    copytoClipboard.textContent = `linear-gradient(to right , ${colorCode} , ${colorcode})`;
}
 

leftClick.addEventListener("click", gradiantMix);
rightClick.addEventListener("click", gradiantmix);

clickBtn.addEventListener("click" , (e) =>{
    e.preventDefault();
    console.log("clicked");
    if(inputBox.value.trim().toLowerCase() === "yes"){
        visible.style.display = "flex";
        formed.style.display = "none";

    }else{
        alert("Kya malik ! Sachiv Bniyega ?");
    }
});


copytoClipboard.addEventListener("click" , () =>{
    navigator.clipboard.writeText(copytoClipboard.textContent);
    alert("copied !");
});

    
