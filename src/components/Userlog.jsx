const Admin = () => <h1>welcome admine</h1>;
const User = () => <h1>welcome user</h1>;
const Userlog = ({ isloggedin, isadmine }) => {
  if (isadmine && isloggedin) {
    return <Admin />;
  } else {
    return <User />;
  }
};

export default Userlog;
