import Image from 'next/image';

const SwiperCard=({ imageSrc, title, price, location })=> {
    return (
        <div className="card">
            <div className="card-image">
                <Image src={imageSrc} alt={title} width={300} height={200} />
            </div>
            <div className="card-content">
                <h2>{title}</h2>
                <p>{location}</p>
                <p>{price}</p>
            </div>
        </div>
    );
}

export default SwiperCard;
