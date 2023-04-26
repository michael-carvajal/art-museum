import { useParams, Route, Switch } from "react-router-dom"
import ArtDescription from "../ArtDescription";
import ArtImageTile from "../ArtImageTile";


const GalleryView = ({ galleries }) => {
    let { galleryId } = useParams();
    // console.log(galleries);

    galleryId = parseInt(galleryId, 10)
    const galleryChoice = galleries.find((gallery) => {
        if (gallery.id === galleryId) {
            return gallery
        }
        return null
    })
    return (
        <>
            <h2>{galleryChoice.name}</h2>
            <Switch>

            <Route  exact path='/galleries/:galleryId'>

                <ArtImageTile art={galleryChoice} galleryId={galleryId} />
            </Route>
            <Route path="/galleries/:galleryId/art/:artId">
                    <ArtDescription art={galleryChoice} />
            </Route>
            </Switch>
        </>
    )
}

export default GalleryView
