import { Header } from "../../components/Header";
import { HeaderToolbar } from "../../components/HeaderToolbar";
import { FaAddressCard } from "react-icons/fa";
import { AdminTable } from "./components/AdminTable/AdminTable";

export const Admin = () => {
  return (
    <>
      <Header title={"Сотрудники"} />
      <main>
        <div className="container">
          <HeaderToolbar textBtn={"Добавить Сотрудник"} link={"/admin/add"} btnicon={FaAddressCard} />
          <AdminTable />
        </div>
      </main>
    </>
  );
};
