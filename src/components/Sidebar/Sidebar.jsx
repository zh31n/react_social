import { NavLink } from 'react-router-dom';
import FriendItem from './FriendItem/FriendItem.jsx'
import s from './Sidebar.module.css'

let Sidebar = (props) =>{

    let friendElements = props.state.friends.map( (friend) => <FriendItem state={friend.FriendName} />);

    return(
        <div className={s.nav}>
            <NavLink  to='/profile'>Profile</NavLink>
            <a href='/'>Feed</a>
            <NavLink  to='/messanger'>Messanger</NavLink>
            <a href='/'>Friends</a>
            <a href='/'>Music</a>
            <div className={s.block_friends}>
                {/* <FriendItem state={props.state.friends} /> */}
                {friendElements}
            </div>
        </div>
    );
}

export default Sidebar;