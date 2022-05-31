export const kebabize = (str: string) =>
  str
    .split('')
    .map((letter, index) =>
      letter.toUpperCase() === letter
        ? `${index !== 0 ? '-' : ''}${letter.toLowerCase()}`
        : letter,
    )
    .join('');
