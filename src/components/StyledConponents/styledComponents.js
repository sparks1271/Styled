import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`

export const ImageContainer = styled.img`
  width: 50px;
  height: 50px;
`

export const CardContainer = styled.div`
  display: flex;
`

export const TextContainer = styled.textarea`
  font-style: ${props => (props.isItalic === true ? 'italic' : 'normal')};
  font-weight: ${props => (props.isBold === true ? 'Bold' : 'normal')};
  text-decoration: ${props =>
    props.isUnderLine === true ? 'underline' : 'none'};
`

export const ButtonContainer = styled.ul`
  display: flex;
  justify-content: space-between;
`

export const ButtonEl = styled.button`
  color: ${props => (props.isBold === true ? '#faff00' : '#f1f5f9')};
`

export const ButtonElm = styled.button`
  color: ${props => (props.isItalic === true ? '#faff00' : '#f1f5f9')};
`
export const ButtonElm2 = styled.button`
  color: ${props => (props.isUnderLine === true ? '#faff00' : '#f1f5f9')};
  text-decoration: ${props =>
    props.isUnderLine === true ? 'underline' : 'none'};
`

export const Li = styled.li`
  list-style-type: none;
`
export const Head = styled.h1`
  color: #000000;
`
