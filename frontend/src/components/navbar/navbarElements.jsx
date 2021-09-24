import styled from "styled-components";
// import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 65px;
  background-color: #d1d1d1;
  display: flex;
  font-size: 17px;
`;

export const LogoContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  font-size: 30px;
  font-weight: 500;
  position: relative;
  left: 15px;
`;

export const MiddleContainer = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  border-right: 2px solid #c4c4c4;
`;

export const UtilityContainer = styled.div`
  flex: 2;
  display: flex;
  align-items: center;

  /* background-color: grey; */
`;

export const ProfileContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  font-size: 20px;
  position:relative;
  left: 60px;
`;

export const IconContainer = styled.div`
  display: flex;
  position: relative;
  left: 200px;
  width: 170px;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  /* border-right: 2px solid #c4c4c4; */
  /* background-color: pink; */
`;

export const Input = styled.input`
  height: 35px;
  width: 650px;
  /* border-radius: 5px; */
  justify-content: center;
  display: inline-block;
  border: none;
  border-bottom: 2px solid #4285f4;
  outline: none;
  font-size: 16px;
  background-color: #d1d1d1;
  position: relative;
  left: 40px;
`;
