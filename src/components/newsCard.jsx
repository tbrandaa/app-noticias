export const  NewsCard = ({title, description, sourceUrl, source, image}) => {

    const imageUrl = image ? image : "https://placehold.co/200x200" ;

    return (
      <>
        <div className="news-card">
            <img src={imageUrl} alt={title} />
            <div className="news-content">
                <h2>{title}</h2>
                <p>{description}</p>
                <p>
                  Fuente: <a href={sourceUrl} target="_blank" rel="noopener noreferrer">{source}</a>  
                </p>
            </div>
        </div>
        
      </>
    )
 
}
