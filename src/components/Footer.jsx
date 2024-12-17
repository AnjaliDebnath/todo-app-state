import React from "react";

const Footer = ({
  markAllCompleted,
  clearCompleted,
  remainingTodos,
  toggleColorFilter,
  selectedColors,
  setStatusFilter,
  statusFilter,
}) => {
  const colors = [
    { name: "Green", value: "green" },
    { name: "Blue", value: "blue" },
    { name: "Orange", value: "orange" },
    { name: "Purple", value: "purple" },
    { name: "Red", value: "red" },
  ];

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white border-t p-4 text-sm">
      <div className="grid grid-cols-4 gap-4 text-center">
        {/* Actions */}
        <div className="flex flex-col items-center">
          <span className="font-semibold mb-2">Actions</span>
          <button
            onClick={markAllCompleted}
            className="bg-blue-500 text-white px-2 py-1 rounded mb-1 hover:bg-blue-600"
          >
            Mark All Completed
          </button>
          <button
            onClick={clearCompleted}
            className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
          >
            Clear Completed
          </button>
        </div>

        {/* Remaining Todos */}
        <div className="flex flex-col items-center">
          <span className="font-semibold mb-1">Remaining Todos</span>
          <span>{remainingTodos} item{remainingTodos !== 1 ? "s" : ""} left</span>
        </div>

        {/* Filter by Status */}
        <div className="flex flex-col items-center">
          <span className="font-semibold mb-1">Filter by Status</span>
          <button
            onClick={() => setStatusFilter("All")}
            className={statusFilter === "All" ? "font-bold underline" : ""}
          >
            All
          </button>
          <button
            onClick={() => setStatusFilter("Active")}
            className={statusFilter === "Active" ? "font-bold underline" : ""}
          >
            Active
          </button>
          <button
            onClick={() => setStatusFilter("Completed")}
            className={statusFilter === "Completed" ? "font-bold underline" : ""}
          >
            Completed
          </button>
        </div>

        {/* Filter by Color */}
        <div className="flex flex-col items-center">
          <span className="font-semibold mb-1">Filter by Color</span>
          {colors.map((color) => (
            <label key={color.value} className="flex items-center space-x-1">
              <input
                type="checkbox"
                checked={selectedColors.includes(color.value)}
                onChange={() => toggleColorFilter(color.value)}
              />
              <span style={{ color: color.value }}>{color.name}</span>
            </label>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
