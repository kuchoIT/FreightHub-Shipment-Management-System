import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";


class Table extends Component
{
  constructor(props) {
    
    super(props);
    this.state = {
      data:   [{
        "id": "S1000",
        "name": "T-shirts(Summer2018) from Shanghai to Hamburg",
        "cargo": [
          {
            "type": "Fabric",
            "description": "1000 Blue T-shirts",
            "volume": "2"
          },
          {
            "type": "Fabric",
            "description": "2000 Green T-shirts",
            "volume": "3"
          }
        ],
        "mode": "sea",
        "type": "FCL",
        "destination": "Saarbrücker Str. 38, 10405 Berlin",
        "origin": "Shanghai Port",
        "services": [
          {
            "type": "customs"
          }
        ],
        "total": "1000",
        "status": "ACTIVE",
        "userId": "U1000"
      },
      {
        "id": "S1001",
        "name": "New spring collection(2018)",
        "cargo": [
          {
            "type": "Furniture",
            "description": "300 Tables",
            "volume": "20"
          },
          {
            "type": "Furniture",
            "description": "1500 Chairs",
            "volume": "15"
          }
        ],
        "mode": "sea",
        "type": "FCL",
        "destination": "Saarbrücker Str. 38, 10405 Berlin",
        "origin": "Ningbo port",
        "services": [
          {
            "type": "customs"
          },
          {
            "type": "insurance",
            "value": "100"
          }
        ],
        "total": "3000",
        "status": "ACTIVE",
        "userId": "U1002"
      },
      {
        "id": "S1002",
        "name": "PO89634, PO27X",
        "cargo": [
          {
            "type": "Bikes model 27X",
            "description": "100 Bikes model 27X",
            "volume": "100"
          }
        ],
        "mode": "air",
        "type": "LCL",
        "destination": "Saarbrücker Str. 38, 10405 Berlin",
        "origin": "Shanghai Port",
        "services": [
          {
            "type": "customs"
          }
        ],
        "total": "10000",
        "status": "COMPLETED",
        "userId": "U1001"
      },
      {
        "id": "S1003",
        "name": "New Furnitures from Shengen(2018)",
        "cargo": [
          {
            "type": "Couch22 White",
            "description": "103 Couch model Couch22",
            "volume": "103"
          }
        ],
        "mode": "sea",
        "type": "LCL",
        "destination": "Mullerstr 6, 13353 Berlin",
        "origin": "Shengen Port",
        "services": [
          {
            "type": "insurance"
          }
        ],
        "total": "10000",
        "status": "COMPLETED",
        "userId": "U5312"
      },
      {
        "id": "S1004",
        "name": "New Furnitures from Shengen",
        "cargo": [
          {
            "type": "Couch22 White",
            "description": "103 Couch model Couch22",
            "volume": "103"
          }
        ],
        "mode": "air",
        "type": "LCL",
        "destination": "Mullerstr 6, 13353 Berlin",
        "origin": "Shengen Port",
        "services": [
          {
            "type": "insurance"
          }
        ],
        "total": "10000",
        "status": "NEW",
        "userId": "U5312"
      },
      {
        "id": "S1005",
        "name": "New Furnitures From Chittagong",
        "cargo": [
          {
            "type": "Couch22 White",
            "description": "103 Couch model Couch22",
            "volume": "103"
          },
          {
            "type": "Couch22 Black",
            "description": "103 Couch model Couch22",
            "volume": "103"
          }
        ],
        "mode": "air",
        "type": "FCL",
        "destination": "Mullerstr 6, 13353 Berlin",
        "origin": "Chittagong Port",
        "services": [
          {
            "type": "insurance"
          }
        ],
        "total": "1000",
        "status": "NEW",
        "userId": "U5312"
      },
      {
        "id": "S1006",
        "name": "Vacuum Cleaners",
        "cargo": [
          {
            "type": "TVAC515",
            "description": "555 TVAC515 120V",
            "volume": "555"
          },
          {
            "type": "Couch22 Black",
            "description": "555 TVAC515 240V",
            "volume": "555"
          }
        ],
        "mode": "air",
        "type": "FCL",
        "destination": "Tughlakabad Port",
        "origin": "Hamburg Port",
        "services": [
          {
            "type": "insurance"
          },
          {
            "type": "customs"
          }
        ],
        "total": "100000",
        "status": "ACTIVE",
        "userId": "U531221"
      },
      {
        "id": "S1007",
        "name": "Mattress",
        "cargo": [
          {
            "type": "MAT128",
            "description": "MAT12ftx82ft",
            "volume": "666"
          }
        ],
        "mode": "sea",
        "type": "FCL",
        "destination": "Shengen Port",
        "origin": "Bremerhaven Port",
        "services": [
          {
            "type": "customs"
          }
        ],
        "total": "101010",
        "status": "ACTIVE",
        "userId": "U531222"
      },
      {
        "id": "S1008",
        "name": "Scooters",
        "cargo": [
          {
            "type": "Gororo",
            "description": "Gororo Type B",
            "volume": "150"
          }
        ],
        "mode": "air",
        "type": "FCL",
        "destination": "Rotterdam Port",
        "origin": "Xianbou Port",
        "services": [
          {
            "type": "customs"
          }
        ],
        "total": "60120120",
        "status": "COMPLETED",
        "userId": "U1337"
      },
      {
        "id": "S1009",
        "name": "Helmets",
        "cargo": [
          {
            "type": "HelmGoro",
            "description": "HelmGoro Red",
            "volume": "150"
          }
        ],
        "mode": "air",
        "type": "LCL",
        "destination": "Rotterdam Port",
        "origin": "Xianbou Port",
        "services": [
          {
            "type": "customs"
          }
        ],
        "total": "60120120",
        "status": "COMPLETED",
        "userId": "U1337"
      },
      {
        "id": "S1010",
        "name": "Neukrit 5a Cable",
        "cargo": [
          {
            "type": "Neukrit5a",
            "description": "Cable with phantom support",
            "volume": "80"
          }
        ],
        "mode": "air",
        "type": "LCL",
        "destination": "Rotterdam Port",
        "origin": "Xianbou Port",
        "services": [
          {
            "type": "customs"
          }
        ],
        "total": "420420",
        "status": "ACTIVE",
        "userId": "U0002"
      },
      {
        "id": "S1011",
        "name": "Neukrit Phantom3",
        "cargo": [
          {
            "type": "NeukritPh3",
            "description": "Phantom Plug Gold Plated",
            "volume": "100"
          }
        ],
        "mode": "sea",
        "type": "LCL",
        "destination": "Rotterdam Port",
        "origin": "Xianbou Port",
        "services": [
          {
            "type": "customs"
          }
        ],
        "total": "420420",
        "status": "ACTIVE",
        "userId": "U0002"
      },
      {
        "id": "S1012",
        "name": "T-shirts(Spring 2018) from Shanghai to Hamburg",
        "cargo": [
          {
            "type": "Fabric",
            "description": "1000 Blue T-shirts",
            "volume": "2"
          },
          {
            "type": "Fabric",
            "description": "2000 Green T-shirts",
            "volume": "3"
          }
        ],
        "mode": "sea",
        "type": "FCL",
        "destination": "Saarbrücker Str. 38, 10405 Berlin",
        "origin": "Shanghai Port",
        "services": [
          {
            "type": "customs"
          }
        ],
        "total": "1000",
        "status": "COMPLETED",
        "userId": "U1000"
      },
      {
        "id": "S1013",
        "name": "New spring furniture collection(2018)",
        "cargo": [
          {
            "type": "Furniture",
            "description": "300 Tables",
            "volume": "20"
          },
          {
            "type": "Furniture",
            "description": "1500 Chairs",
            "volume": "15"
          }
        ],
        "mode": "sea",
        "type": "FCL",
        "destination": "Saarbrücker Str. 38, 10405 Berlin",
        "origin": "Ningbo port",
        "services": [
          {
            "type": "customs"
          },
          {
            "type": "insurance",
            "value": "100"
          }
        ],
        "total": "3000",
        "status": "COMPLETED",
        "userId": "U1002"
      },
      {
        "id": "S1014",
        "name": "New Furnitures from Shengen(Rosewood)",
        "cargo": [
          {
            "type": "Couch22 White",
            "description": "103 Couch model Couch22",
            "volume": "103"
          }
        ],
        "mode": "air",
        "type": "LCL",
        "destination": "Mullerstr 6, 13353 Berlin",
        "origin": "Shengen Port",
        "services": [
          {
            "type": "insurance"
          }
        ],
        "total": "10000",
        "status": "COMPLETED",
        "userId": "U5312"
      },
      {
        "id": "S1015",
        "name": "New Furnitures From Chittagong(Sisou)",
        "cargo": [
          {
            "type": "Couch22 White",
            "description": "103 Couch model Couch22",
            "volume": "103"
          },
          {
            "type": "Couch22 Black",
            "description": "103 Couch model Couch22",
            "volume": "103"
          }
        ],
        "mode": "air",
        "type": "FCL",
        "destination": "Mullerstr 6, 13353 Berlin",
        "origin": "Chittagong Port",
        "services": [
          {
            "type": "insurance"
          }
        ],
        "total": "1000",
        "status": "NEW",
        "userId": "U5312"
      },
      {
        "id": "S1016",
        "name": "Vacuum Cleaners",
        "cargo": [
          {
            "type": "TVAC515",
            "description": "555 TVAC515 120V",
            "volume": "555"
          },
          {
            "type": "Couch22 Black",
            "description": "555 TVAC515 240V",
            "volume": "555"
          }
        ],
        "mode": "sea",
        "type": "FCL",
        "destination": "Tughlakabad Port",
        "origin": "Hamburg Port",
        "services": [
          {
            "type": "insurance"
          },
          {
            "type": "customs"
          }
        ],
        "total": "100000",
        "status": "COMPLETED",
        "userId": "U531221"
      },
      {
        "id": "S1017",
        "name": "Mattress(Medium)",
        "cargo": [
          {
            "type": "MAT128",
            "description": "MAT12ftx82ft",
            "volume": "666"
          }
        ],
        "mode": "sea",
        "type": "FCL",
        "destination": "Shengen Port",
        "origin": "Bremerhaven Port",
        "services": [
          {
            "type": "customs"
          }
        ],
        "total": "101010",
        "status": "ACTIVE",
        "userId": "U531222"
      },
      {
        "id": "S1018",
        "name": "Scooters Blue/Green",
        "cargo": [
          {
            "type": "Gororo",
            "description": "Gororo Type B",
            "volume": "150"
          }
        ],
        "mode": "air",
        "type": "FCL",
        "destination": "Rotterdam Port",
        "origin": "Xianbou Port",
        "services": [
          {
            "type": "customs"
          }
        ],
        "total": "60120120",
        "status": "COMPLETED",
        "userId": "U1337"
      },
      {
        "id": "S1019",
        "name": "Helmets(Round)",
        "cargo": [
          {
            "type": "HelmGoro",
            "description": "HelmGoro Red",
            "volume": "150"
          }
        ],
        "mode": "air",
        "type": "LCL",
        "destination": "Rotterdam Port",
        "origin": "Xianbou Port",
        "services": [
          {
            "type": "customs"
          }
        ],
        "total": "60120120",
        "status": "COMPLETED",
        "userId": "U1337"
      },
      {
        "id": "S1020",
        "name": "Neukrit 5a Cable",
        "cargo": [
          {
            "type": "Neukrit5a",
            "description": "Cable with phantom support",
            "volume": "80"
          }
        ],
        "mode": "air",
        "type": "LCL",
        "destination": "Rotterdam Port",
        "origin": "Xianbou Port",
        "services": [
          {
            "type": "customs"
          }
        ],
        "total": "420420",
        "status": "ACTIVE",
        "userId": "U0002"
      },
      {
        "id": "S1021",
        "name": "Neukrit Phantom3",
        "cargo": [
          {
            "type": "NeukritPh3",
            "description": "Phantom Plug Gold Plated",
            "volume": "100"
          }
        ],
        "mode": "sea",
        "type": "LCL",
        "destination": "Rotterdam Port",
        "origin": "Xianbou Port",
        "services": [
          {
            "type": "customs"
          }
        ],
        "total": "420420",
        "status": "ACTIVE",
        "userId": "U0002"
      },
      {
        "id": "S1022",
        "name": "T-shirts(Spring 2019) from Shanghai to Hamburg",
        "cargo": [
          {
            "type": "Fabric",
            "description": "1000 Blue T-shirts",
            "volume": "2"
          },
          {
            "type": "Fabric",
            "description": "2000 Green T-shirts",
            "volume": "3"
          }
        ],
        "mode": "sea",
        "type": "FCL",
        "destination": "Saarbrücker Str. 38, 10405 Berlin",
        "origin": "Shanghai Port",
        "services": [
          {
            "type": "customs"
          }
        ],
        "total": "1000",
        "status": "ACTIVE",
        "userId": "U1000"
      },
      {
        "id": "S1023",
        "name": "New spring collection(2019)",
        "cargo": [
          {
            "type": "Furniture",
            "description": "300 Tables",
            "volume": "20"
          },
          {
            "type": "Furniture",
            "description": "1500 Chairs",
            "volume": "15"
          }
        ],
        "mode": "sea",
        "type": "FCL",
        "destination": "Saarbrücker Str. 38, 10405 Berlin",
        "origin": "Ningbo port",
        "services": [
          {
            "type": "customs"
          },
          {
            "type": "insurance",
            "value": "100"
          }
        ],
        "total": "3000",
        "status": "ACTIVE",
        "userId": "U1002"
      }],
          };
          
          this.renderEditable = this.renderEditable.bind(this);
  }
  renderEditable(cellInfo) {
    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const data = [...this.state.data];
          data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          this.setState({ data });
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.data[cellInfo.index][cellInfo.column.id]
        }}
      />
    );
  }

