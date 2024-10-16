import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import CandidateCard from '../components/CandidateCard';
import Candidate from '../interfaces/CandidateInterface';

const CandidateSearch = () => {
  const [currentCandidate, setCurrentCandidate] = useState<Candidate | null>(null);
  const [candidateData, setCandidateData] = useState<Candidate[]>([]);
  useEffect(() => {
        const fetchCandidates = async () => {
      const data = await searchGithub();
      for (let i = 0; i < data.length; i++) {
        // console.log('candidate search:', data[i].login);
        const newData = await searchGithubUser(data[i].login);
        console.log('newData:', newData);
        // put each new data object into a new array
        candidateData.push(newData);
      }
      setCandidateData(candidateData);
      setCurrentCandidate(candidateData[0]);
    };
    fetchCandidates();
  }, []);
// use the data array returned from the fetchCandidates function to switch the currentcanditate state to the next candidate in the array everytime the + button is clicked
  const saveCandidate = () => {
    if (!currentCandidate) return;
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
  // set the current candidate to the next candidate in the array
    setCurrentCandidate(candidateData [candidateData.indexOf(currentCandidate) + 1]);
  };
 
  const deleteCandidate = () => {
    if (!currentCandidate) return;
    setCurrentCandidate(candidateData [candidateData.indexOf(currentCandidate) + 1]);
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
