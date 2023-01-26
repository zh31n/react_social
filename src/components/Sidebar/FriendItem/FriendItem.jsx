import s from './FriendItem.module.css'

let FriendItem = (props) => {
    return (
        <div className={s.fr_item}>
            <div className={s.fr_img}></div>
            <div className={s.fr_name}>{props.state}</div>
        </div>
    );
}

export default FriendItem;