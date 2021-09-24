import styled from "styled-components";

export const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 600px;
  /* background-color: yellow; */
  position: relative;
  top: 50px;
  align-items: center;
  border-right: 1px solid white;
  border-left: 1px solid white;
  border-radius: 0 14px 14px 0;
`;

export const TitleBar = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  background-color: #e0e0e0;
  border-radius: 0 14px 0px 0;
  align-items: center;
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  left: 20px;
  font-size: 18px;
  font-weight: 500;
`;

export const MediaContainer = styled.div`
  width: 530px;
  height: 530px;
`;

export const PostStatus = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 30px;
  font-size: 24px;
  justify-content: flex-start;
`;

export const LikesContainer = styled.div`
  position: relative;
  bottom: 2px;
`;

export const CommentsContainer = styled.div`
  position: relative;
  left: 4px;
`;

export const ShareContainer = styled.div`
  position: relative;
  left: 8px;
`;

export const IconsContainer = styled.div`
  display: flex;
  position: relative;
  left: 20px;
  top: 5px;
`;
