import projectStyles from "./Project.module.css";
import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import SvgIcon from "./SvgIcon";

interface Props {
  seq: number;
  badgeList: string;
  title: string;
  agency: string;
  startDate: string;
  endDate: string;
  about: string;
  imgUrl?: string;
  webUrl?: string;
  androidUrl?: string;
  iosUrl?: string;
  imgClass?: string;
  githubUrl?: string;
}

export default function Project({
  seq,
  badgeList,
  title,
  agency,
  startDate,
  endDate,
  about,
  imgUrl = "",
  webUrl = "",
  androidUrl = "",
  iosUrl = "",
  imgClass = "",
  githubUrl = "",
}: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const defaultImgUrl = webUrl || androidUrl || iosUrl;
  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const element = document.getElementById(`div${seq}`);

    if (element) {
      // 대상 div의 위치 정보 가져오기
      const rect = element.getBoundingClientRect();
      // 대상 div가 화면에 보일 때 isVisible 상태를 true로 설정
      if (Number(seq) === 0) {
        setIsVisible(true);
      } else {
        setIsVisible(scrollY + window.innerHeight > rect.top + scrollY);
      }
    }
  };

  // 컴포넌트가 마운트되면 스크롤 이벤트 리스너 추가
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    // 컴포넌트가 언마운트되면 스크롤 이벤트 리스너 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // react-spring을 사용한 애니메이션 스타일 정의
  const animation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0%)" : "translateY(20%)",
  });

  return (
    <animated.div
      id={`div${seq}`}
      style={{ ...animation }}
      className={`row pb-5 d-flex ${
        Number(seq) % 2 == 0 && "flex-row-reverse"
      }`}
    >
      {imgUrl && (
        <div className="col-12 col-lg-6 align-self-start px-lg-0 px-3">
          <img
            src={imgUrl}
            alt={title}
            className={` w-100 rounded-4 ${projectStyles.img} ${imgClass}`}
            onClick={() => window.open(defaultImgUrl)}
          />
        </div>
      )}

      <div
        className={`${
          !imgUrl
            ? "pe-lg-0 ps-lg-0"
            : seq % 2 === 0
            ? "pe-0 pe-lg-5"
            : "ps-0 ps-lg-5"
        } pt-3 pt-lg-0 col-12 align-self-center ${
          imgUrl ? "col-lg-6" : "col-lg-12"
        }`}
      >
        <div className="px-lg-0 px-3">
          <p className="mt-lg-0 mt-4 mb-4 primaryPoint">
            {10 > seq ? `0${seq}` : seq}
          </p>
          <h5>{title}</h5>
          {badgeList.split(",").map((el, index) => (
            <span
              className="mb-1 me-2 badge badgeColor rounded-pill text-uppercase"
              key={index}
            >
              {el.trim()}
            </span>
          ))}
          <p className="my-1">{agency}</p>
          <p className="my-1">
            {startDate} ~ {endDate}
          </p>
          <p className="my-1">{about}</p>

          <div className="d-flex justify-content-start fs-2 gap-3">
            {webUrl && (
              <a href={webUrl} target="_blank">
                <SvgIcon className="bi-globe" width={24} height={24}>
                  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
                </SvgIcon>
              </a>
            )}
            {iosUrl && (
              <a href={iosUrl} target="_blank">
                <SvgIcon className="bi-apple" width={24} height={24}>
                  <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                  <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                </SvgIcon>
              </a>
            )}
            {androidUrl && (
              <a href={androidUrl} target="_blank">
                <SvgIcon className="bi-android2" width={24} height={24}>
                  <path d="m10.213 1.471.691-1.26q.069-.124-.048-.192-.128-.057-.195.058l-.7 1.27A4.8 4.8 0 0 0 8.005.941q-1.032 0-1.956.404l-.7-1.27Q5.281-.037 5.154.02q-.117.069-.049.193l.691 1.259a4.25 4.25 0 0 0-1.673 1.476A3.7 3.7 0 0 0 3.5 5.02h9q0-1.125-.623-2.072a4.27 4.27 0 0 0-1.664-1.476ZM6.22 3.303a.37.37 0 0 1-.267.11.35.35 0 0 1-.263-.11.37.37 0 0 1-.107-.264.37.37 0 0 1 .107-.265.35.35 0 0 1 .263-.11q.155 0 .267.11a.36.36 0 0 1 .112.265.36.36 0 0 1-.112.264m4.101 0a.35.35 0 0 1-.262.11.37.37 0 0 1-.268-.11.36.36 0 0 1-.112-.264q0-.154.112-.265a.37.37 0 0 1 .268-.11q.155 0 .262.11a.37.37 0 0 1 .107.265q0 .153-.107.264M3.5 11.77q0 .441.311.75.311.306.76.307h.758l.01 2.182q0 .414.292.703a.96.96 0 0 0 .7.288.97.97 0 0 0 .71-.288.95.95 0 0 0 .292-.703v-2.182h1.343v2.182q0 .414.292.703a.97.97 0 0 0 .71.288.97.97 0 0 0 .71-.288.95.95 0 0 0 .292-.703v-2.182h.76q.436 0 .749-.308.31-.307.311-.75V5.365h-9zm10.495-6.587a.98.98 0 0 0-.702.278.9.9 0 0 0-.293.685v4.063q0 .406.293.69a.97.97 0 0 0 .702.284q.42 0 .712-.284a.92.92 0 0 0 .293-.69V6.146a.9.9 0 0 0-.293-.685 1 1 0 0 0-.712-.278m-12.702.283a1 1 0 0 1 .712-.283q.41 0 .702.283a.9.9 0 0 1 .293.68v4.063a.93.93 0 0 1-.288.69.97.97 0 0 1-.707.284 1 1 0 0 1-.712-.284.92.92 0 0 1-.293-.69V6.146q0-.396.293-.68" />
                </SvgIcon>
              </a>
            )}
            {githubUrl && (
              <a href={githubUrl} target="_blank">
                <SvgIcon className="bi-github" width={24} height={24}>
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </SvgIcon>
              </a>
            )}
          </div>
        </div>
      </div>
    </animated.div>
  );
}
