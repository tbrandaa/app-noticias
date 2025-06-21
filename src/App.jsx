import './App.css'
import { NewsCard } from './components/newsCard'
import {newsData} from './data/newsData'

function App() {

  return (
    <>
      <h1>Noticias del dia</h1>
      <div className='news-container'>
        {newsData.map((news, indice ) => (
          <NewsCard
            key={indice + news.title}
            title={news.title}
            description={news.description}
            source={news.source}
            image={news.image}
          />
        ))}
      </div>
    </> 
  )
  
}

export default App
