import { FiEye } from "react-icons/fi";
import { LuPencil } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export const Table = () => {
  return (
    <section>
      <div className="table_bg">
        <div className="table_container">
          <table className="table">
            <thead>
              <tr>
                <th>№</th>
                <th>ФИО</th>
                <th>Номер телефона</th>
                <th>Пароль</th>
                <th>Оклад</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0</td>
                <td>Мирлан Токтосунович Жумабаев</td>
                <td>0554 88 98 88</td>
                <td>85462541</td>
                <td>20 000 с</td>
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
                <tr>
                <td>0</td>
                <td>Мирлан Токтосунович Жумабаев</td>
                <td>0554 88 98 88</td>
                <td>85462541</td>
                <td>20 000 с</td>
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
                <tr>
                <td>0</td>
                <td>Мирлан Токтосунович Жумабаев</td>
                <td>0554 88 98 88</td>
                <td>85462541</td>
                <td>20 000 с</td>
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
                <tr>
                <td>0</td>
                <td>Мирлан Токтосунович Жумабаев</td>
                <td>0554 88 98 88</td>
                <td>85462541</td>
                <td>20 000 с</td>
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
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
