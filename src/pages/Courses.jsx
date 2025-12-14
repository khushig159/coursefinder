// CoursesPage.jsx
import "../style/CoursesPage.css";
import data from "../Data";
import { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";
import Quotefetch from "../Quotes.jsx";

export default function CoursesPage() {
  const [currentpage, setcurrentpage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [quote, setquote] = useState(null);
  const Itemperpage = 12;
  const filteredData = data.filter(
    (course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPage = Math.ceil(filteredData.length / Itemperpage);
  const startIndex = (currentpage - 1) * Itemperpage;
  const currentData = filteredData.slice(startIndex, startIndex + Itemperpage);
  useEffect(() => {
    async function fetchQuote() {
      const newquoute = await Quotefetch();
      setquote(newquoute);
    }
    fetchQuote();

    const interval = setInterval(fetchQuote, 30000);
    return () => clearInterval(interval);
  }, []);
  console.log(quote);

  return (
    <main className="main">
      <div className="container-top">
        {quote && (
          <div className="quotebox">
            <h3>"{quote.quote}"</h3>
            <p>- {quote.author}</p>
          </div>
        )}
              </div>

        <header className="topbar">
        <div className="search">
          <input
            placeholder="Search courses or professors"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setcurrentpage(1);
            }}
          />
        </div>

        <div className="profile">
          <img src="https://i.pravatar.cc/40" alt="user" />
        </div>
      </header>
      

      <section className="content">
        <div className="grid">
          {currentData.map((c, i) => (
            <CourseCard key={i} c={c} i={i} />
          ))}
        </div>

        {/* Pagination */}
        {totalPage > 1 && (
          <div className="pagination">
            <button
              disabled={currentpage === 1}
              onClick={() => setcurrentpage((p) => p - 1)}
            >
              Prev
            </button>

            {Array.from({ length: totalPage }, (_, i) => (
              <button
                key={i}
                className={currentpage === i + 1 ? "active" : ""}
                onClick={() => setcurrentpage(i + 1)}
              >
                {i + 1}
              </button>
            ))}

            <button
              disabled={currentpage === totalPage}
              onClick={() => setcurrentpage((p) => p + 1)}
            >
              Next
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
