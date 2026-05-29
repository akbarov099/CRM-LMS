import { Header } from "../../components/Header";
import { HeaderToolbar } from "../../components/HeaderToolbar";
import { MdGroupAdd } from "react-icons/md";
import { LeadsMain } from "./components/LeadsMain";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
 import { LuFolderClock } from "react-icons/lu";


export const Leads = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header title={"Лиды"} />
      <main>
        <div className="container">
          <HeaderToolbar textBtn={t("createlead")} link={"/groups/add"} btnicon={MdGroupAdd} />
          <LeadsMain />
          <Link to="/leads/arxiv" className="board__btn">
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
