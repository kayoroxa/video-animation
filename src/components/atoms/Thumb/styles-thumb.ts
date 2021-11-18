import styled from 'styled-components'

export const ContainerThumb = styled.div`
  width: 100%;
  height: 80px;
  background: black;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;

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
