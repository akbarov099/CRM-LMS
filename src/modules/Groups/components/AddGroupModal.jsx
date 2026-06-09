import { useState } from "react";
import { useTranslation } from "react-i18next";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const DAY_PRESETS = [
  { key: "odd", days: ["Mon", "Wed", "Fri"] },
  { key: "even", days: ["Tue", "Thu", "Sat"] },
  { key: "everyday", days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] },
];

const initialForm = {
  mentor: "",
  course: "",
  lessonDays: [],
  startTime: "",
  endTime: "",
  studentCount: "",
};

export const AddGroupModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const [form, setForm] = useState(initialForm);
  const [activePreset, setActivePreset] = useState(null);

  if (!isOpen) return null;

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const toggleDay = (day) => {
    setActivePreset(null);
    setForm((prev) => ({
      ...prev,
      lessonDays: prev.lessonDays.includes(day)
        ? prev.lessonDays.filter((d) => d !== day)
        : [...prev.lessonDays, day],
    }));
  };

  const applyPreset = (preset) => {
    setActivePreset(preset.key);
    setForm((prev) => ({ ...prev, lessonDays: preset.days }));
  };

  const handleSubmit = () => {
    console.log("Yangi guruh:", form);
    setForm(initialForm);
    setActivePreset(null);
    onClose();
  };

  const handleClose = () => {
    setForm(initialForm);
    setActivePreset(null);
    onClose();
  };

  return (
    <div
      className="modal__overlay"
      onClick={(e) => e.target === e.currentTarget && handleClose()}
    >
      <div className="modal">
        <button className="modal__close" onClick={handleClose} aria-label="close">✕</button>
        <h2>{t("create_group")}</h2>

        {/* Mentor */}
        <div className="modal__field">
          <label>{t("select_mentor")}</label>
          <div className="modal__select-wrap">
            <select name="mentor" value={form.mentor} onChange={handleChange}>
              <option value="">{t("select_mentor")}</option>
              <option value="mentor1">Sardor Rahimov</option>
              <option value="mentor2">Nilufar Karimova</option>
              <option value="mentor3">Jasur Toshmatov</option>
            </select>
          </div>
        </div>

        <div className="modal__field">
          <label>{t("course")}</label>
          <div className="modal__select-wrap">
            <select name="course" value={form.course} onChange={handleChange}>
              <option value="">{t("select_course")}</option>
              <option value="frontend">Frontend Development</option>
              <option value="backend">Backend Development</option>
              <option value="design">UI/UX Design</option>
              <option value="flutter">Flutter</option>
              <option value="python">Python</option>
            </select>
          </div>
        </div>

        <div className="modal__field">
          <label>{t("lesson_days")}</label>

          <div className="modal__presets">
            {DAY_PRESETS.map((preset) => (
              <button
                key={preset.key}
                type="button"
                className={`modal__preset-btn ${activePreset === preset.key ? "active" : ""}`}
                onClick={() => applyPreset(preset)}
              >
                {t(preset.key)}
              </button>
            ))}
          </div>

          <div className="modal__days">
            {DAYS.map((day) => (
              <button
                key={day}
                type="button"
                className={`modal__day-btn ${form.lessonDays.includes(day) ? "active" : ""}`}
                onClick={() => toggleDay(day)}
              >
                {t(day)}
              </button>
            ))}
          </div>
        </div>

        <div className="modal__field">
          <label>{t("lesson_time")}</label>
          <div className="modal__time-row">
            <div className="modal__time-wrap">
              <span>{t("start")}</span>
              <input
                type="time"
                name="startTime"
                value={form.startTime}
                onChange={handleChange}
              />
            </div>
            <span className="modal__time-sep">—</span>
            <div className="modal__time-wrap">
              <span>{t("end")}</span>
              <input
                type="time"
                name="endTime"
                value={form.endTime}
                onChange={handleChange}
              />
            </div>
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