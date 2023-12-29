// click korbo jake event handler jabe tar kase
//step 1: add event handler withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function(){

// step 2: get windrow amount with withdrawuser input
const withdrawField=document.getElementById('withdraw-user');
const newWithdrawString=withdrawField.value;
newWithdrawTotal=parseFloat(newWithdrawString);
console.log(newWithdrawTotal);




// step 3: get previous and current total withdraw
const withdrawTotalElement=document.getElementById('withdraw-total');
const previousWithdrawTotalString=withdrawTotalElement.innerText;
const previousWithdrawTotal=parseFloat(previousWithdrawTotalString);


// step 4:calculate previous and new total withdraw amount

const currentWithdrawTotal= previousWithdrawTotal + newWithdrawTotal;

withdrawTotalElement.innerText= currentWithdrawTotal;

// step 5: get the previous balance total 

const balanceTotalElement=document.getElementById('balance-total');
const balanceTotalString=balanceTotalElement.innerText;
const balanceTotal=parseFloat(balanceTotalString);


console.log(balanceTotal);

// step 6: new balance total
const newBalanceTotal= balanceTotal - newWithdrawTotal;
balanceTotalElement.innerText=newBalanceTotal;


// step 7: anti string 
withdrawField.value='';





})