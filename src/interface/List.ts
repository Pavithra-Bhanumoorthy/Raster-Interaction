
export type cell = {
  id:number;
  name:string;
}

export type ListViewProps = {
   cells : cell[]
}

export type StaticImageProps = {
    children: React.ReactNode; 
  }

  export type CellVisibilityState = {
    visibility: Record<number, boolean>;
    hoveredCell: number | null;
  }

  export type LoadErrorProps = {
   isLoading: boolean;
   isError: boolean;
   errorMessage? : string;
  }

