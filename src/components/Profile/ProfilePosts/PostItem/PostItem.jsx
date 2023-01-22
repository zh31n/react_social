import s from './PostItem.module.css'

let PostItem = (props) => {
    return (
        <div className="">
            <div className={s.post}>{props.message}</div>
            <div className={s.likes}>likes:{props.likes}</div>
        </div>
    );
}

export default PostItem;