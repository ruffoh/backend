import { AsyncLocalStorage } from 'async_hooks';
import { v4 } from 'uuid';
export const context = new AsyncLocalStorage<Map<string, unknown>>();

export function createStoreWithTrasactionId() {
  const store = new Map<string, unknown>();
  const transactionId = v4();
  store.set('trasactionId', transactionId);
  return store;
}
