export interface Repository<R> {
  (abortSignal?: AbortSignal): R;
}
