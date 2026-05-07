import React from 'react'
import { StudentsTableItem } from './StudentsTableItem'

export const StudentsTable = () => {
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
                <th>Курсы</th>
                <th>Оплата</th>
                <th>Способ оплаты</th>
                <th>Статус оплаты</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <StudentsTableItem
                index={1}
                fullName="Мирлан Токтосунович Жумабаев"
                phone="0554 88 98 88"
                courses="IT"
                salary="20 000"
                way="BANK"
                status="PAID"
              />

              <StudentsTableItem
                index={2}
                fullName="Мирлан Токтосунович Жумабаев"
                phone="0554 88 98 88"
                courses="English"
                salary="20 000"
                way="CASH"
                status="PARTIAL"
              />
              <StudentsTableItem
                index={3}
                fullName="Мирлан Токтосунович Жумабаев"
                phone="0554 88 98 88"
                courses="Math"
                salary="20 000"
                way="UNPAID"
                status="UNPAID"
              />
                 <StudentsTableItem
                index={4}
                fullName="Мирлан Токтосунович Жумабаев"
                phone="0554 88 98 88"
                courses="English"
                salary="20 000"
                way="BANK"
                status="PARTIAL"
              />
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}