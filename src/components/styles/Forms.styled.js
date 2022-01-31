import styled from "styled-components";

export const Container = styled.section`
  /* body */

  margin: calc((100vh / 25) * 1.563) calc((100vw / 25) * 1.563);
  background-color: white;

  line-height: 1.563;

  @media (prefers-color-scheme: dark) {
    body {
      color: white;
      background-color: ${({ theme }) => theme.colors.grey1la};
    }
  }
  /* label */

  label {
    font-weight: bold;
    display: flex;
  }

  /* input */

  input[type="url"],
  input[type="text"] {
    padding: 0.65rem 0.5rem;
    font-size: 1rem;
    border: 2px solid ${({ theme }) => theme.colors.greyEdf};
    background-color: ${({ theme }) => theme.colors.greyF7f};
    color: ${({ theme }) => theme.colors.grey2d3};
    border-radius: 10px;
  }

  @media (prefers-color-scheme: dark) {
    input[type="text"],
    input[type="url"] {
      background-color: ${({ theme }) => theme.colors.grey68};
      border-color: ${({ theme }) => theme.colors.grey4a5};
      color: white;
    }
  }

  input[type="text"]::placeholder,
  input[type="url"]::placeholder,
  textarea::placeholder {
    color: ${({ theme }) => theme.colors.greyCCC};
  }

  input[type="text"],
  input[type="url"],
  textarea {
    width: 400px;
  }

  textarea {
    font-size: 1rem;
    border: 2px solid ${({ theme }) => theme.colors.greyEdf};
    border-radius: 10px;
    resize: vertical;
    color: ${({ theme }) => theme.colors.grey2d3};
    background-color: ${({ theme }) => theme.colors.greyF7f};
    box-sizing: border-box;
    padding: 0.65rem 0.5rem;
  }

  @media (prefers-color-scheme: dark) {
    textarea {
      background-color: ${({ theme }) => theme.colors.grey68};
      border-color: ${({ theme }) => theme.colors.grey4a5};
      color: white;
    }
  }

  /* button */
  button {
    padding: 0.5rem 1.25rem;
    font-size: 1rem;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.grey4a5};
    border: 2px solid ${({ theme }) => theme.colors.grey4a5};
    color: white;
    font-weight: bold;
    margin-bottom: 1rem;
    transition: background-color 200ms ease-in-out, border 200ms ease-in-out,
      transform 200ms ease-in-out;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    user-select: none;
  }

  @media (prefers-color-scheme: dark) {
    button {
      background-color: white;
      border: 2px solid white;
      color: ${({ theme }) => theme.colors.grey68};
    }
  }

  @media (hover: hover) {
    button:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.grey68};
    }
  }

  @media (hover: hover) and (prefers-color-scheme: dark) {
    button:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.greyE2e};
    }
  }

  button + button {
    margin-left: 0.5rem;
  }

  button.secondary,
  button[type="reset"] {
    background-color: ${({ theme }) => theme.colors.greyCCC};
    border: 2px solid ${({ theme }) => theme.colors.greyCCC};
    color: ${({ theme }) => theme.colors.grey1la};
  }

  button.secondary:hover,
  button[type="reset"]:hover {
    background-color: ${({ theme }) => theme.colors.greyHover};
  }

  /* error */

  /* for error text */
  .error {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.redEF3};
    margin-top: 0.25rem;
  }

  @media (prefers-color-scheme: dark) {
    .error {
      color: ${({ theme }) => theme.colors.redFc8};
    }
  }

  /* for field border */
  input.invalid {
    border-color: red;
  }
`;
