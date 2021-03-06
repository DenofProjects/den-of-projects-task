import React from "react";
import { connect } from "react-redux";
import {
  mapDispatchToProps,
  mapStateToProps,
} from "../viewConnectors/vcDenofProjects";

interface DenofProjectsViewProps {
  readonly dopState: any;
  readonly onIncrimentClick: () => void;
  readonly onDecrimentClick: () => void;
}

class DenofProjects extends React.Component<DenofProjectsViewProps> {
  componentDidMount() {}
  render() {
    return (
      <React.Fragment>
        {this.props.dopState.count}
        <button onClick={this.props.onIncrimentClick}>+</button>
        <button onClick={this.props.onDecrimentClick}>-</button>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DenofProjects);
