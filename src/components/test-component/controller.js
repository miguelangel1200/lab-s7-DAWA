import Student from "../../models/student";

export const findAll = async (req, res) => {
 try {
   const students = await Student.find();

   res.json({
     ok: true,
     data: students,
   });
 } catch (error) {
   res.json({
     ok: false,
     data: error.message,
   });
 }
};

export const remove = async (req, res) => {
  try {
    const id = req.params.id
    const student = await Student.findByIdAndDelete(id)
    res.json({
      ok:true,
      data: student
    })
  } catch (error) {
    res.json({
      ok: false,
      data: error.message,
    });
  }
}

export const update = async (req, res) => {
  try {
    const id = req.params.id
    const { body } = req
    const student = await Student.findByIdAndUpdate(id, body, {
      new: true
    })
    res.status(200).json({
      ok: true,
      data: student
    })
  } catch (error) {
    res.status(400).json({
      ok: false,
      data: error.message
    })
  }
}

export const create = async (req, res) => {
 try {
   const { body } = req;
   const user = new Student(body);
   user.save();

   res.json({
     ok: true,
     data: user,
   });
 } catch (error) {
   res.json({
     ok: false,
     data: error.message,
   });
 }
};
