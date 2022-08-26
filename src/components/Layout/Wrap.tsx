import { FC } from 'react';
import * as S from './style';

type Props = {
  children: any; // JSX.Element | ??
};

const Wrap: FC<Props> = ({ children }) => {
  return <S.Wrap>{children}</S.Wrap>;
};

export default Wrap;
