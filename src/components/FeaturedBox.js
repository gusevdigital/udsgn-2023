import Image from 'next/image';

const FeaturedBox = ({
    number = '',
    label = '',
    title = '',
    tags = [],
    theme = 'dark',
    color = 'blue',
    img = null,
}) => {
    return (
        <div className={`fbox fbox--${theme} fbox--${color}`}>
            <div className="fbox-content">
                <div className="fbox-label">
                    {number ? (
                        <div className="fbox-label__number">{number}</div>
                    ) : null}
                    {label ? (
                        <div className="fbox-label__text">{label}</div>
                    ) : null}
                </div>
                {title ? <h4 className="fbox-title">{title}</h4> : null}
                {tags && tags.length ? (
                    <ul className="fbox-tags">
                        {tags.map(tag => (
                            <li>{tag}</li>
                        ))}
                    </ul>
                ) : null}
            </div>
            {img ? (
                <div className="fbox-img">
                    <div className="fbox-img__inner">
                        <Image src={img} title={title} />
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default FeaturedBox;
