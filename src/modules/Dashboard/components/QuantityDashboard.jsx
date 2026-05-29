import {
    PiStudentFill,
    PiUsersThreeFill,
    PiBriefcaseFill,
    PiChalkboardTeacherFill,
} from "react-icons/pi";

import { MdOutlinePayment } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { HiOutlineXCircle } from "react-icons/hi";
import { TbClockDollar } from "react-icons/tb";
import { useTranslation } from "react-i18next";


const StatCard = ({ icon, label, value, color, badge }) => {
    return (
        <li className={`stat-card stat-card--${color}`}>
            <div className="card-top">
                <div className="card-icon">{icon}</div>

                {badge && (
                    <span className={`badge badge--${badge.type}`}>
                        {badge.text}
                    </span>
                )}
            </div>

            <div className="card-bottom">
                <h3>{label}</h3>
                <p>{value}</p>
            </div>
        </li>
    );
};

export const QuantityDashboard = () => {
    const { t } = useTranslation();

    const stats = [
        {
            icon: <PiStudentFill size={22} />,
            label: t("total_students"),
            value: 100,
            color: "blue",
        },
        {
            icon: <PiUsersThreeFill size={22} />,
            label: t("new_leads"),
            value: 100,
            color: "purple",
        },
        {
            icon: <PiBriefcaseFill size={22} />,
            label: t("active_employees"),
            value: 100,
            color: "teal",
        },
        {
            icon: <PiChalkboardTeacherFill size={22} />,
            label: t("active_groups"),
            value: 100,
            color: "amber",
        },
    ];

    const payments = [
        {
            icon: <RiMoneyDollarCircleLine size={22} />,
            label: t("paid"),
            value: 100,
            color: "green",
            badge: { text: "100%", type: "success" },
        },
        {
            icon: <MdOutlinePayment size={22} />,
            label: t("prepaid"),
            value: 100,
            color: "blue",
            badge: { text: "150%", type: "transferfee" },

        },

        {
            icon: <TbClockDollar size={22} />,
            label: t("partiallyPaid"),
            value: 100,
            color: "amber",
            badge: { text: "50%", type: "warning" },
        },
        {
            icon: <HiOutlineXCircle size={22} />,
            label: t("notPaid"),
            value: 100,
            color: "red",
            badge: { text: "0%", type: "danger" },
        },
    ];




    return (
        <section className="dashboard">
            <h2>{t("title")}</h2>
            <h3>{t("statistics")}</h3>
            <ul className="quantity__wrapper">
                {stats.map((item, i) => (
                    <StatCard key={i} {...item} />
                ))}
            </ul>
            <h2>{t("payments")}</h2>
            <h3>{t("paymentStatistics")}</h3>
            <ul className="quantity__wrapper">
                {payments.map((item, i) => (
                    <StatCard key={i} {...item} />
                ))}
            </ul>
        </section>
    );
};