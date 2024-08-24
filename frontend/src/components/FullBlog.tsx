import { BlogsType } from "../hooks";
import { AppBar } from "./AppBar";
import { Avatar } from "./BlogCard";

export const FullBlog = ({ blog }: { blog: BlogsType }) => {
  return (
    <div>
      <AppBar />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full pt-20 max-w-screen-xl">
          <div className="col-span-8 ">
            <div className="text-3xl font-extrabold">{blog.title}</div>
            <div className=" font-extrathin text-slate-500 pt-2">
              Posted on 2nd January 2024
            </div>
            <div className="text-md pt-4">{blog.content}</div>
          </div>
          <div className="col-span-4">
            Author
            <div className="flex">
              <div className="flex justify-center flex-col">
                <Avatar size="big" name={blog.author.name} />
              </div>
              <div className="pl-4">
                <div className="text-xl font-semibold"> {blog.author.name}</div>
                <div className="pt-2 text-slate-500">
                  Musician, Chain snatcher, Nobody
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
