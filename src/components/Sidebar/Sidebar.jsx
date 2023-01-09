import s from './Sidebar.module.css'

let Sidebar = () =>{
    return(
        <div className={s.nav}>
            <a href="">Profile</a>
            <a href="">Feed</a>
            <a href="">Messanger</a>
            <a href="">Friends</a>
            <a href="">Music</a>
        </div>
    );
}

export default Sidebar;