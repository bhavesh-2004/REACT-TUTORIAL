function customRender(reactElement, container) {
    // const domElement = document.createElement(reactElement.type);
    // domElement.innerHTML = reactElement.children;
    // domElement.setAttribute('href', reactElement.props.href);
    // domElement.setAttribute('target', reactElement.props.target);

    // container.appendChild(domElement);
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for(const prop in reactElement.props){
        if(prop == 'children') continue;
        domElement.setAttribute(prop, reactElement.props
        [prop])
        
    }
    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://amazon.in',
        target: '_blank'
    },
    children: 'click me to visit amazon website'
};

const mainContainer = document.querySelector('#root'); // Changed to querySelector

customRender(reactElement, mainContainer); // Now it should work without error
