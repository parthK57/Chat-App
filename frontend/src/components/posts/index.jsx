import React from "react";
import {
  MasterContainer,
  BtnPrev,
  Container,
  Header,
  EditContainer,
  MediaContainer,
  StatsContainer,
  LikesContainer,
  CommentsContainer,
  ShareContainer,
  BtnNext,
} from "./postsElements";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { AiOutlineComment } from "react-icons/ai";
import { RiShareForward2Line } from "react-icons/ri";

function Posts() {
  return (
    <>
      <MasterContainer>
        <BtnPrev>
          <FaAngleDoubleLeft />
        </BtnPrev>
        <Container>
          <Header>
            Header
            <EditContainer>
              <BsThreeDotsVertical />
            </EditContainer>
          </Header>
          <MediaContainer>MediaContainer</MediaContainer>
          <StatsContainer>
            <LikesContainer>
              <FcLike />
            </LikesContainer>
            <CommentsContainer>
              <AiOutlineComment />
            </CommentsContainer>
            <ShareContainer>
              <RiShareForward2Line />
            </ShareContainer>
          </StatsContainer>
        </Container>
        <BtnNext>
          <FaAngleDoubleRight />
        </BtnNext>
      </MasterContainer>
    </>
  );
}

export default Posts;
