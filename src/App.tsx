import { useState, useEffect } from "react";
import { 
  Box, 
  Container, 
  Typography, 
  TextField, 
  Paper, 
  Divider,
  Alert,
  CssBaseline,
  Button,
  Stack
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// 文字数上限の設定
const NAME_MAX = 10;
const EMAIL_MAX = 30;
const COMMENT_MAX = 100;

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

// 保存データの型
interface SavedData {
  name: string;
  email: string;
  comment: string;
  timestamp: number;
}

function App() {
  // 複数項目の状態管理
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  // ログメッセージの状態管理
  const [log, setLog] = useState("");
  // 保存データ一覧の状態管理
  const [savedList, setSavedList] = useState<SavedData[]>([]);

  // いずれかの項目が変更されたときに実行されるuseEffect
  useEffect(() => {
    setLog(`フォーム内容が更新されました: 名前=${name}, メール=${email}, コメント=${comment}`);
  }, [name, email, comment]);

  // 保存ボタン押下時の処理
  const handleSave = () => {
    // 空欄の場合は保存しない
    if (!name && !email && !comment) return;
    // 新しいデータを作成
    const newData: SavedData = {
      name,
      email,
      comment,
      timestamp: Date.now(),
    };
    // 保存リストに追加
    setSavedList([newData, ...savedList]);
    // 入力欄をリセット
    setName("");
    setEmail("");
    setComment("");
    setLog("保存しました！");
  };

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
            リアルタイムフォームアプリ（追加要件3）
          </Typography>
          
          {/* フォーム部分 */}
          <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
            <Typography variant="h5" component="h2" gutterBottom>
              入力フォーム
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, mb: 2 }}>
              {/* 名前フィールド */}
              <Box sx={{ flex: 1 }}>
                <TextField
                  fullWidth
                  label="名前"
                  variant="outlined"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="山田太郎"
                  inputProps={{ maxLength: NAME_MAX }}
                  helperText={`文字数: ${name.length} / ${NAME_MAX}`}
                />
              </Box>
              {/* メールフィールド */}
              <Box sx={{ flex: 1 }}>
                <TextField
                  fullWidth
                  label="メールアドレス"
                  type="email"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@email.com"
                  inputProps={{ maxLength: EMAIL_MAX }}
                  helperText={`文字数: ${email.length} / ${EMAIL_MAX}`}
                />
              </Box>
            </Box>
            {/* コメントフィールド */}
            <TextField
              fullWidth
              label="コメント"
              multiline
              rows={4}
              variant="outlined"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="コメントを入力してください"
              inputProps={{ maxLength: COMMENT_MAX }}
              helperText={`文字数: ${comment.length} / ${COMMENT_MAX}`}
              sx={{ mb: 2 }}
            />
            {/* 保存ボタン */}
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSave}
                disabled={!name && !email && !comment}
              >
                保存
              </Button>
            </Stack>
          </Paper>

          {/* 表示部分 */}
          <Paper elevation={3} sx={{ p: 3, backgroundColor: '#f9f9f9', mb: 3 }}>
            <Typography variant="h5" component="h2" gutterBottom>
              リアルタイム表示
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, mb: 3 }}>
              {/* 名前の表示 */}
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" gutterBottom>
                  名前:
                </Typography>
                <Alert severity={name ? "info" : "warning"}>
                  {name ? name : '未入力です'}
                </Alert>
              </Box>
              {/* メールの表示 */}
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" gutterBottom>
                  メール:
                </Typography>
                <Alert severity={email ? "info" : "warning"}>
                  {email ? email : '未入力です'}
                </Alert>
              </Box>
              {/* コメントの表示 */}
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" gutterBottom>
                  コメント:
                </Typography>
                <Alert severity={comment ? "info" : "warning"}>
                  {comment ? comment : '未入力です'}
                </Alert>
              </Box>
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

          {/* 保存データ一覧 */}
          <Paper elevation={3} sx={{ p: 3, backgroundColor: '#f1f8e9' }}>
            <Typography variant="h5" component="h2" gutterBottom>
              保存したデータ一覧
            </Typography>
            <Divider sx={{ mb: 2 }} />
            {savedList.length === 0 ? (
              <Typography color="text.secondary">まだ保存データはありません</Typography>
            ) : (
              savedList.map((item, idx) => (
                <Box key={item.timestamp} sx={{ mb: 2, p: 2, border: '1px solid #c8e6c9', borderRadius: 2, background: '#fff' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>No.{savedList.length - idx}</Typography>
                  <Typography>名前: {item.name || '未入力です'}</Typography>
                  <Typography>メール: {item.email || '未入力です'}</Typography>
                  <Typography>コメント: {item.comment || '未入力です'}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    保存時刻: {new Date(item.timestamp).toLocaleString()}
                  </Typography>
                </Box>
              ))
            )}
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App; 