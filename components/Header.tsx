import Link from "next/link";
import navStyles from "./Header.module.css";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Header() {
  const router = useRouter();
  const currentUrl = router.asPath;

  let [active, setActive] = useState(
    currentUrl === "/"
      ? 0
      : currentUrl === "/portfolio"
      ? 1
      : currentUrl === "project"
      ? 2
      : 3
  );

  let [expanded, setExpanded] = useState(true);

  return (
    <nav className={`navbar navbar-expand-lg  ${navStyles.navbar}`}>
      <div className="container text-center">
        <button
          className={`navbar-toggler`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="true"
          aria-label="Toggle navigation"
          onClick={() => setExpanded(!expanded)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${expanded ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mx-auto my-2 mb-lg-0 align-items-lg-center">
            <li className="nav-item">
              <Link
                className={`nav-link ${active === 0 ? navStyles.active : ""} ${
                  navStyles.navLink
                }`}
                aria-current="page"
                href="/"
                onClick={() => (setActive(0), setExpanded(!expanded))}
              >
                소개
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${active === 1 ? navStyles.active : ""} ${
                  navStyles.navLink
                }`}
                aria-current="page"
                href="/portfolio"
                onClick={() => (setActive(1), setExpanded(!expanded))}
              >
                포트폴리오
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${active === 2 ? navStyles.active : ""} ${
                  navStyles.navLink
                }`}
                aria-current="page"
                href="/project"
                onClick={() => (setActive(2), setExpanded(!expanded))}
              >
                프로젝트
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${active === 3 ? navStyles.active : ""} ${
                  navStyles.navLink
                }`}
                href="/blog"
                onClick={() => (setActive(3), setExpanded(!expanded))}
              >
                블로그
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
