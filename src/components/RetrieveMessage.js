import React, { useState } from "react";
import axios from "axios";

const RetrieveMessage = () => {
  const [messageId, setMessageId] = useState("");
  const [response, setResponse] = useState(null);
  const apiBaseUrl = process.env.REACT_APP_BACKEND_HOST;
  const handleRetrieve = async () => {
    try {
      const res = await axios.get(`${apiBaseUrl}/api/message/${messageId}`);
      setResponse(res.data);
    } catch (error) {
      console.error("Error retrieving message", error);
    }
  };

  return (
    <div>
      <h2>Retrieve Message</h2>
      <input
        type="text"
        value={messageId}
        onChange={(e) => setMessageId(e.target.value)}
        placeholder="Enter message ID"
      />
      <button onClick={handleRetrieve}>Retrieve</button>
      {response && (
        <div>
          <h3>Response</h3>
          <p>Message ID: {response.messageId}</p>
          <p>Encrypted Message: {response.encryptedMessage}</p>
        </div>
      )}
    </div>
  );
};

export default RetrieveMessage;
