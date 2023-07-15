import styled from 'styled-components'




export const ButtonHiddenContent = styled.div`
width: 100%; 

display: flex;
flex-direction: row;
align-items: flex-start;
gap: 20px;
align-self: stretch;
margin-top: 40px;




`
export const ButtonHidden = styled.button`
display: flex;
width: fit-content;
padding: 6px ;
flex-direction: row;
align-items: center;
gap:9px;

border-radius: 9px;
background: #2E3239;

span{
 color: #8C8E93;
font-family: Poppins;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: normal;
}

`
export const ButtonHiddenText = styled.p`
color: #8C8E93;
font-family: Poppins;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;

`
