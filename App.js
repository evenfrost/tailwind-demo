import { h, Component } from 'preact';

export default class App extends Component {
  constructor() {
    super();

    this.state.buttonTitle = 'Primary';
  }

  handleButtonClick() {
    this.setState({
      buttonTitle: 'Clicked',
    });
  }

  render() {
    return (
      <div className="h-screen w-screen flex justify-center items-center" >
        <div className="btn-group">
          <button class="btn btn-primary" onClick={event => this.handleButtonClick()}>{this.state.buttonTitle}</button>
          <button class="btn btn-success">Success</button>
        </div>
      </div>
    );
  }
};
