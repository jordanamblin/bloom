import React, { PropTypes, Component } from 'react';

import Inner from './CarouselInner';

export default class Carousel extends Component {
  static propTypes = {
    lowestVisibleItemIndex: PropTypes.number,
    items: PropTypes.array.isRequired,
    itemsPerColumn: PropTypes.number,
  };

  static defaultProps = {
    lowestVisibleItemIndex: 0,
    items: [],
    itemsPerColumn: 1,
  };

  render() {
    const { items, itemsPerColumn, lowestVisibleItemIndex } = this.props;

    const renderItems = items.filter(item => item);

    const renderPerColumn = itemsPerColumn < renderItems.length
      ? itemsPerColumn
      : renderItems.length;
    const slideWidth = 100 / renderPerColumn;

    const position = lowestVisibleItemIndex * (-1 * slideWidth);
    const transform = `translate3d(${position}%, 0, 0)`;

    return (
      <div>
        <Inner
          style={ {
            transform,
          } }
          slideWidth={ slideWidth }
        >
          { renderItems }
        </Inner>
      </div>
    );
  }
}
