import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <h2>Social Connects</h2>
            <div className="footer-div">
                <a 
                    className="footer-link" 
                    href="https://www.linkedin.com/in/naman-saxena-5460b3188/" 
                    target="_blank"
                    rel="noreferrer"
                >
                    <p>LinkedIn</p>
                </a>
                <a 
                    className="footer-link" 
                    id="github-link" 
                    href="https://github.com/Naman-Saxena1" 
                    target="_blank"
                    rel="noreferrer"
                >
                    <p>GitHub</p>
                </a>
                <a 
                    className="footer-link" 
                    href="https://twitter.com/NamanSa83962307?s=08" 
                    target="_blank"
                    rel="noreferrer"
                >
                    <p>Twitter</p>
                </a>
                <a 
                    className="footer-link" 
                    href="https://namansaxena-official.medium.com" 
                    target="_blank"
                    rel="noreferrer"
                >
                    <p>Medium</p>
                </a>
            </div>
        </div>
    )
}

export { Footer }