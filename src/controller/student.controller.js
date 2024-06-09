const SaveStudent = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const GetAllStudent = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  SaveStudent,
  GetAllStudent,
};
