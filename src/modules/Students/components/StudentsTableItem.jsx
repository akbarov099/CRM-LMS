import { FiEye } from "react-icons/fi";
import { LuPencil } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const wayMap = {
    BANK: {
        text: "Банк",
        className: "bank",
    },
    CASH: {
        text: "Наличные",
        className: "cash",
    },
    UNPAID:{
        text: "Неоплачено",
        className: "unpaid",
    }
};

const statusMap = {
    PAID: {
        text: "Оплачено",
        className: "paid",
    },
    PARTIAL: {
        text: "Частично оплачено",
        className: "partial",
    },
    UNPAID: {
        text: "Неоплачено",
        className: "unpaid",
    },
};

export const StudentsTableItem = ({
    index,
    fullName,
    phone,
    courses,
    salary,
    way,
    status,
}) => {
    const wayData = wayMap[way];
    const statusData = statusMap[status];

    return (
        <tr>
            <td>{index}</td>
            <td>{fullName}</td>
            <td>{phone}</td>
            <td>{courses}</td>
            <td>{salary} C</td>
            <td>
                <span className={`way ${wayData.className}`}>
                    {wayData.text}
                </span>
            </td>

            <td>
                <span className={`status ${statusData.className}`}>
                    {statusData.text}
                </span>
            </td>

            <td>
                <Link to="#">
                    <button className="table_btn_eye">
                        <FiEye />
                    </button>
                </Link>

                <Link to="#">
                    <button className="table_btn_change">
                        <LuPencil />
                    </button>
                </Link>

                <button className="table_btn_delete">
                    <RiDeleteBinLine />
                </button>
            </td>
        </tr>
    );
};