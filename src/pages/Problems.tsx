import React from 'react';
import SimilarProblems from '../components/SimilarProblems';
import Problems from '../components/Problems';
import Wrap from '../components/Layout/Wrap';

const ProblemsPage = () => {
  return (
    <Wrap>
      <SimilarProblems />
      <Problems />
    </Wrap>
  );
};

export default ProblemsPage;
