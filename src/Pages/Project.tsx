import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ModalWindow from "../Components/ModalWindow";
import { useSetRecoilState } from "recoil";
import { windowDisplayAtom } from "../recoil/atom";
import Sticker from "../Components/Sticker";
import { useMediaQuery } from "react-responsive";
interface IDisplay {
  isDesktop: boolean;
}

const CodingWrap = styled.section<IDisplay>`
  height: ${(props) => (props.isDesktop ? "auto" : "580px")};
  padding: 5px;
  font-size: 14px;
  border: solid 1px;
  margin: 5px;
  /* display: flex; */
  justify-content: space-between;
  h2 {
    font-size: 22px;
    padding: 10px 0;
    /* border-bottom: solid 1px; */
  }
`;

const CardWrap = styled.ul<IDisplay>`
  width: 60%;
  height: 350px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  overflow-y: scroll;
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
  border: solid 0.7px;
  padding: 5px;
  p {
    margin: 10px 0;
    color: ${(props) => props.theme.textColor};
  }
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;
const Card = styled.li`
  width: 100%;
  border: solid 0.7px;
  padding: 5px;
  margin-bottom: 5px;
  word-break: keep-all;
  :hover {
    border: solid 0.7px white;
  }

  a {
    border: dotted 0.7px;
    padding: 3px 5px;
    margin-right: 5px;
    border-radius: 5px;
  }
`;

const ImageSection = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  border: solid 0.7px;
  box-sizing: border-box;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-sizing: content-box;
  }
`;

const ChooseProject = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  .active {
    border: solid 0.7px white;
  }
`;

const InfoWrap = styled.div<IDisplay>`
  width: 37.5%;
  width: ${(props) => (props.isDesktop ? "37.5%" : "50%")};

  height: 342px;
  overflow-y: scroll;
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(129, 129, 129) -2px -2px, rgb(129, 129, 129) -2px 0px,
    rgb(129, 129, 129) 0px -2px, black -3px -3px, black -3px 0px, black 0px -3px,
    rgb(224, 222, 222) 2px 2px, rgb(224, 222, 222) 0px 2px,
    rgb(224, 222, 222) 2px 0px, rgb(129, 129, 129) 2px -2px,
    rgb(224, 222, 222) -2px 2px, black -3px 2px, white -3px 4px, white 4px 4px,
    white 4px 0px, white 0px 4px, black 2px -3px, white 4px -3px;
  box-sizing: border-box;
  padding: 5px 15px;
  margin-top: 3px;
  margin-right: 5px;

  h2 {
    font: 600 18px "galmuri11";
  }
  p {
    margin: 10px 0;
    font: 400 16px;
  }
  ul {
    li {
      display: inline-block;
      margin-right: 5px;
      margin-bottom: 5px;
    }
  }
  a {
    display: inline-block;
    border: solid 0.7px;
    padding: 2px 5px;
    margin-right: 5px;
    margin-bottom: 5px;
    :hover {
      background-color: ${(props) => props.theme.backgroundColor};
      color: ${(props) => props.theme.invertTextColor};
    }
  }
`;

const LogList = styled.div`
  li {
    :hover {
      color: #aaaaaa;
      cursor: pointer;
    }
  }
