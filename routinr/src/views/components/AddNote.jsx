import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const AddNote = ({ onClose }) => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteDescription, setNoteDescription] = useState("");

  const handleNoteTitleChange = (e) => {
    setNoteTitle(e.target.value);
  };

  const handleNoteDescriptionChange = (e) => {
    setNoteDescription(e.target.value);
  };

  const handleAddNote = () => {
    // Implement the logic to add the note (e.g., send to API, update state, etc.)
    // For simplicity, let's just log the note to the console in this example
    console.log("New Note:", {
      title: noteTitle,
      description: noteDescription,
    });

    // Close the AddNote component
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="text-white w-[80%] md:w-[70%] md:ml-[30%] ml-[20%] h-screen bg-[#052659] p-4 rounded-md shadow-md">
        <div className="md:p-10">
          <div className="flex justify-between items-center text-center">
            <button className="" onClick={onClose}>
              <AiOutlineClose className="md:text-[35px] text-[25px] text-white" />
            </button>
            <h2 className="text-lg md:text-xl font-semibold text-white">
              Add Note
            </h2>
            <button className="" onClick={onClose}>
              <AiOutlineClose className="md:text-[35px] text-[30px] text-transparent" />
            </button>
          </div>

          <label htmlFor="noteTitle" className="block text-sm font-medium mt-10 ">
            Note Title
          </label>
          <input
            type="text"
            id="noteTitle"
            className="w-full border border-gray-300 p-2 mb-3 rounded-md bg-transparent mt-5"
            placeholder="e.g my weirdest moment"
            value={noteTitle}
            onChange={handleNoteTitleChange}
          />

          <label
            htmlFor="noteDescription"
            className="block text-sm font-medium mt-5 "
          >
            Note Details
          </label>
          <textarea
            id="noteDescription"
            className="w-full border border-gray-300 p-2 mb-3 rounded-md bg-transparent mt-5"
            rows="4"
            placeholder="e.g my weirdest moment"
            value={noteDescription}
            onChange={handleNoteDescriptionChange}
          ></textarea>

          <button
            className="bg-[#A0C4E2] text-white py-2 px-4 w-full rounded-md hover:bg-blue-600 md:mt-5 mt-10"
            onClick={handleAddNote}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNote;
