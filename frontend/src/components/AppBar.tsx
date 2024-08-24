import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";

export const AppBar = () => {
  return (
    <div className="border-b flex justify-between px-10 py-4">
      <div className="flex flex-col justify-center">
        <Link to={"/"}>Medium</Link>
      </div>

      <div>
        {/* <div> */}
        <Link to={"/publish"}>
          <button
            type="button"
            className="mr-4 text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Publish
          </button>
        </Link>
        {/* </div> */}
        <Avatar name={"Rahul"} size={"big"} />
      </div>
    </div>
  );
};
