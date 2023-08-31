const MenuItem = ((props)=>{
    const {item} = props;
    console.log(item);
    return(
        <div className="flex">
            <div className="w-3/4">
        <p>{item.card.info.name}</p>
        <p>{item.card.info.description}</p>
            </div>
            <div className="1/4">

            </div>
        </div>
    )
})

export default MenuItem;