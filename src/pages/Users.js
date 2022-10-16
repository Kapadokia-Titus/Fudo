import {useState, useEffect} from 'react';
import { Table } from 'rsuite';
import { getAllUsers } from '../client/Client';
import { AddUser } from '../components/AddUser';
import Container from '../components/Container';

const { Column, HeaderCell, Cell } = Table;

export default function Users(){

    // init a state
    const [data, setData] = useState([])

    useEffect(()=>{
        getAllUsers()
        .then(res=>res.json())
        .then(users=> setData(users))
    }, [])
    return(
       <Container>
         <Table
      height={400}
      data={data}
      onRowClick={rowData => {
        console.log(rowData);
      }}
    >
      <Column width={100} align="center" fixed>
        <HeaderCell>Id</HeaderCell>
        <Cell dataKey="userId" />
      </Column>

      <Column width={150}>
        <HeaderCell>First Name</HeaderCell>
        <Cell dataKey="fname" />
      </Column>

      <Column width={150}>
        <HeaderCell>Last Name</HeaderCell>
        <Cell dataKey="lname" />
      </Column>

      <Column width={100}>
        <HeaderCell>Gender</HeaderCell>
        <Cell dataKey="gender" />
      </Column>

      <Column width={100}>
        <HeaderCell>Email</HeaderCell>
        <Cell dataKey="userEmail" />
      </Column>

      <Column width={150}>
        <HeaderCell>Image</HeaderCell>
        <Cell dataKey="userImage" />
      </Column>

      <Column width={80} fixed="right">
        <HeaderCell>...</HeaderCell>

        <Cell>
          {rowData => (
            <span>
              <a onClick={() => alert(`id:${rowData.id}`)}> Edit </a>
            </span>
          )}
        </Cell>
      </Column>
    </Table>

     {/* add users section */}
    <AddUser />
 </Container>

    
    )
}