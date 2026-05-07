import { MdAddCard } from "react-icons/md";

export const CoursesToolAdd = () => {
    return (
        <div className='courses__toolbar-wrapper'>
            <button className="courses__toolbar-wrapper-btn">
                <MdAddCard className="courses__toolbar-wrapper-btn-icon"/>
                Добавить Курс
            </button>
        </div>
    )
}
