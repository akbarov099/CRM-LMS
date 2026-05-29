import { Header } from "../../components/Header";
import { HeaderToolbar } from "../../components/HeaderToolbar";
import { MdGroupAdd } from "react-icons/md";
import { GroupsMain } from "./components/GroupsMain";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { LuFolderClock } from "react-icons/lu";

export const Groups = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header title={t("groups")} />
      <main>
        <div className="container">
          <HeaderToolbar textBtn={t("create_group")} link={"/groups/add"} btnicon={MdGroupAdd} />
          <GroupsMain />
          <Link to="/groups/arxiv" className="board__btn">
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
