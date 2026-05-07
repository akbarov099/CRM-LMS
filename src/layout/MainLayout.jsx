import { Outlet } from "react-router-dom"
import { Saidebar } from "../components/Saidebar"

function MainLayout() {
    return (
        <>
                <Saidebar />
                <Outlet />
        </>
    )
}

export default MainLayout