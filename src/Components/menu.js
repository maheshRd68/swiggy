import "./Header.css";
import MenuItem from "./MenuItem";

const Menu = ((props)=>{
    const {categoryItems}=props;
    return<div className="mb-4"> 
        <div className="flex w-1/2 justify-between m-auto bg-white p-4">
        <h2 className="font-bold text-xl  ">{categoryItems.card.card.title} ({categoryItems.card.card.itemCards.length})</h2>
        <span class="accordion" aria-hidden="true"></span>
    </div>
    <div className="w-1/2 m-auto bg-gray-100 mb-4 p-4">
    {
     categoryItems.card.card.itemCards && categoryItems.card.card.itemCards.map((item)=>{
                return <MenuItem item={item}/>
            })
        }
    </div>
    </div> 
    })

export default Menu;