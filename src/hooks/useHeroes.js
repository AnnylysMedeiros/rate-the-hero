import  useAxios  from 'axios-hooks';
import React from 'react';

export function useHeroes(searchValue) {
    const[{ data: heroes, loading: isLoadingHeroes }, searchHero] = useAxios(
        `/search/${searchValue}`,
        { manual: true }
        );
        
        React.useEffect(() => {
            searchHero();
        }, []);
        
    return {heroes, isLoadingHeroes, searchHero};
}