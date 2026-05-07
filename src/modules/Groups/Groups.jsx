import { Header } from "../../components/Header";
import { HeaderToolbar } from "../../components/HeaderToolbar";
import { MdGroupAdd } from "react-icons/md";
import { GroupsMain } from "./components/GroupsMain";

export const Groups = () => {
  return (
    <>
      <Header title={"Группы"} />
      <main>
        <div className="container">
          <HeaderToolbar textBtn={"Создать группу"} link={"/groups/add"} btnicon={MdGroupAdd} />
          <GroupsMain />
        </div>
      </main>
    </>
  );
};
