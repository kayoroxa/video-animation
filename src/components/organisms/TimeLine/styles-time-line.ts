import styled from 'styled-components'

export const ContainerTimeLine = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: gray;
  padding: 10px;
  width: 200px;
  box-sizing: border-box;
  gap: 20px;

  .container-buttons {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    gap: 10px;
  }

  .container-thumbs {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    gap: 10px;
  }
`
