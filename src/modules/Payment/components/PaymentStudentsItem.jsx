import { FiEye } from "react-icons/fi";
import { MdOutlinePaid } from "react-icons/md";
import { Link } from "react-router-dom";
 import { useTranslation } from "react-i18next";

export const PaymentStudentsItem = (props) => {
    const { t } = useTranslation();

    const wayMap = {
        BANK: {
            text: t("bank"),
            className: "bank",
        },
        CASH: {
            text: t("cash"),
            className: "cash",
        },
        UNPAID: {
            text: t("unpaid"),
            className: "unpaid",
        }
    };

    const statusMap = {
        PAID: {
            text: t("paid"),
            className: "paid",
        },
        PARTIAL: {
            text: t("partial"),
            className: "partial",
        },
        UNPAID: {
            text: t("unpaid"),
            className: "unpaid",
        },
    };

    const wayData = wayMap[props.way];
    const statusData = statusMap[props.status];

    return (
        <tr>
            <td>{props.index}</td>
            <td>{props.fullName}</td>
            <td>{props.phone}</td>
            <td>{props.courses}</td>
            <td>{props.salary} C</td>
            <td>{props.balance} C</td>

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
            </td>
        </tr>
    );
};