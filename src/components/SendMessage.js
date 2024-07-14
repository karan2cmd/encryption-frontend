import React, { useState } from "react";
import axios from "axios";

const SendMessage = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState(null);
  const apiBaseUrl = process.env.REACT_APP_BACKEND_HOST;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(apiBaseUrl);
      const res = await axios.post(`${apiBaseUrl}/api/message`, { message });
      setResponse(res.data);
    } catch (error) {
      console.error("Error sending message", error);
    }
  };

  return (
    <div>
      <h2>Send Message</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
        />
        <button type="submit">Send</button>
      </form>
      {response && (
        <div>
          <h3>Response</h3>
          <p>Status: {response.status}</p>
          {response.messageId && (
            <p>Message Id: {response.messageId}</p>
          )}
          <p>Encrypted Message: {response.encryptedMessage}</p>
        </div>
      )}
    </div>
  );
};

export default SendMessage;
