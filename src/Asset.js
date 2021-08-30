import Score from './Score';

function Asset({data}) {
  return (
    <did className="Rectangle-4" key={data.id}>
      <div className="Rectangle-Copy">
        <div className="header">
          <div className="engi-copy-2">
            <img className="engi" src={data.logo}/>
          </div>
          <div className="engi-text">
            <span className="faculty-name">{data.faculty.name}</span>
            <span className="major-name">{data.name}</span>
            <span className="u-name">{data.faculty.university.name}</span>
          </div>
        </div>
        <div className="Path-4-Copy"></div>
        <div>
          <span class="round-seats">รอบที่เปิด</span>
          <div className="round-lists">
            {data.roundSeats.map((seat,idx) => (
              <div className={`${seat > 0? 'Oval-2': 'Oval-2-unavailable'}`}>{idx + 1}</div>
            ))}
          </div>
        </div>
        {data.score? <Score type={data.score.scoreType} min={data.score.min} max={data.score.max} avg={data.score.avg} year={data.score.year}/>: ''}
        <div className="Path-4-Copy"></div>
        <div>ดูสัดส่วนคะแนน</div>
        <div className="Path-4-Copy"></div>
        <div>{data.likes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || 0} จำนวนคนที่สนใจ</div>
      </div>
    </did>
  );
}

export default Asset;
