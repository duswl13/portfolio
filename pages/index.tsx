import HomeCard from "@/components/HomeCard";
import SubSection from "@/components/SubSection";
import SvgIcon from "@/components/SvgIcon";
import styles from "@/styles/Home.module.css";
import HomeHistory from "@/components/HomeHistory";
import dbConnect from "@/db/dbConnect";
import Skill from "@/db/models/Skill";
import History from "@/db/models/History";

interface historyData {
  months: number;
  list: string[];
}

interface history {
  year: number;
  data: historyData[];
}

interface skill {
  seq: number;
  svgClass: string;
  title: string;
  list: string;
}

interface Props {
  skillList: skill[];
  historyList: history[];
}

export async function getServerSideProps() {
  await dbConnect();
  const skills = await Skill.find();
  const historys = await History.find();
  return {
    props: {
      skillList: JSON.parse(JSON.stringify(skills)),
      historyList: JSON.parse(JSON.stringify(historys)),
    },
  };
}

export default function Home({ skillList, historyList }: Props) {
  return (
    <>
      <div>
        <section className="d-flex align-items-center ">
          <video autoPlay={true} muted loop className={`w-100 ${styles.video}`}>
            <source src="/video/video.mp4" type="video/mp4" />
          </video>
          <div
            className=" position-absolute p-5 text-center w-100"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <span
              className="mb-1 me-2 rounded-pill text-uppercase
          badge bg-gradient-primary-to-secondary text-white mb-4"
            >
              web developer
            </span>

            <h1 className="text-gradient fw-bolder">장연지 포트폴리오</h1>
            <p>
              항상 재밌는 개발을 하고 싶은 풀스택 웹 개발자입니다.
              <br />
              자전거를 타고 출퇴근 하는 것을 좋아하며, 무엇이든지 끈기있게
              도전하는 것을 좋아합니다.
            </p>
            <div className="d-flex justify-content-center fs-2 gap-4">
              <a
                href="https://github.com/duswl13?tab=repositories"
                target="_blank"
              >
                <SvgIcon className="bi-github" width={24} height={24}>
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </SvgIcon>
              </a>
              <a href="https://open.kakao.com/o/s89SBo4f" target="_blank">
                <SvgIcon className="bi-chat-fill" width={24} height={24}>
                  <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9 9 0 0 0 8 15" />
                </SvgIcon>
              </a>
              <a href="mailto:plain64@naver.com">
                <SvgIcon
                  className="bi-bi-envelope-at-fill"
                  width={24}
                  height={24}
                >
                  <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671" />
                  <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791" />
                </SvgIcon>
              </a>
            </div>
          </div>
        </section>
      </div>
      <div className="container-fluid text-center bg-white">
        <SubSection badge="introduce" title="인적사항" align="center">
          <div className="row pt-5">
            <div className="col-lg-4 col-12 offset-lg-2">
              <img src="/img/profile.jpg" className={styles.img} />
            </div>
            <div className="col-lg-4 col-12 text-start d-flex align-items-center justify-content-center ">
              <div className="row ">
                <div className="col-12 pb-3 pt-lg-0 pt-3">
                  <SvgIcon
                    className="bi-chevron-compact-right"
                    width={16}
                    height={16}
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671"
                    />
                  </SvgIcon>
                  <span className="fw-bold">생일:</span> 1993.06.04
                </div>
                <div className="col-12 pb-3">
                  <SvgIcon
                    className="bi-chevron-compact-right"
                    width={16}
                    height={16}
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671"
                    />
                  </SvgIcon>
                  <span className="fw-bold">주소지:</span> 경기도 부천시
                </div>
                <div className="col-12 pb-3">
                  <SvgIcon
                    className="bi-chevron-compact-right"
                    width={16}
                    height={16}
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671"
                    />
                  </SvgIcon>
                  <span className="fw-bold">MBTI:</span> ISTJ
                </div>
                <div className="col-12 pb-3">
                  <SvgIcon
                    className="bi-chevron-compact-right"
                    width={16}
                    height={16}
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671"
                    />
                  </SvgIcon>
                  <span className="fw-bold">EMAIL:</span> plain64@naver.com
                </div>
                <div className="col-12 pb-3">
                  <p>
                    웹과 앱을 모두 경험하여 폭 넓은 경험을 해왔습니다.
                    풀스택으로 개발을 해왔으며, 현재는 프론트엔드에 관심을
                    가지고 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SubSection>
      </div>
      <div className="container-fluid text-center">
        <SubSection badge="Skill" title="기술스택" align="center">
          <section className="text-start">
            <div className="container">
              <div className="row">
                {skillList?.map((el, index) => (
                  <HomeCard
                    seq={el.seq}
                    title={el.title}
                    svgClass={el.svgClass}
                    list={el.list}
                    key={index}
                  />
                ))}
              </div>
            </div>
          </section>
        </SubSection>
      </div>
      <div className="container-fluid text-center px-5">
        <SubSection badge="history" title="발자취" align="center">
          <div className="row">
            <div className="col-12 col-lg-7 offset-lg-5 py-5 text-start ">
              <HomeHistory list={historyList} />
            </div>
          </div>
        </SubSection>
      </div>
    </>
  );
}
