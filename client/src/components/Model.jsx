import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Modal = ({ isOpen, onClose }) => {
  const handleClickOutside = (e) => {
    if (e.target.id === "modal-overlay") {
      onClose();
    }
  };

  if (!isOpen) return null;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [concerns, setConcerns] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !concerns) {
      toast.error("Please fill in all fields");
      return;
    }
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/appointment`,
        {
          name,
          email,
          phone,
          concerns,
        }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        onClose();
      }
    } catch (error) {
      toast.error(error.response.data.message);
      // console.error(error);
    }
  };

  return (
    <>
      <div
        id="modal-overlay"
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        onClick={handleClickOutside}
      >
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-xl font-bold mb-4">Book an Appointment</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border border-gray-300 rounded"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full p-2 border border-gray-300 rounded"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="concerns"
                className="block text-sm font-medium mb-1"
              >
                Concerns
              </label>
              <textarea
                id="concerns"
                rows="4"
                className="w-full p-2 border border-gray-300 rounded"
                onChange={(e) => setConcerns(e.target.value)}
                value={concerns}
              />
            </div>
            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-1 bg-gray-300 text-gray-800 rounded"
                id="cancel-btn"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-1 bg-[#e69215] text-white rounded"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
