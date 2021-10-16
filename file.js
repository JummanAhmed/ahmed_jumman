function showmenu(){
   
    document.getElementById("menu-id").style.visibility = "visible";
    document.getElementById("main-id").style.visibility = "hidden";
    document.getElementById("see-btn-id").style.visibility = "hidden";
    document.getElementById("toogle").style.display = "none";
    document.getElementById("hide").style.display = "inline";
   
}
function hidemenu(){
    document.getElementById("menu-id").style.visibility = "hidden";
    document.getElementById("main-id").style.visibility = "visible";
    document.getElementById("see-btn-id").style.visibility = "visible";
    document.getElementById("toogle").style.display = "inline";
    document.getElementById("hide").style.display = "none";
}

function showmenutwo(){
    document.getElementById("ab-con-id").style.visibility = "hidden";
    document.getElementById("toogle").style.display = "none";
    document.getElementById("hide").style.display = "inline";
    document.getElementById("menu-id").style.visibility = "visible";
    
}
function hidemenutwo(){
    document.getElementById("menu-id").style.visibility = "hidden";
    document.getElementById("ab-con-id").style.visibility = "visible";
    document.getElementById("toogle").style.display = "inline";
    document.getElementById("hide").style.display = "none";
}

function showmenuthree(){
    document.getElementById("skillbox-id").style.visibility = "hidden";
    document.getElementById("toogle").style.display = "none";
    document.getElementById("hide").style.display = "inline";
    document.getElementById("menu-id").style.visibility = "visible";
    document.getElementById("skill-para").style.display = "none";
}

function hidemenuthree(){
    document.getElementById("toogle").style.display = "inline";
    document.getElementById("hide").style.display = "none";
    document.getElementById("menu-id").style.visibility = "hidden";
    document.getElementById("skill-para").style.display = "inline";
    document.getElementById("skillbox-id").style.visibility = "visible";
}
function showmenuf(){
    document.getElementById("id-form").style.display = "none";
    document.getElementById("toogle").style.display = "none";
    document.getElementById("hide").style.display = "inline";
    document.getElementById("menu-id").style.visibility = "visible";
}
function hidemenuf(){
    document.getElementById("id-form").style.display = "flex";
    document.getElementById("toogle").style.display = "inline";
    document.getElementById("hide").style.display = "none";
    document.getElementById("menu-id").style.visibility = "hidden";
}