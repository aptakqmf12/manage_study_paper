import React, { useState } from 'react';
import Board from '../Board';
import useProblems from '../../hooks/useProblems';
import * as S from './style';
import { ReactComponent as Add } from '../../assets/icons/Add.svg';

const SimilarProblems = () => {
  const { activeId, similarProblems } = useProblems();
  return (
    <S.Container>
      <S.Title>유사 문항</S.Title>
      {activeId && similarProblems.length > 0 ? (
        <S.Problems>
          {similarProblems.map((problem, prbIndex) => {
            return (
              <Board problem={problem} boardType='similar' key={problem.id} />
            );
          })}
        </S.Problems>
      ) : (
        <S.Empty>
          <div>
            <span className='label'>
              <Add /> 유사문제
            </span>{' '}
            버튼을 누르면
          </div>
          <div>문제를 추가 또는 교체할수 있습니다.</div>
        </S.Empty>
      )}
    </S.Container>
  );
};

export default SimilarProblems;
