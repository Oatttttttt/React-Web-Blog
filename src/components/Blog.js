import { Link } from "react-router-dom";
import blogs from "../data/blogs";
import "./Blog.css";
import { useState } from "react";
import { useEffect } from "react";
export default function Blogs() {
  const [search, setSearch] = useState("");
  const [filterBlog, setFilterBlog] = useState([]);
  useEffect(() => {
    const result = blogs.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilterBlog(result);
  }, [search]);
  return (
    <>
      <h1> Blog </h1>{" "}
      <div className="blogs-container">
        <div className="search">
          <input
            type="text"
            className="input"
            placeholder="Search Blog"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />{" "}
        </div>{" "}
        <article>
          {" "}
          {filterBlog.map((item) => (
            <Link to={`/blog/${item.id}`} key={item.id}>
              <div className="card">
                <h2> {item.title} </h2>{" "}
                <p> {item.content.substring(0, 300)} </p> <hr />
              </div>{" "}
            </Link>
          ))}{" "}
        </article>{" "}
      </div>{" "}
    </>
  );
}
