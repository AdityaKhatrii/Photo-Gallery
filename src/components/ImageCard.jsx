const PhotoItem = ({photo})=>{
    return <div className="photo-item">
    <img src={photo.urls.regular} alt={photo.alt_description || 'Unsplash photo'} loading="lazy" />
    <div className="photographer">
        <p>{photo.user.name}</p>
    </div>
</div>
}
export default PhotoItem;