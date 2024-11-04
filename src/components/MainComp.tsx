
import { Provider } from "react-redux";
import appStore from "../redux/appStore";
import ListView from "./ListView";
import StaticImage from "./StaticImage";
import styles from './MainComp.module.css'
import useGridCell from "../utils/useGridCell";
import GridOverlay from "./GridOverlay";

const Maincomp = () => {
    
    return(
        <Provider store={appStore}>
            <div><h1>Raster Interaction</h1></div>
            <div className={styles.wrapper}>
                <div className={styles.leftColumn}>
                <ListView></ListView>
                </div>
                <div className={styles.rightColumn}>
                <StaticImage>
                    <GridOverlay></GridOverlay>
                </StaticImage>
                </div>
             </div>
        </Provider>
        )
}

export default Maincomp;