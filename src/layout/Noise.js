import NoiseImg from '../../public/noise.png';

const Noise = props => {
    return (
        <div
            className="noise"
            style={{
                backgroundImage: `url("${NoiseImg.src}")`,
            }}
            {...props}
        ></div>
    );
};

export default Noise;
