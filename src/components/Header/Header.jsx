import s from './Header.module.css';


let Header = () => {
    return (
        <div className={s.header}>
            <div className={s.container}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Vanamo_Logo.svg/800px-Vanamo_Logo.svg.png" alt="" />
            </div>
        </div>
    );
}

export default Header;