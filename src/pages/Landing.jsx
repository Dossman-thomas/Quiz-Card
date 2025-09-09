import Button from 'react-bootstrap/Button';

export default function LandingPage () {

    return (
        <div className='container-fluid centered flex-column'>
            <h1>Welcome to QuizCard!</h1>
            <h4>Ready to study, buddy?</h4>
            <Button variant='primary' size='md' href='/manage-cards'>Let's Go!</Button>
        </div>
    );
}
