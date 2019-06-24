import styled from 'styled-components';
import { size } from 'polished';

const Container = styled.div`
  ${size('25em')}
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 35px;
  -webkit-box-shadow: -4px 9px 83px -23px rgba(0,0,0,0.75);
  -moz-box-shadow: -4px 9px 83px -23px rgba(0,0,0,0.75);
  box-shadow: -4px 9px 83px -23px rgba(0,0,0,0.75);
  margin: 1em;
  padding: 1em;
  padding-left: 2em;
  /* &:hover {
  box-shadow: none;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
} */
`

export default Container
