import React from 'react'
import { CoursesMainItem } from './CoursesMainItem'

export const CoursesMain = () => {
  return (
    <ul className='coursesmain__wrapper'>
        <CoursesMainItem coursesName='Frontend' quantitystudents='100' payment='$100' />
        <CoursesMainItem coursesName='Backend' quantitystudents='100' payment='$100' />
        <CoursesMainItem coursesName='UI/UX Design' quantitystudents='100' payment='$100' />
        <CoursesMainItem coursesName='Flutter' quantitystudents='100' payment='$100' />
        <CoursesMainItem coursesName='Английский язык' quantitystudents='100' payment='$100' />
        <CoursesMainItem coursesName='Русский язык' quantitystudents='100' payment='$100' />
        <CoursesMainItem coursesName='Математика' quantitystudents='100' payment='$100' />
        <CoursesMainItem coursesName='Подготовка школы' quantitystudents='100' payment='$100' />
    </ul>
  )
}
