import { useEffect, useState } from 'react';

export function useAuth() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem('auth') === 'true';
    setIsAuth(auth);
  }, []); // ← dijalankan saat komponen mount

  return isAuth;
}