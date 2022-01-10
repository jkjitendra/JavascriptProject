
const checkBoxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;
checkBoxes.forEach(checkbox => checkbox.addEventListener('click', handleChecked));
function handleChecked(e) {
   
    // Check if user had pressed the shift key down
    // and check that user is checking the checkbox
    let inBetween = false;
    
    if (e.shiftKey && this.checked){
    
        // loop over every single checkbox
        checkBoxes.forEach(checkbox => {
        
            if(checkbox === this || checkbox === lastChecked){
                inBetween = !inBetween;
            }
            //if the checkbox lies inBetween then make it checked
            if (inBetween) {
                checkbox.checked = true;
            }
        });
    }

    lastChecked = this;
    
}


