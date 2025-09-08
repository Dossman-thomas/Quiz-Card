import Button from 'react-bootstrap/Button';

export default function WelcomePage () {

    return (
        <div className='container-fluid'>
            <h1>Welcome to QuizCard!</h1>
            <h4>Ready to study, buddy?</h4>
            <Button variant='primary' size='md' href='/manage-cards'>Let's Go!</Button>
        </div>
    );
}
