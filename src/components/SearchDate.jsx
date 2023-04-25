import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchDate() {
  let navigate = useNavigate();

  const [dateSelect, setDateSelect] = useState(false);

  const theDateIsSelected = (date) => {
    setDateSelect(date);
  };
  const goToDaySelected = (e) => {
    e.preventDefault();
    navigate(`/photo/${dateSelect}`);
  };
  const today = new Date().toISOString().slice(0, 10);

  return (
    <div className="search-container">
      <input
        id="datefield"
        type="date"
        min="1995-06-16"
        max={today}
        placeholder="Buscar por fecha"
        className="search-input"
        onChange={(event) => theDateIsSelected(event.target.value)}
      />
      {dateSelect && (
        <button className="search-button" onClick={goToDaySelected}>
          Buscar
        </button>
      )}
    </div>
  );
}
