'use client';
import { useEffect, useState } from 'react';
import type { User } from 'firebase/auth';
import { useAuth } from '../provider';
import { doc } from 'firebase/firestore';
import { useDoc } from '../firestore/use-doc';
import { useFirestore } from '..';

export function useUser() {
  const auth = useAuth();
  const firestore = useFirestore();
  const [user, setUser] = useState<User | null>(auth.currentUser);

  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, [auth]);

  const userRef = user ? doc(firestore, 'users', user.uid) : undefined;
  const { data: profile, ...rest } = useDoc(userRef);

  return { ...rest, data: user ? { ...user, ...profile } : null };
}
