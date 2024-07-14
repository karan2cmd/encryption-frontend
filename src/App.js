import "./App.css";
import SendMessage from "./components/RetrieveMessage";
import RetrieveMessage from "./components/SendMessage";
function App() {
  return (
    <div className="App">
      <h1>Message Encryption Service</h1>
      <SendMessage />
      <RetrieveMessage />
    </div>
  );
}

export default App;