`;

interface IData {
  title: string;
  describe: string;
  tags: string[];
  postComponent?: { [key: string]: string }[];
  Demo?: string;
  Github?: string;
  Notion?: string;
  projectImg: string;
}

const data: IData[] = [
  {
    title: "Portfolio",
    describe: "포트폴리오 웹사이트",
    tags: ["React", "TypeScript", "Recoil", "styled-components"],
    Notion:
      "https://respected-honey-7eb.notion.site/c6b75d5e4dd340f8a237dc4e8f5c7eee?pvs=4",
    projectImg: "assets/coding/portfolio.png",
  },
  {
    title: "Guard Tips",
    describe: "안전에 관한 유용한 조언과 팁을 제공하는 서비스",
    tags: ["React", "TypeScript", "Router", "styled-components"],
    postComponent: [{ name: "[react + vercel] Proxy 설정", post: "ProxyPost" }],
    Demo: "https://guard-tips.vercel.app/",
    Github: "https://github.com/potenday-project/GuardTips",
    Notion:
      "https://shahn92.notion.site/GuardTips-2c4734253ee54304b954080d6cdae770?pvs=4",
    projectImg: "assets/coding/guardtips.png",
  },
  {
    title: "Name Sticker",
    describe: "네임스티커를 출력할 수 있는 웹사이트",
    tags: ["React", "TypeScript", "styled-components"],
    postComponent: [
      { name: "세션에 데이터 저장하기", post: "SessionPost" },
      { name: "갯수에 맞춰 스티커 생성하기", post: "MapRefact" },
    ],
    Demo: "https://name-sticker-i5fmwei8c-hamsterstudent.vercel.app/",
    Github: "https://github.com/HamsterStudent/name-sticker",
    projectImg: "assets/coding/sticker.png",
  },
  {
    title: "Designer Portfolio",
    describe: "반응형으로 제작한 모션디자이너 포트폴리오 웹사이트",
    tags: ["HTML", "CSS", "JavavScirpt"],

    Demo: "https://mika7174.github.io/Nomad.github.io/",
    Github: "https://github.com/mika7174/Nomad.github.io",
    projectImg: "assets/coding/mika_portfolio.png",
  },
  {
    title: "Pfizer",
    describe: "국내 화이자 메인 페이지 리디자인",
    tags: ["HTML", "SASS", "JavavScirpt"],

    Demo: "https://hamsterstudent.github.io/pfizer-web/",
    Github: "https://github.com/HamsterStudent/pfizer-web",
    projectImg: "assets/coding/pf.png",
  },
];

const Project = () => {
  const stickerName = "react";

  const [image, setImage] = useState(`${data[0].projectImg}`);
  const setIsDisplay = useSetRecoilState(windowDisplayAtom);
  const [tags, setTags] = useState<IData>();
  const [curname, setCurname] = useState("");
  const [curImg, setCurImg] = useState("assets/blank_project.png");

  const isDesktop = useMediaQuery({
    query: "(min-width : 700px) and (max-width :1920px)",
  });

  const onClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const {
      currentTarget: { children },
    } = e;
    const found = data.find(
      (e) => e.title === children[0].children[0].innerHTML,
    );
    if (!found) return;
    setTags(found);
    setCurname(children[0].children[0].innerHTML);
    if (isDesktop) {
      setCurImg(image);
    } else {
      setImage(found.projectImg);
    }
  };
  return (
    <ModalWindow
      width={isDesktop ? "600px" : "100%"}
      windowName="Project"
      defaultPosition={{ x: 200, y: 100 }}
      isDesktop={isDesktop}
    >
      <CodingWrap isDesktop={isDesktop}>
        <ImageSection>
          <img src={image} alt={curname} />
        </ImageSection>
        <ChooseProject>
          <CardWrap isDesktop={isDesktop}>
            {data.map((data) => {
              return (
                <Card
                  key={data.title}
                  onMouseEnter={() => {
                    setImage(data.projectImg);
                  }}
                  onMouseLeave={() => {
                    setImage(curImg);
                  }}
                  onClick={(e) => {
                    onClick(e);
                  }}
                  className={curname === data.title ? "active" : undefined}
                >
                  <div>
                    <p>{data.title}</p>
                    {/* {isDesktop ? <p>{data.describe}</p> : null} */}
                    <p>{data.describe}</p>
                  </div>
                </Card>
              );
            })}
          </CardWrap>
          <InfoWrap isDesktop={isDesktop}>
            {tags ? (
              <div>
                <h2>{tags.title}</h2>
                <ul>
                  <p>USING TOOLS</p>
                  {tags?.tags.map((x) => {
                    return <li key={x}>▪︎ {x}</li>;
                  })}
                </ul>
                <div>
                  {tags?.Demo || tags?.Github || tags?.Notion ? (
                    <p>CODE</p>
                  ) : null}
                  {tags?.Demo ? (
                    <a
                      href={tags.Demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                  ) : null}

                  {tags?.Github ? (
                    <a
                      href={tags.Github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </a>
                  ) : null}

                  {tags?.Notion ? (
                    <a
                      href={tags.Notion}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Notion
                    </a>
                  ) : null}
                </div>
                <div>
                  {tags.postComponent ? (
                    <LogList>
                      <p>LOG</p>
                      <ul>
                        {tags.postComponent.map((x, index) => {
                          return (
                            <li
                              key={x.post}
                              onClick={() => {
                                setIsDisplay((cur) => {
                                  return { ...cur, [x.post]: true };
                                });
                              }}
                            >
                              ▪︎ {x.name}
                            </li>
                          );
                        })}
                      </ul>
                    </LogList>
                  ) : null}
                </div>
              </div>
            ) : (
              <div>Select Project</div>
            )}
          </InfoWrap>
        </ChooseProject>
      </CodingWrap>
      <Sticker
        name={stickerName}
        width={100}
        defaultPosition={isDesktop ? { x: 350, y: 400 } : { x: 200, y: 400 }}
      />
    </ModalWindow>
  );
};

export default Project;
