import './Card.css'

export interface CardProps {
  title: string,
  description?: string,
  imageUrl?: string,
  url: string
  isNewTab?: boolean
}

function Card(
  {
    title,
    description,
    imageUrl,
    url,
    isNewTab = true
  }: Readonly<CardProps>) {

  return (
    <>
      <a href={url} target={isNewTab ? "_blank" : "_self"} rel="noreferrer">
        <div className="card">
          {imageUrl && (
            <figure>
              <img src={imageUrl} className="card-img-top" alt={title} />
            </figure>
          )}
          <div className="card-body">
            <h4>{title}</h4>
            {description && <p className="card-text">{description}</p>}
          </div>
        </div>
      </a>
    </>
  )
}

export default Card