import styles from "./Dashboard.module.css";

function Dashboard() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Dashboard</h1>
      <p className={styles.subtitle}>Overview of your system at a glance.</p>

      <div className={styles.statsGrid}>
        <div className={styles.card}>
          <h2>👥 Users</h2>
          <p>120 Active Users</p>
        </div>
        <div className={styles.card}>
          <h2>📝 Blogs</h2>
          <p>34 Published Posts</p>
        </div>
        <div className={styles.card}>
          <h2>📊 Reports</h2>
          <p>8 Pending Reviews</p>
        </div>
        <div className={styles.card}>
          <h2>⚙️ Settings</h2>
          <p>System Optimized</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
