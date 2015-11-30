import React, { PropTypes, Component } from 'react';
import style from './App.css'; // eslint-disable-line no-unused-vars
import Form from '../Form';
import ThumbnailList from '../ThumbnailList';

class App extends Component {

  static propTypes = {
    data: PropTypes.object.isRequired,
  };

  static defaultProps = {
    data: {},
  };

  render() {
    const data = this.props.data || {};
    const badge = data.badge || {};
    const thumbnailList = data.thumbnailList || {};

    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="App-thumbnailListWrapper col col-sm-12">
              <ThumbnailList list={ thumbnailList } />
            </div>

            <div className="col col-sm-12">
              <Form badge={ badge } />
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
