
import { FiEye } from "react-icons/fi";
import { LuPencil } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export const AdminTableItem = ({index, fullName, phone, password, numberofstudents, salary, deposit}) => {
  return (
    <tr>
      <td>{index}</td>
      <td>{fullName}</td>
      <td>{phone}</td>
      <td>{password}</td>
      <td>{numberofstudents}</td>
      <td>{salary}C</td>
      <td>{deposit}C</td>
      <td>
        <Link>
          <button className="table_btn_eye">
            <FiEye className="table-icon" />
          </button>
        </Link>
        <Link>
          <button className="table_btn_change">
            <LuPencil className="table-icon" />
          </button>
        </Link>
        <button className="table_btn_delete">
          <RiDeleteBinLine className="table-icon" />
        </button>
      </td>
    </tr>
  )
}
