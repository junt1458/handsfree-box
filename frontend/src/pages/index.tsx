import { useEffect, useState } from 'react';
import Router from 'next/router';

import { auth } from '../utils/Firebase';

import UserHeader from '../components/organisms/UserHeader';

const IndexPage: React.FunctionComponent = () => {
  const [currentUser, setCurrentUser] = useState<null | unknown>(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      user ? setCurrentUser(user) : Router.push('/login');
    });
  }, []);

  const logout = async (): Promise<void> => {
    try {
      await auth.signOut();
      Router.push('/');
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div>
      <UserHeader />
      <pre>{JSON.stringify(currentUser, null, 4)}</pre>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default IndexPage;