import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

interface blog {
  seq?: number;
  title: string;
  description: string;
  postdate: string;
  link: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const start = req.query.page || 1;
  const display = Number(process.env.NEXT_PUBLIC_DISPLAY);

  switch (req.method) {
    case "GET":
      try {
        const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
        const clientSecret = process.env.NEXT_PUBLIC_CLIENT_SECRET;

        const blogResponse = await axios.get(
          "https://openapi.naver.com/v1/search/blog.json",
          {
            params: {
              query: "연찌현찌의블로그",
              display,
              start,
              sort: "date",
            },
            headers: {
              "X-Naver-Client-Id": `${clientId}`,
              "X-Naver-Client-Secret": `${clientSecret}`,
            },
          }
        );

        console.log(blogResponse.data);
        res.status(blogResponse?.status);

        if (blogResponse?.status === 200) {
          const data = blogResponse.data;
          const { total, start, items } = data;
          res.send({
            posts: items?.map((el: blog, index: number) => {
              el.seq = index;
              el.postdate = formatDate(el.postdate);
              return el;
            }),
            paging: { total, start, display },
          });
        }
      } catch (error) {
        res
          .status(400)
          .send("네이버 블로그 데이터를 가져오는 중 오류가 발생했습니다.");
        console.error(
          "네이버 블로그 데이터를 가져오는 중 오류가 발생했습니다:",
          error
        );
      }
      break;
  }
}

// 날짜 문자열 포맷팅 함수
const formatDate = (inputDate: string): string => {
  // '20140101' 형식의 문자열을 'YYYY-MM-DD' 형식으로 변환
  const year = inputDate.substring(0, 4);
  const month = inputDate.substring(4, 6);
  const day = inputDate.substring(6, 8);
  return `${year}-${month}-${day}`;
};
