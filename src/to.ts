export type ToSuccess = { err: null, res: any };
export type ToError = { err: Error, res: null };

export async function to(promise: Promise<any>): Promise<ToSuccess | ToError> {
  try {
    return { err: null, res: await promise };
  } catch (err) {
    return { err: err as Error, res: null };
  }
}
