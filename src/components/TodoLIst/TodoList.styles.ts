import styled from 'styled-components'
import { CheckedProps } from '../../utils/types'






export const TodoListContent = styled.ul`
margin: 20px 0 40px 0;
display: flex; 
height:400px;

flex-direction: column;

overflow-y: auto;
padding:0;
gap:20px;



`
export const TodoListItem = styled.li<CheckedProps>`
margin:0;
padding:0;
list-style: none;
text-decoration: ${({isChecked}) => isChecked ? 'line-through' : 'none'};
opacity: ${({isChecked}) => isChecked ? '0.5' : 'none'};
display: flex;
align-items: center;
gap: 10px;




`
export const TodoListitemCheck = styled.input`
background-color: transparent;

`

export const TodoListNameTask = styled.span`
color: #F4F6FA;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;

`
export const TodoListContentItem = styled.div`

 display: flex; 
 flex:1;
 flex-direction: row;
 align-items: center;
 gap:10px;


`
