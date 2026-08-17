import './PortfolioLanguage.css';

export function PortfolioLanguage({name, codeLanguages, img, active, onSelect}){
    return (
        <div
            className={`portfolio-language-container ${active ? 'active' : ''}`}
            onClick={onSelect}>
            <div className="portfolio-language-title-container">
                <img className="portfolio-language-img" src={img}/>
                <div className="portfolio-language-name">{name}</div>
            </div>
            <div className="portfolio-language-description">{codeLanguages}</div>
        </div>
    )
}

export default PortfolioLanguage;