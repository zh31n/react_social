import { connect } from 'react-redux';
import Sidebar from './Sidebar.jsx';

let mapStateToProps = (state) => {
    return {
        store: state.sideBar
    }

}

// let mapDispatchToProps = (dispatch) => {

// }


let SidebarContainer = connect(mapStateToProps)(Sidebar);


export default SidebarContainer;