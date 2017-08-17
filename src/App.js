import React, { Component } from 'react';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    showPanel: false,
  };

  render() {
    return (
      <Fabric>
        <div>
          <DefaultButton
            description="Opens the Sample Panel"
            onClick={() => this.setState({ showPanel: true })}
            text="Open Panel"
          />
          <Panel
            isOpen={this.state.showPanel}
            type={PanelType.smallFixedNear}
            onDismiss={() => this.setState({ showPanel: false })}
            headerText="Panel - Small, left-aligned, fixed"
          >
            <span>Content goes here.</span>
          </Panel>
        </div>
      </Fabric>
    );
  }
}

export default App;
