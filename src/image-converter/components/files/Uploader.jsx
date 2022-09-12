import { Component } from 'react';
import { Button, Segment, Divider, Tab, Message, Form, Icon } from 'semantic-ui-react';

class Uploader extends Component {
  constructor(props) {
    super(props);
    this.state = { imageLink: '' };
  }

  onFormSubmit = e => {
    e.preventDefault();
  };

  fileChange = fileChangeEvent => {
    const fileChangeScope = this;
    const imageBlob = fileChangeEvent.target.files[0];
    const imageName = fileChangeEvent.target.files[0].name.split('.')[0];

    if (imageBlob.type !== 'image/png') {
      alert('PNG 이미지가 아닙니다. PNG 이미지를 업로드 해주세요');
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(imageBlob);

    reader.onloadend = function (reloadedEvent) {
      const image = new Image();
      image.src = reloadedEvent.target.result;

      image.onload = function () {
        const canvas = document.getElementById('canvasInput');
        const context = canvas.getContext('2d');
        canvas.width = image.width;
        canvas.height = image.height;
        context.drawImage(image, 0, 0);

        const convertedJPEGImage = document
          .getElementById('canvasInput')
          .toDataURL('image/jpeg')
          .replace(image.type, 'image/octet-stream');
        const imageLink = document.createElement('a');
        imageLink.download = imageName;
        imageLink.href = convertedJPEGImage;
        fileChangeScope.setState({ imageLink: imageLink });
      };
    };
  };

  fileDownload = async () => {
    this.state.imageLink.click();
  };

  render() {
    const panes = [
      {
        menuItem: 'PNG to JPG',
        render: () => (
          <Tab.Pane attached={false}>
            <Message>변환할 이미지를 선택하시고, &quot;Convert&quot; 버튼을 눌러주세요.</Message>
            <Form onSubmit={this.onFormSubmit}>
              <Form.Field>
                <label>File Upload</label>
                <Button as="label" htmlFor="file" type="button" animated="fade">
                  <Button.Content visible>
                    <Icon name="file" />
                  </Button.Content>
                  <Button.Content hidden>Choose a File</Button.Content>
                </Button>
                <input type="file" id="file" hidden onChange={this.fileChange} />
                <Button style={{ marginTop: '20px' }} type="submit" id="Download" onClick={this.fileDownload}>
                  Download
                </Button>
              </Form.Field>
            </Form>
            <div>
              <canvas id="canvasInput"> input</canvas>
            </div>
          </Tab.Pane>
        ),
      },
    ];
    return (
      <Segment style={{ padding: '5em 1em' }} vertical>
        <Divider horizontal>Image Converter</Divider>
        <Tab menu={{ pointing: true }} panes={panes} />
      </Segment>
    );
  }
}

export default Uploader;
