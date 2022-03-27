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
import { Layout, Typography } from "antd";
import logo from "./assets/favicon-80x80.png";

import MenuItems from "./components/MenuItems";
import FundContainer from "./scenes/FundContainer";
import Home from "./scenes/Home";
import Fund from "./scenes/Fund";
import CreateFunding from "./scenes/CreateFunding";

const { Header, Footer } = Layout;
const { Text, Title } = Typography;

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
        createDAO,
        investment
    } = useContext(Web3Context);
    const isLogged = (web3 && signer);

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
          <Link to="/" style={{ display: "flex", alignItems: "center" }}>
            <img src={logo} alt="logo" width="60" height="60" />
            <Title level={5}>CatapultDAO</Title>
          </Link>
          <MenuItems isLogged={isLogged} />
        </Header>

        <div style={styles.content}>
          <Switch>
            <Route exact path="/">
              <Home isLogged={isLogged} />
            </Route>
            <Route exact path="/fund">
              <FundContainer isLogged={isLogged} />
            </Route>
            <Route exact path='/fund/:id'>
              <Fund isLogged={isLogged} />
            </Route>
            <Route exact path="/create-funding">
              <CreateFunding isLogged={isLogged} />
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
