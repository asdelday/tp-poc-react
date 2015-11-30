import React, { PropTypes, Component } from 'react';
import style from './ThumbnailList.css'; // eslint-disable-line no-unused-vars
import Thumbnail from '../Thumbnail';

class ThumbnailList extends Component {

  static propTypes = {
    list: PropTypes.array,
  };

  static defaultProps = {
  };

  renderThumbnailList() {
    return this.props.list.map((thumbnail) => {
      return (
        <div className="ThumbnailList-thumbnail col col-sm-12 col-md-6 col-lg-4">
          <Thumbnail imgUrl={ thumbnail.imgUrl } imgAlt={ thumbnail.imgAlt }
                     header={ thumbnail.header } content={ thumbnail.content } />
        </div>
      );
    });
  }

  render() {
    const list = this.renderThumbnailList();

    return (
      <div className="ThumbnailList">
        { list }
      </div>
    );
  }

}

export default ThumbnailList;
