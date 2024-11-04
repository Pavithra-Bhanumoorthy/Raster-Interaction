import axios from 'axios';
import { useEffect, useState, useCallback } from "react";
import { ListViewProps,cell } from '../interface/List';
import { config_URL } from './config';


const useGridCell = () => { 

  const [list, setList] = useState<cell[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const apiBaseUrl = config_URL.API_BASE_URL;
   const fetchCells = useCallback(async () => {
    setIsLoading(true);
    setIsError(false); // Reset error state before fetching
    try {
      const response = await axios.get<ListViewProps>(apiBaseUrl); // Use axios to fetch data
      if (!response.data.cells) {
        throw new Error('Data is missing ');
      }
      setList(response.data.cells);
      
     // console.log(response.data.cells); 
      //console.log('Fetched response:', response.data.cells);
    } catch (error) {
      setIsError(true);
      console.error('There was a problem with the fetch operation:', error);
    } finally {
      setIsLoading(false);
    }
  }, [apiBaseUrl]);

  useEffect(() => {
    // Call the function
    fetchCells();
  }, [fetchCells]);

  return {
    list,
    isLoading,
    isError,
  };
}

export default useGridCell;
