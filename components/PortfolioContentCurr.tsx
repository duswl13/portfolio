import portfolioContentCurrStyles from "./PortfolioContentCurr.module.css";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import dracula from "react-syntax-highlighter/dist/cjs/styles/prism/dracula";
import { useState } from "react";

const dedent = (strs: TemplateStringsArray, ...values: any[]): string => {
  const str = strs
    .reduce((s, part, i) => s + values[i - 1] + part)
    .replace(/^\n/, "");
  const level = str.length - str.replace(/^ +/, "").length;
  return str
    .split("\n")
    .map((line) => line.slice(level))
    .join("\n");
};

export default function PortfolioTabs() {
  let [carousel, setCarousel] = useState(0);

  return (
    <div className="container">
      <div className="card shadow border-0 rounded-3 my-5">
        <div className="card-body p-5">
          <div>
            <div className="d-flex align-items-center mb-4">
              <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-info-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
                </svg>
              </div>
              <h5 className="fw-bolder mb-0">
                <span className="text-gradient d-inline text-uppercase">
                  구성
                </span>
              </h5>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="bg-light rounded-4 p-3">
                  <div className="row d-flex pb-lg-4 pb-2">
                    <div
                      id="carouselExampleIndicators"
                      className="carousel slide col-12 col-lg-6"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-indicators">
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to="0"
                          aria-label="Slide 1"
                          className={carousel === 0 ? "active" : ""}
                          aria-current={carousel === 0}
                          onClick={() => setCarousel(0)}
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to="1"
                          aria-label="Slide 2"
                          className={carousel === 1 ? "active" : ""}
                          aria-current={carousel === 1}
                          onClick={() => setCarousel(1)}
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to="2"
                          aria-label="Slide 3"
                          className={carousel === 2 ? "active" : ""}
                          aria-current={carousel === 2}
                          onClick={() => setCarousel(2)}
                        ></button>
                      </div>
                      <div className="carousel-inner">
                        <div
                          className={`carousel-item ${
                            carousel === 0 ? `active` : ""
                          }`}
                          data-bs-interval="1000"
                        >
                          <img
                            src="/img/portfolio_cap01.png"
                            className={`d-block w-100  rounded-3 ${portfolioContentCurrStyles.img}`}
                            alt="blog"
                          />
                        </div>
                        <div
                          className={`carousel-item ${
                            carousel === 1 ? `active` : ""
                          }`}
                          data-bs-interval="1000"
                        >
                          <img
                            src="/img/portfolio_cap02.png"
                            className={`d-block w-100  rounded-3 ${portfolioContentCurrStyles.img}`}
                            alt="blog"
                          />
                        </div>
                        <div
                          className={`carousel-item ${
                            carousel === 2 ? `active` : ""
                          }`}
                          data-bs-interval="1000"
                        >
                          <img
                            src="/img/portfolio_cap01.png"
                            className={`d-block w-100  rounded-3 ${portfolioContentCurrStyles.img}`}
                            alt="blog"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="pt-5 pt-lg-0 p-lg-5 col-12 align-self-center col-lg-6">
                      <div className="px-lg-1 p-1">
                        <h5
                          className={`fw-bold ${portfolioContentCurrStyles.text}`}
                        >
                          디자인부터 배포까지 처음부터 끝까지 작업한 프로젝트
                          입니다.
                        </h5>
                        <p className={`my-3 ${portfolioContentCurrStyles.p}`}>
                          2024년 1월 8일부터 2주간 작업했습니다. 부트스트랩
                          라이브러리를 사용하였고, React+Next 를 사용하여
                          개발환경을 구성하였습니다.
                        </p>
                        <div className="d-flex justify-content-start fs-2 gap-4">
                          <a className="text-gradient" href="#!">
                            <i className="bi bi-github"></i>
                          </a>
                          <a className="text-gradient" href="#!">
                            <i className="bi bi-share-fill"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card shadow border-0 rounded-3 my-5">
        <div className="card-body p-5">
          <div className="mb-5">
            <div className="d-flex align-items-center mb-4">
              <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-gear"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
                  <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
                </svg>
              </div>
              <h5 className="fw-bolder mb-0">
                <span className="text-gradient d-inline text-uppercase">
                  개발 환경
                </span>
              </h5>
            </div>
            <div className="row row-cols-1 row-cols-md-3 mb-4">
              <div className="col mb-4 mb-md-0">
                <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                  ReactJs 18
                </div>
              </div>
              <div className="col mb-4 mb-md-0">
                <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                  Bootstrap 5
                </div>
              </div>
              <div className="col">
                <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                  NextJs 14
                </div>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-3">
              <div className="col mb-4 mb-md-0">
                <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                  Vercel
                </div>
              </div>
              <div className="col mb-4 mb-md-0">
                <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                  TypeScript
                </div>
              </div>
              <div className="col">
                <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                  Mongo DB
                </div>
              </div>
            </div>
          </div>

          <div className="mb-5">
            <div className="d-flex align-items-center mb-4">
              <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-code-slash"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
                </svg>
              </div>
              <h5 className="fw-bolder mb-0">
                <span className="text-gradient d-inline text-uppercase">
                  소스 코드
                </span>
              </h5>
            </div>
            <div className="row  mb-4">
              <div className="col-12">
                <div className="bg-light rounded-4 p-3">
                  <SyntaxHighlighter language="jsx" style={dracula}>
                    {dedent`
                      export default function Footer() {
                        return (
                          <footer className="pt-7">
                            <div className="container mt-7 pt-lg-7 pb-4">
                              <div className="row align-items-center">
                                <div className="col-md-12 col-lg-12">
                                  <small className="small mb-3 mb-lg-0">
                                    Copyright © 2024 All rights reserved
                                    <small className="point"> Jang yeon ji </small>
                                  </small>
                                </div>
                              </div>
                            </div>
                          </footer>
                        );
                      }        
                      `}
                  </SyntaxHighlighter>
                  <p className="my-3">
                    프로젝트 리스트를 가져오는 소스입니다. Project 컴포넌트는
                    seq의 홀짝여부에 따라 reverse 클래스를 주었습니다. 2024년
                    1월 8일부터 2주간 작업했습니다. 부트스트랩 라이브러리를
                    사용하였고, React+Next 를 사용하여 개발환경을
                    구성하였습니다.
                  </p>
                  <SyntaxHighlighter language="jsx" style={dracula}>
                    {dedent`
                      export default function Footer() {
                        return (
                          <footer className="pt-7">
                            <div className="container mt-7 pt-lg-7 pb-4">
                              <div className="row align-items-center">
                                <div className="col-md-12 col-lg-12">
                                  <small className="small mb-3 mb-lg-0">
                                    Copyright © 2024 All rights reserved
                                    <small className="point"> Jang yeon ji </small>
                                  </small>
                                </div>
                              </div>
                            </div>
                          </footer>
                        );
                      }        
                      `}
                  </SyntaxHighlighter>
                  <SyntaxHighlighter language="jsx" style={dracula}>
                    {dedent`
                      export default function Footer() {
                        return (
                          <footer className="pt-7">
                            <div className="container mt-7 pt-lg-7 pb-4">
                              <div className="row align-items-center">
                                <div className="col-md-12 col-lg-12">
                                  <small className="small mb-3 mb-lg-0">
                                    Copyright © 2024 All rights reserved
                                    <small className="point"> Jang yeon ji </small>
                                  </small>
                                </div>
                              </div>
                            </div>
                          </footer>
                        );
                      }        
                      `}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
