import Blog from "./Blog";
import Project from "./Project";
import listStyles from "./list.module.css";

interface project {
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
}
interface blog {
  seq: number;
  title: string;
  description: string;
  postdate: string;
  link: string;
}

interface Props {
  projectList?: project[];
  blogList?: blog[];
}

export default function List({ blogList, projectList }: Props) {
  return (
    <section className="mb-5">
      <div className="justify-content-md-center">
        <ul className="list-group list-group-flush">
          {blogList &&
            blogList.map((el, index) => (
              <li
                key={el.seq || index}
                className={`list-group-item pb-5 ${listStyles.li}`}
              >
                <Blog
                  seq={el.seq}
                  title={el.title}
                  description={el.description}
                  postdate={el.postdate}
                  link={el.link}
                />
              </li>
            ))}
          {projectList &&
            projectList.map((el, index) => (
              <li
                key={el.seq || index}
                className={`list-group-item pb-5   ${listStyles.li}`}
              >
                <Project
                  seq={el.seq}
                  badgeList={el.badgeList}
                  title={el.title}
                  agency={el.agency}
                  startDate={el.startDate}
                  endDate={el.endDate}
                  about={el.about}
                  imgUrl={el.imgUrl}
                  webUrl={el.webUrl}
                  androidUrl={el.androidUrl}
                  iosUrl={el.iosUrl}
                />
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}

/** <Image
          priority
          src={Loading}
          height={32}
          width={32}
          alt="Follow us on Twitter"
        /> */
