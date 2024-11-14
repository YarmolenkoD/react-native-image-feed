import React, { ErrorInfo, memo } from 'react'

import { TouchableOpacity, View, ScrollView, Text } from 'react-native'

import Styles from './error-boundary.styles'

interface ErrorBoundaryViewProps {
  errorInfo: ErrorInfo
  error: Error | null
  showDetails: boolean
  toggleDetails: () => void
}

const ErrorBoundaryView = memo((props: ErrorBoundaryViewProps) => {
  const { errorInfo, showDetails, error, toggleDetails } = props

  const buttonText = showDetails ? 'Hide details' : 'Show details'

  return (
    <View style={Styles.wrapper}>
      <Text style={Styles.title}>
        Something went wrong, please restart your application.
      </Text>
      <TouchableOpacity style={Styles.detailButton} onPress={toggleDetails}>
        <Text style={Styles.detailButtonText}>{buttonText}</Text>
      </TouchableOpacity>
      {showDetails && (
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 50 }}
        >
          <Text style={Styles.errorText}>{error && error?.toString()}</Text>
          <Text style={Styles.errorText}>
            {errorInfo && errorInfo.componentStack}
          </Text>
        </ScrollView>
      )}
    </View>
  )
})

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
