import './JournalItem.css';

function JournalItem( {title, text , date} ) {
  const formatedDate = new Intl.DateTimeFormat('ru-RU').format(date) ;
  return (
    <div className="jornal-item">
        <h2 className='jornal-item__header'>{title}</h2>
        <div className="jornal-item__body">
          <div className="jornal-item__date">{formatedDate}</div>
          <div className="jornal-item__text">{text}</div>

        </div>
    </div>
  );
}

export default JournalItem;
