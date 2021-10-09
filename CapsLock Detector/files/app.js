const input = document.querySelector("#password");
const warning = document.querySelector(".text");
//Setting up the functionality to detect the CapsLock//
input.addEventListener("keyup",(x) => {
    if(x.getModifierState("CapsLock")){
        warning.textContent = "Warning! CapsLock is On"
    } else {
        warning.textContent = " ";
    }
})