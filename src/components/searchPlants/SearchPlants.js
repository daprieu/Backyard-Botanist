import { useContext } from "react"
import { SearchPlantsContext } from "./SearchPlantsProvider"


export const PlantSearch = () => {
    const { setSearchTerms } = useContext(SearchPlantsContext)
    
// on the dom in the search section when typing in the search bar
//setSearchTerms grabs the data on keyup and updates the searchterms
    return (
    <>
        <div className="d-flex justify-content-center flex-wrap pl-5 pt-2 col-example ">
        <h4>Search for a plant:</h4>
        
        <input type="text"
          className="input--wide"
          onKeyDown={(event) => setSearchTerms(event.target.value.toUpperCase())}
          placeholder="Search for an plant... " /></div>
    </>
    )
  }