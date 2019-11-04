import React, { Component } from 'react';
import { Input, Button, Upload } from '@alifd/next';
import './home.less'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  beforeUpload = (info) => {
    console.log('beforeUpload : ', info);
  }

  onChange = (info) => {
    console.log('onChange : ', info);
  }

  onSuccess = (info) => {
    console.log('onSuccess : ', info);
  }
  render() {
    return (
      <div className="main-wrapper">
        <div className="operate-area">
          <div className="input-area">
            <Input size="large" placeholder="医生ID" onChange={this.onChange} aria-label="Large" />
            <Input size="large" placeholder="病患ID" onChange={this.onChange} aria-label="Large" />
          </div>
          <div className="upload-area">
            <Upload
              action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
              beforeUpload={this.beforeUpload}
              onChange={this.onChange}
              onSuccess={this.onSuccess}
              multiple
              defaultValue={[{
                name: 'IMG.png',
                state: 'done',
                size: 1024,
                downloadURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                fileURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg'
              }]}
            >
              <Button className="uploadBtn" type="primary" style={{ margin: '0 0 10px' }}>点击上传肝脏CT图片</Button>
            </Upload>
            <Upload shape="card" style={{ display: 'inline-block' }}>
              Upload File
            </Upload>
          </div>
          <Button className="model-running" type="primary">模型运行</Button>
          <Button type="primary">历史结果查询</Button>
        </div>
        <div className="img-list">
          <img
            style={{ width: '300px', height: '300px' }}
            src="https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg" alt="" />
        </div>
      </div>
    );
  }
}

export default Home;