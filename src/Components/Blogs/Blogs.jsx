import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleBookMark, bookMark, handleMarkAsRead }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  //   console.log(blogs);
  return (
    <div className="w-[95%] mx-auto">
      <div className="mb-6 flex justify-between items-end border-b pb-2 border-gray-200">
        <h1 className="text-3xl font-bold text-gray-800">Latest Stories</h1>
        <span className="text-gray-500 text-sm mb-1">{blogs.length} posts available</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            handleBookMark={handleBookMark}
            bookMark={bookMark}
            handleMarkAsRead={handleMarkAsRead}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
