import s from './Login.module.css'

let Login = () => {
    return (
        <div className={s.content}>
            <div className={s.login}>
                <div className={s.loginTitle}>Sign in</div>
                <div className={s.login_input}>
                    <input type="text" name="" id="" placeholder='Your email' />
                </div>
                <div className={s.login_input}>
                    <input type="text" name="" id="" placeholder='Your password' />
                </div>
                <div className={s.signButton}>Sign in</div>
            </div>


        </div>)
}

export default Login;