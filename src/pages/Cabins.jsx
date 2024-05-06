import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

import AddCabin from "../features/cabins/addCabin";
import CabinTableOperations from "../features/cabins/cabinTableOperations";

function Cabins() {
  // function handlesShowForm() {
  //   console.log(showForm);
  // }

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperations />
      </Row>

      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
