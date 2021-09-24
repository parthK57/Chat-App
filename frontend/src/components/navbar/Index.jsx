import React from "react";
import {
  Container,
  LogoContainer,
  MiddleContainer,
  UtilityContainer,
  ProfileContainer,
  IconContainer,
  Input,
} from "./navbarElements";
import { RiGroup2Fill } from "react-icons/ri";
import { MdNotificationsActive } from "react-icons/md";
import { RiChat1Fill } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import { BsCode } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";

function Index() {
  return (
    <>
      <Container>
        <LogoContainer>
          The Social
          <RiGroup2Fill
            style={{
              fontSize: "30px",
              position: "relative",
              bottom: "2px",
              color: "#4285f4",
              cursor: "pointer",
            }}
          />
        </LogoContainer>
        <MiddleContainer>
          <Input type="text" />
          <BiSearch
            style={{
              fontSize: "30px",
              position: "relative",
              top: "3px",
              left: "60px",
              color: "#4285f4",
              cursor: "pointer",
            }}
          />
        </MiddleContainer>
        <UtilityContainer>
          <IconContainer>
            <BsCode
              style={{
                fontSize: "30px",
                position: "relative",
                bottom: "2px",
                color: "#4285f4",
                cursor: "pointer",
              }}
            />
            <RiChat1Fill
              style={{
                fontSize: "30px",
                position: "relative",
                bottom: "2px",
                color: "#4285f4",
                cursor: "pointer",
              }}
            />
            <MdNotificationsActive
              style={{
                fontSize: "30px",
                position: "relative",
                bottom: "2px",
                color: "#4285f4",
                cursor: "pointer",
              }}
            />
          </IconContainer>
        </UtilityContainer>
        <ProfileContainer>
          Gal Gadot{" "}
          <AiOutlineUser
            style={{
              position: "relative",
              left: "12px",
              cursor: "pointer",
            }}
          />
        </ProfileContainer>
      </Container>
    </>
  );
}

export default Index;
