import './PostItem.css';

function PostItem({ title, text, date }) {

    // const title = 'Kaş';
    // const date = new Date();
    // console.log(date);
    // const text = 'All the trips around the world are a great pleasure and happiness for anyone, enjoy the sights when you travel the world. Travel safely and without worries, get your trip and explore the paradises of the world.';
    


    // const dateObj = date instanceof Date ? date : new Date(date);

    const formatter = new Intl.DateTimeFormat('ru-RU', { /* Параметры форматирования */ });
    const FormattedDate = formatter.format(new Date());

    return (

      <>
        <h2 className='post-item__header'>{title}</h2>
        <div className='post-item__body'>
            <div className='post-item__date'>{FormattedDate.toString()}</div>
            <div className='post-item__text'>{text}</div>
        </div>
      </>
  )
}

export default PostItem