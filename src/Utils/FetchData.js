export const ExerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '370078ed9bmsh8f1512ee95da81ep154fe3jsn186eb5bf1093',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    },
};



export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': "544600759cmsh5f6ee90c626d7fap1879d2jsn24edca2891aa",
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
};


export const FetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();

    return data;
};