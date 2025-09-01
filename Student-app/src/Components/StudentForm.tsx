import { useState } from "react";

export default function StudentForm() {
  const [firstName, setfirstName] = useState<string>("");
  const [lastName, setlastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNo, setPhoneNo] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [std, setStd] = useState<string>("");
  const [hobby, setHobby] = useState<string[]>([]);
  const [allStudent, setAllStudents] = useState<studentObject[]>([]);
  const [error, setError] = useState<any>({});

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

  const validation = () => {
    const newError: any = {}
    if (!firstName.trim()) newError.firstName = "first Name is required"

    if (!lastName.trim()) newError.lastName = "Last Name is required"

    if (!email.trim()) newError.email = "Email is required"
    else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newError.email = "Invalid Email Format"

    if (!phoneNo.trim()) newError.phoneNo = "phoneNo is required"
    else if(!/^\d{10}$/.test(phoneNo)) newError.phoneNo = "Invalid PhoneNo Format"

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

      // student data store into the students array
      setAllStudents([...allStudent, student]);

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

  return (
    <>
      <div className="flex justify-center mt-10">
        {/* <!-- Main modal --> */}
        <div id="student-modal" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
          <div className="relative p-4 w-full max-w-md max-h-full">
            {/* <!-- Modal content --> */}
            <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
              {/* <!-- Modal header --> */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Add Student Details
                </h3>
                <button type="button" className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="student-modal">
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* <!-- Modal body --> */}
              <div className="p-4 md:p-5">
                <form className="space-y-6" onSubmit={submitStudentForm} action="#">
                  {/* First Name  */}
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      value={firstName}
                      onChange={(event) => {
                        setfirstName(event.target.value);
                      }}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Enter Your First Name"
                    />
                    {/* {(error.firstName) ? <p className="text-red-500">{error.firstName}</p> : ""} */}
                    {(error.firstName && <p className="text-red-500 pt-1">{error.firstName}</p>)}
                  </div>

                  {/* Last Name  */}
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      value={lastName}
                      onChange={(event) => {
                        setlastName(event.target.value);
                      }}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Enter Your Last Name"
                    />
                    {(error.lastName && <p className="text-red-500 pt-1">{error.lastName}</p>)}
                  </div>

                  {/* Email  */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(event) => {
                        setEmail(event.target.value);
                      }}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Enter Your Email Id"
                    />
                    {(error.email && <p className="text-red-500 pt-1">{error.email}</p>)}
                  </div>

                  {/* Phone Number  */}
                  <div>
                    <label
                      htmlFor="phoneNo"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Phone No
                    </label>
                    <input
                      type="number"
                      name="phoneNo"
                      id="phoneNo"
                      value={phoneNo}
                      onChange={(event) => {
                        setPhoneNo(event.target.value);
                      }}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Enter Your Phone Number"

                    />
                    {(error.phoneNo && <p className="text-red-500 pt-1">{error.phoneNo}</p>)}
                  </div>

                  {/* Gender  */}
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Gender
                    </label>
                    <fieldset>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="gender"
                          value="Male"
                          onChange={(event) => {
                            setGender(event.target.value);
                          }}
                          checked={gender === "Male"}
                          className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                          Male
                        </label>

                        <input
                          type="radio"
                          name="gender"
                          value="Female"
                          onChange={(event) => {
                            setGender(event.target.value);
                          }}
                          checked={gender === "Female"}
                          className="ms-4 w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                          Female
                        </label>
                      </div>
                    </fieldset>
                    {(error.gender && <p className="text-red-500 pt-1">{error.gender}</p>)}
                  </div>

                  {/* Std  */}
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Select your Standard
                    </label>
                    <select
                      value={std}
                      onChange={(event) => {
                        setStd(event.target.value);
                      }}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="">-- select std --</option>
                      {allStd.map((data, index) => (
                        <option key={index} value={data}>
                          {data}
                        </option>
                      ))}
                    </select>
                    {(error.std && <p className="text-red-500 pt-1">{error.std}</p>)}
                  </div>

                  {/* Hobby  */}
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Hobby
                    </label>
                    <fieldset>
                      <div className="flex flex-wrap gap-4">
                        {allHobby.map((data, index) => (
                          <div key={index} className="flex items-center">
                            <input
                              type="checkbox"
                              onChange={getHobby}
                              checked={hobby.includes(data)}
                              value={data}
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label className="ms-1 text-sm font-medium text-gray-900 dark:text-gray-300">
                              {data}
                            </label>
                          </div>
                        ))}
                      </div>
                    </fieldset>
                    {(error.hobby && <p className="text-red-500 pt-1">{error.hobby}</p>)}
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add Student
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>


        {/* display data  */}
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg ms-3 max-h-96 overflow-y-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0">
              <tr>
                <th scope="col" className="px-6 py-3">
                  First Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Last Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone NO
                </th>
                <th scope="col" className="px-6 py-3">
                  Gender
                </th>
                <th scope="col" className="px-6 py-3">
                  Std
                </th>
                <th scope="col" className="px-6 py-3">
                  Hobby
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {allStudent.length > 0 ? (
                allStudent.map((student, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="px-6 py-4">{student.firstName}</td>
                    <td className="px-6 py-4">{student.lastName}</td>
                    <td className="px-6 py-4">{student.email}</td>
                    <td className="px-6 py-4">{student.phoneNo}</td>
                    <td className="px-6 py-4">{student.gender}</td>
                    <td className="px-6 py-4">{student.std}</td>
                    <td className="px-6 py-4">{student.hobby.join(", ")}</td>
                    <td className="px-6 py-4">
                      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">✎</button>
                      <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">❌</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} className="px-6 py-4 text-center">
                    No students added yet
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}