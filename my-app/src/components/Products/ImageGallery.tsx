import "../../dist-styles/image-gallery.css";

interface GalleryImages {
  galleryImage1: string;
  galleryImage2: string;
  galleryImage3: string;
}

const ImageGallery: React.FC<GalleryImages> = (props) => {
  return (
    <div className="image-gallery-container">
      <div className="small-images-container">
        <img className="small-image" src={props.galleryImage1}></img>
        <img className="small-image" src={props.galleryImage2}></img>
      </div>
      <div className="big-image-container">
        <img className="big-image" src={props.galleryImage3}></img>
      </div>
    </div>
  );
};

export default ImageGallery;
