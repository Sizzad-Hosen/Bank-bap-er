
// step 1

document.getElementById('btn-deposite').addEventListener('click', function(){
// step 2
    const d =document.getElementById('deposite-user');
   const newDString=d.value;
   const newTotal=parseFloat(newDString);

// step 3
   const previous=document.getElementById('total-deposite');
   const previousString=previous.innerText;
   const previousTotal=parseFloat(previousString);
   console.log(previousTotal);

// step 4
totalDeposite= previousTotal + newTotal;
previous.innerText=totalDeposite;

// step 5 
const balance=document.getElementById('balance-total');

const balanceString=balance.innerText;
 balanceTotal=parseFloat(balanceString);


// step 6
const totalShowBalance= balanceTotal + newTotal;
balance.innerText=totalShowBalance;

// step 7
d.value='';





  })