import styled from 'styled-components';

export const BlueCircle = styled.p`
  width: ${props => props.width || '20px'};
  height: ${props => props.height || '20px'};
  border: 18px solid #0097a7;
  border-radius: 40%;
  opacity: ${props => props.opacity || 1};
  position: relative;
  left: ${props => props.left || 1};
  right: ${props => props.right || 1};
  top: ${props => props.top || 1};
  bottom: ${props => props.bottom || 1};
  z-index: -4;
`;

export const AppStyle = styled.div`
  max-width: 97%;
  margin: 0 auto;
  .test {
    margin-bottom: 5000px;
  }
  .container {
    border: 1px solid red;
    max-width: 87%;
    margin: 0 auto;
  }
`;
