import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export const ToolBar = ({ textBtn }) => {

    const navigateBack = useNavigate();

    return (
        <div className="container">
            <div className="toolbar">
                <button onClick={() => navigateBack(-1)} className="toolbar__btn-back">
                    <IoIosArrowBack className="toolbar__btn-back-icon" /> Назад
                </button>


                <div className="toolbar__btn">{textBtn}</div>
            </div>
        </div>
    )
}
