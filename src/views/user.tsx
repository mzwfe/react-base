import { useUserInfoStore } from "../stores/userStore";

const User = () => {
  const userInfo = useUserInfoStore((state) => state.userInfo);
  return (
    <>
      <div>userInfo</div>
      <div>{userInfo?.name}</div>
      <div>{userInfo?.age}</div>
      <div>{userInfo?.address}</div>
      <div>{userInfo?.email}</div>
    </>
  );
};

export default User;
