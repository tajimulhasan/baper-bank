//handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function(){
    //get the amount deposited
const depositInput = document.getElementById('deposit-input');
const newdepositAmount = depositInput.value;

if(newdepositAmount === ''){
  alert("Your deposit amount is empty");
  return;
}

//update deposit total

const depositTotal = document.getElementById('deposit-total');

const previousDepositAmount = depositTotal.innerText;
const newDepositTotalAmount = parseFloat(previousDepositAmount) + parseFloat(newdepositAmount);
 
depositTotal.innerText = newDepositTotalAmount;


//clear deposit input field

depositInput.value = '';


//update account balance
const  blalanceTotal = document.getElementById('balance-total');
const  previousbalanceText = blalanceTotal.innerText;
const previousBalanceTotal = parseFloat(
    previousbalanceText
);
const newBalanceTotal = previousBalanceTotal + parseFloat(newdepositAmount);
blalanceTotal.innerText = newBalanceTotal;

// clear field 

}); 


// handle withdraw event hadler
document.getElementById('withdraw-button').addEventListener('click', function (){
  const withdrawInput = document.getElementById('withdraw-input');
const withdrawAmountText = withdrawInput.value;
const newWithdrawAmount = parseFloat(withdrawAmountText);

if(withdrawAmountText === ''){
  alert("Your withdrow amount is empty");
  return;
}


//set withdraw total
const withdrawTotal = document.getElementById('withdraw-total');
const previouswithdrawText = withdrawTotal.innerText;
const previouswithdrawTotal = parseFloat(previouswithdrawText);

const newwithdrawTotalAmount= previouswithdrawTotal + newWithdrawAmount;
withdrawTotal.innerText = newwithdrawTotalAmount;


// clear 
 withdrawInput.value = '';


 // update balance for withdraw
 const blalanceTotal = document.getElementById('balance-total');
 const previousbalancetext = blalanceTotal.innerText;
const previousBalanceTotal = parseFloat(previousbalancetext);


if(previousBalanceTotal < newWithdrawAmount){
 alert("Insufficient balance");
 return;
}
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  blalanceTotal.innerText = newBalanceTotal;
});