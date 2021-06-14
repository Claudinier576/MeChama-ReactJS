import * as yup from 'yup'

export const userSchema = yup.object().shape({
    fullname: yup.string().required("Nome é obrigatório."),
    cpf: yup.string().required("CPF é obrigatório."),
    gender: yup.string(),
    email: yup.string().email("Favor inserir um email válido.").required("Email é obrigatório."),
    password: yup.string().required("Senha é obrigatório."),
    cpassword: yup.string().oneOf([yup.ref("password"), null]),
    phone: yup.string(),
})

export const compSchema = yup.object().shape({
    fullname: yup.string().required("Nome é obrigatório."),
    cnpj: yup.string().required("CNPJ é obrigatório."),
    email: yup.string().email("Favor inserir um email válido.").required("Email é obrigatório."),
    password: yup.string().required("Senha é obrigatório."),
    cpassword: yup.string().oneOf([yup.ref("password"), null]),
    phone: yup.string(),
})