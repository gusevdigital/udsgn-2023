export default `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    display: block;
}

#loader,
#initLoader {
    position: fixed;
    z-index: 9999;
    background-color: #ff42a7;
    display: flex;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    border-radius: 0;
    transform: scaleX(1);
    transform-origin: 0;
    transition: transform .5s cubic-bezier(0.65, 0, 0.35, 1);
}

#loader {
    transform: scaleX(0);
    transform-origin: 100%;
}

#initLoader.hidden {
    transform: scaleX(0);
    transform-origin: 100%;
}

#loader.active {
    transform: scaleX(1);
    transform-origin: 0;
}

#loader svg path {
    stroke: black;
    fill: black;
}
`;
