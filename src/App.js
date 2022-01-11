import VideoCallLayout from './layout/VideoCallLayout';
import PaymentForm from './features/PaymentForm/PaymentForm';
import { Button } from 'react-materialize';

function App() {
  return (
    <div className="App">
      <VideoCallLayout footerChildren={<Button>Pay $75</Button>}>
        <PaymentForm />
      </VideoCallLayout>
    </div>
  );
}

export default App;
