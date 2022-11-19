
function Card(props) {
    const { title, location, googleMapsUrl, text, startDate, endDate, img } = props;
   
    return (

        <div className='card container f-center'>

            <div className='img-box'>
                <img src={img} alt='montain' />   
            </div>
            
            <div className='card-content'>
                <div className='location-container f-center'>
                    <i className="location-icon fa-solid fa-location-pin"></i>
                    <p className='card-location'>{location.toUpperCase()} <a className='location-link' href={googleMapsUrl} target="_blank" rel="noreferrer"> View on Google Maps</a></p>
                </div>
                
                <h1 className='card-title'>{title}</h1>
                <p className='card-date'><strong>{startDate} - {endDate}</strong></p>
                <p className='card-text'>{text}</p>
            
            </div>
        </div>
    )
}

export default Card;