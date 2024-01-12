import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import ModalWindow from "../shared/components/ModalWindow";
import Sticker from "../shared/components/Sticker";
import { useMediaQuery } from "react-responsive";

interface IDisplay {
  isDesktop: boolean;
}

const ContentWrap = styled.section<IDisplay>`
  height: ${(props) => (props.isDesktop ? "auto" : "80vh")};
  overflow-y: ${(props) => (props.isDesktop ? "none" : "scroll")};
  /* width: 100%; */
  font-size: 14px;
  border: solid 1px;
  padding: 20px;
  margin: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  box-shadow: #f0f0f042 1px 1px inset;
  h2 {
    font-size: 22px;
    padding: 10px 0;
    border-bottom: solid 1px;
    color: ${(props) => props.theme.textColor};
  }
  p {
    margin: 10px 0;
    color: ${(props) => props.theme.textColor};
  }
`;

const ImageWrap = styled.div<IDisplay>`
  width: ${(props) => (props.isDesktop ? "301px" : "100%")};
  height: ${(props) => (props.isDesktop ? "203px" : "auto")};
  margin-bottom: 10px;
  position: relative;
  img {
    width: 100%;
    object-fit: contain;
    border: solid 1px;
    box-sizing: content-box;
  }
  .overlay {
    width: 100%;
    height: 100%;
    background: url("assets/dot.png");
    background-size: 2px 2px;
    position: absolute;
    top: 0;
    opacity: 0.5;
  }
`;

const ContentBox = styled.div<IDisplay>`
  line-height: 20px;
  .imageWrap {
    width: 30px;
    height: 30px;
    margin-top: 5px;
    img {
      width: 100%;
      object-fit: contain;
    }
  }
  :nth-child(1) {
    width: 38%;
    width: ${(props) => (props.isDesktop ? "38%" : "100%")};
  }
  :nth-child(2) {
    width: 60%;
    width: ${(props) => (props.isDesktop ? "60%" : "100%")};
    margin-right: 0;
  }
  h3 {
    font-size: 16px;
    font-weight: 400;
    color: ${(props) => props.theme.textColor};
  }
  p {
    /* text-indent: 5px; */
    font-size: 14px;
    word-break: keep-all;
    color: ${(props) => props.theme.textColor};
  }
  a {
    :hover {
      color: #e4e4e4;
    }
  }
  div {
  }
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    width: 49.5%;
  }
  .education {
    margin: 10px 0;
    p {
      margin: 0;
    }
    h3 {
      font-weight: 700;
      margin: 5px 0;
    }
    li {
      font-size: 12px;
      color: ${(props) => props.theme.textColor};
    }
  }
`;

const SkillSetWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 10px;
  box-sizing: border-box;
  div {
    width: 30px;
  }
  img {
    width: 100%;
    object-fit: contain;
  }
  h3 {
  }
`;

const ResumeWrap = styled.div`
  display: flex;
  div {
    margin-right: 30px;
  }
`;

function Resume() {
  const stickerName = "javascript";

  const isDesktop = useMediaQuery({
    query: "(min-width : 700px) and (max-width :1920px)",
  });

  return (
    <ModalWindow
      width={isDesktop ? "850px" : "100%"}
      windowName="Resume"
      defaultPosition={{ x: 30, y: 50 }}
      isDesktop={isDesktop}
    >
      <ContentWrap isDesktop={isDesktop}>
        <ContentBox isDesktop={isDesktop}>
          <ImageWrap isDesktop={isDesktop}>
            <img src="assets/profile.jpg" alt="" />
            <div className="overlay" data-overlay></div>
          </ImageWrap>
          <h2>엄진주 | JINJU UM</h2>
          <p>1996.03.25</p>
          <p>
            웹의 기획부터 디자인, 코드를 사용해 시각적으로 구현해내는 것에
            관심이 있음.
          </p>
          <p>
            시작한 일은 끝을 봐야 속이 시원한 사람. 다방면으로 아끼는 걸
            좋아하는 사람
          </p>
          <h2>Contact</h2>
          <p>
            <a href="mailto:deerinmymind@gmail.com">deerinmymind@gmail.com</a>
          </p>
          <h2>Resume</h2>
          <ResumeWrap>
            <a href="assets/resume.pdf" download="엄진주_이력서">
              <div className="imageWrap">
                <img src="assets/pdf.png" alt="" />
              </div>
            </a>
            <a
              href="https://respected-honey-7eb.notion.site/8f80be93ee194cff9a99b188a1c6651f?pvs=4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="imageWrap">
                <img src="assets/skill/notion.png" alt="" />
              </div>
            </a>
          </ResumeWrap>
        </ContentBox>
        <ContentBox isDesktop={isDesktop}>
          <h2>Education</h2>
          <FlexBox>
            <div className="education">
              <p>2016.03 - 2020.02</p>
              <h3>한성대학교</h3>
              <ul>
                <li>주전공 : 서양화과</li>
                <li>복수전공 : 융복합디자인학과</li>
              </ul>
            </div>
            <div className="education">
              <p>2020.08 - 2021.01</p>
              <h3>그린컴퓨터아카데미</h3>
              <ul>
                <li>프론트엔드 웹퍼블리셔 양성과정 수료</li>
              </ul>
            </div>
          </FlexBox>

          <h2>Win the award</h2>
          <p>2019</p>
          <h3>제주 지역 문제해결 디지털 사회혁신 아이디어 경진대회</h3>
          <p>
            제주 테크노파크와 제주 특별자치도에서 주최한
            <br />
            제주 지역 문제해결 디지털 사회혁신 아이디어 경진대회 입선
          </p>

          <h2>Skill Set</h2>

          <SkillSetWrap>
            <h3>Javascript library</h3>
            <div>
              <img src="assets/skill/React.png" alt="" />
            </div>
          </SkillSetWrap>

          <SkillSetWrap>
            <h3>Languages</h3>
            <div>
              <img src="assets/skill/TypeScript.png" alt="" />
            </div>
            <div>
              <img src="assets/skill/Javascript.png" alt="" />
            </div>
            <div>
              <img src="assets/skill/Dart.png" alt="" />
            </div>
            <div>
              <img src="assets/skill/Flutter.png" alt="" />
            </div>
            <div>
              <img src="assets/skill/c.png" alt="" />
            </div>
          </SkillSetWrap>

          <SkillSetWrap>
            <h3>Markup & Style sheet</h3>
            <div>
              <img src="assets/skill/html.png" alt="" />
            </div>
            <div>
              <img src="assets/skill/css.png" alt="" />
            </div>
          </SkillSetWrap>

          <SkillSetWrap>
            <h3>API & Git & Testing</h3>
            <div>
              <img src="assets/skill/GraphQL.png" alt="" />
            </div>
            <div>
              <img src="assets/skill/git.png" alt="" />
            </div>
            <div>
              <img src="assets/skill/Firebase.png" alt="" />
            </div>
            <div>
              <img src="assets/skill/Jest.png" alt="" />
            </div>
          </SkillSetWrap>
        </ContentBox>
      </ContentWrap>
      <Sticker
        name={stickerName}
        width={100}
        defaultPosition={{ x: 350, y: 120 }}
      />
    </ModalWindow>
  );
}

export default Resume;
