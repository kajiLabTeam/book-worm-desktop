import { HTMLProps } from 'react';
import styled from 'styled-components';

const LoadingWrapper = styled.div<{ $dark: boolean }>`
  --circle-size: 15px;

  width: calc(var(--circle-size) * 3 + 30px);
  height: var(--circle-size);
  text-align: center;
  margin: auto;

  & > div {
    position: relative;

    &,
    &::after,
    &::before {
      width: var(--circle-size);
      height: var(--circle-size);
      display: inline-block;
      background-color: var(${({ $dark }) => ($dark ? '--primary' : '--background')});
      border-radius: 50%;
      transform-origin: center center;
      animation: spScaleAlpha 1s infinite linear;
    }

    &::after,
    &::before {
      content: '';
      position: absolute;
    }

    &::before {
      left: 30px;
      animation: spScaleAlphaBefore 1s infinite linear;
    }

    &::after {
      right: 30px;
      animation: spScaleAlphaAfter 1s infinite linear;
    }
  }

  @keyframes spScaleAlpha {
    0% {
      opacity: 1;
    }
    33% {
      opacity: 0.25;
    }
    66% {
      opacity: 0.25;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes spScaleAlphaBefore {
    0% {
      opacity: 0.25;
    }
    33% {
      opacity: 1;
    }
    66% {
      opacity: 0.25;
    }
    100% {
      opacity: 0.25;
    }
  }
  @keyframes spScaleAlphaAfter {
    0% {
      opacity: 0.25;
    }
    33% {
      opacity: 0.25;
    }
    66% {
      opacity: 1;
    }
    100% {
      opacity: 0.25;
    }
  }
`;

interface LoadingProps extends HTMLProps<HTMLDivElement> {
  dark?: boolean;
}

const Loading = (props: LoadingProps) => {
  const { dark, ...rest } = props;

  return (
    <LoadingWrapper {...rest} $dark={dark ?? false}>
      <div />
    </LoadingWrapper>
  );
};

export default Loading;
