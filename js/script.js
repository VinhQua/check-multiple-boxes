const checkBoxes = document.querySelectorAll('.to-do-list .item input');
let isBetween = false;
let lastChecked;
const checkHandlder = function(e){
    //console.log(e.shiftKey, this.checked);
    if (e.shiftKey && this.checked){
        checkBoxes.forEach(checkBox=>{
            console.log(checkBox);
            if (checkBox === this || checkBox === lastChecked){
                isBetween =!isBetween;
                console.log("this")
            }
            if (isBetween){checkBox.checked = true;
            console.log("checked")}
        })
    }
    lastChecked = this;
    console.log(lastChecked,"last");
};
checkBoxes.forEach(checkbox => checkbox.addEventListener('click',checkHandlder))
