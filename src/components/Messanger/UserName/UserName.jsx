import { NavLink } from 'react-router-dom';
import s from './UserName.module.css'

let UserName = (props) => {
    return (
        <div className={s.UserName}>
            <div className={s.user_img}></div>
            <NavLink to={'/messanger/' + props.id}>{props.UserName}</NavLink> 
        </div>
    );
}

export default UserName;