// alert('sam');
var menuBtn =document.getElementById('menu-btn');


menuBtn.addEventListener('click',displayNav);
function displayNav(){
    var menuContents = document.getElementById('nav');
    if (menuContents.style.display=='block') {
        menuContents.style.display='none';
    } else {
        menuContents.style.display='block';
    }
    
    
}