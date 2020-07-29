import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";

class ModalExampleDimmer extends Component {
  state = { open: false };

  show = (dimmer) => () => this.setState({ dimmer, open: true });
  close = () => this.setState({ open: false });

  render() {
    const { open, dimmer } = this.state;

    return (
      <div id="projectsPage">
        <Button circular size="massive" icon="code" onClick={this.show("blurring")}></Button>

        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Felix Oppong Willborg</Modal.Header>
          <Modal.Content image>
            <Modal.Description>
              <p>
                Hello, My name is Felix i'm a bilingual Junior Web Developer,
                with previous experience within the insurance, retail and art
                industry.
              </p>
              <p>
                During the past 10 years, I have acquired a broad set of both
                hard and soft skills applicable across different industries.
              </p>
              <p>
                Having extensive experience working in B2B and B2C roles, can
                create and test codes for apps and web development.
              </p>
              <p>
                Hands-on, innovative and a problem solver with keen attention to
                details.
              </p>
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