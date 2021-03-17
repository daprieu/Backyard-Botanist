import { useContext } from "react"
import { SearchPlantsContext } from "./SearchPlantsProvider"

export const PlantSearch = () => {
    const { setSearchTerms } = useContext(SearchPlantsContext)
    

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