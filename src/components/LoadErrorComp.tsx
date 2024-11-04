import {  LoadErrorProps } from "../interface/List";
import styles from './LoadError.module.css'

const LoadErrorComp = ({isLoading,isError,errorMessage="There was an error. Please try again later."}:LoadErrorProps) => {
    if(isLoading){
        return <div className={styles.spinner} role="status" aria-label="Loading..."></div>;
    }
    if(isError){
        return <div>{errorMessage}</div>;
    }
    return null;
}

export default LoadErrorComp;