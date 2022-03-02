import React, { useState } from 'react';

export const Transactions = () => {
    const [buy, setBuy] = useState(false)
    const [sell, setSell] = useState(true)

    const handleSell=()=>{
        console.log("Selling");
    }
    const handleBuy=()=>{
        console.log("Buying");
    }
    return (
        <div className="transaction">
                Transactions
            <div>
                <button>Buy</button>
                <button>Sell</button>
            </div>
            <div>
                <div>Selling</div>
                <div>Buying</div>

                {
                buy? 
                <button onClick={handleBuy}>Buy {" Coin name "}</button>:
                <button onClick={handleSell}>Sell {" coin name "}</button>
                }       

            </div>
        </div>
    );
}


