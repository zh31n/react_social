import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import logoutImg from '../../img/logoutImg.svg'


let Header = (props) => {
    return (
        <div className={s.header}>
            <div className={s.container}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Vanamo_Logo.svg/800px-Vanamo_Logo.svg.png" alt="" />
                <div className={s.block_info_auth}>
                    {props.isAuth
                        ? <div className={s.userName}>{props.login} <img onClick={props.logoutThunk} src={logoutImg} alt="" /></div>
                        : <NavLink to={'login'} className={s.loginButton}>Login</NavLink>}
                </div>
            </div>
        </div>
    );
}

export default Header;