// import { useContext, useEffect, useState } from "react"
// import { SearchPlantsContext } from "./SearchPlantsProvider"


// export const PlantSearch = () => {
//     const { searchTerms, setSearchTerms, searchablePlants, getSearchablePlants } = useContext(SearchPlantsContext)
//     // const [filteredPlants, setFiltered] = useState([])
//     // const {searchablePlants, getSearchablePlants, searchTerms} = useContext(SearchPlantsContext)
//     const handleInputChange = (event) => {
//         const plantTerms = event.target.value
//         setSearchTerms(plantTerms)
        
//     }
    
//     const handlePlantSearch = () => {
        
//         console.log('searchTerms: ', searchTerms);
//             getSearchablePlants(searchTerms)
//         }
// // on the dom in the search section when typing in the search bar
// //setSearchTerms grabs the data on keyup and updates the searchterms
//     return (
//     <>
//         <div className="d-flex justify-content-center flex-wrap pl-5 pt-2 col-example ">
//         <h4>Search for a plant:</h4>
        
//         <input type="text"
//           className="input--wide"
//           id="plantSearch"
//           onChange={handleInputChange}
//           placeholder="Search for an plant... " />
//           <button className="primary" onClick={e => {
//                 e.preventDefault()
//                 handlePlantSearch()}}>Search Plants</button>
//           </div>
//     </>
//     )
//   }