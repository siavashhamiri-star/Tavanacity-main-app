export interface FirestorePermissionErrorContext {
  path: string;
  operation: 'get' | 'list' | 'create' | 'update' | 'delete' | string;
  requestResourceData?: any;
}

export class FirestorePermissionError extends Error {
  context: FirestorePermissionErrorContext;

  constructor(context: FirestorePermissionErrorContext) {
    super(
      `Firestore permission denied on operation '${context.operation}' at path: ${context.path}`
    );
    this.name = 'FirestorePermissionError';
    this.context = context;
    Object.setPrototypeOf(this, FirestorePermissionError.prototype);
  }
}
