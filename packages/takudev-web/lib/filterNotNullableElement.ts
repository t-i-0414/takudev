import { isNotNullable } from './isNotNullable';

export const filterNotNullableElement = <T>(arr: (T | null | undefined)[]) =>
  arr.filter((element): element is T => isNotNullable(element));
