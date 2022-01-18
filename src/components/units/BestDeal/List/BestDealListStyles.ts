import styled from "@emotion/styled";
import theme from "../../../../commons/styles/variables";

export const Title = styled.h2`
  font-size: ${theme.fontsize.fs35};
  font-weight: 500;
  line-height: 52px;
  text-align: center;
  /* border: 1px solid; */
  @media screen and ${theme.tablet} {
    font-size: ${theme.fontsize.fs24};
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  margin-top: 70px;
`;

export const NavigationList = styled.ul`
  width: 100%;
  margin-top: 115px;
  /* border: 1px solid; */

  li {
    display: inline-block;
    margin-right: 50px;
    padding: 10px 0;

    button {
      position: relative;
      font-size: 1.25rem;

      &::after {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 0%;
        height: 2px;
        background-color: black;
        transition: 0.5s;
      }

      &:hover {
        &::after {
          width: 100%;
        }
      }
    }
  }
`;
export const BestProductWrapper = styled.ul`
  margin: 0 -10px;

  @media all and (min-width: 767px) {
    .slick-track {
      width: 100% !important;
    }
  }
`;
export const ProductWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  margin: 0 -10px;
`;
export const ProductItem = styled.li`
  width: 25%;
  height: 375px;
  padding: 10px;

  @media all and ${theme.laptop} {
    width: 33%;
    margin-bottom: ${theme.MarginBottom.mb30};
  }

  @media all and ${theme.tablet} {
    width: 50%;
    margin-bottom: ${theme.MarginBottom.mb30};
  }

  @media all and ${theme.mobile} {
    width: 100%;
    margin-bottom: ${theme.MarginBottom.mb30};
  }
`;
export const ItemWrapper = styled.figure`
  width: 100%;
  background-color: #dddddd;
`;
export const ImgWrapper = styled.p`
  width: 100%;
`;
export const ProductImg = styled.img`
  width: 100%;
  height: 240px;
`;
export const ProductTextBox = styled.figcaption`
  width: 100%;
  height: 135px;
  padding-left: 14px;
  h4 {
    height: 23px;
    margin-top: 14px;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
  }
  p {
    display: block;
    height: 23px;
    margin-top: 14px;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
  }
`;
export const ProductTagsWrapper = styled.div`
  height: 25px;
  margin-top: 14px;
  /* background-color: #c4c4c4;
  border-radius: 30px; */
`;
export const ProductTags = styled.span`
  width: 50px;
  height: 23px;
  margin-right: 10px;
  padding: 5px 10px;
  border-radius: 30px;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  background-color: #c4c4c4;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 90px;
  justify-content: center;
`;
export const MoreButton = styled.button`
  width: 180px;
  height: 50px;

  /* border: 1px solid; */
`;
