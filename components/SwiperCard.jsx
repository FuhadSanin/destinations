import Image from 'next/image';

const SwiperCard=({ imageSrc, title, price, location })=> {
    return (
        <div className="card">
            <div className="card-image">
            <img
          src="https://firebasestorage.googleapis.com/v0/b/destinations-6c6a6.appspot.com/o/pexels-spencer-davis-4388164.jpg?alt=media&token=2f97038b-8b1b-46ac-bcc0-0069efef7e3d"
          alt=""
        />            </div>
            <div className="card-content">
                <h2>{title}</h2>
                <p>{location}</p>
                <p>{price}</p>
            </div>
        </div>
    );
}

export default SwiperCard;
