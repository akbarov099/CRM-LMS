import { Header } from "../../components/Header";
import { PaymentStudents } from "./components/PaymentStudents";
import { PaymentToolBar } from "./components/PaymentToolBar";

export const Payment = () => {
  return (
    <>
      <Header title={"Оплата"} />
      <main>
        <div className="container">
          <PaymentToolBar/>
          <PaymentStudents/>
        </div>
      </main>
    </>
  );
};
