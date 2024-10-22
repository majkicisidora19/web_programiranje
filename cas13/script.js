function dugme(elem){
    var odg = elem.parentElement.nextElementSibling.style.cssText;
    if (odg == "max-height: 500px;"){
        elem.parentElement.nextElementSibling.style.cssText = 'max-height: 0;'
        elem.style.cssText = "transform: rotate(0deg);"
    }
    else{
        elem.parentElement.nextElementSibling.style.cssText = 'max-height: 500px;'
        elem.style.cssText = "transform: rotate(45deg);"
    }
}