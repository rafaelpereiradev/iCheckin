import { useEffect, useState } from 'react';
import { Text, Box, LoginTemplate, TextField } from '../components/index';

type LoginCredencials = {
  user: string;
  password: string;
};
export default function Login() {
  const [login, setLogin] = useState<LoginCredencials>({
    user: '',
    password: '',
  });
  
  return (
    <>
      <LoginTemplate width="300px">
        <>
          <TextField
            variant="filled"
            placeholder="Usuário"
            label="Usuário"
            sx={{width: '90%' }}
          />
          <TextField
            placeholder="Senha"
            variant="filled"
            type="password"
            label="Senha"
            sx={{width: '90%' }}
          />
        </>
      </LoginTemplate>
    </>
  );
}
