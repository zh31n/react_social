import s from './ProfileStatus.module.css'
import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
            status: this.props.status
        });
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    render() {
        return (
            <div>
                {this.state.editMode === false
                    ? <span onDoubleClick={this.activateEditMode}>{this.props.status || '---'}</span>
                    : <input onChange={this.onStatusChange} className={s.inputStatus} autoFocus={true} onBlur={this.deactivateEditMode} type="text" value={this.state.status} name="" id="" />
                }


            </div>
        );
    }
}

export default ProfileStatus;