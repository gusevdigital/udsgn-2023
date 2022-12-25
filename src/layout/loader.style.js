export default `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    display: block;
}

#loader {
    position: fixed;
    z-index: 9999;
    background-color: #ff42a7;
    display: flex;
    left: 0;
    right: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    border-radius: 0;
    transition: top .6s cubic-bezier(0.65, 0, 0.35, 1), visibility .6s linear;
}

#loader.hidden {
    top: -100%;
    visibility: hidden;
}

#loader svg path {
    stroke: black;
    fill: black;
}
`;
