import React, { Component } from 'react';

interface Props {
  title: string;
}

interface State {
  count: number;
}

class LifecycleComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount(): void {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps: Props, nextState: State): boolean {
    console.log('shouldComponentUpdate');
    return nextState.count !== this.state.count || nextProps.title !== this.props.title;
  }

  componentDidUpdate(): void {
    console.log('componentDidUpdate');
  }

  componentWillUnmount(): void {
    console.log('componentWillUnmount');
  }

  incrementOnClick = (): void => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  render() {
    console.log('Rendering...');
    const { title } = this.props;
    const { count } = this.state;

    return (
      <div>
        <h1>{title}</h1>
        <p>Count: {count}</p>
        <button onClick={this.incrementOnClick}>Increment</button>
      </div>
    );
  }
}

export default LifecycleComponent;