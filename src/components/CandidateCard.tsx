import type Candidate from '../interfaces/CandidateInterface';



type CandidateCardProps = {
    candidate: Candidate;
    saveCandidate: (candidate: Candidate) => void;
    deleteCandidate: (candidate: Candidate) => void;
    };

const CandidateCard = ({ candidate, saveCandidate, deleteCandidate }: CandidateCardProps) => {
    const cardStyle = {
        backgroundColor: '#000000',
        borderRadius: '10px',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
        margin: '20px auto',
        textAlign: 'center' as 'center',
        olor: '#ffffff',
      };
    
      const imageStyle = {
        borderRadius: '50%',
        width: '150px',
        height: '150px',
        objectFit: 'cover' as 'cover',
        margin: '10px auto',
      };
    
      const buttonStyle = {
        margin: '5px',
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer' as 'pointer',
      };
    // display the candidate's avatar, login, location, email, company, and bio on a card component
    return (
        <div style={cardStyle}>
          <h2>{candidate.login}</h2>
          <img src={candidate.avatar_url} alt="avatar" style={imageStyle} />
          <p><strong>Location: </strong>{candidate.location ? candidate.location : 'Location not available'}</p>
          <p><strong>Email: </strong>{candidate.email ? candidate.email : 'Email not available'}</p>
          <p><strong>Company: </strong>{candidate.company ? candidate.company : 'Company not available'}</p>
          <p><strong>Bio: </strong>{candidate.bio ? candidate.bio : 'Bio not available'}</p>
          <button onClick={() => saveCandidate(candidate)} style={{ ...buttonStyle, backgroundColor: '#4CAF50', color: 'white' }}>+</button>
          <button onClick={() => deleteCandidate(candidate)} style={{ ...buttonStyle, backgroundColor: '#f44336', color: 'white' }}>-</button>
        </div>
      );
    // when clicking the + button, save the candidate to the list of saved candidates and update the card to show a new random candidate
    
    // when clicking the - button, just update the card to show a new random candidate
};
export default CandidateCard;
 