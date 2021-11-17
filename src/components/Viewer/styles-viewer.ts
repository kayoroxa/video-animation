import styled from 'styled-components'

//full

interface IProps {
  full: boolean
}

export const ContainerViewer = styled.div<IProps>`
  @keyframes example {
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  }

  box-sizing: border-box;
  width: 100%;
  min-height: ${({ full }) => (full ? '100%' : '0%')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 0px;
  overflow: hidden;
  animation-name: example;
  animation-duration: 0.8s;
  transition: min-height 0.4s ease-out;
  /* animation-timing-function: ease-out; */

  background-color: white;
  p {
    font-size: 3rem;
    color: black;
    /* background-color: white; */
    /* padding: 1rem; */
  }
`
