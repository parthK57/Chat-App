import styled from "styled-components";

export const MasterContainer = styled.div`
  display: flex;
  width: 700px;
  height: 800px;
  align-items: center;
  justify-content: center;
  background-color: #e9e8e8;
  border-radius: 10px;
`;

export const BtnPrev = styled.div`
  font-size: 40px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 600px;
  border: 1px solid #c4c4c4;
  border-top: none;
  /* background: yellow; */
`;

export const Header = styled.div`
  font-size: 22px;
  height: 40px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #c4c4c4;
`;

export const EditContainer = styled.div`
  font-size: 20px;
  cursor: pointer;
`;
export const MediaContainer = styled.div`
  display: flex;
  position: relative;
  left: 50px;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background-color: pink;
`;
export const StatsContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  top: 10px;
  width: 800px;
  height: 50px;
  /* background-color: orchid; */
`;
export const LikesContainer = styled.div`
  font-size: 26px;
  position: relative;
  bottom: 3px;
  left: 10px;
`;
export const CommentsContainer = styled.div`
  font-size: 26px;
  position: relative;
  left: 14px;
`;
export const ShareContainer = styled.div`
  font-size: 26px;
  position: relative;
  left: 18px;
`;
export const BtnNext = styled.div`
  font-size: 40px;
`;
