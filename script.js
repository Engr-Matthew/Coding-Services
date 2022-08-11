var info = [
"Jewish Family Service of Houston launches new website.", 
"Poetic strategically reimagines the online presence of a real estate leader", 
"Poetic welcomes Jarred Eberhardt as creative director"
];
var i  = 0 ;
setInterval(function (){
document.getElementById("sentence").innerHTML = info[i];
i++;
i = i%3;
}, 4000)