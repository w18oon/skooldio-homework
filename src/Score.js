function Score({type, min, max, avg, year}) {
  return (
    <div>
      <div>รอบที่ {type}</div>
      <div className="score-container">
        <div className="item">
          <div>{min.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
          <div>คะแนนต่ำสุด {year.toString().substr(2,2)}</div>
        </div>
        <div className="item">
          <div>{avg.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
          <div>คะแนนเฉลี่ย {year.toString().substr(2,2)}</div>
        </div>
        <div className="item">
          <div>{max.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
          <div>คะแนนสูงสุด {year.toString().substr(2,2)}</div>
        </div>
      </div>
    </div>
  );
}

export default Score;
