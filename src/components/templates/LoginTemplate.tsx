import { Box, Text, TextField } from '../index'
type LoginTemplate = {
    children?: JSX.Element
}

export default function LoginTemplate({ children }: LoginTemplate) {
    return (
        <Box display='flex' flexDirection='column' height='200px' mt={20} width='100%' flexWrap='wrap' justifyContent='space-evenly' alignItems='center'>
            {children}
        </Box>
    )
}
