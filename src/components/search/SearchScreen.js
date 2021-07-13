import React, { useMemo } from 'react'
import queryString from 'query-string'

import { HeroCard } from '../heroes/HeroCard'
import {useForm} from '../../hooks/useForm'
import { useLocation } from 'react-router-dom'
import { getHeroByName } from '../../selector/getHeroByName'

export const SearchScreen = ({history}) => {
  

    const location = useLocation();
    const {q =''}  = queryString.parse(location.search);
    
    
    const  [  formValues, handleInputChange ] = useForm({
        searchText:q,
    });
    
    const {searchText} = formValues;

    const handleSubmit = (e) => {
        e.preventDefault(searchText);
        history.push(`?q=${searchText}`)
    }

    const herosFilter = useMemo(() =>  getHeroByName(q), [q])

    return (
        <div className="container">
            <h1>Search Screen</h1>
            <form>
                <input type="text" placeholder="Ingrese un heroe" autoComplete="off" name="searchText" value={searchText} onChange={handleInputChange}/>
                <button onClick={handleSubmit}> search </button>
            </form>

            <h4>Results</h4>
           {
               herosFilter.map( heroe => (<HeroCard  key={heroe.id}{...heroe}/>) )
           }
        </div>
    )
}
