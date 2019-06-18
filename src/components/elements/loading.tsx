import { keyframes } from '@emotion/core'
import styled from '@emotion/styled'
import * as React from 'react'

interface Props {
  loading: boolean
}

export default function LoadingIndicator({ loading }: Props) {
  return <Indicator loading={loading} />
}

const loader = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -35px -35px;
  }
`

const Indicator = styled('div')`
  position: fixed;
  height: 4px;
  top: 0;
  left: 0;
  right: 0;
  background-color: #1cde78;
  background-image: linear-gradient(
    -45deg,
    rgba(255, 255, 255, 0.25) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.25) 50%,
    rgba(255, 255, 255, 0.25) 75%,
    transparent 75%,
    transparent
  );
  background-size: 35px 35px;
  z-index: 1000;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2) inset;
  transform: translateY(${({ loading }: Props) => (loading ? 0 : '-4px')});
  transition: transform ease-in 300ms, opacity ease-in 300ms;
  transition-delay: ${({ loading }: Props) => (loading ? '333ms' : 0)};
  animation: ${loader} 2s cubic-bezier(0.4, 0.45, 0.6, 0.55) infinite;
  opacity: ${({ loading }: Props) => (loading ? 1 : 0)};
`
