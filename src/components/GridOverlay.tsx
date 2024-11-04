import styles from './GridOverlay.module.css';
import { useSelector } from 'react-redux';
import { selectVisibility, selectHoveredCell } from '../redux/cellVisibilitySlice';
import useGridCell from '../utils/useGridCell';
import LoadErrorComp from './LoadErrorComp';
import React from 'react';

const GridOverlay = () => {
   const { list, isLoading, isError } = useGridCell();
   const visibilityState = useSelector(selectVisibility);
   const hoveredCell = useSelector(selectHoveredCell);

    return (
        <div className={styles.cellOverlay}>
            <div className={styles.overlayGrid}>           
            <LoadErrorComp isLoading={isLoading} isError={isError}></LoadErrorComp>
            {/* to render the list of grid cells if there is no error */}
            {!isLoading && !isError && list && (
                list.map((item) => (
                    <div className={`${styles.cell} ${visibilityState[item.id] ? styles.visible: ''}
                    ${hoveredCell === item.id ? styles.highlight : ''}`}
                    key={item.id}>{item.name}</div>
                ))
          )}
        </div>
        </div>
    )
}

export default GridOverlay