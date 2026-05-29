import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { IoClose } from "react-icons/io5";

export const CoursesModals = ({ 
  isOpen, 
  onClose, 
  onAddCourse, 
  onUpdateCourse,
  onDeleteCourse,
  initialData = null,
  mode = "add" // "add", "update", "delete"
}) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    courseName: "",
    coursePrice: "",
  });
  const [currentMode, setCurrentMode] = useState(mode);
  const [isLoading, setIsLoading] = useState(false);

  // Modal ochilganda ma'lumotlarni formaga yuklash
  useEffect(() => {
    if (isOpen && initialData && (mode === "update" || mode === "delete")) {
      setFormData({
        courseName: initialData.courseName || "",
        coursePrice: initialData.coursePrice || "",
      });
      setCurrentMode(mode);
    } else if (isOpen && mode === "add") {
      setFormData({
        courseName: "",
        coursePrice: "",
      });
      setCurrentMode("add");
    }
  }, [isOpen, initialData, mode]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddClick = async () => {
    if (!formData.courseName.trim() || !formData.coursePrice.trim()) {
      alert(t("please_fill_all_fields") || "Barcha maydonlarni to'ldiring");
      return;
    }

    setIsLoading(true);
    try {
      await onAddCourse(formData);
      resetForm();
      onClose();
    } catch (error) {
      console.error("Xato:", error);
      alert(t("error_adding_course") || "Kurs qo'shishda xato");
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateClick = async () => {
    if (!formData.courseName.trim() || !formData.coursePrice.trim()) {
      alert(t("please_fill_all_fields") || "Barcha maydonlarni to'ldiring");
      return;
    }

    setIsLoading(true);
    try {
      await onUpdateCourse({
        ...initialData,
        ...formData,
      });
      resetForm();
      onClose();
    } catch (error) {
      console.error("Xato:", error);
      alert(t("error_updating_course") || "Kurs yangilashda xato");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteClick = async () => {
    setIsLoading(true);
    try {
      // Parent'dan kelgan unikal ID bo'yicha o'chiramiz
      await onDeleteCourse(initialData.id);
      resetForm();
      onClose();
    } catch (error) {
      console.error("Xato:", error);
      alert(t("error_deleting_course") || "Kurs o'chirishda xato");
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      courseName: "",
      coursePrice: "",
    });
  };

  const handleCancelClick = () => {
    resetForm();
    onClose();
  };

  if (!isOpen) return null;

  const isDeleteMode = currentMode === "delete";
  const isUpdateMode = currentMode === "update";
  const isAddMode = currentMode === "add";

  return (
    <div className="modal-overlay" onClick={handleCancelClick}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <h2 className="modal-title">
            {isAddMode && t("add_new_course")}
            {isUpdateMode && t("update_course")}
            {isDeleteMode && t("delete_course")}
          </h2>
          <button 
            className="modal-close-btn" 
            onClick={handleCancelClick}
            aria-label="Close modal"
            disabled={isLoading}
          >
            <IoClose />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {isDeleteMode ? (
            /* Delete Mode - Warning Message */
            <div className="delete-warning">
              <div className="warning-icon">⚠️</div>
              <p className="warning-title">
                {t("delete_warning") || "Ushbu amalni qaytarish mumkin emas"}
              </p>
              <p className="warning-description">
                {t("delete_course_confirm") || "Siz quyidagi kursni o'chirmoqchisiz:"}
              </p>
              <div className="course-info">
                <p className="course-name"><strong>{formData.courseName}</strong></p>
                <p className="course-price">${formData.coursePrice}</p>
              </div>
            </div>
          ) : (
            /* Add/Update Mode - Form */
            <>
              <div className="form-group">
                <label htmlFor="courseName" className="form-label">
                  {t("course_name")} <span className="required">*</span>
                </label>
                <input
                  id="courseName"
                  type="text"
                  name="courseName"
                  placeholder={t("enter_course_name")}
                  className="form-input"
                  value={formData.courseName}
                  onChange={handleInputChange}
                  disabled={isLoading}
                  maxLength="100"
                />
                <span className="char-count">
                  {formData.courseName.length}/100
                </span>
              </div>

              <div className="form-group">
                <label htmlFor="coursePrice" className="form-label">
                  {t("course_price")} <span className="required">*</span>
                </label>
                <div className="price-input-wrapper">
                  <input
                    id="coursePrice"
                    type="number"
                    name="coursePrice"
                    placeholder={t("enter_course_price")}
                    className="form-input price-input"
                    value={formData.coursePrice}
                    onChange={handleInputChange}
                    disabled={isLoading}
                    min="0"
                    step="0.01"
                  />
                  <span className="currency-symbol">$</span>
                </div>
                {formData.coursePrice && (
                  <span className="price-display">
                    {parseFloat(formData.coursePrice).toFixed(2)} USD
                  </span>
                )}
              </div>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <button 
            className="btn btn-cancel"
            onClick={handleCancelClick}
            disabled={isLoading}
          >
            {isDeleteMode ? t("keep") : t("cancel")}
          </button>
          
          {isDeleteMode ? (
            <button 
              className="btn btn-delete"
              onClick={handleDeleteClick}
              disabled={isLoading}
            >
              {isLoading ? t("deleting") : t("delete")}
            </button>
          ) : isUpdateMode ? (
            <button 
              className="btn btn-update"
              onClick={handleUpdateClick}
              disabled={isLoading}
            >
              {isLoading ? t("updating") : t("update")}
            </button>
          ) : (
            <button 
              className="btn btn-add"
              onClick={handleAddClick}
              disabled={isLoading}
            >
              {isLoading ? t("adding") : t("add")}
            </button>
          )}
        </div>

        {/* Loading Indicator */}
        {isLoading && <div className="modal-loading-overlay"></div>}
      </div>
    </div>
  );
};