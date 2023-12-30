import AllUsers from '@/components/AllUsers/AllUsers';
import asIWish from './Allusers.module.css';

const AllUsersPage = () => {
  return (
    <div>
      <h2 className={asIWish.kaka}>I am From Here</h2>
      <AllUsers></AllUsers>
    </div>
  );
};

export default AllUsersPage;
