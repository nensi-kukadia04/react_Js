import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";

export default function StudentForm() {

  const [firstName, setfirstName] = useState<string>("");
  const [lastName, setlastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNo, setPhoneNo] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [std, setStd] = useState<string>("");
  const [hobby, setHobby] = useState<string[]>([]);
  const [error, setError] = useState<any>({});
  // get item into local storage 
  const [allStudent, setAllStudents] = useState<studentObject[]>(JSON.parse(localStorage.getItem('students') || "[]"));
  const [editId, setEditId] = useState<number>();

  // const [allStudent, setAllStudents] = useState<studentObject[]>([]);
  // useEffect(() => {
  //   const data = localStorage.getItem('students');
  //   if (data !== null) {
  //     setAllStudents(JSON.parse(data));
  //   }
  // }, [])

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(allStudent));
  }, [allStudent]);

  const allStd: string[] = [
    "1st",
    "2nd",
    "3rd",
    "4th",
    "5th",
    "6th",
    "7th",
    "8th",
    "9th",
    "10th",
    "11th",
    "12th",
  ];

  const allHobby: string[] = ["Reading", "Writing", "Travelling", "Dancing"];

  type studentObject = {
    firstName: string;
    lastName: string;
    email: string;
    phoneNo: string;
    gender: string;
    std: string;
    hobby: string[];
  };

  //hobby
  const getHobby = (event: any) => {
    const value = event.target.value;
    const checked = event.target.checked;

    if (checked) {
      setHobby((data) => [...data, value]);
    } else {
      setHobby((data) => data.filter((element) => element !== value));
    }
  };

  const validation = () => {
    const newError: any = {}
    if (!firstName.trim()) newError.firstName = "first Name is required"

    if (!lastName.trim()) newError.lastName = "Last Name is required"

    if (!email.trim()) newError.email = "Email is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newError.email = "Invalid Email Format"

    if (!phoneNo.trim()) newError.phoneNo = "phoneNo is required"
    else if (!/^(?:\+?91[-\s]?|0)?[6-9]\d{9}$/.test(phoneNo)) newError.phoneNo = "Invalid PhoneNo Format"

    if (!gender.trim()) newError.gender = "Gender is required"

    if (!std.trim() && std !== "Select your Standard") newError.std = "Standard is required"

    if (hobby.length == 0) newError.hobby = "Select atlease one hobby"

    setError(newError);

    return Object.keys(newError).length;
  }

  const submitStudentForm = (event: any) => {
    event.preventDefault();

    if (validation() !== 0) {
      return;
    }
    else {
      const student: studentObject = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNo: phoneNo,
        gender: gender,
        std: std,
        hobby: hobby,
      };

      // student data 
      if (editId === undefined) {
        setAllStudents(allStudent => [...allStudent, student]);
        toast.success("Student Added Successfully");
      }
      else {
        const data = allStudent.map((stud, index) =>
          (editId === index) ? student : stud
        )
        // console.log(data);
        setAllStudents(data);
        toast.success("Student Updated Successfully...");
      }

      // clean input
      setfirstName("");
      setlastName("");
      setEmail("");
      setPhoneNo("");
      setGender("");
      setStd("");
      setHobby([]);
    }

  };

  //delete student
  const deleteStudent = (i: number) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You are about to delete ${allStudent[i].firstName}. This action cannot be undone!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "✅ Yes, Delete",
      cancelButtonText: "❌ No, Cancel",
      reverseButtons: true, // puts "No" on left, safer UX

      // ✅ Better UI styling
      customClass: {
        popup: "rounded-xl shadow-lg p-6",
        confirmButton:
          "px-5 py-2.5 rounded-lg bg-red-600 text-white font-medium shadow hover:bg-red-700 focus:ring-2 focus:ring-red-400",
        cancelButton:
          "m-3 px-5 py-2.5 rounded-lg bg-gray-300 text-gray-800 font-medium shadow hover:bg-gray-400 focus:ring-2 focus:ring-gray-500",
      },
      buttonsStyling: false, // disable default SweetAlert2 styles
    }).then((result) => {
      if (result.isConfirmed) {
        const data = allStudent.filter((_, index) => index !== i);
        setAllStudents(data);
        toast.success(`${allStudent[i].firstName} deleted successfully`);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        toast.info("Deletion cancelled");
      }
    });
  };

  // edit student 
  const editStudent = (i: number) => {

    setEditId(i);

    // console.log(allStudent[i]);
    setfirstName(allStudent[i].firstName);
    setlastName(allStudent[i].lastName);
    setEmail(allStudent[i].email);
    setPhoneNo(allStudent[i].phoneNo);
    setGender(allStudent[i].gender);
    setStd(allStudent[i].std);
    setHobby(allStudent[i].hobby);
  }

  return (
    <>
      <div className="flex justify-center items-center mb-10 px-4">
        <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
          {/* Title */}
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-6">
            {editId === undefined ? "Add Student Details" : "Update Student"}
          </h3>

          {/* Form */}
          <form className="space-y-6" onSubmit={submitStudentForm}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div>
                <label
                  htmlFor="firstName"
                  className="block mb-2 text-sm font-semibold text-gray-800 dark:text-gray-200"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setfirstName(e.target.value)}
                  placeholder="Enter Your First Name"
                  className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white/70 dark:bg-gray-800/70 px-4 py-3 text-gray-900 dark:text-white text-sm shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                />
                {error.firstName && <p className="text-red-500 text-xs mt-2">{error.firstName}</p>}
              </div>

              {/* Last Name */}
              <div>
                <label
                  htmlFor="lastName"
                  className="block mb-2 text-sm font-semibold text-gray-800 dark:text-gray-200"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setlastName(e.target.value)}
                  placeholder="Enter Your Last Name"
                  className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white/70 dark:bg-gray-800/70 px-4 py-3 text-gray-900 dark:text-white text-sm shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                />
                {error.lastName && <p className="text-red-500 text-xs mt-2">{error.lastName}</p>}
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-semibold text-gray-800 dark:text-gray-200"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email Id"
                className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white/70 dark:bg-gray-800/70 px-4 py-3 text-gray-900 dark:text-white text-sm shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              />
              {error.email && <p className="text-red-500 text-xs mt-2">{error.email}</p>}
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phoneNo"
                className="block mb-2 text-sm font-semibold text-gray-800 dark:text-gray-200"
              >
                Phone No
              </label>
              <input
                type="number"
                id="phoneNo"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                placeholder="Enter Your Phone Number"
                className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white/70 dark:bg-gray-800/70 px-4 py-3 text-gray-900 dark:text-white text-sm shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              />
              {error.phoneNo && <p className="text-red-500 text-xs mt-2">{error.phoneNo}</p>}
            </div>

            {/* Gender */}
            <div>
              <p className="mb-2 text-sm font-semibold text-gray-800 dark:text-gray-200">Gender</p>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={gender === "Male"}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Male</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={gender === "Female"}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Female</span>
                </label>
              </div>
              {error.gender && <p className="text-red-500 text-xs mt-2">{error.gender}</p>}
            </div>

            {/* Standard */}
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
                Select your Standard
              </label>
              <select
                value={std}
                onChange={(e) => setStd(e.target.value)}
                className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white/70 dark:bg-gray-800/70 px-4 py-3 text-gray-900 dark:text-white text-sm shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              >
                <option value="">-- select std --</option>
                {allStd.map((data, i) => (
                  <option key={i} value={data}>
                    {data}
                  </option>
                ))}
              </select>
              {error.std && <p className="text-red-500 text-xs mt-2">{error.std}</p>}
            </div>

            {/* Hobby */}
            <div>
              <p className="mb-2 text-sm font-semibold text-gray-800 dark:text-gray-200">Hobby</p>
              <div className="flex flex-wrap gap-4">
                {allHobby.map((data, i) => (
                  <label key={i} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      value={data}
                      onChange={getHobby}
                      checked={hobby.includes(data)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{data}</span>
                  </label>
                ))}
              </div>
              {error.hobby && <p className="text-red-500 text-xs mt-2">{error.hobby}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full ${editId === undefined
                ? "bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800"
                : "bg-gradient-to-r from-yellow-500 to-yellow-700 hover:from-yellow-600 hover:to-yellow-800"
                } text-white font-semibold py-3 rounded-xl shadow-lg transition-transform hover:scale-[1.02]`}
            >
              {editId === undefined ? "➕ Add Student" : "✏️ Update Student"}
            </button>
          </form>
        </div>
      </div>

      {/* display data  */}
      <div className="relative overflow-x-auto rounded-lg shadow-2xl border border-gray-200">
        <table className="w-full text-sm text-left text-gray-700">
          {/* Table Head */}
          <thead className="text-xs uppercase bg-blue-600 text-white">
            <tr>
              <th className="px-6 py-3">
                <input type="checkbox" className="w-4 h-4" />
              </th>
              <th className="px-6 py-3">No.</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Gender</th>
              <th className="px-6 py-3">Std</th>
              <th className="px-6 py-3">Hobby</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {allStudent.length > 0 ? (
              allStudent.map((student, index) => (
                <tr
                  key={index}
                  className={`${index % 2 === 0 ? "bg-white" : "bg-red-50"} border-b border-gray-200`}
                >
                  <td className="px-6 py-4">
                    <input type="checkbox" className="w-4 h-4" />
                  </td>
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">
                    <div className="font-semibold">{student.firstName} {student.lastName}</div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                      <span>{student.phoneNo}</span>
                      <a href={`tel:${student.phoneNo}`} className="text-red-600">📞</a>
                      <a
                        href="/"
                        className="text-green-600"
                      >
                        💬
                      </a>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-700">{student.email}</td>
                  <td className="px-6 py-4">{student.gender}</td>
                  <td className="px-6 py-4">{student.std}</td>
                  <td className="px-6 py-4">{student.hobby.join()}</td>
                  <td className="px-6 py-4">
                    <button onClick={() => editStudent(index)} className="p-2 rounded-lg bg-yellow-400 text-yellow-700">
                      📝
                    </button>
                    <button onClick={() => deleteStudent(index)} className="p-2 rounded-lg bg-red-400 text-red-700 ml-2">
                      🗑️
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="px-6 py-6 text-center text-gray-500">
                  No students added yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>


      {/* Toastify  */}
      <ToastContainer />

    </>
  );
}