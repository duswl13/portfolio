import MainContainer from "@/components/MainContainer";
import List from "@/components/List";
import Pagination from "@/components/Pagination";
import { NextPageContext } from "next";
import { MouseEvent } from "react";
import { useRouter } from "next/router";

interface blog {
  seq: number;
  title: string;
  description: string;
  postdate: string;
  link: string;
}

interface Props {
  blogList: blog[];
  paging: { total: number; start: number; display: number };
}

export async function getServerSideProps(context: NextPageContext) {
  try {
    const { query } = context;
    const searchPage = query.page || 1;
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DEV_URL}/api/blog?page=${searchPage}`
    );

    const { posts, paging } = await response.json();
    return {
      props: {
        blogList: posts,
        paging,
      },
    };
  } catch (error) {
    console.error("API 호출 중 오류:", error);
    return {
      props: {
        blogList: [],
        paging: {},
      },
    };
  }
}

export default function Index({ blogList, paging }: Props) {
  const router = useRouter();

  const handlePagingOnClick = (e: MouseEvent<HTMLElement>, isNext: boolean) => {
    e.preventDefault();
    const display: number = Number(paging.display);
    const start: number = Number(paging.start);

    const page = isNext ? start + display : start - display;

    if (page >= 1 && page <= paging.total) router.push(`/blog?page=${page}`);
  };

  return (
    <MainContainer
      title="개인 블로그"
      content="개발 기록 및 일상, 취미를 작성하고 있는 공간입니다."
    >
      <List blogList={blogList} />
      <Pagination
        display={paging.display}
        start={paging.start}
        total={paging.total}
        onClick={handlePagingOnClick}
      />
    </MainContainer>
  );
}
