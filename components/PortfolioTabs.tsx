import { useState } from "react";
import PortfolioContentCurr from "./PortfolioContentCurr";
import portfolioStyles from "./PortfolioTabs.module.css";

export default function PortfolioTabs() {
  const [navIndex, setNavIndex] = useState(0);

  return (
    <>
      <ul
        className={`pb-5 nav  nav-underline nav-fill ${portfolioStyles.navUnderline}`}
        id="myTab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${portfolioStyles.navLink} ${
              navIndex === 0 ? `active  ${portfolioStyles.active}` : ""
            }`}
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home-tab-pane"
            type="button"
            role="tab"
            aria-controls="home-tab-pane"
            aria-selected={navIndex === 0}
            onClick={() => setNavIndex(0)}
          >
            현재
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link  ${portfolioStyles.navLink} ${
              navIndex === 1 ? `active  ${portfolioStyles.active}` : ""
            }`}
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile-tab-pane"
            type="button"
            role="tab"
            aria-controls="profile-tab-pane"
            aria-selected={navIndex === 1}
            onClick={() => setNavIndex(1)}
          >
            이전
          </button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className={`tab-pane fade  ${navIndex === 0 ? "show active" : ""}`}
          id="home-tab-pane"
          role="tabpanel"
          aria-labelledby="home-tab"
          tabIndex={0}
        >
          <PortfolioContentCurr />
        </div>
        <div
          className={`tab-pane fade  ${navIndex === 1 ? "show active" : ""}`}
          id="profile-tab-pane"
          role="tabpanel"
          aria-labelledby="profile-tab"
          tabIndex={0}
        >
          <PortfolioContentCurr />
        </div>
      </div>
    </>
  );
}
