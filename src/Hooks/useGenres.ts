
import useData from "./useData";

export interface Genre{
    id:number;
    name:string;
}

// interface FetchGenresResponse{
//     count:number;
//     results:Genre[];
// }


/*const useGenres =()=>{
    const [genres, setGenres] = useState<Genre[]>([]);
      const [error, setError] = useState("");
      const [isLoading,setLoading]=useState(false);
    
    
      useEffect(() => {
        const controller = new AbortController();
    
        setLoading(true);
        ApiClient.get<FetchGenresResponse>("/games",{signal: controller.signal})
          .then((res) => {setGenres(res.data.results)
            setLoading(false)
          })
          .catch((err) => {
            if(err instanceof CanceledError) return;
             setError(err.message)
             setLoading(false)
            });
    
        return ()=> controller.abort();
      },[]);
      return {genres,error,isLoading}
}*/

const useGenres=()=> useData<Genre>('/genres')

export default useGenres;