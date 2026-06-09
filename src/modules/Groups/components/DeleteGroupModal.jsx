// DeleteGroupModal.jsx
import { useTranslation } from "react-i18next";
import { FaTrash } from "react-icons/fa";

export const DeleteGroupModal = ({ isOpen, onClose, groupId, groupName }) => {
  const { t } = useTranslation();

  if (!isOpen) return null;

  const handleDelete = () => {
    console.log("Delete group:", groupId);
    onClose();
  };

  return (
    <div
      className="modal__overlay"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="modal modal--delete">
        <button className="modal__close" onClick={onClose} aria-label="close">✕</button>

        <div className="modal__delete-icon">
          <FaTrash size={28} />
        </div>

        <h2>{t("delete_group")}</h2>
        <p className="modal__delete-text">
          {t("delete_confirm")}{" "}
          <span className="modal__delete-name">"{groupName}"</span>?{" "}
          {t("delete_warning")}
        </p>

        <div className="modal__btns">
          <button className="modal__cancel-btn" onClick={onClose}>
            {t("cancel")}
          </button>
          <button className="modal__delete-btn" onClick={handleDelete}>
            {t("delete")}
          </button>
        </div>
      </div>
    </div>
  );
};