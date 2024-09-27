import './User.css'
const UserAvatar = ({userId}) => {
    return <img
        src={`https://i.pravatar.cc/40?img=${userId}`}
        alt="User"
        className="user-avatar"
    />
}

export default UserAvatar;