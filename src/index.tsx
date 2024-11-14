import { SafeAreaProvider } from 'react-native-safe-area-context'

import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { QueryProvider } from '@core/providers'
import { ThemeProvider } from '@core/theme'
import { ErrorBoundary } from '@components'
import { NavigationProvider } from '@navigation'

export default function App() {
  return (
    <ErrorBoundary>
      <QueryProvider>
        <SafeAreaProvider>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <ThemeProvider>
              <NavigationProvider />
            </ThemeProvider>
          </GestureHandlerRootView>
        </SafeAreaProvider>
      </QueryProvider>
    </ErrorBoundary>
  )
}
