import styled from 'styled-components'




export const ButtonItem = styled.div`
display: inline-flex;
padding: 14px 10px;
justify-content: center;
align-items: center;
border-radius: 10px;
gap:10px;
background:  #383c43;
margin-top: 50px;

input{
 width: 100%;
 height: 40px;
 color:#fafafa;
 background-color: transparent;
 border: none;


 &:focus{
  outline: none;
 }

 &::placeholder{
  color:  #F4F6FA;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 171.429% */
 }
}


button{
 background-color: #383c43;
 color:#ffff;
 padding: 9px 10px;
 border-radius: 10px;
}
`
