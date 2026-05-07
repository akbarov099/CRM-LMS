import React, { useState } from "react";
import { LuFolderClock } from "react-icons/lu";
import {
  DndContext,
  useDroppable,
  useDraggable,
  closestCenter,
} from "@dnd-kit/core";
import { Link } from "react-router-dom";

const initialLeads = [
  { id: 1, name: "Ali Valiyev", phone: "0554 88 98 88", course: "Frontend", status: "NEW" },
  { id: 2, name: "Sara Karimova", phone: "0700 11 22 33", course: "English", status: "CALLED" },
  { id: 3, name: "John Doe", phone: "0999 88 77 66", course: "Design", status: "REGISTERED" },
  { id: 4, name: "Madina Karimova", phone: "0550 12 34 56", course: "UI/UX", status: "NOT_INTERESTED", reason: "Нет времени" },
  { id: 5, name: "Ahmad Karimov", phone: "0555 11 22 33", course: "Backend", status: "WANTS_TO_COME" },

];

const columns = [
  { key: "NEW", title: "Новый" },
  { key: "CALLED", title: "Кому мы звонили" },
  { key: "NOT_INTERESTED", title: "Отказались" },
  { key: "WANTS_TO_COME", title: "Кто хочет прийти" },
  { key: "REGISTERED", title: "Кто записался" },
];

const LeadCard = ({ lead }) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: lead.id,
    });

  const style = {
    transform: transform
      ? `translate(${transform.x}px, ${transform.y}px)`
      : undefined,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="lead-card"
    >
      <h4>{lead.name}</h4>
      <p>📞 {lead.phone}</p>
      <p>📚 {lead.course}</p>

      {lead.status === "NOT_INTERESTED" && lead.reason && (
        <p className="reason">❌ {lead.reason}</p>
      )}
    </div>
  );
};

const Column = ({ status, title, leads }) => {
  const { setNodeRef } = useDroppable({
    id: status,
  });

  return (
    <div className={`column column-${status.toLowerCase()}`}>
      <h3>{title}</h3>

      <div ref={setNodeRef} className="column-body">
        {leads.map((lead) => (
          <LeadCard key={lead.id} lead={lead} />
        ))}
      </div>
    </div>
  );
};

export const LeadsMain = () => {
  const [leads, setLeads] = useState(initialLeads);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over) return;

    const leadId = active.id;
    const newStatus = over.id;

    let reason = "";

    if (newStatus === "NOT_INTERESTED") {
      reason = prompt("Причина отказа?") || "";
    }

    setLeads((prev) =>
      prev.map((lead) =>
        lead.id === leadId
          ? { ...lead, status: newStatus, reason }
          : lead
      )
    );
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>

      <div className="board">
        {columns.map((col) => (
          <Column
            key={col.key}
            status={col.key}
            title={col.title}
            leads={leads.filter((l) => l.status === col.key)}
          />
        ))}
      </div>
      <Link to="/leads/arxiv" className="board__btn">
        <button className="arxiv">
          <LuFolderClock className="arxiv__icon"/>
          Архив
        </button>
      </Link>
    </DndContext>
  );
};