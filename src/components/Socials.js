const socialsList = [
    {
        title: 'Instagram',
        key: 'instagram',
        link: 'https://www.instagram.com/julii.arty/',
    },
    {
        title: 'Behance',
        key: 'behance',
        link: 'https://www.behance.net/udsgn',
    },
    {
        title: 'Dribbble',
        key: 'dribbble',
        link: 'https://dribbble.com/udsgn',
    },
    {
        title: 'Telegram',
        key: 'telegram',
        link: 'http://t.me/udsgn',
    },
];

const Socials = () => {
    return (
        <div className="socials">
            {socialsList.map(social => (
                <a
                    key={social.key}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`socials--${social.key}`}
                >
                    {social.title}
                </a>
            ))}
        </div>
    );
};

export default Socials;
