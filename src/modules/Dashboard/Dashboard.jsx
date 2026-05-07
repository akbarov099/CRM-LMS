import { Header } from "../../components/Header";
import ChartsDashboard from "./components/ChartsDashboard";
import { QuantityDashboard } from "./components/QuantityDashboard";

export const Dashboard = () => {
  return (
    <>
      <Header title={"Приборная"} />
      <main>
        <div className="container">
          <QuantityDashboard />
          <ChartsDashboard/>
        </div>
      </main>
    </>
  );
};
