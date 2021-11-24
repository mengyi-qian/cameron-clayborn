function openNav() {
  document.getElementById("myNav").style.width = "100%";
  document.getElementById("openbtn").classList.add("hide");
  document.getElementById("closebtn").classList.remove("hide");
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  document.getElementById("openbtn").classList.remove("hide");
  document.getElementById("closebtn").classList.add("hide");
}

setTimeout(function(){
    document.body.className="";
},500);
