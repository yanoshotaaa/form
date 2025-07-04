import React, { useState, useEffect } from "react";
import { 
  Box, 
  Container, 
  Typography, 
  TextField, 
  Paper, 
  Divider,
  Alert,
  CssBaseline
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

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
});

function App() {
  // 入力テキストの状態管理
  const [inputText, setInputText] = useState("");
  // ログメッセージの状態管理
  const [log, setLog] = useState("");

  // inputTextが変更されたときに実行されるuseEffect
  useEffect(() => {
    setLog(`入力内容が更新されました: ${inputText}`);
  }, [inputText]); // inputText が変わったときだけ実行される

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
          <Typography variant="h3" component="h1" gutterBottom sx={{ color: 'white', textAlign: 'center', mb: 4 }}>
            リアルタイムフォームアプリ
          </Typography>
          
          {/* フォーム部分 */}
          <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
            <Typography variant="h5" component="h2" gutterBottom>
              入力フォーム
            </Typography>
            <TextField
              fullWidth
              label="テキストを入力してください"
              variant="outlined"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="ここに入力してください"
            />
          </Paper>

          {/* 表示部分 */}
          <Paper elevation={3} sx={{ p: 3, backgroundColor: '#f9f9f9' }}>
            <Typography variant="h5" component="h2" gutterBottom>
              リアルタイム表示
            </Typography>
            <Divider sx={{ mb: 2 }} />
            
            <Box sx={{ mb: 2 }}>
              <Typography variant="h6" gutterBottom>
                入力内容:
              </Typography>
              <Alert severity={inputText ? "info" : "warning"}>
                {inputText || '（空文字）'}
              </Alert>
            </Box>

            <Box>
              <Typography variant="h6" gutterBottom>
                ログ:
              </Typography>
              <Alert severity="success">
                {log}
              </Alert>
            </Box>
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App; 