import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles["header-inner"]}>
        <div className={styles.brand}>
          <span className={styles["brand-dot"]} />
          <h3 className={styles["brand-name"]}>Bhavesh</h3>
        </div>

        <nav className={styles["header-nav"]}>
          <a href="#" className={styles["nav-link"]}>Jobs</a>
          <a href="#" className={styles["nav-link"]}>Companies</a>
          <a href="#" className={styles["nav-link"]}>Saved</a>
        </nav>

        <button className={styles["login-btn"]}>
          <span>Login</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
            <polyline points="10 17 15 12 10 7" />
            <line x1="15" y1="12" x2="3" y2="12" />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;