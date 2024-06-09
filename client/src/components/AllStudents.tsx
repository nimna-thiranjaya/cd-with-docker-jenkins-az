interface IStudent {
  _id: number;
  name: string;
  email: string;
  dob: string;
}

const AllStudents = (props: { students: IStudent[] }) => {
  return (
    <>
      <div className="bg-white p-4 rounded-md shadow-md">
        <h2 className="text-2xl font-bold text-center text-black">
          All Students
        </h2>
        <table className="table-auto w-full mt-4">
          <thead>
            <tr>
              <th className="px-4 py-2 text-black">ID</th>
              <th className="px-4 py-2 text-black">Name</th>
              <th className="px-4 py-2 text-black">Email</th>
              <th className="px-4 py-2 text-black">DOB</th>
            </tr>
          </thead>
          <tbody>
            {props.students.map((student, index) => (
              <tr key={student._id}>
                <td className="border px-4 py-2 text-black">{index + 1}</td>
                <td className="border px-4 py-2 text-black">{student.name}</td>
                <td className="border px-4 py-2 text-black">{student.email}</td>
                <td className="border px-4 py-2 text-black">{student.dob}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllStudents;
