// import { useEffect, useState } from "react";
import UserDetail from "../components/UserDetail";
// import { getUser } from "../utils/userStorage";
// import { getUserDetail} from "../api/user";

const Profile = () => {
  // const currentUser = getUser();
  // const [userDetail, setUserDetail] = useState<any>(null);
  // useEffect(() => {
  //   const fetchUserDetail = async () => {
  //     if (!currentUser?._id) return;
  //     const res = await getUserDetail(currentUser._id);
  //     setUserDetail(res?.data);
  //   };

  //   fetchUserDetail();
  // }, [currentUser?._id]);


  return (
    <>
      <UserDetail isOwnProfile={true} />
    </>
  );
};

export default Profile;
