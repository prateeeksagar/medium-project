import { Link } from "react-router-dom";

interface BlogCardPros {
  id: number;
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

export const BlogCard = ({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardPros) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="p-4 border-b border-slate-200 w-screen max-w-screen-md cursor-pointer">
        <div className="flex">
          <Avatar name={authorName} />
          <div className="font-extralight pl-2 text-sm flex justify-center flex-col">
            {authorName}
          </div>
          <div className="flex justify-center flex-col pl-2">
            <Circle />
          </div>
          <div className="pl-2 font-thin text-slate-400 text-sm flex justify-center flex-col">
            {publishedDate}
          </div>
        </div>
        <div className="text-xl font-semibold pt-2">{title}</div>
        <div className="text-md font-thin">{content.slice(0, 100) + "..."}</div>
        <div className="text-slate-400 pt-4 text-sm">{`${Math.ceil(
          content.length / 100
        )} minutes(s) read`}</div>
      </div>
    </Link>
  );
};

export function Circle() {
  return <div className="h-1 w-1 rounded-full bg-slate-500"></div>;
}

export function Avatar({
  name,
  size,
}: {
  name: string;
  size?: "small" | "big";
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${
        size === "small" ? "w-4 h-4" : "w-10 h-10"
      } overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}
    >
      <span
        className={`${
          size === "small" ? "text-sx" : "text-md"
        } text-gray-600 dark:text-gray-300`}
      >
        {name[0]}
      </span>
    </div>
  );
}
