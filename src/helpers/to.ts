export type ToSuccess = { err: null, res: any };
export type ToError = { err: Error, res: null };

export async function to<T = never>(promise: Promise<T>): Promise<ToSuccess | ToError> {
  try {
    return { err: null, res: await promise };
  } catch (err) {
    return { err: err as Error, res: null };
  }
}
