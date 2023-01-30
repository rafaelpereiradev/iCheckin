import { Box, Text, TextField, Button,LoadingButton} from '../index';
import Logo from '../../assets/ichekin.png';
type LoginTemplate = {
    children?: JSX.Element
}



export default function LoginTemplate({ children }: LoginTemplate) {
    return (
        <Box display='flex' height='100vh' width='100vw'  sx={{backgroundColor:'#145369'}}>
            {children}
        </Box>
    )
}
