import React, { useEffect, useState } from "react";
// import logo from '../logo.png';
import "./App.css";
import Web3 from "web3";
import Marketplace from "../abis/Marketplace.json";
import Navbar from "./Navbar";
import Hero from "./Hero/Hero";
import Main from "./Main";

function App() {
  const [account, setAccount] = useState(undefined);
  const [products, setProducts] = useState([]);
  const [productCount, setProductCount] = useState(0);
  const [marketplaceContract, setMarketplaceContract] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [web3, setWeb3] = useState(undefined);
  async function loadWeb3() {
    if (window.ethereum) {
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const accounts = await web3Instance.eth.getAccounts();
        setAccount(accounts[0]);
      } catch (err) {
        console.log(err);
      }
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      console.log("You should consider trying MetaMask!");
    }
  }

  async function loadBlockchainData() {
    const networkId = await web3.eth.net.getId();
    const networkData = Marketplace.networks[networkId];

    if (networkData) {
      const marketplace = web3.eth.Contract(
        Marketplace.abi,
        networkData.address
      );
      setMarketplaceContract(marketplace);

      const proCount = await marketplace.methods.productCount().call();
      setProductCount(proCount);

      for (var i = 1; i <= proCount; i++) {
        const product = await marketplace.methods.products(i).call();
        setProducts((prev) => [...prev, product]);
      }
      setLoading(false);
    } else {
      window.alert("Marketplace contract not deployed to detected network.");
    }
  }

  async function createProduct(name, figmaUrl, price) {
    setLoading(true);
    await marketplaceContract
      .createProduct(name, figmaUrl, price)
      .send({ from: account })
      .once("receipt", (receipt) => {
        setLoading(false);
      });
  }

  async function purchaseProduct(id, price) {
    setLoading(true);
    await marketplaceContract
      .purchaseProduct(id)
      .send({ from: account, value: price })
      .once("receipt", (receipt) => {
        setLoading(false);
      });
  }

  useEffect(() => {
    if (web3) {
      loadBlockchainData();
    }
  }, [account]);
  return (
    <div className="container">
      <div className="bg-1"></div>
      <div className="bg-2"></div>
      <div className="bg-3"></div>
      <Navbar account={account} loadWeb3={() => loadWeb3()} />
      <Hero />
      <Main createProduct={createProduct} />
    </div>
  );
}

export default App;
