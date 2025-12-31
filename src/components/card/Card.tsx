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
      <div className="card">
        <div className="row">
          {imageUrl && (
            <div className='col-2 d-flex align-items-center m-2'>
              <figure>
                <img src={imageUrl} className="card-img-top" alt={title} />
              </figure>
            </div>
          )}
          <div className="col">
            <div className="card-body">
              <h4>{title}</h4>
              {description && <p className="card-text">{description}</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card