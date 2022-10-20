import "./KittiesItem.scss"
import defaultImage from "../../assets/images/logo-img.png"

export const KittiesItem = ({item}) => {

    return (
        <div key={item?.id} className={`homePage__kitties-item`}>
            <div className={`homePage__kitties-item-image`}>
                <img src={item?.image_url } alt="kitty image"/>
            </div>
            <div className={`homePage__kitties-item-content`}>
                <h3>Name: {item?.name}</h3>
                <ul className={`homePage__kitties-item-content-inner`}>
                    <li><span>Status: </span><span>{item?.available ? "Available" : "Not available"}</span></li>
                    <li><span>Price: </span><span>{item?.price}</span></li>
                    <li><span>Category: </span><span>{item?.category}</span></li>
                    <li><span>ID: </span><span>{item?.id}</span></li>
                    <li><span>Created at: </span><span>{item?.created_at?.split("T")[0]}</span></li>
                    <li><span>Updated at: </span><span>{item?.updated_at?.split("T")[0]}</span></li>
                </ul>
            </div>

        </div>
    )
}
