
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import styles from './ListView.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { toggleCell, setHoveredCell,clearHoveredCell,selectVisibility } from '../redux/cellVisibilitySlice';
import useGridCell from '../utils/useGridCell';
import LoadErrorComp from './LoadErrorComp';
import React from 'react';

const ListView = () => {
const dispatch = useDispatch();
const { list, isLoading, isError } = useGridCell();
const visibilityState = useSelector(selectVisibility)


    return (
      <div className={styles.ListView}>
        <LoadErrorComp isLoading={isLoading} isError={isError}></LoadErrorComp>
        {/* To render the List view cells */}
        {!isLoading && !isError && list && (
                 <ul>
                 {list.map ((item) => (               

                     <li key={item.id}
                     onClick={() => dispatch(toggleCell(item.id))}
                     onMouseEnter={()=>
                       dispatch(setHoveredCell(item.id))
                     }
                     onMouseLeave={()=> dispatch(clearHoveredCell())
                     } >
                       <FontAwesomeIcon icon={visibilityState[item.id] ? faEyeSlash : faEye}  />
                       <span>{item.name}</span>
                       </li>
                 )) }
             </ul>
        )}
   
      </div>
    
    
    )
}
export default ListView;