import { useRef } from "react";
import { MdOutlineChangeCircle } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import avatarka from "../../../assets/images/user_foto.png";
import { useNavigate } from "react-router-dom";

export const AdminToAddForm = () => {
  const navigateBack = useNavigate();
  const fileRef = useRef(null);

  const handleImageClick = () => {
    fileRef.current.click();
  };

  return (
    <div className="container">
      <form className="to__form">
        <div className="to__form-top">

          <div className="user">

            <div className="image__wrapper" onClick={handleImageClick}>
              <img src={avatarka} alt="avatarka" />

              <div className="image__overlay">
                <MdOutlineChangeCircle />
                <span>Изменить фото</span>
              </div>

              <input
                type="file"
                accept="image/*"
                ref={fileRef}
                className="image__input"
              />
            </div>

            <button className="delete__photo">
              <MdDeleteForever className="update__photo-icon" />
              Удалить фото
            </button>
          </div>

          <div className="inputs">
            <input type="text" placeholder="Введите Ф.И.О" />
            <input type="text" placeholder="Введите логин" />
            <input type="password" placeholder="Введите пароль" />
            <input type="number" placeholder="Введите ставку" />
          </div>
        </div>

        <div className="to__form-bottom">
          <button
            type="button"
            onClick={() => navigateBack(-1)}
            className="to__form-cancel"
          >
            Отмена
          </button>

          <button type="submit" className="to__form-submit">
            Добавить
          </button>
        </div>
      </form>
    </div>
  );
};
