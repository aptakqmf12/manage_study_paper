import styled from 'styled-components';
import * as S from '../Problems/style';

export const Container = styled(S.Container)`
  width: 40%;
  @media screen and (max-width: 1280px) {
    width: 50%;
  }

  background-color: #e8e8e8;
`;

export const Title = styled(S.Title)`
  color: black;
`;

export const Problems = styled(S.Problems)``;

export const Empty = styled(S.Empty)`
  color: #333333;
  .label {
    display: inline-flex;
    padding: 6px;
    font-size: 9px;
    color: #959595;
    border-radius: 2px;
    background-color: white;
  }
`;
