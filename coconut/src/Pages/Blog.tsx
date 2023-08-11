import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import { Bar, Container } from "./pages.style";
import { useRecoilState, useSetRecoilState } from "recoil";
import { displayBlogAtom, highestZIndexAtom } from "../atom";
import ErrorIcon from "../Components/ErrorIcon";

const Blog = () => {
  let [highestZIndex, setHighestZIndex] = useRecoilState(highestZIndexAtom);
  let [zIndex, setZIndex] = useState(0);
  const setIsdisplay = useSetRecoilState(displayBlogAtom);

  useEffect(() => {
    setZIndex(highestZIndex);
  }, []);

  const clickFront = (e: React.MouseEvent<HTMLDivElement>) => {
    if (highestZIndex >= zIndex) {
      setZIndex(highestZIndex++);
      setHighestZIndex(highestZIndex++);
    }
  };

  return (
    <Draggable
      bounds="parent"
      handle=".bar"
      defaultPosition={{ x: 300, y: 200 }}
    >
      <Container windowWidth={`${400}px`} onClick={clickFront} zIndex={zIndex}>
        <Bar className="bar">
          <p>Blog</p>
          <div
            onClick={() => {
              setIsdisplay(false);
            }}
          ></div>
        </Bar>
        <div>
          <span>Github : </span>
          <a href="https://github.com/HamsterStudent">
            https://github.com/HamsterStudent
          </a>
        </div>
        <div>
          <span>Blog : </span>
          <a href="https://hamsterstudent.github.io/">
            https://hamsterstudent.github.io/
          </a>
        </div>
        <ErrorIcon name={"css"} />
      </Container>
    </Draggable>
  );
};

export default Blog;
