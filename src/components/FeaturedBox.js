import Image from 'next/image';

const FeaturedBox = ({
    number = '',
    label = '',
    title = '',
    tags = [],
    theme = 'dark',
    color = 'blue',
    img = null,
    className = '',
}) => {
    return (
        <div className={`fbox fbox--${theme} fbox--${color} ${className}`}>
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
                    <ul className="tags">
                        {tags.map(tag => (
                            <li key={tag}>{tag}</li>
                        ))}
                    </ul>
                ) : null}
            </div>
            {img ? (
                <div className="fbox-img">
                    <div className="fbox-img__inner">
                        <Image src={img} alt={title} />
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default FeaturedBox;
