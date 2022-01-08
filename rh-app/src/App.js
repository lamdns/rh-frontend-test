import './App.css';

import {Row, Col, Button} from 'react-materialize'

const styles = {
  noMargin : {
    margin: 0
  }
}
 
function App() {
  return (
    <div className="App login">
      <Row className="header">
        <Col s={4}></Col>
        <Col s={4}>
          <Row
            style ={styles.noMargin}
          >
            <img
              alt=""
              src="avatar.png"
            />
          </Row>
          <Row style ={styles.noMargin}>
            <span className="title">
              Ben Burns
            </span>
          </Row>
          <Row>
            <span className="sub-title">
              Select date & time <span className="material-icons">arrow_forward</span>
              <span style={{color: "#BEC2C9"}}> Payment </span>
            </span>
          </Row>
        </Col>
      </Row>
      <Row style={styles.body} className="body">
        <Col s={4} offset= {"s4"}>
          <h6 > Your info </h6>

          <label for="input_name">Name</label>
          <div class="input-field">
            <input type="text" id="input_name" placeholder="Enter your name"/>
          </div>
          <label for="input_last_name">Last Name</label>
          <div class="input-field">
            <input type="text" id="input_last_name" placeholder="Enter your last name"/>
          </div>
          <label for="input_email">Email</label>
          <div class="input-field">
            <input type="text" id="input_email" placeholder="Enter your email"/>
          </div>

          <h6 > Select Payment </h6>
          <Row>
              <label style={{display : 'flex', paddingLeft: '0.75rem', paddingTop: '0.75rem', marginBottom: '0px'}}>
                <input name="payment" type="radio"/>
                <span></span>
                <input type="text" id="input_card" placeholder="Card Number" style={{width:"80%"}}/>
              </label>
          </Row>
          <p>
            <label>
              <input name="payment" type="radio"  />
              <span>Paypal</span>
            </label>
          </p>
          <Row >
            <span style={{fontSize: '12px', lineHeight: '20px', color: '#999CA0'}}>
              By pledging, you agree with Lynq <a href='#'>Terms of Use</a>, 
              <a href='#'> Privacy Policy</a> and <a href='#'>Cookie Policy</a>
            </span>
          </Row>
        </Col>
      </Row>
      <Row className="footer">
        <Button>Pay $75</Button>
      </Row>
    </div>
  );
}

export default App;
