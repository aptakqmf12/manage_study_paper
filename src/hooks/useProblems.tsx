import { useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../store';
import type { Problem } from '../types/problems';
import {
  fetchProblemsAsync,
  fetchSimilarProblemsAsync,
  deleteProblem,
  setActiveId,
  setSelectValue,
  clearActiveId,
  clearSimilarProblems,
  addProblem,
  swapProblem,
  sortProblemsByLevel,
  sortProblemsByType,
  sortProblemsByRandom,
} from '../store/slices/problemSlice';

const useProblems = () => {
  const dispatch = useDispatch<AppDispatch>();

  const problems: Problem[] = useSelector(
    (state: RootState) => state.problems.problems
  );
  const similarProblems: Problem[] = useSelector(
    (state: RootState) => state.problems.similarProblems
  );
  const activeId: number | null = useSelector(
    (state: RootState) => state.problems.activeId
  );
  const selectValue = useSelector(
    (state: RootState) => state.problems.selectValue
  );

  const fetchAllProblems = useCallback(() => {
    dispatch(fetchProblemsAsync());
  }, [dispatch]);

  const fetchSimilarProblems = useCallback(
    (problemId: number, excludedProblemIds: number[]) => {
      dispatch(
        fetchSimilarProblemsAsync({
          problemId,
          excludedProblemIds,
        })
      );
    },
    [dispatch]
  );

  const deleteProblemById = useCallback(
    (problemId: number) => {
      dispatch(deleteProblem(problemId));
    },
    [dispatch]
  );

  const setActiveById = useCallback(
    (problemId: number) => {
      dispatch(setActiveId(problemId));
    },
    [dispatch]
  );

  const setSelectValues = useCallback(
    (value: string) => {
      dispatch(setSelectValue(value));
    },
    [dispatch]
  );
  const setClearActiveId = useCallback(() => {
    dispatch(clearActiveId());
  }, [dispatch]);

  const setClearSimilarProblems = useCallback(() => {
    dispatch(clearSimilarProblems());
  }, [dispatch]);

  const setAddProblem = useCallback(
    (similarId: number) => {
      dispatch(addProblem({ similarId }));
    },
    [dispatch]
  );
  const setSwapProblem = useCallback(
    (similarId: number, activeId: number) => {
      dispatch(swapProblem({ similarId, activeId }));
      dispatch(setActiveId(similarId));
    },
    [dispatch]
  );

  const setSortProblemsByLevel = useCallback(() => {
    dispatch(sortProblemsByLevel());
  }, [dispatch]);

  const setSortProblemsByType = useCallback(() => {
    dispatch(sortProblemsByType());
  }, [dispatch]);

  const setSortProblemsByRandom = useCallback(() => {
    dispatch(sortProblemsByRandom());
  }, [dispatch]);

  return {
    problems,
    similarProblems,
    activeId,
    selectValue,
    fetchAllProblems,
    fetchSimilarProblems,
    deleteProblemById,
    setActiveById,
    setSelectValues,
    setClearActiveId,
    setClearSimilarProblems,
    setAddProblem,
    setSwapProblem,
    setSortProblemsByLevel,
    setSortProblemsByType,
    setSortProblemsByRandom,
  };
};

export default useProblems;
