export const isUndefinedOrNull = (
  element: unknown
): element is null | undefined =>
  typeof element === 'undefined' || element === null;
