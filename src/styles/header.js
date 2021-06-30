import styled from "styled-components";

export const HeaderStyle = styled.div`
   margin-top: 2vh;
   display: flex;
   align-items: center;
   justify-content: space-around;

   input {
      padding: 5px;
      margin-right: 10px;
   }
   button {
      padding: 7px;
      border-radius: 50%;
      border: none;
   }
   button:hover {
      cursor: pointer;
   }
`