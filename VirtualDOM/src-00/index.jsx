const React = {
  createElement,
};
const ReactDOM = {
  render: (vnode, container) => {
    container.innerHTML = "";
    return render(vnode, container);
  },
};
function flatten(arr) {
  return [].concat.apply([], arr);
}

function createElement(tag, props, ...children) {
  return {
    tag,
    props: props || {},
    children: flatten(children) || [],
  };
}
function renderDom(vnode, container) {
    console.log(vnode)
  // 当 vnode 为字符串时，渲染结果是一段文本
  if (typeof vnode === "string") {
    const textNode = document.createTextNode(vnode);
    return container.appendChild(textNode);
  }

  const dom = document.createElement(vnode.tag);

  if (vnode.attrs) {
    Object.keys(vnode.attrs).forEach((key) => {
      if (key === "className") key = "class"; // 当属性名为 className 时，改回 class
      dom.setAttribute(key, vnode.attrs[key]);
    });
  }

  vnode.children.forEach((child) => renderDom(child, dom)); // 递归渲染子节点

  return container.appendChild(dom); // 将渲染结果挂载到真正的 DOM 上
}

React.createElement = createElement;

function render() {
  const _html = (
    <div className="wrapper">
      Hello World!
      <ul>
        <li className="list-item">hh</li>
      </ul>
    </div>
  );
  return _html;
}

renderDom(render(), document.getElementById("root"));
