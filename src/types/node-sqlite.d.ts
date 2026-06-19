declare module "node:sqlite" {
  interface DatabaseSyncOptions {
    readonly?: boolean;
  }

  interface StatementSyncResult {
    changes: number;
    lastInsertRowid: number | bigint;
  }

  interface StatementSync {
    run(...params: unknown[]): StatementSyncResult;
    get(...params: unknown[]): unknown;
    all(...params: unknown[]): unknown[];
    iterate(...params: unknown[]): IterableIterator<unknown>;
  }

  export class DatabaseSync {
    constructor(path: string, options?: DatabaseSyncOptions);
    exec(sql: string): void;
    prepare(sql: string): StatementSync;
    close(): void;
  }
}
