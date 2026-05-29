import { useState } from "react";
import { useTranslation } from "react-i18next";
import { MdAddCard } from "react-icons/md";
import { CoursesModals } from "./CoursesModals";

export const CoursesToolAdd = ({ onAddCourse }) => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className='courses__toolbar-wrapper'>
        <button 
          className="courses__toolbar-wrapper-btn"
          onClick={() => setIsModalOpen(true)}
        >
          <MdAddCard className="courses__toolbar-wrapper-btn-icon"/>
          {t("add_courses")}
        </button>
      </div>
      
      <CoursesModals
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        onAddCourse={onAddCourse}
        mode="add"
      />
    </>
  );
};