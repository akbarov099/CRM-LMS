import Logo from "../assets/icons/Logo.png";
import SidebarItem from "./SidebarItem";
import { IoBarChartOutline } from "react-icons/io5";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { VscGroupByRefType } from "react-icons/vsc";
import { PiUsers } from "react-icons/pi";
import { MdPayments } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { VscVariableGroup } from "react-icons/vsc";
import { useTranslation } from "react-i18next";

export const Saidebar = () => {
  const { t } = useTranslation();

  return (
    <div className="saidebar">
      <button className="menu__burger">
        <FiMenu />
      </button>
      <img src={Logo} alt="logo" className="saidebar__logo" />

      <ul className={`sidebar_list`}>
        <SidebarItem Icon={IoBarChartOutline} text={t("dashboard")} path='/' />
        <SidebarItem Icon={HiOutlineUserCircle} text={t("employees")} path='/admin' />
        <SidebarItem Icon={VscVariableGroup} text={t("courses")} path='/courses' />
        <SidebarItem Icon={VscGroupByRefType} text={t("groups")} path='/groups' />
        <SidebarItem Icon={PiUsers} text={t("students")} path='/students' />
        <SidebarItem Icon={MdPayments} text={t("payment")} path='/payment' />
        <SidebarItem Icon={IoBarChartOutline} text={t("leads")} path='/leads' />
      </ul>
    </div>
  );
};
