
import {setGameTypesFromApi} from "./gametype.slice";

export const asyncRequestGameTypesApi = (dispatch) => {
    const host = 'https://demo7919674.mockable.io/';

    return async (dispatch) => {
        try {
            await
                fetch(`${host}`)
                    .then(resp => resp.json())
                    .then((data) => {dispatch(setGameTypesFromApi(data))});
        }
        catch (e) {
            console.log(e)
        }
    }
}
