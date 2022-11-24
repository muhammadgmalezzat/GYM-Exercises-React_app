export const ExerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY_EXERCISES,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    },
};



export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY_YOUTUBE,
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
};


export const FetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();

    return data;
};