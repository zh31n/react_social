import { Field, reduxForm } from 'redux-form'
import s from './Login.module.css'


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.login}>
                <div className={s.login_input}>
                    <Field component={'input'} name={"email"} placeholder={'Your email'} />
                </div>
                <div className={s.login_input}>
                    <Field component={'input'} name={"password"} placeholder={'Your password'} />
                </div>
                <div className={s.checkboxRemeber}>
                    <Field component={'input'} type={"checkbox"} name={'rememberMe'} /> remeber me
                </div>
                <button className={s.signButton}>Sign in</button>
            </div>
        </form>
    )
}

const ReduxLoginForm = reduxForm({ form: 'login' })(LoginForm);

const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div className={s.content}>
            <div className={s.loginTitle}>Sign in</div>
            <ReduxLoginForm onSubmit={onSubmit} />
        </div>)
}

export default Login;