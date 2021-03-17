import { useContext } from "react"
import { SearchPlantsContext } from "./SearchPlantsProvider"

export const PlantSearch = () => {
    const { setSearchTerms } = useContext(SearchPlantsContext)
    
// on the dom in the search section when typing in the search bar
//setSearchTerms grabs the data on keyup and updates the searchterms
    return (
      <>
        Plant search:
        <input type="text"
          className="input--wide"
          onKeyUp={(event) => setSearchTerms(event.target.value)}
          placeholder="Search for an plant... " />
      </>
    )
  }