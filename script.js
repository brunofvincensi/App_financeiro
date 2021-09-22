const transactionsUl = document.querySelector('#transaction');

const dummyTransactions = [

{id : 1, name : 'Bolo ', amount: -20},
{id : 2, name : 'Salario', amount: -30},
{id : 3, name : 'Torta ', amount: -20},
{id : 4, name : 'violao ', amount: 150},

]

const addTransactionIntoDom = transaction =>{

  const operator = transaction.amount < 0 ? '-' : '+';
  const amountWithoutOperator = Math.abs(transaction.amount);
  const CSSClass = transaction.amount < 0 ? 'minus' : 'plus';
  const li = document.createElement('li');

  li.classList.add(CSSClass)

   li.innerHTML = `
        ${transaction.name}<span> ${operator} R$ ${amountWihoutOperator} </span>
                                <button class="delete-btn">x</button> `
   transactionsUl.append(li);                  


}

/*Metodo da soma*/

const updateBalanceValues = () =>{

    const transactionAmonts = dummyTransactions.map(transaction => transaction.amount);
    console.log(transactionAmonts);
}






const init = () =>{
dummyTransactions.forEach(addTransactionIntoDom)
updateBalanceValues();


}

init();
//<li class="plus">
// Salario <span>$400</span><button class="delete-btn">x</button>
// </li>
