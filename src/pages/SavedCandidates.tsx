const SavedCandidates = () => { 
  // access the saved candidates from local storage and display them in a table format with column headings for avitar, login, location, email, company, and bio  
  const savedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
  // for each saved candidate, display the candidate's avatar, login, location, email, company, and bio in a table row
  return (
    <>
      <h1>Potential Candidates</h1>
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Login</th>
            <th>Location</th>
            <th>Email</th>
            <th>Company</th>
            <th>Bio</th>
          </tr>
        </thead>
        <tbody>
          {savedCandidates.map((candidate: any) => (
            <tr key={candidate.id}>
              <td><img src={candidate.avatar_url} alt="avatar" style={{ width: '50px', height: '50px', borderRadius: '50%' }} /></td>
              <td>{candidate.login}</td>
              <td>{candidate.location ? candidate.location : 'Location not available'}</td>
              <td>{candidate.email ? candidate.email : 'Email not available'}</td>
              <td>{candidate.company ? candidate.company : 'Company not available'}</td>
              <td>{candidate.bio ? candidate.bio : 'Bio not available'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

 export default SavedCandidates;
