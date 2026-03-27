export default function YouTubeCard({ id, title }) {
  return (
    <a
      className="yt-card"
      href={`https://www.youtube.com/watch?v=${id}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="yt-thumb">
        <img
          src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
          alt={title}
          loading="lazy"
        />
        <div className="yt-play" />
      </div>
      <div className="yt-card-body">
        <h3>{title}</h3>
      </div>
    </a>
  )
}
