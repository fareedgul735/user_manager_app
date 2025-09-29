import styles from "./Landing.module.css";

function Landing() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>
          Welcome to <span>User Manager</span>
        </h1>
        <p className={styles.subtitle}>
          Manage users, blogs, and dashboards with ease. A simple CRUD app made
          elegant.
        </p>

        <div className={styles.buttons}>
          <button className={styles.primaryBtn}>Get Started</button>
          <button className={styles.secondaryBtn}>Learn More</button>
        </div>
      </div>

      <div className={styles.circle1}></div>
      <div className={styles.circle2}></div>
    </div>
  );
}

export default Landing;
