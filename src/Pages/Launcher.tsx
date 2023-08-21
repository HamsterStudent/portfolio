import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Draggable from "react-draggable";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  displayLauncherAtom,
  highestZIndexAtom,
  windowDisplayAtom,
} from "../recoil/atom";

interface IContainer {
  zIndex: number;
  windowWidth?: string;
}
const Container = styled.div<IContainer>`
  width: ${(props) => props.windowWidth};
  height: auto;
  background-color: ${(props) => props.theme.windowBg};
  box-shadow: ${(props) => props.theme.windowShadow};
  margin: 0;
  box-sizing: content-box;
  position: absolute;
  z-index: ${(props) => props.zIndex};
  border: 0.7px solid;
  color: ${(props) => props.theme.textColor};
`;
const Bar = styled.div`
  width: 100%;
  height: 20px;
  padding-left: 5px;
  position: relative;
  div {
    width: 15px;
    height: 15px;
    border: solid 1px;
    top: 5px;
    right: 6px;
    position: absolute;
  }
`;
const ContentsWrap = styled.section``;

const LauncherContainer = styled(Container)<ILauncher>`
  width: 600px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: solid 0.7px;
  box-sizing: border-box;
`;
const ContentWrap = styled.section`
  width: 100%;
  height: auto;
  img {
    width: 100%;
    object-fit: contain;
  }
`;
const ImageWrap = styled.div`
  width: 98.2%;
  margin-bottom: 10px;
  margin: 5px;
  img {
    border: solid 1px;
    box-sizing: border-box;
  }
`;
const QuickBtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  border-top: solid 1px;
  div {
    width: 16.6%;
    border-right: dotted 0.7px;
    p {
      text-align: center;
    }
  }
`;

interface ILauncher {
  zIndex?: number;
}

function Launcher() {
  const dragRef = useRef<HTMLDivElement>(null);
  const [icons, setIcons] = useState<any>([]);
  const setIsdisplay = useSetRecoilState(displayLauncherAtom);

  let [highestZIndex, setHighestZIndex] = useRecoilState(highestZIndexAtom);
  let [zIndex, setZIndex] = useState(0);

  const setIsDisplay = useSetRecoilState(windowDisplayAtom);

  useEffect(() => {
    setIcons(["resume", "Coding", "Project", "Tools", "Blog", "About"]);
  }, []);

  const onClick = (e: any) => {
    const clickIconText = e.currentTarget.innerText;
    if (clickIconText === "resume") {
      setIsDisplay((cur) => {
        return { ...cur, Resume: true };
      });
    } else if (clickIconText === "Coding") {
      setIsDisplay((cur) => {
        return { ...cur, Coding: true };
      });
    } else if (clickIconText === "Blog") {
      setIsDisplay((cur) => {
        return { ...cur, Blog: true };
      });
    } else if (clickIconText === "Tools") {
      setIsDisplay((cur) => {
        return { ...cur, Tools: true };
      });
    }
    console.log(e.currentTarget.innerText);
  };
  const clickFront = (e: React.MouseEvent<HTMLDivElement>) => {
    if (highestZIndex >= zIndex) {
      setZIndex(highestZIndex++);
      setHighestZIndex(highestZIndex++);
    }
  };

  return (
    <Draggable
      nodeRef={dragRef}
      bounds="parent"
      handle=".bar"
      defaultPosition={{ x: -300, y: -310 }}
    >
      <LauncherContainer ref={dragRef} className="container" zIndex={zIndex}>
        <Bar className="bar" onClick={clickFront}>
          Launcher
          <div
            onClick={() => {
              setIsdisplay(false);
            }}
          ></div>
        </Bar>
        <ContentWrap>
          <ImageWrap>
            <img src="img/temp.jpg" alt="temp" />
          </ImageWrap>
          <QuickBtnWrap>
            {icons.map((icon: any) => (
              <div
                key={icon}
                onClick={(e) => {
                  onClick(e);
                }}
              >
                <img src={`img/${icon}.gif`} alt="" />
                <p>{icon}</p>
              </div>
            ))}
          </QuickBtnWrap>
        </ContentWrap>
      </LauncherContainer>
    </Draggable>
  );
}

export default Launcher;