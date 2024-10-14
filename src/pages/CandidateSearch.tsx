import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import CandidateCard from '../components/CandidateCard';
import Candidate from '../interfaces/CandidateInterface';

const CandidateSearch = () => {
  const [currentCandidate, setCurrentCandidate] = useState<Candidate | null>(null);
  useEffect(() => {
    const fetchCandidates = async () => {
      const data = await searchGithub();
      setCurrentCandidate(data[0]);
    };
    fetchCandidates();
  }, []);
// use the data array returned from the fetchCandidates function to switch the currentcanditate state to the next candidate in the array everytime the + button is clicked
  const saveCandidate = async () => {
    const data = await searchGithub();
    for (let i = 0; i < data.length; i++) {
      setCurrentCandidate(data[i]);
    }
    // save the currentCanidate to an array of already saved candidates or an empty array in local storage
    let savedCandidates = [];
    const storedSavedCandidates = localStorage.getItem('savedCandidates');
    if (typeof storedSavedCandidates === 'string') {
      savedCandidates = JSON.parse(storedSavedCandidates);
    }
    savedCandidates.push(currentCandidate);
    localStorage.setItem(
      'savedCandidates',
      JSON.stringify(savedCandidates)
    );
  };
 
  const deleteCandidate = async () => {
    const data = await searchGithub();
    for (let i = 0; i < data.length; i++) {
      setCurrentCandidate(data[i]);
    }
  }

return (
    <div>
      <h1>CandidateSearch</h1>
      {currentCandidate && (
        <div>
          <CandidateCard candidate={currentCandidate} saveCandidate={saveCandidate} deleteCandidate={deleteCandidate}/>
        </div>
      )}
    </div>
  );
};

export default CandidateSearch;
