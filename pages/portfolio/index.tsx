import MainContainer from "@/components/MainContainer";
import Portfolio from "@/components/Portfolio";

export default function BaseAbout() {
  return (
    <MainContainer
      title="포트폴리오"
      content="어떻게 포트폴리오 사이트를 구축했는지 설명합니다."
    >
      <Portfolio />
    </MainContainer>
  );
}
