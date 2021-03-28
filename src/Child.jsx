import React, { useContext, useState } from 'react';
import { TransactionContext } from './TransContext';

export default function Child() {

    let { transactions, addTransaction } = useContext(TransactionContext);

    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState(0)
        ;
    function handleAddition(event) {
        event.preventDefault();
        if(Number(newAmount) === 0){
            alert("Enter correct amount");
            return false;
        }
        addTransaction({
            amount: Number(newAmount),
            desc: newDesc
        })
    }

    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0)
                income = income + transactions[i].amount
        }
        return income;
    }

    const getExpense = () => {
        let expense = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0)
                expense += transactions[i].amount
        }
        return expense;
    }

    return (
        <div className="container">
            <h1 className="textCenter">Expense Tracker</h1>
            <h3>Your Balance <br /> <b>${getIncome() + getExpense()}</b></h3>

            <div className="expenseContainer">
                <h3>INCOME <br /> <b>${getIncome()}</b></h3>
                <h3>EXPENSE <br /> <b>${getExpense()}</b></h3>
            </div>

            <h3>History</h3>
            <hr />
            <ul className="transactionHistory">

                {transactions.map((transObj, idx) => {
                    return (
                        <li key={idx}>
                            <span>{transObj.desc}</span>
                            <span>{transObj.amount}</span>
                        </li>
                    )
                })}
            </ul>

            <h3>Add new transaction</h3>
            <hr />
            <form className="transactionForm" onSubmit={handleAddition}>
                <label>
                    Enter Description <br />
                    <input type="text" onChange={(ev) => setDesc(ev.target.value)} required />
                </label>
                <br />
                <label>
                    Enter Amount <br />
                    <input type="number" onChange={(ev) => setAmount(ev.target.value)} required />
                </label>
                <br />
                <input type="submit" value="Add Transaction" />
            </form>
        </div>
    )
}
