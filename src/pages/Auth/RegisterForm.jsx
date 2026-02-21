import Zoom from '@mui/material/Zoom'
import { Card as MuiCard } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import { useColorScheme } from '@mui/material/styles'
import FieldErrorAlert from '~/components/common/Form/FieldErrorAlert'
import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import {
  EMAIL_RULE,
  PASSWORD_CONFIRMATION_MESSAGE,
  PASSWORD_RULE,
  FIELD_REQUIRED_MESSAGE,
  PASSWORD_RULE_MESSAGE,
  EMAIL_RULE_MESSAGE
} from '~/utils/validators'

function RegisterForm() {
  const { mode } = useColorScheme()
  const { register, handleSubmit, watch, formState: { errors } } = useForm()

  const onSubmitRegister = (data) => {
    // console.log('🚀 ~ onSubmitRegister ~ data:', data)
    toast.success('Registration successful', { position: 'bottom-left' })
  }

  return (
    <form onSubmit={handleSubmit(onSubmitRegister)}>
      <Zoom in={true} style={{ transitionDelay: '200ms' }}>
        <MuiCard sx={{
          minWidth: '380px',
          maxWidth: '380px',
          borderRadius: '12px',
          boxShadow: mode === 'dark'
            ? '0 0 3px 0.5px rgba(211, 206, 206, 0.15)'
            : '0 0 3px 0.5px rgba(0,0,0,0.15)'
        }}>
          <Box sx={{ margin: '1em', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant='h6' sx={{ fontWeight: '600' }}>Welcome Back!</Typography>
            <Typography variant='b2' sx={{ color: '#838383' }}>Enter your credentials to access your account</Typography>
          </Box>


          <Box sx={{ padding: '0 1em 1em 1em' }}>
            <Box sx={{ marginTop: '1em' }}>
              <TextField
                autoFocus
                fullWidth
                label="Enter Email..."
                type="text"
                variant="outlined"
                error={!!errors['email']}
                {...register('email', {
                  required: FIELD_REQUIRED_MESSAGE,
                  pattern: {
                    value: EMAIL_RULE,
                    message: EMAIL_RULE_MESSAGE
                  }
                })}
              />
              <FieldErrorAlert errors={errors} fieldName={'email'} />
            </Box>
            <Box sx={{ marginTop: '1em' }}>
              <TextField
                autoFocus
                fullWidth
                label="Enter Password..."
                type="text"
                variant="outlined"
                error={!!errors['password']}
                {...register('password', {
                  required: FIELD_REQUIRED_MESSAGE,
                  pattern: {
                    value: PASSWORD_RULE,
                    message: PASSWORD_CONFIRMATION_MESSAGE
                  }
                })}
              />
              <FieldErrorAlert errors={errors} fieldName={'password'} />
            </Box>
            <Box sx={{ marginTop: '1em' }}>
              <TextField
                autoFocus
                fullWidth
                label="Enter Password Cofirmation..."
                type="text"
                variant="outlined"
                error={!!errors['password_cofimation']}
                {...register('password_cofimation', {
                  validate: (value) => {
                    if (value === watch('password')) return true
                    return 'Password Confirmation does not match!'
                  }
                })}
              />
              <FieldErrorAlert errors={errors} fieldName={'password_cofimation'} />
            </Box>
          </Box>
          <CardActions sx={{ padding: '0 1em 1em 1em' }}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              sx={{
                background: mode === 'dark'
                  ? 'linear-gradient(90deg, #0d6d08, #2cb92f, #8dd654)'
                  : 'linear-gradient(90deg, #3465c8, #69aedc, #8acdde)',
                color: '#ffffff'
              }}

            >
              Register
            </Button>
          </CardActions>
          <Box sx={{ padding: '0 1em 1em 1em', textAlign: 'center', display: 'flex', gap: 1, justifyContent: 'center' }}>
            <Typography>Already have an account?</Typography>
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <Typography sx={{ color: 'secondary.main' }}>Sign in</Typography>
            </Link>
          </Box>
        </MuiCard>
      </Zoom>
    </form >
  )
}

export default RegisterForm