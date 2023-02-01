import LoginTemplate from '../../templates/login/LoginTemplate'

export default function Login() {
  return (
    <>
      <LoginTemplate
        form={{
          formFields: [
            {
              placeholder: 'Usuário',
              label:'Usuário',
              variant: 'outlined',
            },
            {
              placeholder: 'Senha',
              label:'Senha',
              type:'password',
              variant: 'outlined',
            }
          ]
        }}

      />
    </>
  )
}
