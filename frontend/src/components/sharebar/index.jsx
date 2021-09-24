import React from "react";
import {
  TitleBar,
  TextField,
  AttachmentBar,
  Text,
  IconBarLeft,
  IconBarRight,
  Container
} from "./sharebarELements.jsx";
import {
  BsTypeBold,
  BsTypeItalic,
  BsTypeUnderline,
  BsThreeDotsVertical,
} from "react-icons/bs";
import { CgAttachment } from "react-icons/cg";
import { RiShareForward2Line } from "react-icons/ri";

function ShareBar() {
  return (
    <>
      <Container>
        <TitleBar>
          <Text>Your Title Goes Here...</Text>
        </TitleBar>
        <TextField>fsafasf asfasfa asfasf</TextField>
        <AttachmentBar>
          <IconBarLeft>
            <BsTypeBold style={{ fontSize: "26px", cursor: "pointer" }} />
            <BsTypeItalic style={{ fontSize: "26px", cursor: "pointer" }} />
            <BsTypeUnderline style={{ fontSize: "26px", cursor: "pointer" }} />
          </IconBarLeft>
          <IconBarRight>
            <CgAttachment style={{ fontSize: "24px", cursor: "pointer" }} />
            <RiShareForward2Line
              style={{ fontSize: "26px", cursor: "pointer" }}
            />
            <BsThreeDotsVertical
              style={{ fontSize: "26px", cursor: "pointer" }}
            />
          </IconBarRight>
        </AttachmentBar>
      </Container>
    </>
  );
}

export default ShareBar;
