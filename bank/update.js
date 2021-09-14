document.getElementById('deposit-button').addEventListener('click', function() {


    // deposit input section
    const inputDeposit = document.getElementById('deposit-input');
    const inputDepositAmountText = inputDeposit.value;
    const inputDepositAmount = parseFloat(inputDepositAmountText);



    if (inputDepositAmount > 0) {
        // deposit text
        const totalDeposit = document.getElementById('Deposit-amount');
        const totalDepositText = totalDeposit.innerText;
        const newDepositValue = parseFloat(totalDepositText);

        // inputValue send to depositText

        const newDepositTotal = newDepositValue + inputDepositAmount;
        totalDeposit.innerText = newDepositTotal;

        // add with balance
        const totalBalance = document.getElementById('Balance-amount');
        const totalBalanceText = totalBalance.innerText;
        const totalBalanceValue = parseFloat(totalBalanceText);

        const newTotalBalance = totalBalanceValue + inputDepositAmount;
        totalBalance.innerText = newTotalBalance;

    }
    // remove input value
    inputDeposit.value = '';

})

// deposit input section
document.getElementById('withdraw-button').addEventListener('click', function() {
    const inputWithdraw = document.getElementById('withdraw-input');
    const inputWithdrawText = inputWithdraw.value;
    const inputWithdrawAmount = parseFloat(inputWithdrawText);

    if (inputWithdrawAmount > 0) {
        // inputValue send to withdrawText

        const withdrawBalance = document.getElementById('Withdraw-amount');
        const withdrawBalanceText = withdrawBalance.innerText;
        const withdrawTotal = parseFloat(withdrawBalanceText)

        // inputValue send to withdrawText
        const newWithdrawTotalBalance = inputWithdrawAmount + withdrawTotal;
        withdrawBalance.innerText = newWithdrawTotalBalance;

        // decrise from balance to withdraw
        const balance = document.getElementById('Balance-amount');
        const balanceText = balance.innerText;
        const balanceValue = parseFloat(balanceText);

        const exculBalance = balanceValue - inputWithdrawAmount;
        balance.innerText = exculBalance;


    }
    inputWithdraw.value = '';


})