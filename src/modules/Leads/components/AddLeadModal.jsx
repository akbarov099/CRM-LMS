// AddLeadModal.jsx
import { useState } from "react";
import { useTranslation } from "react-i18next";

const initialForm = {
  name: "",
  phone: "",
  course: "",
};

export const AddLeadModal = ({ isOpen, onClose, onAdd }) => {
  const { t } = useTranslation();
  const [form, setForm] = useState(initialForm);

  if (!isOpen) return null;

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    if (!form.name || !form.phone || !form.course) return;
    onAdd({ ...form, id: Date.now(), status: "NEW" });
    setForm(initialForm);
    onClose();
  };

  const handleClose = () => {
    setForm(initialForm);
    onClose();
  };

  return (
    <div
      className="modal__overlay"
      onClick={(e) => e.target === e.currentTarget && handleClose()}
    >
      <div className="modal">
        <button className="modal__close" onClick={handleClose} aria-label="close">✕</button>
        <h2>{t("createlead")}</h2>

        <div className="modal__field">
          <label>{t("full_name")}</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder={t("enter_name")}
          />
        </div>

        <div className="modal__field">
          <label>{t("phone")}</label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="0500 00 00 00"
          />
        </div>

        <div className="modal__field">
          <label>{t("course")}</label>
          <div className="modal__select-wrap">
            <select name="course" value={form.course} onChange={handleChange}>
              <option value="">{t("select_course")}</option>
              <option value="Frontend">Frontend Development</option>
              <option value="Backend">Backend Development</option>
              <option value="Design">UI/UX Design</option>
              <option value="Flutter">Flutter</option>
              <option value="Python">Python</option>
              <option value="English">English</option>
            </select>
          </div>
        </div>

        <div className="modal__btns">
          <button className="modal__cancel-btn" onClick={handleClose}>
            {t("cancel")}
          </button>
          <button className="modal__submit-btn" onClick={handleSubmit}>
            {t("add")}
          </button>
        </div>
      </div>
    </div>
  );
};