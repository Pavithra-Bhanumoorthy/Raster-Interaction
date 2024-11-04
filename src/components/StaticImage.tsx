import styles from './StaticImage.module.css';
import { StaticImageProps } from "../interface/List";

const StaticImage = ({children}:StaticImageProps) => {
    return (
    <div className={styles.container}>
        {/*renders the background image */}
        <div className={styles.bgImage}>           
            {children}
        </div>
    </div>)
}
export default StaticImage;