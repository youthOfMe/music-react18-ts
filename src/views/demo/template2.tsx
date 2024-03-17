import React, { PureComponent } from 'react'

interface IProps {
  name: string
  age?: number
}

interface IState {
  message: string
  counter: number
}

interface ISnapshot {
  address: string
}

class Template2 extends PureComponent<IProps, IState, ISnapshot> {
  // constructor(props: IProps) {
  //   super(props)
  //   this.state = {
  //     message: 'Hello',
  //     counter: 99
  //   }
  // }

  name = 'aaa'
  state = {
    message: 'Hello',
    counter: 99,
  }

  // 在组件更新之前给组件的状态搞一个快照
  getSnapshotBeforeUpdate(
    prevProps: Readonly<IProps>,
    prevState: Readonly<IState>,
  ): ISnapshot | null {
    return { address: '1231' }
  }

  componentDidUpdate(
    prevProps: Readonly<IProps>,
    prevState: Readonly<IState>,
    snapshot?: ISnapshot | undefined,
  ): void {
    console.log(666)
  }

  render(): React.ReactNode {
    return (
      <div>
        <h1>name: {this.props.name}</h1>
        <h1>age: {this.props.age}</h1>
        <h1>message: {this.state.message}</h1>
      </div>
    )
  }
}

export default Template2
