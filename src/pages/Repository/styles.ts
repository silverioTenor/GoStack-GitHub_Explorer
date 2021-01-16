import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;
    cursor: pointer;

    svg {
      margin-right: 6px;
    }

    &:hover {
      color: ${shade(0.2, '#a8a8b3')};
    }
  }
`;

export const HeaderRepository = styled.div`
  margin-top: 80px;

  div {
    width: 100%;
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;

      object-fit: cover;
      border-radius: 50%;
    }

    .content {
      height: 100%;
      margin-left: 32px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      h1 {
        font-size: 36px;
        font-weight: bold;
      }

      span {
        display: block;
        margin-top: 12px;
        font-size: 20px;
        color: #737380;
      }
    }
  }

  ul {
    margin-top: 40px;
    display: flex;
    list-style: none;

    li {
      & + li {
        margin-left: 80px;
      }

      span {
        display: block;

        &:first-child {
          font-size: 36px;
          font-weight: bold;
          color: #3d3d4d;
        }

        &:last-child {
          font-size: 20px;
          color: #6c6c80;
        }
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

  a {
    padding: 28px 24px;
    display: flex;
    align-items: center;
    text-decoration: none;
    background: #fff;
    border-radius: 5px;
    transition: all 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translatex(10px);
    }

    .contentRepository {
      margin: 0 24px;
      flex: 1;

      strong {
        display: block;
        font-size: 24px;
        font-weight: bold;
        color: #3d3d4d;
      }

      p {
        display: block;
        font-size: 18px;
        color: #a8a8b3;
      }
    }

    svg {
      margin-left: auto;
      color: #c9c9d4;
    }
  }
`;
