import SvgIcon from "./SvgIcon";
import styles from "./HomeCard.module.css";

interface Props {
  seq: number;
  svgClass: string;
  title: string;
  list: string;
}

export default function Card({ title, svgClass, list }: Props) {
  return (
    <div className="col-lg-3 col-sm-6 col-12 p-3">
      <div className={`card shadow border-0 rounded-3 ${styles.card}`}>
        <div className="card-body p-3">
          <div className="mb-3">
            <div className="d-flex align-items-center mb-3">
              <h6 className="fw-bolder mb-0">
                <span className="text-gradient d-inline text-uppercase">
                  <SvgIcon
                    className={`${svgClass} me-2`}
                    width={16}
                    height={16}
                    fill="#1e30f3"
                  >
                    <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm5 10v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2v5a2 2 0 0 1-2 2z" />
                  </SvgIcon>
                  {title}
                </span>
              </h6>
            </div>
            <div className="row">
              {list?.split(",")?.map((el, index) => (
                <div className="col-12 mb-1" key={index}>
                  <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                    {el.trim()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
