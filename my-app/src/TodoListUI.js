import React, { Component } from "react";
import 'antd/dist/reset.css';
import { Input, Button, List } from 'antd'

const TodoListUI = (props)=>{
  return(
    <div style={{ marginTop: '10px', marginLeft: '10px' }}>
         <div>
            <Input
            onChange={props.handleInputChange}
            value={props.inputValue}
            placeholder="todo info"
            style={{ width: '300px', marginRight: '10px' }} />

          <Button type='primary' onClick={props.handleBtnClick}>提交</Button>

          <List style={{ marginTop: '10px', width: '300px' }}
            bordered
            dataSource={props.list}
            renderItem={(item, index) => (<List.Item onClick={props.handleItemDelete.bind(this,index)}>{item}</List.Item>)}
          />
        </div>
      </div>

  );
}

// class TodoListUI extends Component {

//   render() {
//     return (
//       <div style={{ marginTop: '10px', marginLeft: '10px' }}>
//         <div>
//           <Input
//             onChange={this.props.handleInputChange}
//             value={this.props.inputValue}
//             placeholder="todo info"
//             style={{ width: '300px', marginRight: '10px' }} />

//           <Button type='primary' onClick={this.props.handleBtnClick}>提交</Button>

//           <List style={{ marginTop: '10px', width: '300px' }}
//             bordered
//             dataSource={this.props.list}
//             renderItem={(item, index) => (<List.Item onClick={(idx)=>{this.props.handleItemDelete(idx)}}>{item}</List.Item>)}
//           />
//         </div>
//       </div>
//     );
//   }

// }
export default TodoListUI;