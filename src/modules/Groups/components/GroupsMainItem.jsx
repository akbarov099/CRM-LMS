export const GroupsMainItem = ({ mentorName, groupName, studentCount, lessonDays }) => {
  return (
    <li className="groupsmain__item">
      <h2>{mentorName}</h2>
      <h3>{groupName}</h3>
      <h3>{studentCount}</h3>
      <h4>{lessonDays}</h4>
    </li>
  );
};
