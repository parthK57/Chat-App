import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  width: 300px;
  height: 100vh;
  background-color: #e0e0e0;
  border-radius: 0 10px 0 0;
`;

export const FriendsContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 275px;
  height: 350px;
  margin-top: 40px;
  border-bottom: 1px solid #c4c4c4;
  /* align-items: center; */
  border-radius: 0 10px 0 0;
`;

export const GCContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 275px;
  height: 245px;
  margin-top: 30px;
  border-radius: 0 10px 0 0;
  border-bottom: 1px solid #c4c4c4;
  /* background-color: pink; */
`;

export const Text = styled.p`
  position: relative;
  left: 30px;
  top: 30px;
  font-size: 16px;
`;

export const TitleBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  position: relative;
  top: 20px;
`;
