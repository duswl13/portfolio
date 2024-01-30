import styles from "./HomeHistory.module.css";

type listType = {
  year: number;
  data: Array<{
    months: number;
    list: Array<String>;
  }>;
};
interface Props {
  list: Array<listType>;
}

export default function Card({ list }: Props) {
  return (
    <>
      {list?.map((el, index) => (
        <div className={`resume-item pb-5 ${styles.resumeItem}`} key={index}>
          <h6 className="fw-bold">{el.year}년</h6>
          {el.data?.map((item, index) => (
            <div key={index}>
              <span
                className="me-2 rounded-pill text-uppercase
  badge bg-gradient-primary-to-secondary text-white mb-1"
              >
                {item.months}월
              </span>
              <ul>
                {item.list?.map((i, index) => (
                  <li className={styles.li} key={index}>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
