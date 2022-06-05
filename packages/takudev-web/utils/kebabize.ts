export const kebabize = (str: string) =>
  str
    .split('')
    .map((letter, index) =>
      letter.toUpperCase() === letter
        ? `${
            index !== 0 && str[index - 1] !== '-' ? '-' : ''
          }${letter.toLowerCase()}`
        : letter,
    )
    .join('');
