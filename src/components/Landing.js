import React , {useEffect , useState} from 'react';

//        API        //
import { getCoin } from '../services/api';

//    COMPONENTS     //
import Coin from './Coin';

//      ICONS       //
import search1 from "../assets/icons/searchIcon.svg";
import Loader from '../assets/Loader';

//     STYLE       //
import styles from "../styles/Landing.module.css";



const Landing = () => {
    
    const [coins , setCoins] = useState([]);
    const [search , setSearch] = useState("");                        // bar aval k load mishe site v filter anjam mishe chon hama "" ro daran pas hame neshon dade mishan 


    useEffect(() => {
        const fetchApi = async () => {
        const data = await getCoin()
        setCoins(data);    
        }

        fetchApi();
    } , [])

    const searchHandler = event => {
        setSearch(event.target.value);
    }

    const searchedCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase())) //lowerCase ro be 2 taraf midahim 


    return (
        <>
            <div>
                <span><img src={search1} alt="search"  /></span>  
                <input className={styles.input} type="text" placeholder="SEARCH" value={search} onChange={searchHandler}/>  
            </div>
            {
                coins.length ? 
                    <div className={styles.coinContainer}>
                        {
                                searchedCoins.map((coin) => <Coin
                                key={coin.id}
                                name={coin.name}
                                image={coin.image}              
                                symbol={coin.symbol}
                                price={coin.current_price}
                                marketCap={coin.market_cap}
                                priceChange={coin.price_change_percentage_24h}

                            />)
                        }
                    </div> :
                    <Loader/>

            }
        </>
    );
};

export default Landing;