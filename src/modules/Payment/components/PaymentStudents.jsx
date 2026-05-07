import React from 'react'
import { PaymentStudentsItem } from './PaymentStudentsItem'

export const PaymentStudents = () => {
  return (
    <section>
      <h2 className='table_count'>Все студенты (200)</h2>
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
              <PaymentStudentsItem
                index={1}
                fullName="Мирлан Токтосунович Жумабаев"
                phone="0554 88 98 88"
                courses="IT"
                salary="20 000"
                way="BANK"
                status="PAID"
              />

              <PaymentStudentsItem
                index={2}
                fullName="Мирлан Токтосунович Жумабаев"
                phone="0554 88 98 88"
                courses="English"
                salary="20 000"
                way="CASH"
                status="PARTIAL"
              />
              <PaymentStudentsItem
                index={3}
                fullName="Мирлан Токтосунович Жумабаев"
                phone="0554 88 98 88"
                courses="Math"
                salary="20 000"
                way="UNPAID"
                status="UNPAID"
              />
              <PaymentStudentsItem
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