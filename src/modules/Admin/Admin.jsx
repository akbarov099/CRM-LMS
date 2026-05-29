import { Header } from "../../components/Header";
import { HeaderToolbar } from "../../components/HeaderToolbar";
import { FaAddressCard } from "react-icons/fa";
import { AdminTable } from "./components/AdminTable/AdminTable";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { LuFolderClock } from "react-icons/lu";


export const Admin = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header title={t("employees")} />
      <main>
        <div className="container">
          <HeaderToolbar textBtn={t("add_an_employee")} link={"/admin/add"} btnicon={FaAddressCard} />
          <AdminTable />
          <Link to="/admin/arxiv" className="board__btn">
            <button className="arxiv">
              <LuFolderClock className="arxiv__icon" />
              {t("archive")}
            </button>
          </Link>
        </div>
      </main>
    </>
  );
};
