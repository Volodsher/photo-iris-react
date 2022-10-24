import { useState, useEffect } from 'react';
import './Gallery.module.scss';

export default function Gallery() {
  const [imagesCount, setImagesCount] = useState();
  const [arrOfImages, setArrOfImages] = useState();
  useEffect(async () => {
    try {
      const numberOfImages = await fetch('/api/gallery')
        .then((response) => response.json())
        .then((data) => {
          setImagesCount(data.length);
          setArrOfImages(Array.from({ length: data.length - 1 }, (v, i) => i));
          // console.log(imagesCount);
        });
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  console.log(arrOfImages);

  return (
    <div>
      <ul>
        {arrOfImages &&
          arrOfImages.map((img, ind) => (
            <li key={ind}>
              <img src={`/gallery/${img}.jpg`} key={ind} />
            </li>
          ))}
      </ul>
    </div>
  );
}
