import { Box, Text, TextField, Button,LoadingButton} from '../index';
import Logo from '../../assets/ichekin.png';
type LoginTemplate = {
  children?: JSX.Element;
  width?: string;
};
const teste = Logo;
export default function LoginTemplate({ children, width }: LoginTemplate) {
  return (
    <>
      <Box
        borderRadius="20px"
        sx={{ border: '3px solid #fff;', margin: '200px auto' }}
        display="flex"
        flexDirection="column"
        height="400px"
        width={width}
        flexWrap="wrap"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Text variant="h2" color="white">
          icheck-in
        </Text>
        {children}
        <LoadingButton
          // loading={isLoading}
          // disabled={disableButton}
          variant="contained"
          size="medium"
          sx={{
            width: '193px',
          }}
          // onClick={handleLogin}
        >
          LOGIN
        </LoadingButton>
      </Box>
    </>
  );
}
