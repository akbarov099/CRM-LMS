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

export const Saidebar = () => {
  return (
    <div className="saidebar">
      <button className="menu__burger">
        <FiMenu />
      </button>
      <img src={Logo} alt="logo" className="saidebar__logo" />

      <ul className={`sidebar_list`}>
        <SidebarItem Icon={IoBarChartOutline} text={"Приборная"} path='/'/>
        <SidebarItem Icon={HiOutlineUserCircle} text={"Сотрудники"} path='/admin'/>
        <SidebarItem Icon={VscVariableGroup} text={"Курсы"} path='/courses'/>
        <SidebarItem Icon={VscGroupByRefType} text={"Группы"} path='/groups'/>
        <SidebarItem Icon={PiUsers} text={"Студенты"} path='/students'/>
        <SidebarItem Icon={MdPayments} text={"Оплата"} path='/payment'/>
        <SidebarItem Icon={IoBarChartOutline} text={"Лиды"} path='/leads'/>
      </ul>
    </div>
  );
};
