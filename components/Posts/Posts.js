import React from "react";
import styles from "../Posts/Posts.module.css";
export default function Posts({ title, content }) {
  return (
    <article className={styles.posts}>
      <figure>
        <p>img</p>
        <figcaption>
          <h3>{title}</h3>
          <p>{content}</p>
        </figcaption>
      </figure>
    </article>
  );
}
