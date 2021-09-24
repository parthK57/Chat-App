import React from "react";
import {
  Container,
  FriendsContainer,
  Text,
  GCContainer,
  TitleBar,
} from "./sidebarElements";
import { BsDot } from "react-icons/bs";
import { TiGroup } from "react-icons/ti";

function Sidebar() {
  return (
    <>
      <Container>
        <FriendsContainer>
          <TitleBar>
            Currently Online{" "}
            <BsDot style={{ fontSize: "30px", color: "green" }} />
          </TitleBar>
          <Text>Ram</Text>
          <Text>Sham</Text>
          <Text>Gansham</Text>
          <Text>Gana</Text>
          <Text>Ganesh</Text>
          <Text>Julia Roberts</Text>
          <Text>Johny Depp</Text>
          <Text>Vin Diesel</Text>
          <Text>Vladmir Putin</Text>
          <Text>Jesica Castian</Text>
          <Text>Robert Downey Jr.</Text>
          <Text>Kate Upton</Text>
          <Text>Priya Bapat</Text>
          <Text>Umesh Kamat</Text>
        </FriendsContainer>
        <GCContainer>
          <TitleBar>
            Group/Community
            <TiGroup style={{ color: "#4285f4" }}/>
          </TitleBar>
          <Text>Ramayan</Text>
          <Text>Akatsuki</Text>
          <Text>Indian Army</Text>
          <Text>Bajrang Dal</Text>
          <Text>JNU</Text>
          <Text>BJP</Text>
        </GCContainer>
      </Container>
    </>
  );
}

export default Sidebar;
