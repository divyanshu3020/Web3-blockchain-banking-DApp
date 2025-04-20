import { useState } from 'react';
import { dbank_backend } from 'declarations/dbank_backend';
import DbankCard from './DbankCard';


function App() {

  const [balance,setBalance]=useState(0);

    const {deposit,withdrawl,compound,showBalance} = dbank_backend;

    async function handleSubmit(depositAmount,withdrawAmount){

      console.log("deposit amount",depositAmount);
      console.log("withdrawl amount",withdrawAmount);

      if(depositAmount){
        await deposit(depositAmount);
        const amount = await showBalance()
        setBalance(amount);
      }else if(withdrawAmount){
        await withdrawl(withdrawAmount);
        const amount = await showBalance()
        setBalance(amount);
      }

    }

    async function refreshBalance(){

      const amount = await showBalance()
      setBalance(amount);

    }

    

  return (
    <>
    <DbankCard balance={balance} handler={handleSubmit} refresh={refreshBalance}/>     
    </>
  );
}

export default App;
