
const popup_overlay=document.getElementById('popupOverlay');
const openpop=document.getElementById('openpup');
const close=document.getElementById('closePopup')
popup_overlay.style.display='none';
openpop.addEventListener('click',
function openpop(){
     popup_overlay.style.display='block';

    
})

closePopup.addEventListener('click',
    function closePopup() {
        popup_overlay.style.display='none';
        
    })



