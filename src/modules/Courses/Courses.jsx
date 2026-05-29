import React, { useState } from 'react'
import { Header } from '../../components/Header'
import { CoursesToolAdd } from './components/CoursesToolAdd';
import { CoursesMain } from './components/CoursesMain';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { LuFolderClock } from "react-icons/lu";

export const Courses = () => {
  const { t } = useTranslation();

  // Boshlang'ich ma'lumotlar (Backend bitguncha state ichida turadi)
  const [courses, setCourses] = useState([
    { id: 1, courseName: 'Frontend', quantitystudents: '100', coursePrice: '100' },
    { id: 2, courseName: 'Backend', quantitystudents: '100', coursePrice: '100' },
    { id: 3, courseName: 'UI/UX Design', quantitystudents: '100', coursePrice: '100' },
    { id: 4, courseName: 'Flutter', quantitystudents: '100', coursePrice: '100' },
    { id: 5, courseName: 'Английский язык', quantitystudents: '100', coursePrice: '100' },
    { id: 6, courseName: 'Русский язык', quantitystudents: '100', coursePrice: '100' },
    { id: 7, courseName: 'Математика', quantitystudents: '100', coursePrice: '100' },
    { id: 8, courseName: 'Подготовка школы', quantitystudents: '100', coursePrice: '100' },
  ]);

  // Kurs qo'shish funksiyasi
  const handleAddCourse = (newCourse) => {
    const courseWithId = {
      ...newCourse,
      id: Date.now(), // vaqtinchalik unikal ID
      quantitystudents: '0' // yangi kursda o'quvchi bo'lmaydi
    };
    setCourses([...courses, courseWithId]);
  };

  // Kursni tahrirlash funksiyasi
  const handleUpdateCourse = (updatedCourse) => {
    setCourses(courses.map(course => course.id === updatedCourse.id ? updatedCourse : course));
  };

  // Kursni o'chirish funksiyasi
  const handleDeleteCourse = (id) => {
    setCourses(courses.filter(course => course.id !== id));
  };

  return (
    <>
      <Header title={t("courses")} />
      <main>
        <div className="container">
          {/* Qo'shish tugmasi */}
          <CoursesToolAdd onAddCourse={handleAddCourse} />
          
          <CoursesMain 
            courses={courses} 
            onUpdateCourse={handleUpdateCourse} 
            onDeleteCourse={handleDeleteCourse} 
          />
          
          <Link to="/courses/arxiv" className="board__btn">
            <button className="arxiv">
              <LuFolderClock className="arxiv__icon" />
              {t("archive")}
            </button>
          </Link>
        </div>
      </main>
    </>
  )
}