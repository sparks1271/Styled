import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  ImageContainer,
  MainContainer,
  CardContainer,
  TextContainer,
  ButtonContainer,
  ButtonEl,
  ButtonElm,
  ButtonElm2,
  Li,
  Head,
} from './styledComponents'

class StyledConponents extends Component {
  state = {isBold: false, isItalic: false, isUnderLine: false, textArea: ''}

  onClickVsBold = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  onClickItalic = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  onClickUnder = () => {
    this.setState(prevState => ({isUnderLine: !prevState.isUnderLine}))
  }

  onChangeTextarea = event => {
    this.setState({textArea: event.target.value})
  }

  render() {
    const {isBold, isItalic, isUnderLine} = this.state

    return (
      <MainContainer>
        <Head>Text Editor</Head>
        <CardContainer>
          <ImageContainer
            src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
            alt="text editor"
          />
          <ButtonContainer>
            <Li>
              <ButtonEl
                data-testid="bold"
                isBold={isBold}
                type="button"
                onClick={this.onClickVsBold}
              >
                <VscBold size={25} />
              </ButtonEl>
            </Li>
            <Li>
              <ButtonElm
                data-testid="italic"
                isItalic={isItalic}
                type="button"
                onClick={this.onClickItalic}
              >
                <GoItalic size={25} />
              </ButtonElm>
            </Li>
            <Li>
              <ButtonElm2
                data-testid="underline"
                isUnderLine={isUnderLine}
                type="button"
                onClick={this.onClickUnder}
              >
                <AiOutlineUnderline size={25} />
              </ButtonElm2>
            </Li>
          </ButtonContainer>
          <TextContainer
            isBold={isBold}
            isItalic={isItalic}
            isUnderLine={isUnderLine}
            onChange={this.onChangeTextarea}
          />
        </CardContainer>
      </MainContainer>
    )
  }
}
export default StyledConponents
