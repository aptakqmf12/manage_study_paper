export const replaceLevel = (level: 1 | 2 | 3 | 4 | 5) => {
  switch (level) {
    case 1:
      return '하';
    case 2:
      return '중하';
    case 3:
      return '중';
    case 4:
      return '상';
    case 5:
      return '최상';
  }
};
