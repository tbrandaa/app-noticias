export const  NewsCard = ({title, description, source, image}) => {

    const imageUrl = image ? image : "https://placehold.co/200x200" ;

    return (
      <>
        <div className="news-card">
            <img src={imageUrl} alt={title} />
            <div className="news-content">
                <h2>{title}</h2>
                <p>{description}</p>
                <p>Fuente:{source}</p>
            </div>
        </div>
        
      </>
    )
 
}
