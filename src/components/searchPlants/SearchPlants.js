import { useContext } from "react"
import { SearchPlantsContext } from "./SearchPlantsProvider"
import { Button, FormControl, InputGroup } from "react-bootstrap"

export const PlantSearch = () => {
    const { setSearchTerms } = useContext(SearchPlantsContext)
    
// on the dom in the search section when typing in the search bar
//setSearchTerms grabs the data on keyup and updates the searchterms
    return (
    <>
    <InputGroup className="mb-3">
    <FormControl
      placeholder="Search for a plant"
      
    />
    <InputGroup.Append>
      <Button variant="success" onClick={(event) => setSearchTerms(event.target.value)}>search</Button>
    </InputGroup.Append>
  </InputGroup>
        Plant search:
        <input type="text"
          className="input--wide"
          onChange={(event) => setSearchTerms(event.target.value)}
          placeholder="Search for an plant... " />
    </>
    )
  }