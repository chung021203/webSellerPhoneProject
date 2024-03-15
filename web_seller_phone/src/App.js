import { Button } from 'antd';
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/slides/countSlide'
import styled from 'styled-components'


function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
  return (
    <div className="App">
    <h2>xin chao</h2>
    <Wrapper><Button type="primary">Button</Button></Wrapper>
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
    </div>
    
  );
}

export default App;
