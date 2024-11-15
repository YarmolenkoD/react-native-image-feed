import React, { ErrorInfo } from 'react'

import { ErrorBoundaryView } from './error-boundary-view.tsx'

interface Props {
  children: React.ReactNode
}

interface State {
  error: Error | null
  errorInfo: ErrorInfo | null
  showDetails: boolean
}

export class ErrorBoundary extends React.Component<Props, State> {
  state: State = {
    error: null,
    errorInfo: null,
    showDetails: false,
  }

  toggleDetails = (): void => {
    this.setState(state => {
      return {
        ...state,
        showDetails: !state.showDetails,
      }
    })
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState(state => {
      return {
        ...state,
        error,
        errorInfo,
      }
    })
  }

  render() {
    const { errorInfo, showDetails, error } = this.state

    if (errorInfo) {
      return (
        <ErrorBoundaryView
          errorInfo={errorInfo}
          showDetails={showDetails}
          error={error}
          toggleDetails={this.toggleDetails}
        />
      )
    }

    return this.props.children
  }
}
