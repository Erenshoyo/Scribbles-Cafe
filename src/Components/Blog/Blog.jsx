import React from "react";
import { CiBookmark } from "react-icons/ci";
import { IoBookmark } from "react-icons/io5";

const Blog = ({ blog, handleBookMark, bookMark, handleMarkAsRead }) => {
  // console.log(blog);

  const {
    id,
    title,
    cover,
    author,
    author_img,
    hashtags,
    reading_time,
    posted_date,
    content,
  } = blog;

  const isBookMarked = bookMark.some((item) => item.id === blog.id);

  const handleOpenModal = () => {
    document.getElementById(`modal_${id}`).showModal();
  };
  return (
    <>
      <div className="card bg-base-100 shadow-sm hover:shadow-md transition-shadow duration-300 border border-base-200 mb-8">
        <figure className="h-48 w-full overflow-hidden">
          <img
            src={cover}
            alt={title}
            className="w-full h-full transition-transform duration-500 hover:scale-105"
          />
        </figure>
        <div className="card-body p-6">
          <div className="flex justify-between items-start text-sm text-gray-500 mb-2">
            <span>{posted_date}</span>
            <button
              className="btn btn-ghost btn-circle btn-sm -mt-2 -mr-2"
              onClick={() => handleBookMark(blog)}
            >
              {isBookMarked ? (
                <IoBookmark size={20} className="text-primary" />
              ) : (
                <CiBookmark size={22} />
              )}
            </button>
          </div>
          <h2
            onClick={handleOpenModal}
            className="card-title text-xl font-bold mb-2 leading-tight hover:text-primary cursor-pointer"
          >
            {title}
          </h2>
          <div>
            {hashtags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs font-medium text-blue-500 bg-blue-50 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-base-200">
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-1">
                  <img src={author_img} alt={author} />
                </div>
              </div>
              <div>
                <span className="text-sm font-semibold">{author}</span>
                <span className="text-sm text-gray-400"> {reading_time}</span>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleOpenModal}
                className="text-gray-500 text-sm font-bold hover:text-primary transition-colors"
              >
                See More
              </button>
              <button
                className="text-primary text-sm font-bold hover:underline underline-offset-4 decoration-2"
                onClick={() => handleMarkAsRead(blog.id)}
              >
                Mark as read
              </button>
            </div>
          </div>
        </div>
      </div>
      <dialog id={`modal_${id}`} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box w-11/12 max-w-3xl p-0 overflow-y-auto">
          <div className="absolute right-2 top-2 z-10">
            <form method="dialog">
              <button className="btn btn-sm btn-ghost text-white bg-black/20 hover:bg-black/40 border-none">
                ✕
              </button>
            </form>
          </div>
          {/* {Modal Image header} */}
          <div className="h-64 w-full relative">
            <img
              src={cover}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent flex items-end p-6">
              <h3 className="text-2xl font-bold text-white">{title}</h3>
            </div>
          </div>
          {/* Modal Content */}
          <div className="p-8">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="w-10 rounded-full">
                    <img src={author_img} alt={author} />
                  </div>
                </div>
                <div>
                  <p className="font-bold text-base">{author}</p>
                  <p className="text-xs text-gray-500">
                    {posted_date} • {reading_time}
                  </p>
                </div>
              </div>
            </div>
            {/* Blog text */}
            <p className="text-gray-700 leading-relaxed whitespace-pre-line text-lg">
              {content}
            </p>
            <div className="modal-action mt-8">
              <form method="dialog">
                <button className="btn btn-primary">Close</button>
              </form>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default Blog;
