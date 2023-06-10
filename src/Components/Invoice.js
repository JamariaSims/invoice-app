import React from 'react'

export default function Invoice(props) {
    const {invoice} = props
  return (
    <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(5,1fr)",
        justifyContent:"space-between",
        margin:"auto",
        background:"#1E2139",
        marginBottom:"1rem",
        padding:"1rem",
        color:"white"
    }}>
        <p>#{invoice.id}</p>
        <p>{invoice.paymentDue}</p>
        <p>{invoice.clientName}</p>
        <p>£{invoice.total}</p>
        <p>{invoice.status}</p>
    </div>
  )
}
