const Student = require("../model/student.model");
const CustomResponse = require("../utils/customResponse.util");

const SaveStudent = async (req, res) => {
  try {
    const { firstName, lastName, email, dob, profileImage } = req.body;

    const isEmailExist = await Student.findOne({ email });

    if (isEmailExist) {
      return CustomResponse(res, false, 400, "Email already exist", null);
    }

    const student = new Student({
      firstName,
      lastName,
      email,
      dob,
      profileImage,
    });

    await student.save();

    CustomResponse(res, true, 201, "Student saved successfully", student);
  } catch (error) {
    CustomResponse(res, false, 500, error.message, null);
  }
};

const GetAllStudent = async (req, res) => {
  try {
    const students = await Student.find();

    CustomResponse(res, true, 200, "", students);
  } catch (error) {
    CustomResponse(res, false, 500, error.message, null);
  }
};

module.exports = {
  SaveStudent,
  GetAllStudent,
};
