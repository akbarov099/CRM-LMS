import { IoSearchOutline } from "react-icons/io5";


export const PaymentToolBar = () => {
    return (
        <section>
            <div className="payment_toolbar">
                <div className="payment_toolbar--input">
                    <input type="text" placeholder="Поиск" />
                    <IoSearchOutline className="payment_toolbar--input--icon" />
                </div>
                <ul className="payment_toolbar--filter">
                    <li className="payment_toolbar--item active">Все</li>
                    <li className="payment_toolbar--item">Оплаченные</li>
                    <li className="payment_toolbar--item">Неоплаченные</li>
                    <li className="payment_toolbar--item">Частично оплаченные</li>
                </ul>
            </div>

        </section>
    )
}
