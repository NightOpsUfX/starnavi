
import {setKittiesList, setKittiesListWithNewParam} from "./kitties.slice";

let urlParamsTemp

export const asyncRequestApi = (dispatch, urlParams) => {

    const host = 'https://ftl-cryptokitties.fly.dev/api/crypto_kitties';

    return async (dispatch) => {
        try {
            await
                fetch(`${host}?sort_by=${urlParams.sortParam}&sort_dir=asc&page=${urlParams.nextPage}&per_page=25`)
                    .then(resp => resp.json())
                    .then((data) => {
                          if(urlParamsTemp === urlParams.sortParam) {
                            dispatch(setKittiesList(data))
                            urlParamsTemp = urlParams.sortParam
                        }
                        if(urlParamsTemp !== urlParams.sortParam) {
                            dispatch(setKittiesListWithNewParam(data))
                            urlParamsTemp = urlParams.sortParam
                        }
                    });
        }
        catch (e) {
            console.log(e)
        }
    }
}
