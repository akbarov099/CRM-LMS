// GroupsMainItem.jsx
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { FaFilePen } from "react-icons/fa6";
import { UpdateGroupModal } from "./UpdateGroupModal";
import { DeleteGroupModal } from "./DeleteGroupModal";

export const GroupsMainItem = ({
  mentorName,
  groupName,
  studentCount,
  lessonDays,
  groupId,
}) => {
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  return (
    <>
      <li className="groupsmain__item">
        <div className="groupsmain__btns">
          <button
            className="groupsmain__update-btn"
            aria-label="Update group"
            title="Update group"
            onClick={() => setIsUpdateOpen(true)}
          >
            <FaFilePen size={18} />
          </button>
          <button
            className="groupsmain__delete-btn"
            aria-label="Delete group"
            title="Delete group"
            onClick={() => setIsDeleteOpen(true)}
          >
            <FaTrash size={18} />
          </button>
        </div>
        <h2>{mentorName}</h2>
        <h3>{groupName}</h3>
        <h3>{studentCount}</h3>
        <h4>{lessonDays}</h4>
      </li>

      <UpdateGroupModal
        isOpen={isUpdateOpen}
        onClose={() => setIsUpdateOpen(false)}
        groupId={groupId}
        initialData={{ mentorName, groupName, studentCount, lessonDays }}
      />

      <DeleteGroupModal
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        groupId={groupId}
        groupName={groupName}
      />
    </>
  );
};