import { Header } from "../../components/Header";
import { HeaderToolbar } from "../../components/HeaderToolbar";
import { MdGroupAdd } from "react-icons/md";
import { LeadsMain } from "./components/LeadsMain";

export const Leads = () => {
  return (
    <>
      <Header title={"Лиды"} />
      <main>
        <div className="container">
          <HeaderToolbar textBtn={"Создать лид"} link={"/groups/add"} btnicon={MdGroupAdd} />
          <LeadsMain/>
        </div>
      </main>
    </>
  );
};
