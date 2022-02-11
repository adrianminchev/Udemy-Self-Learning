import "./App.css";
import { Container } from "semantic-ui-react";
import MainHeader from "./components/MainHeader";
import EntryLine from "./components/EntryLine";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";

function App() {
  return (
    <Container>
      <MainHeader />
      <DisplayBalance
        title="Your Balance"
        value="2,500.53"
        size="small"
        color="small"
      />
      <DisplayBalances />
      <MainHeader title="History" type="h3" />
      <EntryLine description="income" value="10.00" />
      <EntryLine description="expense" value="10.00" isExpense />
      <EntryLine description="income" value="25.00" />
      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm />
    </Container>
  );
}

export default App;
