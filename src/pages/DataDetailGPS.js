import React, { useState } from 'react'
//import { Table } from 'react-bootstrap'
import DataTable from 'react-data-table-component'
import { useSearchParams } from 'react-router-dom'
import { GPSdata } from '../GPSdata'
import { Helmet } from 'react-helmet'

const DataDetailGPS = () => {
  //const [filteredLocation, setFilteredLocation] = useState([])
  const [ queryParams ] = useSearchParams()
  const deviceId = queryParams.get('device_id')
  const data = GPSdata

  const columns = [
    {
        name: <div style={{
          fontSize: '15px'
        }}>Timestamp</div>,
        selector: row => row.timestamp,
        sortable: false,
        cell: row => <div style={{fontSize: 16}}>{row.timestamp}</div>
    },
    {
        name: <div style={{
          fontSize: '15px'
        }}>Location</div>,
        selector: row => row.location,
        sortable: false,
        cell: row => <div style={{fontSize: 16}}>{row.location}</div>
    }
  ]

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

  const deviceType = data.filter((item) => {
    return item.device_id === deviceId
  })[0].device_type
  const filteredData = data.filter((item) => {
    return item.device_id === deviceId && item.device_type === deviceType
  })
  let locationData = []
  let pieChartData = [
    ['Location', 'Total Location']
  ]

  for (let i = 0; i < filteredData.length; i++) {
    locationData.push(filteredData[i].location) 
  }

  let sortedLocationData = locationData.sort()

  /*for (let i = 1; i < sortedLocationData.length; i++) {
    pieChartData[i][0].push(sortedLocationData[i])
    pieChartData[i][1].push(sortedLocationData[i])
  }*/

  return (
    <>
      <Helmet>
        <style>{'body { background-color: #101010; }'}</style>
      </Helmet>
      <div style={{
        margin: '0 140px'
      }} className='p-8'>
        <div className='text-3xl'>{deviceId}</div>
        <div className='text-3xl'>{deviceType}</div>
        {/*
          filteredData.map((item) => {
            return item.timestamp + ' ' + item.location + '\n'
          })
        }
        {
          sortedLocationData.map((element, index) => {
            return (
              <>
                <h5>{element}</h5>
              </>
            )
          })
        */}
        <div className='py-6 row'>
          <div className='px-1 border-2 border-white border-solid rounded-xl col-4'>
            <DataTable columns={columns} data={filteredData} customStyles={customStyles} pagination />
          </div>
          <div className='col-8'>2</div>
        </div>
      </div>
    </>
  )
}

export default DataDetailGPS