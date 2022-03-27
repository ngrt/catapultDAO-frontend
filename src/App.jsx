import React, {useContext} from 'react';
import './App.css';
import Web3Context from "./store/web3Context";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import "antd/dist/antd.css";
import { Layout } from "antd";
import Text from "antd/lib/typography/Text";
import logo from "./assets/favicon-80x80.png";

import MenuItems from "./components/MenuItems";
import FundContainer from "./components/FundContainer";
import Home from "./components/Home";
import Fund from "./components/Fund";
import CreateFunding from "./components/CreateFunding";

const { Header, Footer } = Layout;

const styles = {
  content: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Roboto, sans-serif",
    color: "#041836",
    marginTop: "130px",
    padding: "10px",
  },
  header: {
    position: "fixed",
    zIndex: 1,
    width: "100%",
    background: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Roboto, sans-serif",
    borderBottom: "2px solid rgba(0, 0, 0, 0.06)",
    padding: "0 10px",
    boxShadow: "0 1px 10px rgb(151 164 175 / 10%)",
  },
};

function App() {
    const {
        web3,
        signer,
        initWeb3Modal,
        //approve,
        //loading,
        createDAO,
        investment
    } = useContext(Web3Context);

  /*return (
    <div className="App">
        {!(web3 && signer) && <button onClick={initWeb3Modal}>Connect</button>}
        <p>{web3 && signer && 'connected'}</p>
        {web3 && signer && <button onClick={createDAO}>createDAO</button>}
        <p>{investment}</p>
    </div>
  );*/

  return (
    <Layout style={{ height: "100vh", overflow: "auto" }}>
      <Router>
        <Header style={styles.header}>
          <Link to="/">
            <img src={logo} alt="logo" width="60" height="60" />
          </Link>
          <MenuItems />
        </Header>

        <div style={styles.content}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/fund">
              <FundContainer />
            </Route>
            <Route exact path='/fund/:id'>
              <Fund />
            </Route>
            <Route exact path="/create-funding">
              <CreateFunding />
            </Route>
            <Route path="/nonauthenticated">
              <>Please login using the "Authenticate" button</>
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer style={{ textAlign: "center" }}>
        <Text style={{ display: "block" }}>Build at Avalanche Summit 2022</Text>
      </Footer>
    </Layout>
  );
}

export default App;
