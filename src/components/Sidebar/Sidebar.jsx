import { NavLink } from 'react-router-dom';
import FriendItem from './FriendItem/FriendItem.jsx'
import s from './Sidebar.module.css'

let Sidebar = (props) => {

    let state = props.store;

    let friendElements = state.friends.map((friend) => <FriendItem state={friend.FriendName} key={friend.id}/>);

    return (
        <div className={s.nav}>
            <NavLink to='/profile'>Profile</NavLink>
            <a href='/'>Feed</a>
            <NavLink to='/messanger'>Messanger</NavLink>
            <a href='/'>Friends</a>
            <a href='/'>Music</a>
            <NavLink to='/users'>Find users</NavLink>
            <div className={s.block_friends}>{friendElements}</div>
        </div>
    );
}

export default Sidebar;