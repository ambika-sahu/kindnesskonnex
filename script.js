const navToggle=document.querySelector('.nav-toggle');
const navMenu=document.querySelector('.nav-menu');
navToggle.addEventListener('click',()=>{
    navMenu.classList.toggle('active');
})

//script for laughter unite event
const registerForm=document.getElementById('register-form');
registerForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const formData=new FormData(registerForm);
    console.log(formData);
    alert('Thankyou for registering for #LaughterUnites!');
})

//script to countdown to the event
const eventDate= new Date('2025-04-25T20:08:00.000Z');
const countdownElement=document.getElementById('countdown');
setInterval(()=>{
    const now=new Date();
    const timeLeft=eventDate-now;
    const days=Math.floor(timeLeft/(1000*60*60*24));
    const hours=Math.floor((timeLeft%(1000*60*60))/(1000*60));
    const seconds=Math.floor((timeLeft%(1000*60))/1000);
    countdownElement.innerHTML=`${days} days ,${hours} hours ,{minutes} minutes ,{seconds} seconds`
},1000);