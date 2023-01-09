import s from'./Header.module.css';


let Header = () =>{
    return(
        <div className={s.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Vanamo_Logo.svg/800px-Vanamo_Logo.svg.png" alt="" />
        </div>
    );
}

export default Header;