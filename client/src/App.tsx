import "./App.css";
import LoginForm from "./features/login/LoginForm";
import ProductsList from "./features/products/ProductList";

function App() {
  return (
    <>
      <section>
        <LoginForm />
      </section>
      <section>
        <ProductsList />
      </section>
    </>
  );
}

export default App;
