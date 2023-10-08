import "../../dist-styles/image-gallery.css";

interface GalleryImages {
  galleryImage1: string;
  galleryImage2: string;
  galleryImage3: string;
  galleryImage1Mobile: string;
  galleryImage2Mobile: string;
  galleryImage3Mobile: string;
}

const ImageGallery: React.FC<GalleryImages> = (props) => {
  return (
    <div className="image-gallery-container">
      <div className="small-images-container">
        <img
          className="small-image"
          src={props.galleryImage1}
          srcSet={`${props.galleryImage1} 800w, ${props.galleryImage1Mobile} 400w`}
          sizes="(max-width:767px) 350px, 650px"
        ></img>
        <img
          className="small-image"
          src={props.galleryImage2}
          srcSet={`${props.galleryImage2} 800w, ${props.galleryImage2Mobile} 400w`}
          sizes="(max-width:767px) 350px, 650px"
        ></img>
      </div>
      <div className="big-image-container">
        <img
          className="big-image"
          src={props.galleryImage3}
          srcSet={`${props.galleryImage3} 800w, ${props.galleryImage3Mobile} 400w`}
          sizes="(max-width:767px) 350px, 650px"
        ></img>
      </div>
    </div>
  );
};

export default ImageGallery;
