import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

interface Props {
  seq: number;
  title: string;
  description: string;
  postdate: string;
  link: string;
}

export default function Blog({
  seq,
  title,
  description,
  postdate,
  link,
}: Props) {
  const [isVisible, setIsVisible] = useState(false);

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
      className="row pb-5 d-flex"
    >
      <div className={`col-12 align-self-center col-lg-12`}>
        <h5>
          <a
            target="_blank"
            href={link}
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          ></a>
        </h5>
        <p
          dangerouslySetInnerHTML={{
            __html: description
              ?.replace(/<[^>]*>/g, "")
              ?.replace("연찌현찌의블로그", "..."),
          }}
        ></p>
        <div className="d-flex mb-3">
          <div className="py-2">{postdate}</div>
        </div>
      </div>
    </animated.div>
  );
}
