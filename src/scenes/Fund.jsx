import { Card, Button, Typography } from "antd";
import React, { useState, useEffect } from "react";
import { Redirect, Link, useParams } from "react-router-dom";
import TableInvestors from "../components/TableInvestors";

const { Text, Title } = Typography;

const styles = {
  title: {
    fontSize: "20px",
    fontWeight: "700",
  },
  text: {
    fontSize: "16px",
  },
  card: {
    boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
    border: "1px solid #e7eaf3",
    borderRadius: "0.5rem",
  },
  timeline: {
    marginBottom: "-45px",
  },
};

export default function Fund(props) {
  const [redirctTo, setRedirctTo] = useState(false);
  const { id } = useParams();
  const isLogged = props.isLogged;

  useEffect(() => {
    if (!isLogged) {
      setRedirctTo(true);
    }
  }, [isLogged]);

  const render = (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "80%",
        gap: "10px",
      }}
    >
      <Link to="/">
        <Button>Back</Button>
      </Link>
      <Card
        style={styles.card}
        title={
          <>
            📝 <Text strong>Fund Info</Text>
          </>
        }
      >
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
        }}>
          <div style={{ display: "flex", alignItems: "baseline", flexWrap: "wrap" }}>
            <Text style={{ marginRight: "5px" }}>Title:</Text>
            <Title level={4}>{id}</Title>
          </div>
          <div style={{ display: "flex", alignItems: "baseline", flexWrap: "wrap" }}>
            <Text style={{ marginRight: "5px" }}>Date:</Text>
            <Title level={4}>2022-03-01</Title>
          </div>
          <div style={{ display: "flex", alignItems: "baseline", flexWrap: "wrap" }}>
            <Text style={{ marginRight: "5px" }}>Fund:</Text>
            <Title level={4}>1234/5000</Title>
          </div>
          <div style={{ display: "flex", alignItems: "baseline", flexWrap: "wrap" }}>
            <Text style={{ marginRight: "5px" }}>Currency:</Text>
            <Title level={4}>AVAX</Title>
          </div>
        </div>
      </Card>
      <Card
        style={styles.card}
        title={
          <>
            📝 <Text strong>Investors List</Text>
          </>
        }
      >
        <TableInvestors />
      </Card>
    </div>
  );

  return redirctTo ? <Redirect to="/" /> : render;
}
