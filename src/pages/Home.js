import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import { Link } from 'react-router-dom'
import { GPSdata } from '../GPSdata'
import { Helmet } from 'react-helmet'
import { BsSearch } from 'react-icons/bs'

const Home = () => {
  const [devices, setDevices] = useState([])
  const [filteredResults, setFilteredResults] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const data = GPSdata
  const columns = [
    {
        name: <div style={{
          fontSize: '15px'
        }}>DeviceID</div>,
        selector: row => row.device_id,
        sortable: true,
        cell: row => <div style={{fontSize: 16}}><Link to={`/detail?device_id=${row.device_id}`} style={{
          textDecoration: 'none',
          color: '#FFFFFF'
        }}>
          {row.device_id}
        </Link></div>
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

  const searchItems = (searchValue) => {
      setSearchInput(searchValue);
      if (searchInput !== '') {
          const filteredData = data.filter((item) => {
            return Object.values(item)[0].toLowerCase().includes(searchInput.toLowerCase())
            ||
            Object.values(item)[1].toLowerCase().includes(searchInput.toLowerCase())
          })
          setFilteredResults(filteredData)
      }
      else{
          setFilteredResults(data)
      }
  }

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
      }
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
          <input onChange={(e) => searchItems(e.target.value)} type="text" placeholder="Search by Device ID/Type" className='p-2 mx-3 rounded-3xl col-4 bg-slate-600' />
        </div>
        {
          searchInput.length > 1 ? (
            <>
              <DataTable columns={columns} data={filteredResults} customStyles={customStyles} pagination />
            </>
          ) : (
            <>
              <DataTable columns={columns} data={data} customStyles={customStyles} pagination />
            </>
          )
        }
      </div>
    </>
  )
}

export default Home