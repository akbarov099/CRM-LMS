import React from "react";

export const LeadsMainItem = ({ item }) => {
  return (
    <div className="lead-card">
      <div className="lead-top">
        <h3>{item.name}</h3>
      </div>

      <div className="lead-info">
        <p>📞 {item.phone}</p>
        <p>📚 {item.course}</p>
      </div>

      <div className="lead-actions">
        <button className="call">Позвонить</button>
        <button className="move">В работу</button>
      </div>
    </div>
  );
};