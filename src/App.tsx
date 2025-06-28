import React, { useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Box, Container, Typography, CssBaseline } from '@mui/material'
import ContactForm from './components/ContactForm'
import FormPreview from './components/FormPreview'
import { FormData } from './types/form'

// MUIテーマの作成
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
})

function App() {
  const [formData, setFormData] = useState<FormData | null>(null)
  const [isPreviewMode, setIsPreviewMode] = useState(false)

  const handleFormSubmit = (data: FormData) => {
    setFormData(data)
    setIsPreviewMode(true)
  }

  const handleBackToForm = () => {
    setIsPreviewMode(false)
  }

  const handleReset = () => {
    setFormData(null)
    setIsPreviewMode(false)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box 
        sx={{ 
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          py: 4
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography variant="h3" component="h1" gutterBottom sx={{ color: 'white', fontWeight: 'bold' }}>
              フォームアプリケーション
            </Typography>
            <Typography variant="h6" sx={{ color: 'white', opacity: 0.9 }}>
              美しく使いやすいコンタクトフォーム
            </Typography>
          </Box>

          <Box sx={{ maxWidth: 800, mx: 'auto' }}>
            {!isPreviewMode ? (
              <ContactForm onSubmit={handleFormSubmit} />
            ) : (
              <FormPreview 
                data={formData!} 
                onBack={handleBackToForm}
                onReset={handleReset}
              />
            )}
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default App 