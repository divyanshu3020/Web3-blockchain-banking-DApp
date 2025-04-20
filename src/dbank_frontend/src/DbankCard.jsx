import React, { useState } from 'react';
import RefreshIcon from '@mui/icons-material/Refresh';

export default function DbankForm(props) {
    const [topUpAmount, setTopUpAmount] = useState();
    const [withdrawAmount, setWithdrawAmount] = useState();

    function handleChange(e) {
        const { name, value } = e.target;
        const amount = parseFloat(value) || 0;

        if (name === "topUp") {
            setTopUpAmount(amount);
        } else if (name === "withdraw") {
            setWithdrawAmount(amount);
        }


        // console.log(`${name} changed:`, amount);

    }


    return (
        <div className="container">
            <img src="/dbank_logo.png" alt="DBank logo" width="100" />
            <h1>Current Balance: $<span id="value">{props.balance}<RefreshIcon onClick={props.refresh}/></span></h1>
            <div className="divider"></div>

            <form onSubmit={(e)=>{
                e.preventDefault()
                props.handler(topUpAmount,withdrawAmount)
            }}>
                <h2>Amount to Top Up</h2>
                <input
                    id="input-amount"
                    type="number"
                    step="0.01"
                    min="0"
                    name="topUp"
                    value={topUpAmount}
                    onChange={handleChange}
                />
                <h2>Amount to Withdraw</h2>
                <input
                    id="withdrawal-amount"
                    type="number"
                    name="withdraw"
                    step="0.01"
                    min="0"
                    value={withdrawAmount}
                    onChange={handleChange}
                />
                <input
                    id="submit-btn"
                    type="submit"
                    value="Finalise Transaction"
                />
            </form>

        </div>
    );
}
