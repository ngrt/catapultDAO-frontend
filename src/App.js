import React, {useContext} from 'react';
import './App.css';
import Web3Context from "./store/web3Context";

function App() {
    const {
        web3,
        signer,
        initWeb3Modal,
        approve,
        loading,
        createDAO,
        investment
    } = useContext(Web3Context);

  return (
    <div className="App">
        {!(web3 && signer) && <button onClick={initWeb3Modal}>Connect</button>}
        <p>{web3 && signer && 'connected'}</p>
        {web3 && signer && <button onClick={createDAO}>createDAO</button>}
        <p>{investment}</p>
    </div>
  );
}

export default App;
