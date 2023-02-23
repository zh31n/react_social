import s from './ProfileStatus.module.css'
import Preloader from '../../Preloader/Preloader';
import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
    }

    render() {
        return (
            <div>
                {this.state.editMode === false
                    ? <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    : <div className="">
                        <input autoFocus={true} onBlur={this.deactivateEditMode} type="text" value={this.props.status} name="" id="" />
                    </div>
                }


            </div>
        );
    }
}

export default ProfileStatus;