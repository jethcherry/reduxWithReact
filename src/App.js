import CreateCustomer from "./Features/Customers/CreateCustomer";
import AccountOperations from "./Features/Account/BalanceDisplay";
import BalanceDisplay from "./Features/Account/AccountOperations";
import Customer from "./Features/Customers/Customer";
import { useSelector } from "react-redux";

function App() {
  const fullName = useSelector((state) => state.customer.fullName);
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {fullName === "" ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
}

export default App;
