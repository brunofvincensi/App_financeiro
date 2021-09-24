// pegar componente por ID
const transactionsUl = document.querySelector('#transactions');
const moneyPlusDisplay = document.querySelector('#money-plus');
const moneyMinusDisplay = document.querySelector('#money-minus');
const balanceDisplay = document.querySelector('#balance');
const inputTransactionName = document.querySelector('#text');
const inputTransactionAmount = document.querySelector('#amount');

// declaraccao de um objeto literal
const dummyTransactions = [
    
]
const addTransactionIntoDom = transaction => {
    const operator = transaction.amount < 0 ? '-' : '+'; // if ternario ou if linha
    const amountWithoutOperator = Math.abs(transaction.amount);
    const CSSClass = transaction.amount < 0 ? 'minus' : 'plus';
    const li = document.createElement('li');
    li.classList.add(CSSClass);
    li.innerHTML = ` 
            ${transaction.name} <span> ${operator} R$  ${amountWithoutOperator} </span> 
                                    <button class="delete-btn">x</button> `
    transactionsUl.append(li);
}

/*
    Metodo que ira retornar todo os valores somados de receitas e despesas
    */
const updateBalanceValues = () => {

    // pegar todos os valores do objeto dummy
    const transactionAmounts = dummyTransactions.map(transaction => transaction.amount);

    // somatorio dos valores retornados    
    const total = transactionAmounts
        .reduce((acumulator, transaction) => acumulator + transaction, 0)
        .toFixed(2);

    // retorna todas as receitas
    const income = transactionAmounts
        .filter(values => values > 0)
        .reduce((acumulator, values) => acumulator + values, 0)
        .toFixed(2);

    // retorna todas as despesas
    const expense = transactionAmounts
        .filter(values => values < 0)
        .reduce((acumulator, values) => acumulator - values, 0)
        .toFixed(2);

    balanceDisplay.textContent = `R$ ${total}`
    moneyPlusDisplay.textContent = `R$ ${income}`
    moneyMinusDisplay.textContent = `R$ ${expense}`

}
const init = () => { // inicializa todas as funções da pagina
    transactionsUl.innerHTML = '';
    dummyTransactions.forEach(addTransactionIntoDom);
    updateBalanceValues();
}

init();
//  funcao que gera ID
const generateId = () => Math.round(Math.random() * 1000);

form.addEventListener('submit', event => {
    event.preventDefault();

    const transactionName = inputTransactionName.value.trim();
    const transactionAmout = inputTransactionAmount.value.trim();

    if (transactionName === "" && transactionAmout === "") {
        alert('Informe os campos valor e nome da transação');
        return
    }

    const transaction = {
        id: generateId(),
        name: transactionName,
        amount: Number(transactionAmout)
    }

    dummyTransactions.push(transaction);
    init();
    updateLocalStorage;

    transactionName.value = '';
    transactionAmout.value = '';
});