let redBtn = document.getAnimationsById("red");
let blueBtn = document.getAnimationsById("blue");
let blackBtn = document.getAnimationsById("black");
let bike = document.getAnimationsById("bike")


redBtn.onclick = function(){
    bike.style.backgroundImage = "url(./BMW_bike_img/BMW1.png)";
}

blueBtn.onclick = function(){
    bike.style.backgroundImage = "url(./BMW_bike_img/BMW2.png)";
}

blackBtn.onclick = function(){
    bike.style.backgroundImage = "url(./BMW_bike_img/BMW3.png)";
}
