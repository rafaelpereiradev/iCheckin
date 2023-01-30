import { Box, Text, TextField } from '../index'
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
