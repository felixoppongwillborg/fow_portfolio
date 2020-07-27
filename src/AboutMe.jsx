import React, { Component } from "react";
import { Button, Modal, Image } from "semantic-ui-react";


class ModalExampleDimmer extends Component {
  state = { open: false };

  show = (dimmer) => () => this.setState({ dimmer, open: true });
  close = () => this.setState({ open: false });

  render() {
    const { open, dimmer } = this.state;

    return (
      <div>
        <Button onClick={this.show("blurring")}>About me</Button>

        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Felix Oppong Willborg</Modal.Header>
          <Modal.Content image>
          <Image
          wrapped
          src='https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/49138076_10156811805161113_5624443404222988288_n.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=Ek866kmWVA4AX9R3nf-&_nc_oc=AQldoj94-4TaG1o8Ef-F4O7auW4gNCRRU41s7p6rHIu_D37TqZHIrs3yaIUfU1cLZ3Q&_nc_ht=scontent-arn2-1.xx&oh=7ff6ca92bb388645d33bd411d5025d07&oe=5F444092' />
            <Modal.Description>
              <p>
                Hello, My name is Felix i'm a bilingual Junior Web Developer,
                with previous experience within the insurance, retail and art
                industry.
                During the past 10 years, I have acquired a broad set of both
                hard and soft skills applicable across different industries.
                Having extensive experience working in B2B and B2C roles, can
                create and test codes for apps and web development.

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
