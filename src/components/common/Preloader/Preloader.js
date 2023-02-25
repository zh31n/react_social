import loaderGif from '../../../img/loading.gif'
import s from './Preloader.module.css'

const Preloader = () => {
    return(
        <div className={s.loader_back}>
            <img src={loaderGif} alt='preloader'/>
        </div>  
    )
}

export default Preloader;