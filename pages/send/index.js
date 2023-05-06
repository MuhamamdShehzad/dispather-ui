import Link from "next/link";
import { useReducer } from "react";
import { BiPlus } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";

import { setAppData } from "../../redux/reducer";
import { useRouter } from "next/router";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

export default function AddUserForm({ props }) {
  const [formData, setFormData] = useReducer(formReducer, {});
  const router = useRouter();
  const data = router.query;

  const { id, type, rollno, date, status, priority, description, to } = data;
  // console.log(data);

  let appData = useSelector((state) => state.app.client.data);

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(formData).length == 0)
      return console.log("Don't have Form Data");

    if (id) {
      const index = appData.findIndex((obj) => obj.id == id);
      const updatedData = [...appData];
      let updatedformData = Object.assign({}, data, formData);

      updatedData[index] = { ...updatedformData, sent: true };
      dispatch(setAppData(updatedData));
    } else {
      formData.id = appData.length + 1;
      formData.sent = true;
      console.log(formData);
      dispatch(setAppData([...appData, formData]));
    }
  };

  return (
    <div className="mx-10 my-20">
      <div className="m-10 flex flex-row justify-around">
        <Link href={"/dashboard"}>
          <button className="block bg-blue-300 px-6 py-2 rounded-lg">
            Histroy
          </button>
        </Link>
        <Link href={"/send"}>
          <button className="block  border-black border-4 bg-blue-500 px-6 py-2 rounded-lg">
            Application Send
          </button>
        </Link>
        <Link href={"/receive"}>
          <button className="bg-blue-300 px-6 py-2 rounded-lg">
            Application Recieve
          </button>
        </Link>
      </div>
      <form
        onSubmit={handleSubmit}
        className="mx-40"
        method="post"
        encType="multipart/form-data"
      >
        <div className="flex flex-row ">
          <div className="w-1/2">
            <div className="input-type">
              <input
                type="text"
                defaultValue={type}
                onChange={setFormData}
                name="type"
                className="my-4 border w-full px-5 py-3 focus:outline-none rounded-md"
                placeholder="Type"
                required
              />
            </div>
            <div className="input-type">
              <input
                type="text"
                defaultValue={rollno}
                onChange={setFormData}
                name="rollno"
                className="mb-4 border w-full px-5 py-3 focus:outline-none rounded-md"
                placeholder="Roll No"
                required
              />
            </div>
            <div className="input-type">
              <input
                type="date"
                defaultValue={date}
                onChange={setFormData}
                name="date"
                className="mb-4 border w-full px-5 py-3 focus:outline-none rounded-md"
                placeholder="Date"
                required
              />
            </div>
            <div className="input-type">
              <select
                onChange={setFormData}
                name="status"
                defaultValue={status}
                className="mb-4 border w-full px-5 py-3 focus:outline-none rounded-md"
                required
              >
                <option value="">Select Status</option>
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
            <div className="input-type">
              <select
                onChange={setFormData}
                name="priority"
                defaultValue={priority}
                className="mb-4 border w-full px-5 py-3 focus:outline-none rounded-md"
                required
              >
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="High">High</option>
                <option value="Normal">Normal</option>
              </select>
            </div>
            <div className="input-type">
              <input
                type="file"
                id="image"
                name="image"
                className="border w-full px-5 py-3 focus:outline-none rounded-md"
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                //required
                //onChange={onChangeImageHandler}
              />
            </div>
          </div>
          <div className="w-1/2 ">
            <div className="input-type">
              <input
                type="text"
                onChange={setFormData}
                name="description"
                defaultValue={description}
                className="ml-4 my-4 border w-3/4 h-56 px-5 py-3 focus:outline-none rounded-md "
                placeholder="Description"
                required
              />
            </div>
          </div>
        </div>
        <div className="w-1/2 mt-10 flex flex-row justify-evenly">
          <div className="w-3/4">
            <select
              onChange={setFormData}
              name="to"
              value={to}
              className="w-3/4 border px-5 py-3 focus:outline-none rounded-md"
              required
            >
              <option value="">Send To</option>
              <option value="CS">CS Dept.</option>
              <option value="IT">IT Dept.</option>
              <option value="HOD">HOD </option>
            </select>
          </div>
          <div className="w-[25%]">
            <button className="w-full bg-green-500 border px-5 py-3 focus:outline-none rounded-md">
              <span className="px-1">Send</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
