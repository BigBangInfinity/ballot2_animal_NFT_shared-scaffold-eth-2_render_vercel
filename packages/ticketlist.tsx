// pages/index.tsx
import React, { useEffect, useState } from "react";

const Home = () => {
  // ... existing code or components

  const contractAddress = "0xbe9d1e12034bc802bc04b25a07df4715f685602f"; // Replace with your contract address
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch(
          `https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20&asset_contract_address=${contractAddress}`,
        );
        if (!response.ok) {
          throw new Error("Failed to fetch tickets");
        }
        const data = await response.json();
        setTickets(data.assets || []);
      } catch (error) {
        console.error("Error fetching tickets:", error);
      }
    };

    fetchTickets();
  }, [contractAddress]);

  return (
    <div>
      {/* ... other existing components or widgets */}

      {/* Display the ticket list at the bottom */}
      <div className="page-content">{/* ... other content */}</div>
      <div className="ticket-list-bottom">
        <h2>Ticket List from OpenSea</h2>
        <div className="ticket-list">
          {tickets.map((ticket, index) => (
            <div key={index} className="ticket-item">
              <p>Ticket Name: {ticket.name}</p>
              <p>Token ID: {ticket.token_id}</p>
              {/* Render other ticket details or metadata */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
