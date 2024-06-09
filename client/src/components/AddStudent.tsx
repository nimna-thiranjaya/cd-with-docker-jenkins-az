import { useState } from "react";

const AddStudent = (props: { addStudent: (student: any) => void }) => {
  const [formData, setFormData] = useState<any>({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.dob
    ) {
      alert("Please fill in all fields");
      return;
    }
    props.addStudent(formData);
    clear();
  };

  const clear = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      dob: "",
    });
  };

  return (
    <>
      <div className="bg-white p-4 rounded-md shadow-md">
        <div className="flex justify-between ">
          <h2 className="text-2xl font-bold text-center text-black">
            Add Student
          </h2>

          <div className="flex justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleSubmit}
            >
              Add Student
            </button>

            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4"
              onClick={clear}
            >
              Cancel
            </button>
          </div>
        </div>

        <div className="mt-4">
          {/* add 2 cols to frist name last name */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md text-black"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md text-black"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
              />
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md text-black"
                onChange={handleChange}
                value={formData.email}
                name="email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Date of Birth
              </label>
              <input
                type="date"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md text-black"
                onChange={handleChange}
                value={formData.dob}
                name="dob"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddStudent;
