export interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  subject: string
  message: string
  preferredContact: 'email' | 'phone'
  newsletter: boolean
}

export interface FormErrors {
  [key: string]: string
} 