import LoginTemplate from '../../templates/login/LoginTemplate'

export default function Login() {
  return (
    <>
      <LoginTemplate
        form={{
          formFields: [
            {
              placeholder:'login',
              variant:'outlined',
            },
            {
              placeholder:'senha',
              variant:'outlined',
            }
          ]
        }}

      />
    </>
  )
}
