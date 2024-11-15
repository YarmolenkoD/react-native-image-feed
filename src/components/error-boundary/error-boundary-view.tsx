import React, { ErrorInfo, memo } from 'react'

import { ScrollView, Text, TouchableOpacity, View } from 'react-native'

import Styles from './error-boundary.styles.ts'

interface ErrorBoundaryViewProps {
  errorInfo: ErrorInfo
  error: Error | null
  showDetails: boolean
  toggleDetails: () => void
}

export const ErrorBoundaryView = memo((props: ErrorBoundaryViewProps) => {
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
