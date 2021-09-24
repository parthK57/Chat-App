import React from "react";
import Navbar from "../components/navbar/Index";
import Posts from "../components/posts/index";
import Sidebar from "../components/sidebar/index";
import { Container, PostContainer, FeedContainer } from "../styles/Home";
import ShareBar from "../components/sharebar/index";
import FeedPosts from "../components/feedposts/index";

const Home = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Sidebar />
        <PostContainer>
          {/* <Posts /> */}
          <FeedContainer>
            <ShareBar />
            <FeedPosts />
          </FeedContainer>
        </PostContainer>
      </Container>
    </>
  );
};

export default Home;
