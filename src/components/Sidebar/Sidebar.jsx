import { NavLink } from 'react-router-dom';
import s from './Sidebar.module.css'

let Sidebar = () =>{
    return(
        <div className={s.nav}>
            <NavLink exact to='/profile' activeClassName={s.active}>Profile</NavLink>
            <a >Feed</a>
            <NavLink exact to='/messanger' activeClassName={s.active}>Messanger</NavLink>
            <a >Friends</a>
            <a >Music</a>
        </div>
    );
}

export default Sidebar;