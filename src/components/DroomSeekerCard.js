import React from "react";
import styled from "styled-components";

const StyleCard = styled.div`
  border: solid 2px grey;
  color: grey;
  width: 30%;
  margin: 1% auto;
  text-align: center;
  box-sizing: border-box;
  height: 96vh;
  padding: 1%;
  border-radius: 40px;
`

const PicBox = styled.div `
background: black;
box-sizing: border-box;
height: 30%;
width: 70%;
margin: 0 auto;
border-radius: 40px;
`

const BtnContStyled = styled.div`
display: flex;
justify-content: space-between;
width: 68%;
height: 15%;
margin: 0 auto;
`

const BtnStyled1 = styled.button `
background: Red;
width:30%;
border-radius: 100px;
`
const BtnStyled2 = styled.button `
background: green;
width:30%;
border-radius: 100px;
margin-left: 5%;
`

function DroomSeeker() {
  return (
    <StyleCard className="card">
      <h1>Droom</h1>
      <PicBox className="pic">Pic goes here</PicBox>
      <h2> Google </h2>
      <p>Position hiring: Web Development</p>
      <p>Job Description: </p>
      <p>Skills Needed: </p>
      <BtnContStyled className="btnContainer">
      <BtnStyled1>Left</BtnStyled1>
      <BtnStyled2>right</BtnStyled2>
      </BtnContStyled>
    </StyleCard>
  );
}
export default DroomSeeker;
