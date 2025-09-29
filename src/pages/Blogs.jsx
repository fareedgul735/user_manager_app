
import styles from "./Blogs.module.css";

function Blogs() {
  const blogPosts = [
    {
      title: "Getting Started with User Management",
      excerpt: "Learn how to create, update, and manage users effectively.",
      date: "Sept 20, 2025",
    },
    {
      title: "Best Practices for CRUD Apps",
      excerpt: "Tips and tricks to build efficient CRUD applications.",
      date: "Sept 15, 2025",
    },
    {
      title: "Why Dashboards Matter",
      excerpt: "Explore how dashboards provide powerful insights at a glance.",
      date: "Sept 10, 2025",
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Blogs</h1>
      <p className={styles.subtitle}>Latest articles and insights</p>

      <div className={styles.blogGrid}>
        {blogPosts.map((post, index) => (
          <div key={index} className={styles.card}>
            <h2>{post.title}</h2>
            <p className={styles.date}>{post.date}</p>
            <p>{post.excerpt}</p>
            <button className={styles.readMore}>Read More →</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
