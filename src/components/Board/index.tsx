import { FC } from 'react';
import type { Problem } from '../../types/problems';
import * as S from './style';
import useProblems from '../../hooks/useProblems';
import { replaceLevel } from '../../util/replaceLevel';
import { ReactComponent as Add } from '../../assets/icons/Add.svg';
import { ReactComponent as AddOn } from '../../assets/icons/Add-On.svg';
import { ReactComponent as Delete } from '../../assets/icons/Delete.svg';
import { ReactComponent as Swap } from '../../assets/icons/Swap.svg';

type Props = {
  problem: Problem;
  boardType: 'problem' | 'similar';
};

const Board: FC<Props> = ({ problem, boardType }) => {
  const { id, level, type, problemImageUrl, title, answerRate } = problem;
  const {
    activeId,
    fetchSimilarProblems,
    deleteProblemById,
    setActiveById,
    setClearActiveId,
    setClearSimilarProblems,
    setAddProblem,
    setSwapProblem,
    setSelectValues,
  } = useProblems();

  const isActive = id === activeId;

  return (
    <S.ProblemBoard
      className={isActive && boardType === 'problem' ? 'active' : ''}
    >
      <div className='header'>
        <div className='header__info'>
          <p className='header__info--id'>{id}</p>
          <p className='header__info--title'>{title}</p>
        </div>

        {boardType === 'problem' ? (
          <div className='header__btns'>
            <button
              onClick={() => {
                setActiveById(id);
                if (activeId === id) {
                  return;
                }
                fetchSimilarProblems(id, [1, 2, 3]);
              }}
              className={isActive ? 'active' : ''}
            >
              {isActive ? <AddOn /> : <Add />}
              <span>유사문제</span>
            </button>
            <button
              onClick={() => {
                if (id === activeId) {
                  setClearActiveId();
                  setClearSimilarProblems();
                }
                setSelectValues('');
                deleteProblemById(id);
              }}
            >
              <Delete />
              <span>삭제</span>
            </button>
          </div>
        ) : (
          <div className='header__btns'>
            <button
              onClick={() => {
                setSelectValues('');
                setSwapProblem(id, activeId ?? 0);
              }}
            >
              <Swap /> <span>교체</span>
            </button>
            <button
              onClick={() => {
                setSelectValues('');
                setAddProblem(id);
              }}
            >
              <Add />
              <span>추가</span>
            </button>
          </div>
        )}
      </div>
      <div className='content'>
        <div className='content__labels'>
          <span className={`content__labels--level level${level}`}>
            {replaceLevel(level)}{' '}
          </span>
          <span className='content__labels--rate'>{answerRate}%</span>
          <span className='content__labels--type'>
            {type === 1 ? '객관식' : '주관식'}
          </span>
        </div>
        <div className='content__image'>
          <img src={problemImageUrl} alt={title} />
        </div>
      </div>
    </S.ProblemBoard>
  );
};

export default Board;
