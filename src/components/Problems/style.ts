import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: 16px;
  width: 60%;
  @media screen and (max-width: 1280px) {
    width: 50%;
  }

  height: 100vh;
  border-radius: 12px;
  background-color: #5c5c5c;
`;

export const Title = styled.h2`
  position: absolute;
  left: 16px;
  top: 17px;
  width: 100%;
  height: 50px;
  text-align: left;
  font-size: 16px;
  color: white;
`;

export const FilterSelect = styled.select`
  position: absolute;
  right: 116px;
  top: 17px;
  height: 30px;
  padding: 0 0 0 10px;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  &:focus {
    outline: 0;
  }
`;
export const FilterButton = styled.button`
  position: absolute;
  right: 16px;
  top: 17px;
  height: 30px;
  width: 90px;
  background-color: white;
  border-radius: 5px;
  font-size: 14px;
  &:hover {
    background-color: #00abff;
    color: white;
  }
`;

export const Problems = styled.div`
  margin-top: 50px;
  padding-right: 5px;
  height: calc(100% - 80px);
  overflow: auto;
  &::-webkit-scrollbar {
    width: 10px;
    background-color: #c3c3c3;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #939393;
    border-radius: 10px;
  }
`;

export const Score = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 30px;
  li {
    margin-right: 10px;
    font-size: 16px;
    color: #c0c0c0;
    &:last-child {
      padding-left: 10px;
      border-left: 1px white solid;
      line-height: 1;
      font-weight: 700;
      color: white;
    }
  }
`;

export const Empty = styled.div`
  text-align: center;
  color: white;
`;
