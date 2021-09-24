import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vmax;
  height: 50vmax;
  margin: 0;
  background-color: #e9e8e8;
`;

export const FormContainer = styled.div`
  /* margin-top: 220px;
  margin-left: 1000px; */
  width: 450px;
  height: 500px;
  position: relative;
  left: 1150px;
  display: flex;
  flex-direction: column;
  /* background-color: #bdbdbd; */
  background-color: #d1d1d1;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export const Button = styled.button`
  display: flex;
  position: relative;
  top : 15px;
  /* height: 30px;*/
  width: 100px;
  padding: 10px 10px;
  align-items: center;
  justify-content: center;
  display: inline-block;
  border: none;
  background-color: #4285f4;
  cursor: pointer;
`;

export const Label = styled.label`
  font-size: 22px;
  font-weight: 500;
`;

export const Input = styled.input`
  height: 30px;
  /* border-radius: 5px; */
  justify-content: center;
  display: inline-block;
  border: none;
  border-bottom: 2px solid #4285f4;
  outline: none;
  font-size: 16px;
  background-color: #d1d1d1;
`;

export const Text = styled.text`
  font-size: 80px;
  position: relative;
  top: 290px;
  left: 150px;
  align-items: center;
`;
