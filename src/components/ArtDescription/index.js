import { useParams } from "react-router-dom";

const ArtDescription = ({ art }) => {
    let { galleryId, artId } = useParams();
    galleryId = parseInt(galleryId, 10)
    artId = parseInt(artId, 10)
    const artChosen = art.objects.find((piece) => {
        if (piece.id === artId) {
            return piece
        }

        return null
    })
console.log(artChosen);
    artChosen.images.map((image) => (
        console.log(image)
    ))
    return (
        <>
            <h2>{ artChosen.title}</h2>
            {
                artChosen.images.map((image) => (
                    <img src={image.baseimageurl} style={{ width: 200 }} key={image.imageid} />
                ))
            }
            <h3>Description</h3>
            <p>{artChosen.description === null ? "N/A" : artChosen.description}</p>
            <span style={{ fontWeight: 'bold' }}>Credit:</span> <span>{ artChosen.creditline === null ? "N/A": artChosen.creditline}</span> <br></br>
            <span style={{ fontWeight: 'bold' }}>Technique:</span> <span>{ artChosen.technique === null ? "N/A": artChosen.technique}</span>

        </>
    )
}
export default ArtDescription
