import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  Stack
} from '@mui/material'
import { Send, Refresh } from '@mui/icons-material'
import { FormData } from '../types/form'

const formSchema = z.object({
  firstName: z.string().min(1, '姓は必須です'),
  lastName: z.string().min(1, '名は必須です'),
  email: z.string().email('有効なメールアドレスを入力してください'),
  phone: z.string().min(1, '電話番号は必須です'),
  company: z.string().optional(),
  subject: z.string().min(1, '件名は必須です'),
  message: z.string().min(10, 'メッセージは10文字以上で入力してください'),
  preferredContact: z.enum(['email', 'phone']),
  newsletter: z.boolean()
})

interface ContactFormProps {
  onSubmit: (data: FormData) => void
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      preferredContact: 'email',
      newsletter: false
    }
  })

  const onFormSubmit = (data: FormData) => {
    onSubmit(data)
  }

  const handleReset = () => {
    reset()
  }

  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3 }}>
        お問い合わせフォーム
      </Typography>
      
      <Box component="form" onSubmit={handleSubmit(onFormSubmit)}>
        {/* 名前フィールド */}
        <Box sx={{ display: 'flex', gap: 2, mb: 3, flexDirection: { xs: 'column', md: 'row' } }}>
          <TextField
            fullWidth
            label="姓"
            required
            {...register('lastName')}
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
            placeholder="山田"
          />
          
          <TextField
            fullWidth
            label="名"
            required
            {...register('firstName')}
            error={!!errors.firstName}
            helperText={errors.firstName?.message}
            placeholder="太郎"
          />
        </Box>

        {/* 連絡先フィールド */}
        <Box sx={{ display: 'flex', gap: 2, mb: 3, flexDirection: { xs: 'column', md: 'row' } }}>
          <TextField
            fullWidth
            label="メールアドレス"
            type="email"
            required
            {...register('email')}
            error={!!errors.email}
            helperText={errors.email?.message}
            placeholder="example@email.com"
          />
          
          <TextField
            fullWidth
            label="電話番号"
            type="tel"
            required
            {...register('phone')}
            error={!!errors.phone}
            helperText={errors.phone?.message}
            placeholder="090-1234-5678"
          />
        </Box>

        {/* 会社名 */}
        <TextField
          fullWidth
          label="会社名"
          {...register('company')}
          placeholder="株式会社サンプル"
          sx={{ mb: 3 }}
        />

        {/* 件名 */}
        <TextField
          fullWidth
          label="件名"
          required
          {...register('subject')}
          error={!!errors.subject}
          helperText={errors.subject?.message}
          placeholder="お問い合わせの件名"
          sx={{ mb: 3 }}
        />

        {/* メッセージ */}
        <TextField
          fullWidth
          label="メッセージ"
          multiline
          rows={5}
          required
          {...register('message')}
          error={!!errors.message}
          helperText={errors.message?.message}
          placeholder="お問い合わせ内容を詳しくお聞かせください"
          sx={{ mb: 3 }}
        />

        {/* 希望連絡方法 */}
        <FormControl component="fieldset" sx={{ mb: 3 }}>
          <FormLabel component="legend">希望連絡方法 *</FormLabel>
          <RadioGroup
            row
            {...register('preferredContact')}
            defaultValue="email"
          >
            <FormControlLabel
              value="email"
              control={<Radio />}
              label="メール"
            />
            <FormControlLabel
              value="phone"
              control={<Radio />}
              label="電話"
            />
          </RadioGroup>
        </FormControl>

        {/* ニュースレター登録 */}
        <FormControlLabel
          control={
            <Checkbox
              {...register('newsletter')}
              defaultChecked={false}
            />
          }
          label="ニュースレターの配信を希望する"
          sx={{ mb: 3 }}
        />

        {/* ボタン */}
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={isSubmitting}
            startIcon={<Send />}
            fullWidth
          >
            {isSubmitting ? '送信中...' : '送信する'}
          </Button>
          <Button
            type="button"
            variant="outlined"
            size="large"
            onClick={handleReset}
            startIcon={<Refresh />}
            fullWidth
          >
            リセット
          </Button>
        </Stack>
      </Box>
    </Paper>
  )
}

export default ContactForm 