import './PostItem.css';

function PostItem({ title, text, date }) {

    const formattedDate = new Intl.DateTimeFormat('ru-RU').format(date);

    return (

      <>
        <h2 className='post-item__header'>{title}</h2>
        <div className='post-item__body'>
            <div className='post-item__date'>{formattedDate}</div>
            <div className='post-item__text'>{text}</div>
        </div>
      </>
  )
}

export default PostItem