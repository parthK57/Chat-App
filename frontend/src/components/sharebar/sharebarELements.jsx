import styled from "styled-components";

export const TitleBar = styled.div`
  display: flex;
  position: relative;
  right: 2px;
  width: 100%;
  height: 50px;
  align-items: center;
  font-size: 22px;
  background-color: #bdbcbc;
  /* border-bottom: 2px solid #4285f4; */
  /* border-top: 2px solid #4285f4; */
  border-left: 2px solid #4285f4;
  border-right: 2px solid #4285f4;
  /* color: white; */
  font-weight: 500;
  /* border-bottom: 2px solid white;
  border-top: 2px solid white; */
`;

export const TextField = styled.div`
  display: flex;
  background-color: #dedede;
  font-size: 16px;  
  justify-content: flex-start;
  width: 100%;
  height: 150px;
  /* border-left: 2px solid #c4c4c4;
  border-right: 2px solid #c4c4c4; */
`;

export const AttachmentBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  width: 100%;
  height: 50px;
  background-color: #bdbcbc;
  border-bottom: 1px solid white;
  /* border-left: 2px solid #c4c4c4;
  border-right: 2px solid #c4c4c4; */
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  left: 15px;
`;
export const IconBarRight = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  right: 15px;
`;

export const IconBarLeft = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  left: 15px;
`;

export const Container = styled.div`
display: flex;
flex-direction: column;
width: 850px;
/* box-shadow: 5px 5px 10px 1px #7d7d7d; */
`;
