import './FormRegister.css'

export const FormRegister = () => {

    return (
        <form className='form-register'>
            <label htmlFor='email'>Email</label>
            <input type="email" id='email'/>
            <label htmlFor='password'>Password</label>
            <input type="password" id='password'/>
            <button>REGISTER</button>
        </form>
    )
}
