import styled from 'styled-components'

interface IProps {
  highlight?: boolean
}

export const ContainerThumb = styled.div<IProps>`
  width: 100%;
  height: 80px;
  background: black;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: ${props => (props.highlight ? '2px solid white' : 'none')};
  box-sizing: border-box;

  :hover {
    cursor: pointer;
  }

  * {
    /* width: 100%;
    height: 100%;
    min-width: 100%;
    min-height: 100%;
    object-fit: cover; */
  }
`
