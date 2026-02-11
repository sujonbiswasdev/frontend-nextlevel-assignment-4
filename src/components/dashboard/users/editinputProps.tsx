import React, { useState } from "react";

interface EditableInputProps {
  label: string;
  initialValue: string;
  onUpdate: (newValue: string) => void;
}

const EditableInput: React.FC<EditableInputProps> = ({ label, initialValue, onUpdate }) => {
  const [value, setValue] = useState(initialValue);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    onUpdate(value);
    setIsEditing(false);
  };

  return (
    <div className="w-full max-w-md mx-auto my-4 p-4 bg-white rounded-lg shadow-md">
      <label className="block text-gray-700 font-semibold mb-2">{label}</label>

      {isEditing ? (
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Save
          </button>
          <button
            onClick={() => { setValue(initialValue); setIsEditing(false); }}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition-colors"
          >
            Cancel
          </button>
        </div>
      ) : (
        <div className="flex justify-between items-center">
          <span className="text-gray-800">{value}</span>
          <button
            onClick={() => setIsEditing(true)}
            className="text-blue-500 hover:underline"
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default EditableInput;