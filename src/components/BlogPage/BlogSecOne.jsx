import React, { useState, useEffect } from "react";
import "./Blog.css";
import NotFound from "../NotFound/NotFound";
import FadeLoader from "react-spinners/FadeLoader";


const url =
  "https://newsapi.org/v2/everything?q=keyword&apiKey=ddcb7be140d34c6e8afe2633ee5520aa";

function BlogSecOne() {
  let date = new Date();
  let day = new Date().getDay();
  let year = new Date().getFullYear();
  let month = date.getMonth();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let monthInEnglish = months[month];

  const [info, setInfo] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6); // Adjust items per page as needed

  useEffect(() => {
    async function getNews() {
      const response = await fetch(
        `${url}&page=${currentPage}&pageSize=${itemsPerPage}`
      );
      const data = await response.json();
      setInfo(data.articles);
    }

    getNews();
  }, [currentPage, itemsPerPage]);

  if (info.length === 0) {
    return (
      <div style={{
        display:'flex',
        justifyContent:'center',
        padding:'20px 0'
      }}>
        <FadeLoader color="#36d7b7"/>
      </div>
    );
  }

  return (
    <>
      <div className="w-[90%] lg:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-[120px]">
        {info.map((blogItem, index) => (
          <div key={index}>
            <img
              className="w-full h-[200px] bg-gray-200 rounded-t-[10px]"
              src={
                blogItem.urlToImage
                  ? blogItem.urlToImage
                  : "https://static-00.iconduck.com/assets.00/404-page-not-found-illustration-2048x998-yjzeuy4v.png"
              }
              alt={blogItem.title}
            />

            <div className="pt-[35px] pl-[24px]">
              <p className="text-[12px] text-[#717A7B] leading-[12px]">
                Published on {monthInEnglish} {day}, {year}
              </p>
              <p className="pt-[11px] h-[80px] overflow-hidden line-clamp-2 text-[24px] text-[#242528] font-semibold">
                {blogItem.title}
              </p>
              <div className="flex items-center mt-[20px] mb-[37px]">
                <span className="w-[35px] h-[35px] rounded-[50%] bg-black flex justify-center items-center">
                  <img src="/assets/img/topRightArrow.png" alt="Arrow" />
                </span>
                <p className="ml-[15px]">
                  <a
                    href={blogItem.url ? blogItem.url : <NotFound />}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[16px]"
                  >
                    Read More
                  </a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination UI (Optional) */}
      {/* Example: */}
      <div className="flex justify-center my-4">
        <button
          onClick={() => setCurrentPage(prevPage => prevPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 mr-2 bg-blue-500 text-white rounded"
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentPage(prevPage => prevPage + 1)}
          disabled={info.length < itemsPerPage}
          className="px-3 py-1 bg-blue-500 text-white rounded"
        >
          Next
        </button>
      </div>
    </>
  );
}

export default BlogSecOne;
