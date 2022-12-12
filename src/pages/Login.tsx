import { Text, Box, LoginTemplate, TextField } from "../components/index"
export default function Login() {
    return (
        <>
            <LoginTemplate>
                <>
                    <TextField
                    variant='outlined'
                    placeholder='login'
                    label="Outlined"
                    sx={{backgroundColor:'#fff'}}
                     />
                    <TextField
                    placeholder='senha'
                    variant='outlined'
                    label="Outlined"
                    sx={{backgroundColor:'#fff'}}
                    />
                </>
            </LoginTemplate>
        </>
    )
}
