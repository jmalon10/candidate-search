import type React from 'react';
import type Candidate from '../interfaces/CandidateInterface';
import { useState, useEffect } from 'react';
import { searchGithub} from '../api/API';

type CandidateCardProps = {
    candidate: Candidate;
    saveCandidate: (candidate: Candidate) => void;
    deleteCandidate: (candidate: Candidate) => void;
    };

const CandidateCard = ({ candidate, saveCandidate, deleteCandidate }: CandidateCardProps) => {

    // display the candidate's avatar, login, location, email, company, and bio on a card component
    return (
        <div>
            <h2>{candidate.login}</h2>
            <img src={candidate.avatar_url} alt="avatar" />
            <p>{candidate.location}</p>
            <p>{candidate.email}</p>
            <p>{candidate.company}</p>
            <p>{candidate.bio}</p>
            <button onClick={() => saveCandidate(candidate)}>+</button>
            <button onClick={() => deleteCandidate(candidate)}>-</button>
        </div>
    );
    // when clicking the + button, save the candidate to the list of saved candidates and update the card to show a new random candidate
    
    // when clicking the - button, just update the card to show a new random candidate
};
export default CandidateCard;
 