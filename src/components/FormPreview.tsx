import React from 'react'
import {
  Box,
  Typography,
  Paper,
  Button,
  Divider,
  Alert,
  Stack,
  Chip
} from '@mui/material'
import { ArrowBack, Add } from '@mui/icons-material'
import { FormData } from '../types/form'

interface FormPreviewProps {
  data: FormData
  onBack: () => void
  onReset: () => void
}

const FormPreview: React.FC<FormPreviewProps> = ({ data, onBack, onReset }) => {
  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" component="h2">
          送信内容の確認
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            startIcon={<ArrowBack />}
            onClick={onBack}
          >
            戻る
          </Button>
          <Button
            variant="contained"
            startIcon={<Add />}
            onClick={onReset}
          >
            新しいフォーム
          </Button>
        </Stack>
      </Box>

      <Box sx={{ mb: 4 }}>
        {/* 基本情報 */}
        <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
          基本情報
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, mb: 3, flexDirection: { xs: 'column', md: 'row' } }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              氏名
            </Typography>
            <Typography variant="body1">
              {data.lastName} {data.firstName}
            </Typography>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              会社名
            </Typography>
            <Typography variant="body1">
              {data.company || '未入力'}
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ mb: 3 }} />

        {/* 連絡先情報 */}
        <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
          連絡先情報
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, mb: 3, flexDirection: { xs: 'column', md: 'row' } }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              メールアドレス
            </Typography>
            <Typography variant="body1">
              {data.email}
            </Typography>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              電話番号
            </Typography>
            <Typography variant="body1">
              {data.phone}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ mb: 3 }}>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            希望連絡方法
          </Typography>
          <Chip
            label={data.preferredContact === 'email' ? 'メール' : '電話'}
            color="primary"
            variant="outlined"
          />
        </Box>
        <Divider sx={{ mb: 3 }} />

        {/* お問い合わせ内容 */}
        <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
          お問い合わせ内容
        </Typography>
        <Box sx={{ mb: 3 }}>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            件名
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {data.subject}
          </Typography>
          
          <Typography variant="body2" color="text.secondary" gutterBottom>
            メッセージ
          </Typography>
          <Paper variant="outlined" sx={{ p: 2, bgcolor: 'grey.50' }}>
            <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
              {data.message}
            </Typography>
          </Paper>
        </Box>
        <Divider sx={{ mb: 3 }} />

        {/* その他の設定 */}
        <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
          その他の設定
        </Typography>
        <Box>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            ニュースレター配信
          </Typography>
          <Chip
            label={data.newsletter ? '希望する' : '希望しない'}
            color={data.newsletter ? 'success' : 'default'}
            variant="outlined"
          />
        </Box>
      </Box>

      {/* 送信完了メッセージ */}
      <Alert severity="success" sx={{ mt: 3 }}>
        <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
          フォームが正常に送信されました！
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          ご入力いただいた内容でお問い合わせを受け付けました。担当者よりご連絡いたします。
        </Typography>
      </Alert>
    </Paper>
  )
}

export default FormPreview 