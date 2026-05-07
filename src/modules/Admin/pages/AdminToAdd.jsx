import { Header } from "../../../components/Header"
import { ToolBar } from "../../../components/ToolBar"
import { AdminToAddForm } from "../components/AdminToAddForm"

export const AdminToAdd = () => {
    return (
        <>
            <Header title={"Добавить Сотрудник"} />
            <ToolBar textBtn={"Информация об Сотрудник"} />
            <AdminToAddForm />
        </>
    )
}
