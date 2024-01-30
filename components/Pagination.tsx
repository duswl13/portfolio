import React, { MouseEvent } from "react";
import { animated } from "react-spring";

interface Props {
  start: number;
  total: number;
  display: number;
  onClick: (e: MouseEvent<HTMLElement>, isNext: boolean) => void;
}

export default function Pagination({ start, total, display, onClick }: Props) {
  return (
    <animated.div>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          {start !== 1 && (
            <li
              className={`page-item`}
              onClick={(e) => {
                onClick(e, false);
              }}
            >
              <a
                className="page-link"
                href="#"
                tabIndex={-1}
                aria-disabled="true"
              >
                이전
              </a>
            </li>
          )}
          {start + display <= total && (
            <li
              className={`page-item `}
              onClick={(e) => {
                onClick(e, true);
              }}
            >
              <a className="page-link" href="#">
                다음
              </a>
            </li>
          )}
        </ul>
      </nav>
    </animated.div>
  );
}
