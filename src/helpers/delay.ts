export async function delay<T>(ms: number): Promise<void>  {
  return new Promise((resolve) => setTimeout(() => {
    resolve();
  }, ms));
}
