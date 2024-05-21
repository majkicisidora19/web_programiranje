// prikaz celog izraza
function dis(val) { 
    document.getElementById("result").value += val 
} 


// evaluacija izraza
function solve() { 
    let x = document.getElementById("result").value
    document.getElementById("result").value = eval(x)
} 

// brisanje
function clr() { 
    document.getElementById("result").value = "" 
} 