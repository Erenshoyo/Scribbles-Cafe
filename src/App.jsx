import { Suspense, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Blogs from "./Components/Blogs/Blogs";
import Footer from "./Components/Footer/Footer";

function App() {
  const [bookMark, setBooKMark] = useState([]);
  const [readingCount, setReadingCount] = useState(0);
  const handleBookMark = (blog) => {
    setBooKMark([...bookMark, blog]);
  };
  const handleMarkAsRead = (id) => {
    setReadingCount(readingCount + 1);
    handleRemoveBookMark(id);
  };
  const handleRemoveBookMark = (id) => {
    const remainingBookMark = bookMark.filter((mark) => mark.id !== id);
    setBooKMark(remainingBookMark);
  };
  return (
    <>
      <Navbar />
      <div className="main-container flex text-center mt-10">
        <div className="left-container w-[70%]">
          <Blogs
            handleBookMark={handleBookMark}
            bookMark={bookMark}
            handleMarkAsRead={handleMarkAsRead}
          />
        </div>
        <div className="right-container w-[28%]">
          <div className="sticky top-24 space-y-6">
            {" "}
            {/* sticky makes it follow scroll */}
            {/* 1. Stats Card */}
            <div className="stats shadow w-full bg-base-100 border border-base-200">
              <div className="stat">
                <div className="stat-figure text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-8 h-8 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <div className="stat-title">Blogs Read</div>
                <div className="stat-value text-primary">{readingCount}</div>
                <div className="stat-desc">Keep up the streak!</div>
              </div>
            </div>
            {/* 2. Bookmarks / Reading List */}
            <div className="card bg-base-100 shadow-sm border border-base-200">
              <div className="card-body p-5">
                <h2 className="card-title text-lg mb-2">
                  Reading List ({bookMark.length})
                </h2>
                <ul className="menu bg-base-100 w-full p-0 [&_li>*]:rounded-none">
                  {bookMark.length === 0 && (
                    <li className="text-gray-400 text-sm">
                      No bookmarks yet...
                    </li>
                  )}
                  {bookMark.map((mark) => (
                    <li
                      key={mark.id}
                      className="border-b border-base-200 last:border-none"
                    >
                      <a className="py-3 flex justify-between items-start">
                        <span className="line-clamp-2 text-sm font-medium">
                          {mark.title}
                        </span>
                        <button
                          onClick={() => handleRemoveBookMark(mark.id)}
                          className="btn btn-ghost btn-xs text-error"
                        >
                          ✕
                        </button>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default App;
