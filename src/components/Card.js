function Card() {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/heart-unliked.svg" alt="Unliked" />
      </div>
      <img src="/img/sneakers/1.jpg" alt="" width={133} height={112} />
      <h5>Мужские кроссовки</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>12 999 руб.</b>
        </div>
        <button className="button">
          <img src="/img/plus.svg" alt="add" width={11} height={11} />
        </button>
      </div>
    </div>
  );
}

export default Card;
