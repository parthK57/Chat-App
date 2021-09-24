import React from "react";
import {
  FeedContainer,
  TitleBar,
  Text,
  MediaContainer,
  PostStatus,
  LikesContainer,
  CommentsContainer,
  ShareContainer,
  IconsContainer,
} from "./feedPostsElements";
import { FcLike } from "react-icons/fc";
import { AiOutlineComment } from "react-icons/ai";
import {
  RiShareForward2Line,
  RiGitRepositoryPrivateFill,
} from "react-icons/ri";
import { FaGlobeAmericas } from "react-icons/fa";
import Gal from "../../assets/GAL.jpg";

function FeedPosts() {
  return (
    <>
      <FeedContainer>
        <TitleBar>
          <Text>
            Gal Gadot{" "}
            <FaGlobeAmericas
              style={{ fontSize: "16px", position: "relative", left: "15px" }}
            />
            {/* <RiGitRepositoryPrivateFill
              style={{ fontSize: "16px", position: "relative", left: "15px" }}
            /> */}
          </Text>
        </TitleBar>
        <MediaContainer>
          <img src={Gal} alt="kjasf" />
        </MediaContainer>
        <PostStatus>
          <IconsContainer>
            <LikesContainer>
              <FcLike />
            </LikesContainer>
            <CommentsContainer>
              <AiOutlineComment />
            </CommentsContainer>
            <ShareContainer>
              <RiShareForward2Line />
            </ShareContainer>
          </IconsContainer>
        </PostStatus>
      </FeedContainer>
    </>
  );
}

export default FeedPosts;
