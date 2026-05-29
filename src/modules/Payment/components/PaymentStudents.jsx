import React from 'react'
import { PaymentStudentsItem } from './PaymentStudentsItem'
import { useTranslation } from 'react-i18next';

export const PaymentStudents = () => {
  const { t } = useTranslation();

  return (
    <section>
      <h2 className='table_count'>{t("allstudents")} (200)</h2>
      <div className="table_bg">
        <div className="table_container">
          <table className="table">
            <thead>
              <tr>
                <th>№</th>
                <th>{t("fullname")}</th>
                <th>{t("phonenumber")}</th>
                <th>{t("courses")}</th>
                <th>{t("payment")}</th>
                <th>{t("balance")}</th>
                <th>{t("paymentmethod")}</th>
                <th></th>
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
                balance="10 000"
                way="BANK"
                status="PAID"
              />

              <PaymentStudentsItem
                index={2}
                fullName="Мирлан Токтосунович Жумабаев"
                phone="0554 88 98 88"
                courses="English"
                salary="20 000"
                balance="10 000"
                way="CASH"
                status="PARTIAL"
              />
              <PaymentStudentsItem
                index={3}
                fullName="Мирлан Токтосунович Жумабаев"
                phone="0554 88 98 88"
                courses="Math"
                salary="20 000"
                balance="10 000"
                way="UNPAID"
                status="UNPAID"
              />
              <PaymentStudentsItem
                index={4}
                fullName="Мирлан Токтосунович Жумабаев"
                phone="0554 88 98 88"
                courses="English"
                salary="20 000"
                balance="10 000"
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