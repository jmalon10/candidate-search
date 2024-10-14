import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import CandidateCard from '../components/CandidateCard';
import Candidate from '../interfaces/CandidateInterface';
const CandidateSearch = () => {
  const [currentCandidate, setCurrentCandidate] = useState<Candidate | null>(null);
  useEffect(() => {
    const fetchCandidate = async () => {
      const data = await searchGithub();
      setCurrentCandidate(data);
      console.log('This is where the data is:', data);
    };

    fetchCandidate();
  }, []);

  return (
    <div>
      <h1>CandidateSearch</h1>
      {currentCandidate && (
        <div>
          <CandidateCard candidate={currentCandidate} />
        </div>
      )}
    </div>
  );
};

export default CandidateSearch;
