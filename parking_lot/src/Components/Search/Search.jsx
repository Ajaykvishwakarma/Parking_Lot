
import SearchIcon from '@mui/icons-material/Search';
import './Search.css'
export const Search = () => {

    return (
        <div className="widget_search_input">
            <SearchIcon className='widget_search_icon'/>
             <input id="search" type="text" placeholder='Search vehicle' />
    
         </div>
    )
}
