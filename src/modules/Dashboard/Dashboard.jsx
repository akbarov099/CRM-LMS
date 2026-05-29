import { useTranslation } from "react-i18next";
import { Header } from "../../components/Header";
import ChartsDashboard from "./components/ChartsDashboard";
import { QuantityDashboard } from "./components/QuantityDashboard";

export const Dashboard = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header title={t("dashboard")} />
      <main>
        <div className="container">
          <QuantityDashboard />
          <ChartsDashboard />
        </div>
      </main>
    </>
  );
};
