import { useForm } from 'react-hook-form'
import './FormRegister.css'
import { zodResolver } from '@hookform/resolvers/zod'
import { formSchema } from './formSchema'
// import { zodResolver } from '@hookform/resolvers/zod/src/zod.js'

export const FormRegister = () => {

    const { 
        register, 
        handleSubmit,
        formState: {
            errors,
        },
    } = useForm({
        defaultValues: {
            email: '',
            password: '',
            confirm_password: '',
        },
        resolver: zodResolver(formSchema),
    })

    const onSubmit = (formSchema) => console.log(formSchema)


    return (
        <form className='form-register' onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor='email'>Email</label>
                <input id='email' {...register('email')}/>
                <span>{errors.email?.message}</span>
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input type="password" id='password' {...register('password')}/>
                <span>{errors.password?.message}</span>
            </div>
            <div>
                <label htmlFor='confirm_password'>Confirm password</label>
                <input type="password" id='confirm_password' {...register('confirm_password')}/>
                <span>{errors.confirm_password?.message}</span>
            </div>
            <button>REGISTER</button>
        </form>
    )
}
