import { Header } from "../../components/Header";
import { HeaderToolbar } from "../../components/HeaderToolbar";
import { IoMdPersonAdd } from "react-icons/io";
import { StudentsTable } from "./components/StudentsTable";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { LuFolderClock } from "react-icons/lu";

export const Students = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header title={t("students")} />
      <main>
        <div className="container">
          <HeaderToolbar textBtn={t("add_students")} link={"/students/add"} btnicon={IoMdPersonAdd} />
          <StudentsTable />
          <Link to="/students/arxiv" className="board__btn">
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
