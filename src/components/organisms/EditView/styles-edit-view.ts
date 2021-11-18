import styled from 'styled-components'

interface IProps {
  fontSize?: number
}
export const ContainerEditView = styled.div<IProps>`
  width: 100%;
  /* height: 100%; */
  background-color: blue;
  display: flex;
  flex-direction: column;
  align-items: center;

  * {
    font-size: ${({ fontSize }) =>
      fontSize ? fontSize + 'px !important' : '23px'};
    opacity: 1;
    animation-name: show;
    animation-duration: 0.5s;
  }
  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`
