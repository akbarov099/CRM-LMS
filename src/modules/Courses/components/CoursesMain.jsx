import React from 'react'
import { CoursesMainItem } from './CoursesMainItem'

export const CoursesMain = ({ courses, onUpdateCourse, onDeleteCourse }) => {
  return (
    <ul className='coursesmain__wrapper'>
      {courses.map((course) => (
        <CoursesMainItem 
          key={course.id} 
          course={course}
          onUpdateCourse={onUpdateCourse}
          onDeleteCourse={onDeleteCourse}
        />
      ))}
    </ul>
  )
}