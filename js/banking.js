function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const amountValue = parseFloat(inputField.value);
     // clear input value
     inputField.value = '';
     return amountValue;
}
function updateTotalField(totalFieldId, amount){
    const totalElement = document.getElementById(totalFieldId);
    const previousTotal = parseFloat(totalElement.innerText);
    totalElement.innerText = previousTotal + amount;
}
function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotal.innerText);
    return previousBalanceTotal;
}

function updateBalance(amount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    // const previousBalanceTotal = parseFloat(balanceTotal.innerText);
    const previousBalanceTotal = getCurrentBalance();
    if(isAdd == true){
        balanceTotal.innerText= previousBalanceTotal + amount;
    }
    else{
        balanceTotal.innerText= previousBalanceTotal - amount;
    }
}

// handle deposit button
document.getElementById('deposit-button').addEventListener('click', function(){
    // const depositInput = document.getElementById('deposit-input');
    // const newDepositAmount = parseFloat(depositInput.value);
     
   
   
     // get current deposit
    // const depositTotal= document.getElementById('deposit-total');
    // const previousDepositTotal = parseFloat(depositTotal.innerText);
    // depositTotal.innerText = previousDepositTotal+ newDepositAmount;
    
  
    // update balance
    // const balanceTotal = document.getElementById('balance-total');
    // const previousBalanceTotal = parseFloat(balanceTotal.innerText);
    // balanceTotal.innerText= previousBalanceTotal + newDepositAmount;
    const newDepositAmount = getInputValue('deposit-input');
    if(newDepositAmount > 0){
        updateTotalField('deposit-total', newDepositAmount);
        updateBalance(newDepositAmount, true);
    }
    // // clear input value
    // depositInput.value = '';
})

// handle deposit button
document.getElementById('withdraw-button').addEventListener('click', function(){
    // const withdrawInput = document.getElementById('withdraw-input');
    // const newWithdrawAmount = parseFloat(withdrawInput.value);
    

    // const newWithdrawAmount = getInputValue('withdraw-input');
    // const withdrawTotal = document.getElementById('withdraw-total');
    // const previousWithdrawTotal = parseFloat(withdrawTotal.innerText);
    // withdrawTotal.innerText= previousWithdrawTotal + newWithdrawAmount;
   


    // update balance
    // const balanceTotal= document.getElementById('balance-total');
    // const previousBalanceTotal = parseFloat(balanceTotal.innerText);
    // balanceTotal.innerText = previousBalanceTotal - newWithdrawAmount;
    const newWithdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
   if( newWithdrawAmount > 0 && newWithdrawAmount < currentBalance){
    updateTotalField('withdraw-total', newWithdrawAmount);
    updateBalance(newWithdrawAmount, false);
   }
})
