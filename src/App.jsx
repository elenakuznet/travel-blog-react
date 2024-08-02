
import './App.css'
import Button from './components/Button/Button'
import CardButton from './components/CardButton/CardButton'
import PostItem from './components/PostItem/PostItem'

function App() {
  const data = [{
    title: 'Kaş',
    text: 'All the trips around the world are a great pleasure and happiness for anyone, enjoy the sights when you travel the world. Travel safely and without worries, get your trip and explore the paradises of the world.',
    date: new Date()
  }, 
  {
    title: 'Spike Forest',
    text: 'Exploring paradises such as islands and valleys when traveling the world is one of the greatest experiences when you travel',
    date: new Date()
  }
]


  return (
    <>
      <div>
        Travel blog
      </div>
      <Button />
      <CardButton>Новый пост</CardButton>
      <CardButton>
        <PostItem 
          title={data[0].title} 
          text={data[0].text} 
          date={data[0].date}/>
      </CardButton>

      <CardButton>
          <PostItem 
            title={data[1].title} 
            text={data[1].text} 
            date={data[1].date}/>
      </CardButton>
      
      
    </>
  )
}

export default App
