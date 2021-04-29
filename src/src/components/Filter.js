import React,{useState} from 'react';

const Filter=({brand,category})=>{
    const [dropBrand,setDropBrand] =useState(false);
    const [dropCat,setDropCat] = useState(false);
    const [filterCat,setFilterCat] = useState([]);
    console.log(filterCat);

    return(
    <div className="dropdown filter-list">
        <button onClick={()=>setDropBrand(!dropBrand)} id="drop1" className="dropbtn">MARQUE <i className="fa fa-caret-down" style={{marginLeft:3+'rem', marginTop:2+'px'}}></i></button>
        <div id="myDropdown1" className={!dropBrand ?"list_cat  dropdown-content":"list_cat  dropdown-content show_content"}>
        <form>
            
            {brand.map((brand)=>(
                <div>
                <input type="checkbox" id={brand.name}  name="brand" value={brand.name} />
                <label for={brand.name}><a href="#">{brand.name}</a></label>
                </div>
            ))}
            
            <br/>       
        </form>
        </div>
        <hr />
        <button onClick={()=>setDropCat(!dropCat)} id="drop1" className="dropbtn">Categories <i className="fa fa-caret-down" style={{marginLeft:3+'rem', marginTop:2+'px'}}></i></button>
        <div id="myDropdown1" className={!dropCat ?"list_cat  dropdown-content":"list_cat  dropdown-content show_content"}>
        <form>
            
            {category.map((cat)=>(
                <div>
                <input type="checkbox" id={cat.title}  name="category" value={cat.title} onClick={()=>setFilterCat({filterCat:[...filterCat,cat.title]})} />
                <label for={cat.title}><a href="#">{cat.title}</a></label>
                </div>
            ))}
            
            <br/>       
        </form>
        </div>
        <hr />

    </div>
    )
}

export default Filter;