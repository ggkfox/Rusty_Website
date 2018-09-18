// create variables
var bio = document.getElementById('bioModal');
var openBioBtn = document.getElementById('modal1');
var closeBioBtn = document.getElementById('closeBio');
var pricing = document.getElementById('pricingModal');
var openPricingBtn = document.getElementById('modal2');
var closePricingBtn = document.getElementById('closePricing');
var contact = document.getElementById('contactModal');
var openContactBtn = document.getElementById('modal3');
var closeContactBtn = document.getElementById('closeContact');

// listen for open clicks
openBioBtn.addEventListener('click', openBio);
openPricingBtn.addEventListener('click', openPricing);
openContactBtn.addEventListener('click', openContact);

// listen for close clicks
closeBioBtn.addEventListener('click', closeBio);
closePricingBtn.addEventListener('click', closePricing);
closeContactBtn.addEventListener('click', closeContact);

// listen for window clicks
window.addEventListener('click', closeAll)

// functions to open modals
// bio
function openBio(){
    bio.style.display = 'block';
}
function closeBio(){
    bio.style.display = 'none';
}

// pricing
function openPricing(){
    pricing.style.display = 'block';
}
function closePricing(){
    pricing.style.display = 'none';
}

// contact
function openContact(){
    pricing.style.display = 'block';
}
function closeContact(){
    contact.style.display = 'none';
}

function closeAll(e){ //from window click
    if(e.target == bio || e.target == pricing || e.target == contact){
        closeBio();
        closePricing();
        closeContact();
    }
}