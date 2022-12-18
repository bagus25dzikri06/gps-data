import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import { Helmet } from 'react-helmet'
import { BsSearch } from 'react-icons/bs'

const Home = () => {
  const [devices, setDevices] = useState([])
  const [filteredResults, setFilteredResults] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const columns = [
    {
        name: <div style={{
          fontSize: '15px'
        }}>DeviceID</div>,
        selector: row => row.device_id,
        sortable: true,
        cell: row => <div style={{fontSize: 16}}>{row.device_id}</div>
    },
    {
        name: <div style={{
          fontSize: '15px'
        }}>Device Type</div>,
        selector: row => row.device_type,
        sortable: true,
        cell: row => <div style={{fontSize: 16}}>{row.device_type}</div>
    },
    {
        name: <div style={{
          fontSize: '15px'
        }}>Latest Timestamp</div>,
        selector: row => row.timestamp,
        sortable: false,
        cell: row => <div style={{fontSize: 16}}>{row.timestamp}</div>
    },
    {
        name: <div style={{
          fontSize: '15px'
        }}>Latest Location</div>,
        selector: row => row.location,
        sortable: false,
        cell: row => <div style={{fontSize: 16}}>{row.location}</div>
    }
  ]
  const data = [
    {
      device_id: 'D-1567',
      device_type: 'Aircraft',
      timestamp: '31-08-2022 10:05',
      location: 'L1'
    },
    {
      device_id: 'D-1567',
      device_type: 'Aircraft',
      timestamp: '31-08-2022 10:10',
      location: 'L1'
    },
    {
      device_id: 'D-1567',
      device_type: 'Aircraft',
      timestamp: '31-08-2022 10:15',
      location: 'L1'
    },
    {
      device_id: 'D-1567',
      device_type: 'Aircraft',
      timestamp: '31-08-2022 10:20',
      location: 'L1'
    },
    {
      device_id: 'D-1567',
      device_type: 'Aircraft',
      timestamp: '31-08-2022 10:25',
      location: 'L2'
    },
    {
      device_id: 'D-1568',
      device_type: 'Personal',
      timestamp: '31-08-2022 10:05',
      location: 'L3'
    },
    {
      device_id: 'D-1568',
      device_type: 'Personal',
      timestamp: '31-08-2022 10:10',
      location: 'L3'
    },
    {
      device_id: 'D-1568',
      device_type: 'Personal',
      timestamp: '31-08-2022 10:15',
      location: 'L3'
    },
    {
      device_id: 'D-1568',
      device_type: 'Personal',
      timestamp: '31-08-2022 10:20',
      location: 'L3'
    },
    {
      device_id: 'D-1568',
      device_type: 'Personal',
      timestamp: '31-08-2022 10:25',
      location: 'L3'
    },
    {
      device_id: 'D-1569',
      device_type: 'Asset',
      timestamp: '31-08-2022 10:15',
      location: 'L4'
    },
    {
      device_id: 'D-1569',
      device_type: 'Asset',
      timestamp: '31-08-2022 10:20',
      location: 'L4'
    },
    {
      device_id: 'D-1569',
      device_type: 'Asset',
      timestamp: '31-08-2022 10:25',
      location: 'L1'
    },
    {
      device_id: 'D-1569',
      device_type: 'Asset',
      timestamp: '31-08-2022 10:30',
      location: 'L1'
    },
    {
      device_id: 'D-1569',
      device_type: 'Asset',
      timestamp: '31-08-2022 10:35',
      location: 'L2'
    },
    {
      device_id: 'D-1570',
      device_type: 'Personal',
      timestamp: '31-08-2022 10:35',
      location: 'L5'
    },
    {
      device_id: 'D-1571',
      device_type: 'Asset',
      timestamp: '31-08-2022 10:35',
      location: 'L6'
    }
  ]

  const filteredData = data.filter((obj) => 
    obj.device_id === 'D-1567' && obj.device_type === 'Aircraft'
  )

  /*const searchItems = (searchValue) => {
      setSearchInput(searchValue);
      if (searchInput !== '') {
          const filteredData = data.filter((obj) => 
            obj.device_id === searchInput[0].toUpperCase() + searchInput.substr(1) && 
            obj.device_type === searchInput[0].toUpperCase() + searchInput.substr(1)
          )
          setFilteredResults(filteredData)
      }
      else{
          setFilteredResults(data)
      }
  };*/

  const customStyles = {
    rows: {
        style: {
            backgroundColor: '#101010',
            color: '#FFFFFF'
        },
    },
    headCells: {
        style: {
            backgroundColor: '#101010',
            color: '#FFFFFF'
        },
    },
    cells: {
        style: {
            backgroundColor: '#101010',
            color: '#FFFFFF'
        },
    },
}
  
  return (
    <>
      <Helmet>
        <style>{'body { background-color: #101010; }'}</style>
      </Helmet>
      <div style={{
      margin: '0 140px'
      }} className='p-8'>
        <div className='text-3xl'>GPS Summary</div>
        <div className='flex m-2'>
          <BsSearch size={35} className='m-1' />
          <input type="text" placeholder="Search by Device ID/Type" className='p-2 mx-3 rounded-3xl col-4 bg-slate-600' />
        </div>
        {
          searchInput.length > 1 ? (
            <></>
          ) : (
            <></>
          )
        }
        <DataTable columns={columns} data={filteredData} customStyles={customStyles} pagination />
      </div>
    </>
  )
}

export default Home