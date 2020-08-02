import styled from 'styled-components';
import { shade } from 'polished';

interface TagProps {
  tagColor: string;
}

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }

    svg {
      margin-top: 4px;
    }
  }
`;

export const RepositoryInfo = styled.div`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }
    }

    li {
      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #6c6c6c;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;
  max-width: auto;
  justify-content: space-between;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: background-color 0.2s;
    transition: transform 0.2s;

    & + a {
      margin-top: 20px;
    }

    &:hover {
      background: ${shade(0.1, '#fff')};
      transform: translateX(10px);
    }

    div {
      margin: 0 24px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;

export const TagList = styled.ul`
  color: #111;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  list-style: none;
`;

export const Tag = styled.li<TagProps>`
  border-radius: 3px;
  text-align: center;
  font-weight: bold;
  padding: 4px;
  font-size: 14px;
  background: ${props => `#${props.tagColor}`};

  & + li {
    margin-top: 4px;
  }
`;
