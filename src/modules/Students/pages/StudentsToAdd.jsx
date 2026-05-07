import React from 'react'
import { Header } from '../../../components/Header'
import { ToolBar } from '../../../components/ToolBar'
import { StudentsToAddForm } from './StudentsToAddForm'

export const StudentsToAdd = () => {
  return (
    <>
      <Header title={"Добавить Студент"} />
      <ToolBar textBtn={"Информация об Студент"} />
      <StudentsToAddForm />
    </>
  )
}
