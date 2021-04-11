import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setUser } from '../../redux/actionCreators/topicsAC'
import { API_URL } from '../../config'
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import ProfileMain from '../ProfileMain/ProfileMain';


function Profile() {

    const dispatch = useDispatch()

    const uploadHandler = async (file) => {
        try {
            const formData = new FormData();
            formData.append('file', file);
            await fetch(`${API_URL}api/v1/files/avatar`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    // 'Content-Type': 'application/json'
                },
                body: formData
            })
                .then(res => res.json())
                .then((response) => {
                    dispatch(setUser(response))
                })
        } catch (e) {
            console.log(e);
        }
    }

    const deleteHandler = async () => {
        try {
            console.log('here fetch')
            await fetch(`${API_URL}api/v1/files/avatar`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                },
            })
                .then(res => res.json())
                .then((response) => {
                    console.log('=======>', response)
                    dispatch(setUser(response))
                })
        } catch (e) {
            console.log(e);
        }
    }

    const inputAvatarHandler = (e) => {
        const file = e.target.files[0];
        uploadHandler(file);
    }

    return (
      <>
      <ProfileHeader/>
      <ProfileMain/>
        <div className="mx-auto" style={Object.assign({}, { width: '400px' }, { 'margin-top': '10px', 'margin-bottom': '10px' })}>
            <div className="mb-3">
                <input accept="image/*" onChange={(e) => inputAvatarHandler(e)} name="avatar" type="file" placeholder="Dowload avatar ..." />
            </div>
            <button onClick={deleteHandler} type="submit" className="btn btn-primary">Delete avatar</button>
        </div>
      </>
    )
}

export default Profile;
