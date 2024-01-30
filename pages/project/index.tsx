import MainContainer from "@/components/MainContainer";
import List from "@/components/List";
import dbConnect from "@/db/dbConnect";
import Project from "@/db/models/Project";

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

interface Props {
  projectList: project[];
}

export async function getServerSideProps() {
  await dbConnect();
  const projects = await Project.find();
  return {
    props: {
      projectList: JSON.parse(JSON.stringify(projects)),
    },
  };
}

export default function Index({ projectList }: Props) {
  return (
    <MainContainer
      title="경험한 프로젝트"
      content="KOSA 소프트웨어기술자 경력을 기준으로 경험한 프로젝트 입니다."
    >
      <List projectList={projectList} />
    </MainContainer>
  );
}
