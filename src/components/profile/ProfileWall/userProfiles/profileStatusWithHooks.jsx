import React, {useEffect, useState} from "react";


let ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);
    useEffect(()=>{
        setStatus(props.status)
    }, [props.status]);

    const activateEditMode = () => {
        if (props.isOwner)
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || '--no_status--'}</span>
            </div>
            }
            {editMode && props.isOwner &&
            <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
            }

        </>
    )
}

export default ProfileStatusWithHooks;