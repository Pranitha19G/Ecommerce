import React from "react";
import styles from "./BlogCards.module.css";
import { blogPosts } from "../../../BlogData/BlogData";

export default function BlogCards() {
  return (
    <div>
      <div className={styles.blogGrid}>
        {blogPosts.map((post, index) => (
          <div key={index} className={styles.parent}>
            <div className={styles.blogPostImage}>
              <img src={post.image} alt="image" />
            </div>
            <div className={styles.blogPostTitle}>{post.title}</div>
            <div className={styles.blogPostDate}> {post.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
