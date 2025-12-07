import UserDetail from '../components/UserDetail';
import { useLocation } from 'react-router-dom';

const UserProfile = () => {
    const location = useLocation();
    const userData = location.state?.user;
    return (
        <>
            <UserDetail
                isOwnProfile={false}
                profileUser={userData}
            />
        </>
    )
}

export default UserProfile