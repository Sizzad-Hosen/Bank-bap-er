// step 1 add click event handler with submit button

document.getElementById('btn-submit').addEventListener('click', function(){

// step 2 get the gmail address inside the emails input field
// always remember to use .value to get text from an input field
    
    const email=document.getElementById('email-user');
    const text=email.value;
  

    // step 3 get passaword
    // 3.1 set id on the html element
    // 3.2 get the element
    // 3.3 get the value from the element

    const pass=document.getElementById('password-user');
    const text2=pass.value;

    console.log(text,text2);

    // step 4 verify email and password and check valid or not
    if(text === 'sontan@baap.com' && text2==='secret'){
       window.location.href='bank.html';

    }
   else{
   alert('You can not enter it, please enter your valid username and password');
   }

})    
