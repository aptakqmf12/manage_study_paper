import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Problem } from '../../types/problems';
import { fetchProblems, fetchSimilarProblemsById } from '../../api/index';

export const fetchProblemsAsync = createAsyncThunk(
  'problems/problem',
  async () => {
    const response = await fetchProblems();
    return response.data;
  }
);

export const fetchSimilarProblemsAsync = createAsyncThunk(
  'problems/similar',
  async (request: { problemId: number; excludedProblemIds: number[] }) => {
    const { problemId, excludedProblemIds } = request;
    const response = await fetchSimilarProblemsById(
      problemId,
      excludedProblemIds
    );
    return response.data;
  }
);

export type ProblemsState = {
  problems: Problem[];
  similarProblems: Problem[];
  activeId: number | null;
  selectValue: string;
};

const initialState: ProblemsState = {
  problems: [],
  similarProblems: [],
  activeId: null,
  selectValue: '',
};

export const problemSlice = createSlice({
  name: 'problem',
  initialState,
  reducers: {
    deleteProblem: (state, action: PayloadAction<number>) => {
      state.problems = state.problems.filter(
        (prb) => prb.id !== action.payload
      );
    },
    setActiveId: (state, action: PayloadAction<number>) => {
      state.activeId = action.payload;
    },
    setSelectValue: (state, action: PayloadAction<string>) => {
      state.selectValue = action.payload;
    },
    clearActiveId: (state) => {
      state.activeId = null;
    },
    clearSimilarProblems: (state) => {
      state.similarProblems = [];
    },
    addProblem: (state, action: PayloadAction<{ similarId: number }>) => {
      const { similarId } = action.payload;
      const leftIndex = state.similarProblems.findIndex(
        (prb) => prb.id === similarId
      );
      const rightIndex = state.problems.findIndex(
        (prb) => prb.id === state.activeId
      );

      state.problems.splice(
        rightIndex + 1,
        0,
        state.similarProblems[leftIndex]
      );
      state.similarProblems.splice(leftIndex, 1);
    },
    swapProblem: (
      state,
      action: PayloadAction<{ similarId: number; activeId: number | null }>
    ) => {
      const { similarId } = action.payload;
      if (!state.activeId) {
        return;
      }

      const leftIndex = state.similarProblems.findIndex(
        (prb) => prb.id === similarId
      );
      const rightIndex = state.problems.findIndex(
        (prb) => prb.id === state.activeId
      );

      let tempArr = [...state.similarProblems];
      tempArr[leftIndex] = state.problems[rightIndex];
      state.problems[rightIndex] = state.similarProblems[leftIndex];
      state.similarProblems = tempArr;
    },
    sortProblemsByLevel: (state) => {
      state.problems.sort((after, before) => after.level - before.level);
    },
    sortProblemsByType: (state) => {
      state.problems.sort((after, before) => after.type - before.type);
    },
    sortProblemsByRandom: (state) => {
      state.problems.sort(() => Math.random() - 0.5);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProblemsAsync.fulfilled, (state, action) => {
        state.problems = action.payload;
      })
      .addCase(fetchSimilarProblemsAsync.fulfilled, (state, action) => {
        state.similarProblems = action.payload;
      });
  },
});

export const {
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
} = problemSlice.actions;
export default problemSlice.reducer;
