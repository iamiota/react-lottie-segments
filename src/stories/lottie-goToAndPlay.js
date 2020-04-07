import React from 'react';
import Lottie from '../index';
import * as animationData from './TwitterHeart.json';

export default class LottieGoToAndPlay extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isStopped: true,
      value: 0,
      isFrame: false,
      loop: false,
    };
  }

  render() {
    const centerStyle = {
      display: 'block',
      margin: '10px auto',
      textAlign: 'center',
    };
    const { isStopped, value, isFrame, loop } = this.state;
    const defaultOptions = { animationData, loop };

    return (<div>
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
        isStopped={isStopped}
        goToAndPlay={{
          value,
          isFrame,
        }}
      />

      <p style={centerStyle}>Go to and play: [value: {value}, isFrame: {isFrame ? 1 : 0}]</p>
      <div style={centerStyle}>
        <input
          type="text" value={value}
          onChange={e => this.setState({ value: parseInt(e.currentTarget.value, 10) || 0 })}
        />

        <label htmlFor="isFrame">
          <input
            id="isFrame"
            name="isFrame"
            type="checkbox"
            checked={isFrame}
            onChange={e => this.setState({ isFrame: e.currentTarget.checked })}

          />
          Is frame
        </label>
      </div>
    </div>);
  }
}