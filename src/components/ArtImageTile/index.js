import { Link } from "react-router-dom";

const ArtImageTile = ({ art, galleryId }) => {
    // console.log(art.objects);
    const artWorks = art.objects.map((piece) => piece)
    // console.log(artWorks[0]);
    return (
        <>
            {/* <h1>ArtImageTile component</h1> */}
            {
                artWorks.map((piece) => (
                    <Link to={`/galleries/${galleryId}/art/${piece.id}`} key={piece.id}>
                        {piece.images && piece.images[0] && <img src={piece.images[0].baseimageurl} style={{ width: 200 }}  />}
                    </Link>
                ))
            }
        </>
    )
}

export default ArtImageTile
