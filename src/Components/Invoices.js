import React from "react";
import data from "../Mockdata";
import Invoice from "./Invoice";

export default function Invoices() {
  console.log(data);
  return (
    <div
      style={{
        width: "45.625rem",
        margin: "auto",
      }}
    >
      <div style={{
        display:"flex",
        justifyContent:"space-between",
        placeItems:"center",
      }}>
        <div>
          <h1>Invoices</h1>
          <p>There are {data.length} total invoices</p>
        </div>
        <nav>
          <button>Filter by status</button>
          <button>New Invoice</button>
        </nav>
      </div>

      {data.map((invoice) => {
        return <Invoice invoice={invoice} />;
      })}
    </div>
  );
}
