import React from 'react'
import DataTable from 'react-data-table-component'
import { Chart } from 'react-google-charts'
import { useSearchParams } from 'react-router-dom'
import { GPSdata } from '../GPSdata'
import { Helmet } from 'react-helmet'

const DataDetailGPS = () => {
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

  const options = {
    title: 'Time Percentage On Each Location',
    backgroundColor: '#101010',
    titleTextStyle: {color: '#FFFFFF'},
    legend: {
      textStyle: { color: '#FFFFFF' }
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
  let locationDataset = [...new Set(sortedLocationData)]

  for (let i = 0; i < locationDataset.length; i++) {
    pieChartData.push([
      locationDataset[i],
      filteredData.filter((item) => {
        return item.location === locationDataset[i]
      }).length
    ])
  }

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
        <div className='py-6 row'>
          <div className='px-1 border-2 border-white border-solid rounded-xl col-4'>
            <DataTable columns={columns} data={filteredData} customStyles={customStyles} pagination />
          </div>
          <div className='col-8 text-center border-2 border-white border-solid rounded-xl'>
            <Chart chartType="PieChart" data={pieChartData} options={options} width={"100%"} height={"400px"}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default DataDetailGPS