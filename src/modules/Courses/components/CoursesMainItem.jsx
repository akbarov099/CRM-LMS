

export const CoursesMainItem = ({ coursesName, payment, quantitystudents }) => {
    return (
        <li className="groupsmain__item">
            <h2>{coursesName}</h2>
            <h3>В этом курсе есть {quantitystudents} студентов</h3>
            <h4>{payment}</h4>
        </li>
    );
};