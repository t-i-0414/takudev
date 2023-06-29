import { isNotNullable } from './isNotNullable';

export const filterNotNullableElement = <T>(arr: T[]) =>
  arr.filter((element): element is NonNullable<T> => isNotNullable(element));
