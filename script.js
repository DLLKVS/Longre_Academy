
let navclass = document.querySelector("ul");
classgen = (x) => {
  navclass.classList.toggle("navdisplay");
  x.classList.toggle("change");
};

let home=document.getElementById('home');
let contact=document.getElementById('contact');
let admission=document.getElementById('admission');

Homebtn=()=>{
home.classList.toggle('white');
contact.classList.remove('white');
admission.classList.remove('white');
}
Progmbtn=()=>{
  
  home.classList.remove('white');
contact.classList.remove('white');
admission.classList.remove('white');
  }
  Campbtn=()=>{
    home.classList.remove('white');
  contact.classList.remove('white');
  admission.classList.remove('white');
    }
    Contbtn=()=>{
      contact.classList.toggle('white');
      home.classList.remove('white');
    admission.classList.remove('white');
      }
      admbtn=()=>{
        admission.classList.toggle('white');
        home.classList.remove('white');
      contact.classList.remove('white');
        }
// sroll button
scrollWin = (x, y) => {
  let content = document.getElementById("content");
  content.scrollBy(x, y);
};

// Chat Message
var chatbox = document.getElementById("fb-customer-chat");
chatbox.setAttribute("page_id", "101421454944610");
chatbox.setAttribute("attribution", "biz_inbox");
//  SDK Code / chat message
window.fbAsyncInit = function () {
  FB.init({
    xfbml: true,
    version: "v17.0",
  });
};

(function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");

HomeTu = () => {
  let formdisplay = document.getElementById("form-display");
  formdisplay.classList.toggle("form-display-done");
};

ParentAdd = () => {
  let formdisplay = document.getElementById("form-screening");
  formdisplay.classList.toggle("form-display-done");
};

// Submit btn inner text changer in admission form in admission section
formtext = () => {
  let textselect = document.getElementById("Form-type-selection");
  let submitBtn = document.getElementById("submitBtn");
  submitBtn.innerText = `Apply in ${textselect.value}`;
};
