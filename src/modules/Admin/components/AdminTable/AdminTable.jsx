import { AdminTableItem } from "./AdminTableItem";

export const AdminTable = () => {
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
                <th>Кол Студ</th>
                <th>Оклад</th>
                <th>Заклад</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <AdminTableItem index={0} fullName="Мирлан Токтосунович Жумабаев" phone="0554 88 98 88" password="85462541" numberofstudents="Кол: 5" salary="20 000" deposit="10 000" />
              <AdminTableItem index={1} fullName="Мирлан Токтосунович Жумабаев" phone="0554 88 98 88" password="85462541" numberofstudents="Кол: 5" salary="20 000" deposit="10 000" />
              <AdminTableItem index={2} fullName="Мирлан Токтосунович Жумабаев" phone="0554 88 98 88" password="85462541" numberofstudents="Кол: 5" salary="20 000" deposit="10 000" />
              <AdminTableItem index={3} fullName="Мирлан Токтосунович Жумабаев" phone="0554 88 98 88" password="85462541" numberofstudents="Кол: 5" salary="20 000" deposit="10 000" />
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
