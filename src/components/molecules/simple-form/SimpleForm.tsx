import { TextField, TextFieldProps,SxProps } from "@mui/material"

export type SimpleFormType = {
    formFields: TextFieldProps[]
    sx?:SxProps
}

export default function SimpleForm({ formFields,sx }: SimpleFormType) {
    return (
        <>
            {
                formFields.map((props: TextFieldProps,index) => {
                    return (
                        <TextField  key={index} {...props} sx={sx}/>
                    )
                })
            }
        </>
    )
}
