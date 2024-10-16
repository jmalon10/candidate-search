import React, { useState } from 'react';

const SavedCandidates = () => { 
  // Access the saved candidates from local storage and display them in a table format with column headings for avatar, login, location, email, company, and bio  
  const [savedCandidates, setSavedCandidates] = useState(JSON.parse(localStorage.getItem('savedCandidates') || '[]'));

  // Function to delete a candidate
  const deleteCandidate = (id: number) => {
    const updatedCandidates = savedCandidates.filter((candidate: any) => candidate.id !== id);
    setSavedCandidates(updatedCandidates);
    localStorage.setItem('savedCandidates', JSON.stringify(updatedCandidates));
  };

  return (
    <>
      <h1>Potential Candidates</h1>
      { savedCandidates.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Login</th>
              <th>Location</th>
              <th>Email</th>
              <th>Company</th>
              <th>Bio</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {savedCandidates.map((candidate: any) => (
              <tr key={candidate.id}>
                <td><img src={candidate.avatar_url} alt="avatar" style={{ width: '50px', height: '50px', borderRadius: '50%' }} /></td>
                <td>{candidate.login}</td>
                <td>{candidate.location ? candidate.location : 'Location not available'}</td>
                <td>{candidate.email ? <a href={`mailto:${candidate.email}`}>{candidate.email}</a> : 'Email not available'}</td>
                <td>{candidate.company ? candidate.company : 'Company not available'}</td>
                <td>{candidate.bio ? candidate.bio : 'Bio not available'}</td>
                <td><button onClick={() => deleteCandidate(candidate.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No candidates were saved</p>
      )}
    </>
  );
};

export default SavedCandidates;
