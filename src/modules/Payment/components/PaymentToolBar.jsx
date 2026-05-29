import { useTranslation } from "react-i18next";
import { IoSearchOutline } from "react-icons/io5";


export const PaymentToolBar = () => {
    const { t } = useTranslation();

    return (
        <section>
            <div className="payment_toolbar">
                <div className="payment_toolbar--input">
                    <input type="text" placeholder={t("search")} />
                    <IoSearchOutline className="payment_toolbar--input--icon" />
                </div>
                <ul className="payment_toolbar--filter">
                    <li className="payment_toolbar--item active">{t("all")}</li>
                    <li className="payment_toolbar--item">{t("paid_students")}</li>
                    <li className="payment_toolbar--item">{t("unpaid_students")}</li>
                    <li className="payment_toolbar--item">{t("partial_paid_students")}</li>
                </ul>
            </div>

        </section>
    )
}
