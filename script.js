
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

scrollWin = (x, y) => {
  let content = document.getElementById("content");
  content.scrollBy(x, y);
};

const form = document.getElementById('feedback');
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent the default form submission

            const formData = new FormData(form);
            const url = 'YOUR_WEB_APP_URL_HERE'; // Replace with your web app URL

            fetch(url, {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.result === 'success') {
                    alert('Form submitted successfully!');
                    form.reset(); // Reset the form
                } else {
                    alert('There was an error submitting the form.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('There was an error submitting the form.');
            });
        });