render()


{
    const { data } = this.state;
        return(

<div>
<ReactTable style={{textAlign: "center" }}
          contentEditable
          sortable
          
          defaultFilterMethod={(filter, row, column) => {
            const id = filter.pivotId || filter.id;
            return row[id] !== undefined
              ? String(row[id])
                  .toLowerCase()
                  .indexOf(filter.value.toLowerCase()) !== -1
              : true;
          }}
          data={data}
          columns={[{
            
            Header: 'SHIPMENTS',
      headerStyle: {
                    fontSize: '25px',
                    fontWeight:'bold', 
                    textAligh: 'center', 
                    height: '40', 
                    color: 'white' , 
                    backgroundImage: 'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,73,121,1) 35%, rgba(0,212,255,1) 100%)'
                  },
      columns: [{
        Header: 'ID',
        accessor: 'id',
        
      }, {
        Header: 'NAME',
        accessor: 'name',
        Cell: this.renderEditable
      },
      {
        Header: 'CARGO',
        id:'cargo',
        accessor: (row) => row.cargo.map((sub)=>
        <div>
        <table className="greenTable">
        <th>TYPE</th><th>DESCRIPTION</th><th>VOLUME</th>
        <tr>
          <td>{sub.description}&nbsp;</td>  
          <td>{sub.type}&nbsp;</td>
          <td>{sub.volume}&nbsp;</td>
        </tr>                       
    </table></div>
    )
        
      },
    
    {

        Header: 'MODE',
        accessor: 'mode'
        
      },{
        Header: 'TYPE',
        accessor: 'type'
      },
      {
        Header: 'DESTINATION',
        accessor: 'destination'
      },{
        Header: 'ORIGIN',
        accessor: 'origin'
      },{
        Header: 'SERVCES',
        id:'services',
        accessor: (row) => row.services.map((sub)=>
        <table className="greenTable">
        <th>TYPE</th><th>Value</th>
        <tr>
          <td>{sub.type}</td>  
          <td>{sub.value}</td>
                  </tr>                       
    </table>
    )
      },{
        Header: 'TOTAL',
        accessor: 'total'
      },{
        Header: 'STATUS',
        accessor: 'status',
        Filter: ({ filter, onChange }) =>
                    <select
                      onChange={event => onChange(event.target.value)}
                      style={{ width: "100%" }}
                      value={filter ? filter.value : "all"}
                    >
                      <option value={""}>SHOW ALL</option>
                      <option value="COMPLETED">COMPLETED</option>
                      <option value="NEW">NEW</option> 
                      <option value="ACTIVE">ACTIVE</option>
                    </select>,
      
        Cell: row => (
          <div style={{textAlign: "center" , textTransform: "uppercase"}} >
            <span style={{
                color: row.value === 'COMPLETED'|'completed' ? '#ff2e00'
                : row.value === 'NEW'|'new' ? '#ffbf00'
                : '#57d500',
              transition: 'all .3s ease'
            }}>
              &#x25cf;
            </span> {
              row.value === 'COMPLETED' ? 'completed'
              : row.value === 'NEW' ? `new`
              : 'ACTIVE'
            }
          </div>
        )
      },{
        Header: 'USERID',
        accessor: 'userId'
      }]
    }]}   
            
          filterable
         
          defaultPageSize={10}
          className="-striped -highlight"
          SubComponent={row => {
            
            return (
              <div style={{ padding: "20px" }}>
               
                <ReactTable
                  data = {data}
                  columns={[{
            
                    Header: 'CARGO',                    
              headerStyle: {
                            fontSize: '20px',
                            fontWeight:'bold', 
                            textAligh: 'center', 
                            height: '30', 
                            color: 'white' , 
                            backgroundImage: 'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(13,135,101,1) 55%, rgba(0,255,179,1) 100%)'
                          },
              columns: [{
                Header: 'ID',
                id: 'id',
                accessor: 'id',                          
               
              },{
                Header: 'TYPE',
                id: 'type',
                accessor: (row) => row.cargo.map((sub)=><h5>{sub.type}</h5>),
                
               
              },{
                Header: 'DESCRIPTION',
                id:'description',
                accessor: (row) => row.cargo.map((sub)=><h5>{sub.description}</h5>),
                
              }, {
                Header: 'VOLUME',
                id: 'volume',
                accessor: (row) => row.cargo.map((sub)=><h5>{sub.volume}</h5>),
                
                
              }]}]}
                  defaultPageSize={1}
                  showPagination={true}
                  filterable
                  sortable
                  defaultFilterMethod={(filter, row, column) => {
                    const id = filter.pivotId || filter.id;
                    return row[id] !== undefined
                      ? String(row[id])
                          .toLowerCase()
                          .indexOf(filter.value.toLowerCase()) !== -1
                      : true;
                  }}
                                                    />
              </div>
            );
          }}
        />
        
        <br />
        </div>
        ) 
}
}

export default Table
