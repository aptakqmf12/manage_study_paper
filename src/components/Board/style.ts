import styled from 'styled-components';

export const ProblemBoard = styled.div`
  width: 100%;
  border-radius: 12px;

  &.active {
    border: 3px #00abff solid;
    // box-shadow: 0px 0px 3px #00abff;
  }

  & + & {
    margin-top: 16px;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    @media screen and (max-width: 1280px) {
      padding: 5px 10px;
    }
    border-radius: 9px 9px 0 0;
    background-color: #fafafa;

    &__info {
      display: flex;
      align-items: center;
      &--id {
        padding: 0 15px;
        font-size: 20px;
        font-weight: 700;
        @media screen and (max-width: 1280px) {
          padding: 0 5px;
        }
      }
      &--title {
        font-size: 14px;
        font-weight: 400;
      }
    }

    &__btns {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      min-width: 110px;
      @media screen and (max-width: 1280px) {
        min-width: 130px;
      }

      button {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        color: #959595;
        &.active {
          color: #00abff;
        }
        span {
          margin-left: 3px;
        }
      }
    }
  }
  .content {
    display: flex;
    justify-content: flex-start;
    padding: 15px;
    border-radius: 0 0 9px 9px;
    background-color: white;
    &__labels {
      display: flex;
      flex-direction: column;
      margin-right: 20px;
      .level1 {
        color: #5c5c5c;
      }
      .level2 {
        color: #00abff;
      }
      .level3 {
        color: #54c0b1;
      }
      .level4 {
        color: #ffc64d;
      }
      .level5 {
        color: #fd5354;
      }
      &--rate {
        margin-top: 10px;
        color: #707070;
      }
      &--type {
        margin-top: 10px;
        color: #959595;
      }
      span {
        display: inline-block;
        width: 40px;
        font-size: 12px;
        text-align: center;
        border-radius: 4px;
        background-color: #f5f5f5;
      }
    }
    &__image {
    }
  }
`;
