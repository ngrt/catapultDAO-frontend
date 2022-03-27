import { Button, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const { Title } = Typography;

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "80%",
        gap: "10px",
      }}
    >
      <div
        style={{
          margin: "auto"
        }}
      >
        <img src={logo} alt="logo" style={{ margin: "auto" }} width="250" height="250" />
        <Title>Welcome to Catapult-DAO</Title>        
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link to="/create-funding">
          <Button>Create a Funding</Button>
        </Link>
        <Link to="/fund">
          <Button>Fund Page</Button>
        </Link>
      </div>
    </div>
  );
}
