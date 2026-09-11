'use client';

import { useEffect } from 'react';
import { errorEmitter } from '@/firebase/error-emitter';
import type { FirestorePermissionError } from '@/firebase/errors';

export function FirebaseErrorListener() {
  useEffect(() => {
    const handleError = (error: FirestorePermissionError) => {
      // Throwing the error will make it show up in the Next.js development overlay
      throw error;
    };

    errorEmitter.on('permission-error', handleError);

    // This component is mounted once and for the lifetime of the app, so no cleanup is needed.
  }, []);

  return null; // This component doesn't render anything
}
