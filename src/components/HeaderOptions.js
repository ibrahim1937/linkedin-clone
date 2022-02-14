import React from 'react'
import "../styles/HeaderOptions.css"
import { Avatar } from '@material-ui/core'
import { selectUser } from "../features/userSlice"
import { useSelector } from "react-redux"

function HeaderOptions({ avatar, Icon, title, onClick}) {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className="headerOptions">
        {Icon && <Icon className="headerOptions__icon" />}
        {!Icon && (
            <Avatar className="headerOptions__icon" src={user?.photoURL}>
              {user?.displayName[0]}
            </Avatar>
        )}
        <h3 className="headerOptions__title">{title}</h3>
    </div>
  )
}

export default HeaderOptions