import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../redux';
import { decrease, increase } from '../../redux/actions/count';

const mapStateToProps = (state: RootState) => ({
  count: state.count.count,
});

const mapDispatchToProps = { increase, decrease };

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

class Count extends Component<Props> {
  render() {
    return (
      <div>
        <p>{this.props.count}</p>
        <button onClick={this.props.increase}>Increase</button>
        <button onClick={this.props.decrease}>Decrease</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Count);
