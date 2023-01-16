import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  text-align: center;
  min-height: 36rem;
  padding: 3rem 1rem;
  margin: 3rem auto 6rem;
  background: #3e6958;
  color: #fed88d;
  flex-direction: column;
  gap: 10rem;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2em;
`;

const Description = styled.p`
  text-align: center;
  font-size: 1.5em;
`;

const MobileIndicator: React.FunctionComponent = () => {
  return (
    <>
      <Wrapper>
        <Title>모바일 전용 어플리케이션 입니다. 😂</Title>
        <Description>모바일 환경을 이용해주세요 👌</Description>
      </Wrapper>
    </>
  );
};

export default MobileIndicator;
