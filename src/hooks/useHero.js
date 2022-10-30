import  useAxios  from 'axios-hooks';


export function useHero(heroId) {
    const[{ data: hero, loading: isLoadingHero }, getHero] = useAxios(
        `/${heroId}`,
        { manual: heroId == null }
        );
        
    return {hero, isLoadingHero, getHero};
}