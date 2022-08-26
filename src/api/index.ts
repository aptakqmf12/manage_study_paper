import axios from 'axios';

export const fetchProblems = async () => {
  return await axios.get(`${process.env.REACT_APP_API_URL}/problems`);
};

export const fetchSimilarProblemsById = async (
  problemId: number,
  excludedProblemIds: number[]
) => {
  return await axios.get(
    `${process.env.REACT_APP_API_URL}/problems/${problemId}/similarity`,
    {
      params: {
        excludedProblemIds: excludedProblemIds.join(), // 1,3,5
      },
    }
  );
};
