import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  padding-bottom: 6%;
  column-count: 4;
  column-gap: 3em;
  height: 100%;
`;
const Items = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3em;
  cursor: pointer;
`;
const Figure = styled.div`
  display: inline-block;
  filter: grayscale(0.8);
  &:hover {
    filter: none;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;
const PhotoList = () => {
  const sample = [
    "https://cdn.pixabay.com/photo/2020/09/02/20/52/dock-5539524__340.jpg",
    "https://cdn.pixabay.com/photo/2021/02/03/13/54/cupcake-5978060__340.jpg",
    "https://cdn.pixabay.com/photo/2020/05/25/20/14/holland-iris-5220407__340.jpg",
    "https://cdn.pixabay.com/photo/2020/10/08/17/39/waves-5638587__340.jpg",
    "https://cdn.pixabay.com/photo/2019/01/30/11/17/zebra-3964360__340.jpg",
    "https://cdn.pixabay.com/photo/2021/02/01/13/37/cars-5970663__340.png",
    "https://cdn.pixabay.com/photo/2019/06/05/10/34/mimosa-4253396__340.jpg",
    "https://cdn.pixabay.com/photo/2020/08/04/14/42/sky-5463015__340.jpg",
    "https://cdn.pixabay.com/photo/2021/02/03/13/54/cupcake-5978060__340.jpg",
    "https://cdn.pixabay.com/photo/2020/01/09/01/00/the-eye-on-the-greek-4751572__340.png",
    "https://cdn.pixabay.com/photo/2021/01/30/12/19/couple-5963678__340.png",
    "https://cdn.pixabay.com/photo/2021/01/23/07/53/dogs-5941898__340.jpg",
    "https://cdn.pixabay.com/photo/2020/06/15/01/06/sunset-5299957__340.jpg",
  ];
  return (
    <>
      <h2>사진첩</h2>
      <Wrap>
        {sample.map((v, i) => {
          return (
            <Items key={i}>
              <Figure>
                <Image src={v} />
                <p>사진설명적기</p>
              </Figure>
            </Items>
          );
        })}
      </Wrap>
    </>
  );
};

export default PhotoList;