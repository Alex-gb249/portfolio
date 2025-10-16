import './Card.css'

export interface CardProps {
  title: string,
  description?: string,
  imageUrl?: string,
  linkUrl: string
  isNewTab?: boolean
}

function Card(
  {
    title,
    description,
    imageUrl,
    linkUrl,
    isNewTab = true
  }: Readonly<CardProps>) {

  return (
    <>
      <a href={linkUrl} target={isNewTab ? "_blank" : "_self"} rel="noreferrer">
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