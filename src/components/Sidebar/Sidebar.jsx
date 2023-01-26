import { NavLink } from 'react-router-dom';
import FriendItem from './FriendItem/FriendItem.jsx'
import s from './Sidebar.module.css'

let Sidebar = (props) =>{

    let friendElements = props.state.friends.map( (friend) => <FriendItem state={friend.FriendName} />);

    return(
        <div className={s.nav}>
            <NavLink exact to='/profile' activeClassName={s.active}>Profile</NavLink>
            <a >Feed</a>
            <NavLink exact to='/messanger' activeClassName={s.active}>Messanger</NavLink>
            <a >Friends</a>
            <a >Music</a>
            <div className={s.block_friends}>
                {/* <FriendItem state={props.state.friends} /> */}
                {friendElements}
            </div>
        </div>
    );
}

export default Sidebar;