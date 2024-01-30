import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import dracula from "react-syntax-highlighter/dist/cjs/styles/prism/dracula";
import Project from "./Project";
const dedent = (strs: TemplateStringsArray, ...values: any[]): string => {
  const str = strs
    .reduce((s, part, i) => s + values[i - 1] + part)
    .replace(/^\n/, "");
  const level = str.length - str.replace(/^ +/, "").length;
  return str
    .split("\n")
    .map((line) => line.slice(level))
    .join("\n");
};

export default function portfolio() {
  return (
    <div className="container">
      <Project
        seq={1}
        badgeList={`react, next, typescript, bootstrap, vercel, mongoDB`}
        title="2024-02-01 기준 포트폴리오"
        agency=""
        startDate="2024.01.20"
        endDate="2024.01.31"
        about="프론트엔드 분야로 관심이 생겼고, 혼자서 React, Next, Typescript를 공부하였습니다. 공부한 내용을 포트폴리오에 적용하면 좋겠다는 생각이 들어 포트폴리오 개편작업을 하였습니다."
        imgUrl="/img/portfolio/portfolio1.png"
        webUrl={process.env.NEXT_PUBLIC_DEV_URL}
        imgClass="shadow"
        githubUrl="https://github.com/duswl13/portfolio"
      />
      <div className="d-flex align-items-center mt-5 mb-3">
        <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-5 me-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-code-slash"
            viewBox="0 0 16 16"
          >
            <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
          </svg>
        </div>
        <h5 className="fw-bolder mb-0">
          <span className="text-gradient d-inline text-uppercase">
            소스 코드
          </span>
        </h5>
      </div>

      <div className="bg-light rounded-4">
        <p>
          네이버 블로그 검색 API를 사용하여 내 블로그의 글을 가지고 오는
          부분입니다. 기존에는 티스토리 블로그 검색 API를 사용하였는데, 티스토리
          블로그 검색 API가 제공 종료 예정이라고 하여 네이버 블로그 검색 API를
          사용하여 작업하였습니다.
        </p>
        <SyntaxHighlighter language="jsx" style={dracula}>
          {dedent`
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
                            "X-Naver-Client-Id": clientId,
                            "X-Naver-Client-Secret": clientSecret,
                          },
                        }
                      );
                 
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
                      `}
        </SyntaxHighlighter>
        <p className="my-3">
          소개 및 프로젝트 부분을 몽고디비를 사용하여 불러오게끔 만들었습니다.
          아래는 소개의 히스토리 스키마를 정의하고, 히스토리 데이터를 불러오는
          부분입니다.
        </p>
        <SyntaxHighlighter language="jsx" style={dracula}>
          {dedent`import mongoose from "mongoose";

// 달 스키마 정의
const dataSchema = new mongoose.Schema({
  months: {
    type: Number,
    required: true,
  },
  list: {
    type: [String],
    default: [],
  },
});

// 연도 스키마 정의
const yearSchema = new mongoose.Schema({
  year: {
    type: Number,
    required: true,
  },
  data: {
    type: [dataSchema],
    default: [],
  },
});

const History =
  mongoose.models["History"] || mongoose.model("History", yearSchema);

export default History;
`}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={dracula}>
          {dedent`export async function getServerSideProps() {
  await dbConnect();
  const skills = await Skill.find();
  const historys = await History.find();
  return {
    props: {
      skillList: JSON.parse(JSON.stringify(skills)),
      historyList: JSON.parse(JSON.stringify(historys)),
    },
  };
}`}
        </SyntaxHighlighter>
      </div>
      <div className="my-5">
        <div className="py-5">
          <Project
            seq={2}
            badgeList={`spring boot, thymeleaf, bootstrap, jquery, aws ec2`}
            title="~2024-01-31 기준 포트폴리오"
            agency=""
            startDate="2022.10.12"
            endDate="2022.10.17"
            about="Bootstrap4 템플릿을 구매하여 만든 포트폴리오입니다. 한 페이지로 구성되어있고 구매한 템플릿이다보니 하고싶은대로 표현이 안되어 답답함을 느꼈었습니다. 개편한 포트폴리오에서는 템플릿 구매 없이 직접 작업하였습니다."
            imgUrl="/img/portfolio/portfolio2.png"
            webUrl="https://jyj-portfolio.com"
            androidUrl=""
            iosUrl=""
            imgClass=""
            githubUrl="https://github.com/duswl13/portpolio"
          />
          <div className="d-flex align-items-center mb-3">
            <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-5 me-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-code-slash"
                viewBox="0 0 16 16"
              >
                <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
              </svg>
            </div>
            <h5 className="fw-bolder mb-0">
              <span className="text-gradient d-inline text-uppercase">
                소스 코드
              </span>
            </h5>
          </div>

          <div className="bg-light rounded-4">
            <p>
              이메일 보내기 기능입니다. JavaMailSender 를 사용하여 구현하였고,
              포트폴리오를 통해 들어온 메일이라는 것을 구분하기위해 제목 및
              내용을 통일하여 받게끔 하드코딩해놓았습니다.
            </p>
            <SyntaxHighlighter language="java" style={dracula}>
              {dedent`
                 
                 @Override
                 public boolean sendEmail(String email, String content) throws Exception {
               
                   MimeMessage m = emailSender.createMimeMessage();
                   MimeMessageHelper h = new MimeMessageHelper(m, "UTF-8");
                   h.setFrom(from);
                   h.setTo(from);
                   h.setSubject("[포트폴리오]를 통해 들어온 이메일 문의");
                   h.setText("회신을 원하는 이메일 주소:" + email + "\n\n" + content);
                   emailSender.send(m);
                   
                   LOGGER.info("sendEmail success -- "+ email + "," + content);
               
                   return true;
                 }
                      `}
            </SyntaxHighlighter>
            <p className="my-3"></p>
            <SyntaxHighlighter language="javascript" style={dracula}>
              {dedent`
                     function sendEmail() {
	
                      var form = $("#contactForm").serialize();
                            
                        $.ajax({
                            url: "/sendMail",
                            data: form,
                            type:"POST",
                        }).done(function (fragment) {
                      
                        if(fragment){
                          $("#contactForm").find("[name=email]").val('');
                          $("#contactForm").find("[name=message]").val('');
                          
                          $("#btn_sendEmail").find('span').text('완료');
                          $("#btn_sendEmail").removeClass('three');
                          $("#btn_sendEmail").addClass('banner-btn');
                          
                          setTimeout(() => {	
                            $("#btn_sendEmail").find('span').text('');
                            $("#btn_sendEmail").removeClass('banner-btn');
                            $("#btn_sendEmail").addClass('three');}, 5000);
                          
                        }
                        });
                    }
                     `}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
  );
}
