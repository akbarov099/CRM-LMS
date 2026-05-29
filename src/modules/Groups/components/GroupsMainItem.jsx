import { FaTrash } from "react-icons/fa";
import { FaFilePen } from "react-icons/fa6";

export const GroupsMainItem = ({
  mentorName,
  groupName,
  studentCount,
  lessonDays,
  groupId,
}) => {


  return (
    <li className="groupsmain__item">
      <div className="groupsmain__btns">
        <button
          className="groupsmain__update-btn"
          aria-label="Update group"
          title="Update group"
        >
          <FaFilePen size={18} />
        </button>
        <button
          className="groupsmain__delete-btn"
          aria-label="Delete group"
          title="Delete group"
        >
          <FaTrash size={18} />
        </button>
      </div>
      <h2>{mentorName}</h2>
      <h3>{groupName}</h3>
      <h3>{studentCount}</h3>
      <h4>{lessonDays}</h4>
    </li>
  );
};