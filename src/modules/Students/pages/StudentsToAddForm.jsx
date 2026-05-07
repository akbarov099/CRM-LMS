import { useRef, useState } from "react";
import { MdOutlineChangeCircle } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import avatarka from "../../../assets/images/user_foto.png";
import { useNavigate } from "react-router-dom";

export const StudentsToAddForm = () => {
    const navigateBack = useNavigate();
    const fileRef = useRef(null);

    const handleImageClick = () => {
        fileRef.current.click();
    };

    const courseOptions = [
        { code: "course2", name: "IT Frontend" },
        { code: "course3", name: "IT Backend" },
        { code: "course4", name: "IT Kids" },
        { code: "course1", name: "Англиский язык" },
        { code: "course5", name: "Математика" },
    ];

    const [isCourseDropdownOpen, setCourseDropdownOpen] = useState(false);

    const [selectedCourse, setSelectedCourse] = useState(courseOptions[0]);

    const toggleCourseDropdown = () => {
        setCourseDropdownOpen(!isCourseDropdownOpen);
    };

    const handleCourseChange = (course) => {
        setSelectedCourse(course);
        setCourseDropdownOpen(false);
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

                        <button type="button" className="delete__photo">
                            <MdDeleteForever className="update__photo-icon" />
                            Удалить фото
                        </button>
                    </div>

                    <div className="inputs">
                        <input type="text" placeholder="Введите Ф.И.О" />
                        <input type="text" placeholder="Введите телефона" />
                        <input type="number" placeholder="Введите оплату" />

                        <div className="course__select">
                            <div
                                className="selected_course"
                                onClick={toggleCourseDropdown}
                            >
                                {selectedCourse.name}
                            </div>

                            {isCourseDropdownOpen && (
                                <div className="course_dropdown">
                                    {courseOptions
                                        .filter(
                                            (course) =>
                                                course.code !== selectedCourse.code
                                        )
                                        .map((course) => (
                                            <div
                                                key={course.code}
                                                className="course_option"
                                                onClick={() =>
                                                    handleCourseChange(course)
                                                }
                                            >
                                                <p className="course_name">
                                                    {course.name}
                                                </p>
                                            </div>
                                        ))}
                                </div>
                            )}
                        </div>

                        {isCourseDropdownOpen && (
                            <div className="course_dropdown">
                                {courseOptions
                                    .filter(
                                        (course) =>
                                            course.code !== selectedCourse.code
                                    )
                                    .map((course) => (
                                        <div
                                            key={course.code}
                                            className="course_option"
                                            onClick={() =>
                                                handleCourseChange(course)
                                            }
                                        >
                                            <p className="course_name">
                                                {course.name}
                                            </p>
                                        </div>
                                    ))}
                            </div>
                        )}
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