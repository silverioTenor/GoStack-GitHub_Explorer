/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Header = styled.header<FormProps>`
  h1 {
    width: 440px;
    margin-top: 100px;
    font-size: 48px;
    color: #3a3a3a;
  }

  form {
    max-width: 714px;
    margin-top: 40px;

    display: flex;
    align-items: center;

    input {
      padding: 24px 30px;
      flex: 1;
      color: #3a3a3a;
      border: 2px solid #fff;
      border-right: 0;
      border-radius: 5px 0 0 5px;

      ${props =>
    props.hasError &&
    css`
        border-color: #c53030;
      `}

      &::placeholder {
        color: #a8a8b3;
      }
    }

    button {
      width: 210px;
      padding: 24px 30px;
      font-weight: bold;
      color: #fff;
      background: #04d361;
      border: 2px solid #04d361;
      border-radius: 0 5px 5px 0;
      transition: background 0.2s;

      &:hover {
        background: ${shade(0.2, '#04d361')};
        border-color: ${shade(0.2, '#04d361')};
      }
    }
  }
`;

export const Repositories = styled.div`
  max-width: 714px;
  margin-top: 120px;

  a {
    padding: 16px;
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

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;

      object-fit: cover;
    }

    .content {
      margin: 0 24px;
      flex: 1;

      strong {
        display: block;
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        display: block;
        font-size: 16px;
        color: #a8a8b3;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;

export const Error = styled.span`
  margin-top: 30px;
  display: block;
  color: #c53030;
`;
