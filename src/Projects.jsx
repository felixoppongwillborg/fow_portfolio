import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import projectCard from "./projectCard"

class ModalExampleDimmer extends Component {
  state = { open: false };

  show = (dimmer) => () => this.setState({ dimmer, open: true });
  close = () => this.setState({ open: false });

  render() {
    const { open, dimmer } = this.state;

    return (
      <div id="projectsPage">
        <Button
          circular
          size="massive"
          icon="code"
          onClick={this.show("blurring")}
        ></Button>

        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Felix Oppong Willborg</Modal.Header>
          <Modal.Content image>
            <Modal.Description>
             <projectCard />
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color="black" onClick={this.close}>
              Close
            </Button>
            <Button
              positive
              icon="checkmark"
              labelPosition="right"
              content="Contact me"
              onClick={this.close}
            />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default ModalExampleDimmer;
