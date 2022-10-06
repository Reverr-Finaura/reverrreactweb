import React from "react";
import { Link } from "react-router-dom";
import styles from "./Blog.module.css";

function Blog(props) {
  return (
    <Link to="/" className={styles.link}>
      <div className={styles.main}>
        <img src={props.img} alt="blog" />
        <h2>{props.name}</h2>
        <p className={styles.blogBody}>{props.body}</p>
      </div>
    </Link>
  );
}

export default Blog;
