import { Header } from "../../components/Header";
import { HeaderToolbar } from "../../components/HeaderToolbar";
import { IoMdPersonAdd } from "react-icons/io";
import { StudentsTable } from "./components/StudentsTable";

export const Students = () => {
  return (
    <>
      <Header title={"Студенты"} />
      <main>
        <div className="container">
          <HeaderToolbar textBtn={"Добавить Студенты"} link={"/students/add"} btnicon={IoMdPersonAdd}/>
          <StudentsTable/>
        </div>
      </main>
    </>
  );
};
