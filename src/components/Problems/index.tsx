import { ChangeEvent, useState, useEffect } from 'react';
import Board from '../Board';
import useProblems from '../../hooks/useProblems';
import useMediaSize from '../../hooks/useMediaSize';
import * as S from './style';

const Problems = () => {
  const {
    problems,
    activeId,
    selectValue,
    fetchAllProblems,
    setSortProblemsByLevel,
    setSortProblemsByType,
    setSortProblemsByRandom,
    setSelectValues,
  } = useProblems();
  const { isPc, isTablet } = useMediaSize();

  useEffect(() => {
    fetchAllProblems();
  }, []);

  useEffect(() => {
    if (selectValue === 'level') {
      setSortProblemsByLevel();
    } else if (selectValue === 'type') {
      setSortProblemsByType();
    }
  }, [selectValue]);

  const getProblemsNumByLevel = (level: 1 | 2 | 3 | 4 | 5) => {
    return problems.filter((prb) => prb.level === level).length;
  };

  return (
    <S.Container>
      <S.Title>학습지 상세 편집</S.Title>
      <S.FilterSelect
        onChange={(e: ChangeEvent<HTMLSelectElement>) => {
          setSelectValues(e.target.value ?? '');
        }}
        value={selectValue}
      >
        <option value=''>사용자 정렬</option>
        <option value='level'>난이도 오름차순</option>
        <option value='type'>객관식 상단배치</option>
      </S.FilterSelect>
      <S.FilterButton
        onClick={() => {
          setSortProblemsByRandom();
          setSelectValues('');
        }}
      >
        무작위 정렬
      </S.FilterButton>

      {problems.length > 0 ? (
        <>
          <S.Problems>
            {problems.map((problem) => {
              return (
                <Board problem={problem} boardType='problem' key={problem.id} />
              );
            })}
          </S.Problems>
          <S.Score>
            <li>하{getProblemsNumByLevel(1)}</li>
            <li>중하{getProblemsNumByLevel(2)}</li>
            <li>중{getProblemsNumByLevel(3)}</li>
            <li>상{getProblemsNumByLevel(4)}</li>
            <li>최상{getProblemsNumByLevel(5)}</li>
            <li>문제 수 {problems.length}개</li>
          </S.Score>
        </>
      ) : (
        <S.Empty>
          <div>학습지 문제수가 없습니다.</div>
          <div>다음단계로 넘어가기 위해 문제를 추가해주세요.</div>
        </S.Empty>
      )}
      <div></div>
    </S.Container>
  );
};

export default Problems;
