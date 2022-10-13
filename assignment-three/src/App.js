import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Eth from "./assets/Cam1.png";
import Web3 from "web3";
function App() {
  const [account, setAccount] = useState("connect wallet");
  const [balance, setBalance] = useState(0);
  useEffect(() => {
    async function initiate() {
      try {
        const { ethereum } = window;
        const web3 = new Web3(ethereum);
        if (ethereum) {
          await ethereum.enable();
          const accounts = await web3.eth.getAccounts();
          const account = accounts[0];
          setAccount(account);
          const balance = await web3.eth.getBalance(account);
          setBalance(web3.utils.toWei(balance, "ether"));
          setAccount(account);
        } else {
          alert("Please install metamask");
        }
      } catch (err) {
        console.log(err);
      }
    }
    initiate();
  });
  return (
    <div className="App">
      <div className="card">
        <img src={Eth} alt="" height={"60px"} />
        <h1>Account</h1>
        <h3>{account}</h3>
        <h1>Balance</h1>
        <h3>{balance}ETH</h3>
      </div>
    </div>
  );
}

export default App;
