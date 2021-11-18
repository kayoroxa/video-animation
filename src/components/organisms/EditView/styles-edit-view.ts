import styled from 'styled-components'

export const ContainerEditView = styled.div`
  width: 100%;
  /* height: 100%; */
  background-color: red;
  display: flex;
  flex-direction: column;
  align-items: center;

  * {
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
