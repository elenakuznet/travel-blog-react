import './PostList.css';
import CardButton from '../CardButton/CardButton';
import PostItem from '../PostItem/PostItem';



function PostList({items}) {

  if (items.length === 0) {
    return <p>Нет записей</p>
  }

  const sortItems = (a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  }


  return <>{items.sort(sortItems).map((el) => (
      <CardButton key={el.id}>
        <PostItem 
          title={el.title} 
          text={el.text} 
          date={el.date}/>
      </CardButton>
    )
    )
  }</>
  
  
}

export default PostList;