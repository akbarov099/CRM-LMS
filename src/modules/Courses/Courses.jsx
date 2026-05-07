import React from 'react'
import { Header } from '../../components/Header'
import { FaAddressCard } from "react-icons/fa";
import { CoursesToolAdd } from './components/CoursesToolAdd';
import { CoursesMain } from './components/CoursesMain';

export const Courses = () => {
  return (
    <>
    <Header title={"Курсы"} />
    <main>
      <div className="container">
        <CoursesToolAdd/>
        <CoursesMain/>
      </div>
    </main>
    </>
  )
}
