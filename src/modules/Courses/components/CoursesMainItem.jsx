import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaTrash } from "react-icons/fa";
import { FaFilePen } from "react-icons/fa6";
import { CoursesModals } from "./CoursesModals";

export const CoursesMainItem = ({ course, onUpdateCourse, onDeleteCourse }) => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("update"); // "update" yoki "delete"

  const openModal = (mode) => {
    setModalMode(mode);
    setIsModalOpen(true);
  };

  return (
    <>
      <li className="coursesmain__item">
        <div className="coursesmain__btns">
          <button
            className="coursesmain__update-btn"
            aria-label="Update course"
            title="Update course"
            onClick={() => openModal("update")}
          >
            <FaFilePen size={18} />
          </button>
          <button
            className="coursesmain__delete-btn"
            aria-label="Delete course"
            title="Delete course"
            onClick={() => openModal("delete")}
          >
            <FaTrash size={18} />
          </button>
        </div>
        <h2>{course.courseName}</h2>
        <h3>
          {t("students_in_this_course", {
            quantitystudents: course.quantitystudents,
          })}
        </h3>
        <h4>${course.coursePrice}</h4>
      </li>

      {/* Har bir kartaga tegishli Tahrirlash/O'chirish Modali */}
      <CoursesModals 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mode={modalMode}
        initialData={course}
        onUpdateCourse={onUpdateCourse}
        onDeleteCourse={onDeleteCourse}
      />
    </>
  );
};