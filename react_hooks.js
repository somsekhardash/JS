const _react = (() => {
    let hooks = {};
    let index = 0;
    const _useState = (init) => {
      const _index = index;
      let state = hooks[_index] || init;
      const setState = (newState) => {
        hooks[_index] = newState;
      };
      ++index;
      return [state, setState];
    };
  
    const render = (C) => {
        index = 0;
      C.render();
      return C;
    };
    return { _useState, render };
  })();
  
  const _component = () => {
    const [count, setCount] = _react._useState(1);
    const [name, setName] = _react._useState("hello");
    const render = () => {
      console.log({ count, name });
    };
  
    const _onClick = () => {
      setCount(count + 1);
    };
  
    const _onText = (newVal) => {
      setName(newVal);
    };
    return { render, _onClick, _onText };
  };
  
  let compo = _react.render(_component());
  compo._onClick();
  compo = _react.render(_component());
  compo._onClick();
  compo = _react.render(_component());
  compo._onText("Som");
  compo = _react.render(_component());
  compo._onClick();
  compo = _react.render(_component());
  compo._onClick();
  compo = _react.render(_component());
