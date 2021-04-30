import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {Checkbox} from 'semantic-ui-react';
import Svg from './ui/Svg';

const Filter=({brand,category,filter})=>{
    const [dropBrand,setDropBrand] =useState(false);
    const [dropCat,setDropCat] = useState(false);


    return(
        <div>
            {filter.indexOf('nutrition-sportive')<0 && (
                <Link to={`/products/categorie/nutrition-sportive`}>
                    <span style={{margin:1+'rem'}}><Svg name={'cross'} size={12} />{filter}</span>
                </Link>
            )}
            <hr />
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
                    <Link to={`/products/categorie/${cat.title}`}>
                        <Checkbox label={cat.title} checked={filter.indexOf(cat.title)>=0 ? true : false } />
                    </Link>
                    </div>
                ))}
                
                <br/>       
            </form>
            </div>
            <hr />

        </div>
    </div>
    )
}

export default Filter;