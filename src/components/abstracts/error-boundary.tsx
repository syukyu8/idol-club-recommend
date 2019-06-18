import * as React from 'react'

interface Props {}

interface State {
  error: boolean
}

export default class ErrorBoundary extends React.Component<Props, State> {
  static getDerivedStateFromError(error: Error) {
    console.error(error)
    return { error: true }
  }

  state: Readonly<State> = {
    error: false
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.group('ErrorBoundary')
    console.log(error)
    console.log(info)
    console.groupEnd()
  }

  render() {
    if (this.state.error) {
      return <h1>Something went wrong.</h1>
    } else {
      return this.props.children
    }
  }
}
