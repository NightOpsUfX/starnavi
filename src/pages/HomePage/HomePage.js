import "./HomePage.scss"
import {useEffect, useState} from "react";
import {Title} from "../../components/UiLibraryComponents/Title/Title";
import {SimpleTextInfo} from "../../components/UiLibraryComponents/SimpleTextInfo/SimpleTextInfo";
import {useDispatch, useSelector} from "react-redux";
import {asyncRequestApi} from "../../redux/KittiesSlice/kitties.thunk";
import {KittiesItem} from "../../components/KittiesItem/KittiesItem";
import {LoadingSpinner} from "../../components/UiLibraryComponents/LoadingSpinner/LoadingSpinner";
import {Select} from "../../components/UiLibraryComponents/Select/Select";
import {setKittiesListClear} from "../../redux/KittiesSlice/kitties.slice";

export const HomePage = () => {

// states & variables
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const kittiesList = state && state?.kittiesStore?.kittiesList && state?.kittiesStore?.kittiesList
    const kittiesPaginationInfo = state && state?.kittiesStore?.kittiesList && state?.kittiesStore?.kittiesPaginationInfo
    const [urlParams, setUrlParams] = useState({sortParam: 'category', nextPage: '1'});
    const selectValuesArray = ["category", "name",  "price"]
    const [fetching, setFetching] = useState(true);
// end states & variables

//first request
    useEffect(() => {
        dispatch(asyncRequestApi(dispatch, urlParams))
        setFetching(false)
    }, [])
// end first request

// changeSortParameter
    const changeSortParameter = (value) => {
        setUrlParams({sortParam: value, nextPage: '1'})
        setFetching(true)
    }
// end changeSortParameter

// request with changed params
    const nextRequest = async () => {
        await dispatch(asyncRequestApi(dispatch, urlParams))
        setFetching(false)
        // setTotalPages(kittiesPaginationInfo.total_pages)
    }
    useEffect(() => {
        if(fetching === true && kittiesList) {
            nextRequest()
        }
    }, [fetching])
// end request with changed params

// set next page
    useEffect(() => {
        setUrlParams({...urlParams, nextPage: kittiesPaginationInfo.next_page})
    },[kittiesPaginationInfo.next_page])
// end set next page

// scroll
    const scrollHandler = (e) => {
        if((e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 25)) {
            setFetching(true)
        }
    }
    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener("scroll", scrollHandler)
            dispatch(setKittiesListClear())
        }
    },[])
// end scroll

    return (
        <div className={`homePage__main container ${fetching ? "not-active" : ""}`}>
            <Title titleText={'Crypto Kitties List'} />
            <SimpleTextInfo simpleTextInfo={`Sort by:`}/>
            <Select valuesArray={selectValuesArray} selectAction={changeSortParameter} />
            {
                kittiesList
                    ?
                    <div className={`homePage__kitties-items-wrapper`}>
                        {
                            kittiesList  && kittiesList.map((item) => {
                                return (
                                    <KittiesItem item={item}/>
                                )
                            })
                        }
                    </div>
                :
                    <LoadingSpinner/>
            }
            {fetching && <LoadingSpinner/>}
        </div>
    )
}



