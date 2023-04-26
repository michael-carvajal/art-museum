import { NavLink } from "react-router-dom";

import './GalleryNavigation.css'

const GalleryNavigation = ({ galleries }) => {

    // console.log(galleries);

    return (
        <nav>
            <NavLink exact to='/'>Home</NavLink>
            {
                galleries.map((gallery) => (
                    <NavLink to={`/galleries/${gallery.id}` }key={gallery.id} >{ gallery.name}</NavLink>
                ))
            }
        </nav>
    )
}


 export default GalleryNavigation
