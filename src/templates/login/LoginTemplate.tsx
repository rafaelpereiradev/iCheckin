import { Grid, Box, Typography, TextFieldProps } from '@mui/material'
import Logo from '../../components/atoms/logo/Logo'
import backgroundLogin from '../../components/atoms/images/backgroundLogin.svg'
import SimpleForm,{SimpleFormType} from '../../components/molecules/simple-form/SimpleForm'


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
                    width: '408px',
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
                    
                </Box>
            </Box>
        </Grid>
    )
}
