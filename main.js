
const popup_overlay=document.getElementById('popupOverlay');
const openpop=document.getElementById('openpup');
const close=document.getElementById('btn_close_popup');
var Full_Name=document.getElementById('fullName');
var card_Name=document.getElementById('cardName');
var title=document.getElementById('title');
var cardTitle=document.getElementById('cardTitle');
var description=document.getElementById('description')
var cardDescription=document.getElementById('cardDescription')
var additionalInfo=document.getElementById('additionalInfo')
var cardAddition=document.getElementById('cardAddition')
var cardDate=document.getElementById('cardDate')
var invitationDate=document.getElementById('invitationDate')
const backgroundImageInput = document.getElementById('backgroundImage');
const organizerImageInput = document.getElementById('organizerImage');
const cardBackground = document.getElementById('cardBackground'); 
const cardOrganizerImage = document.getElementById('cardOrganizerImage');


backgroundImageInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            cardBackground.style.backgroundImage = `url(${e.target.result})`;
          
        };
        reader.readAsDataURL(file);
    }
});


organizerImageInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            cardOrganizerImage.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});



invitationDate.addEventListener('change',
    function ardDate(){
        console.log(cardDate.value)
        cardDate.innerHTML=invitationDate.value
        console.log(cardDate.value)
    }
)


additionalInfo.addEventListener('input',
    function AdditionalInfo(){
        cardAddition.innerHTML=additionalInfo.value
    }
)


description.addEventListener('input',
    function Description(){
        cardDescription.innerHTML=description.value
    }
)


title.addEventListener('input',
    function something() {
        cardTitle.innerHTML= title.value
    }
)

Full_Name.addEventListener('input',
    function fullName() {
        console.log("test input full name")
       card_Name.innerHTML=Full_Name.value
        
    }

)


popup_overlay.style.display='none';
openpop.addEventListener('click',
function openpop(){
     popup_overlay.style.display='block';

    
})

 btn_close_popup.addEventListener('click',
    function closePopup() {
        popup_overlay.style.display='none';
        
    })





