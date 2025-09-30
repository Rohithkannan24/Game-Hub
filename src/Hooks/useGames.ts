import { useEffect, useState } from "react";
import ApiClient from "../Service/ApiClient";
import { CanceledError } from "axios";
import useData from "./useData";
import { Genre } from "./useGenres";
import { GameQuery } from "../App";

export interface platform{
    id:number;
    name:string;
    slug:string;
}

export interface Game {
  id: number;
  name: string;
  background_image:string;
  parent_platforms:{platform:platform}[]
  metacritic:number;
}

// interface FetchGamesResponse {
//   count: number;
//   results: Game[];
// }
/*const useGames=()=>{
const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading,setLoading]=useState(false);


  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    ApiClient.get<FetchGamesResponse>("/games",{signal: controller.signal})
      .then((res) => {setGames(res.data.results)
        setLoading(false)
      })
      .catch((err) => {
        if(err instanceof CanceledError) return;
         setError(err.message)
         setLoading(false)
        });

    return ()=> controller.abort();
  },[]);
  return {games,error,isLoading}
}*/
 const useGames=(gameQuery:GameQuery)=> useData<Game>('/games',{
  params:{
    genres:gameQuery.genre?.id,platform:gameQuery.platform?.id
  }},
  [gameQuery])

export default useGames;