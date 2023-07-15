




import styled from 'styled-components'
import { viewportHeightProps } from './utils/types'



export const Container = styled.div<viewportHeightProps>`

display: flex;
width: 100%;
min-height: ${props => props.viewportHeight  }px;
padding: 20px 31px 40px 30px;
flex-direction: column;

background-color:#2E3239 ;

`
