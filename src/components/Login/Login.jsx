import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'
import { loginThunk } from '../../Redux/AuthReducer';
import s from './Login.module.css'


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.login}>
                <div className={s.login_input}>
                    <Field component={'input'} name={"email"} placeholder={'Your email'} />
                </div>
                <div className={s.login_input}>
                    <Field component={'input'} name={"password"} placeholder={'Your password'} type={'password'} />
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

const Login = (props) => {
    const onSubmit = (formData) => {
        props.loginThunk(formData.email, formData.password, formData.remeberMe)
    }

    if (props.isAuth) {
        return <Navigate to={'/profile'} />
    }
    return (
        <div className={s.content}>
            <div className={s.loginTitle}>Sign in</div>
            <ReduxLoginForm onSubmit={onSubmit} />

        </div>)


}

const mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { loginThunk })(Login);