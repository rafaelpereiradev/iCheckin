import { Grid, Box, Typography, Switch, Button} from '@mui/material'
import Logo from '../../components/atoms/logo/Logo'
import backgroundLogin from '../../components/atoms/images/backgroundLogin.svg'
import SimpleForm,{SimpleFormType} from '../../components/molecules/simple-form/SimpleForm'
import { LoadingButton } from '@mui/lab'
import { Link } from 'react-router-dom'


type LoginTemplateType = {
    form: SimpleFormType,

}

export default function LoginTemplate({ form }: LoginTemplateType) {
    return (
        <Grid item xs={12} display="flex" flexDirection='column' justifyContent="center" alignItems="center" height='100vh'
            sx={{
                backgroundImage: `url(${backgroundLogin})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
            <Box
                sx={{
                    backgroundColor: '#fff',
                    height: '434px',
                    display: 'flex',
                    padding: '32px',
                    borderRadius: '12px',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <Logo />
                <Box display='flex' flexDirection='column' mt='34px' justifyContent='space-evenly'>
                    
                    <SimpleForm  {...form} 
                    sx={{
                        width:'360px',
                        marginTop:'21px'
                    }}
                    />
                    <Box width='100%' display='flex' alignItems='baseline'>
                    <Switch color='primary' sx={{marginTop:'32px'}}/>
                    <Typography color='#7B809A'>Lembrar-me</Typography>
                    </Box>
                    <LoadingButton variant='contained' children='login' sx={{marginTop:'32px'}}/>
                    <Typography align='center' color='#7B809A' marginTop='28px'>Ainda não tem uma conta? <Button href='' style={{ textDecoration: 'none', }}>Crie agora</Button></Typography>
                </Box>
            </Box>
        </Grid>
    )
}
