export type Awaited<T extends Promise<unknown>> = T extends Promise<infer R>
  ? R extends Promise<unknown>
    ? Awaited<R>
    : R
  : never;
