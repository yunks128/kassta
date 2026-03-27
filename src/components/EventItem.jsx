export default function EventItem({ date, title, meta, desc, link }) {
  return (
    <div className="event-item">
      <div className="event-date-box">
        <span className="month">{date.month}</span>
        <span className="day">{date.day}</span>
        <span className="year">{date.year}</span>
      </div>
      <div className="event-details">
        <h3>{title}</h3>
        <div className="meta">{meta}</div>
        <p>{desc}</p>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: 12, display: 'inline-block', fontSize: '0.85rem', padding: '8px 20px' }}>
            Register
          </a>
        )}
      </div>
    </div>
  )
}
