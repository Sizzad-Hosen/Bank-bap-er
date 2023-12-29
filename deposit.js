        // step 1: add event lishner to the deposite button
        document.getElementById('btn-deposite').addEventListener('click',function(){
            //  step 2 :get the deposite amount from the user deposite
            // for input feild use .value
                const depositeField=document.getElementById('deposite-user');
                const newDepositeAmountString=depositeField.value;
               const newDepositeAmount=parseFloat (newDepositeAmountString); 
            
    
            //    step 3: get current deposite total
            const depositeTotalElement=document.getElementById('total-deposite');
            const previousDepositeTotalString=depositeTotalElement.innerText;
            const previousDepositeTotal=parseFloat(previousDepositeTotalString);
    
            //step 4: add previous and current input
    
           currrentDepositeTotal= previousDepositeTotal + newDepositeAmount;
            depositeTotalElement.innerText=currrentDepositeTotal;
    
            // step 5: get total balance
            const balanceTotalElement=document.getElementById('balance-total');
            const previousBalanceTotalString=balanceTotalElement.innerText;
            previousBalanceTotal=parseFloat(previousBalanceTotalString);
    
            // step 6: calculate total balance
            const currentBalanceTotal =previousBalanceTotal + newDepositeAmount;
            // set the balace total inner.text 
            balanceTotalElement.innerText=currentBalanceTotal;
    
           depositeField.value='';
    
            
            })