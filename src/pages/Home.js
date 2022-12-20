import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import { FaWindowClose } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { GPSdata } from '../GPSdata'
import { Helmet } from 'react-helmet'
import { BsSearch } from 'react-icons/bs'

const Home = () => {
  const [showModal, setShowModal] = useState()
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
        <div className='row mx-2 my-3'>
          <div className='col-6 flex'>
            <BsSearch size={35} className='m-1' />
            <input onChange={(e) => searchItems(e.target.value)} 
              type="text" 
              placeholder="Search by Device ID/Type" 
              className='p-2 mx-3 rounded-3xl col-9 bg-slate-600' />
          </div>
          <div className='col-6 text-end'>
            <button className='bg-green-600 mx-2 p-2 rounded-xl' onClick={() => setShowModal(true)}>Add Data</button>
            <button className='bg-blue-600 mx-2 p-2 rounded-xl'>Logout</button>
          </div>
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
        {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-4xl">
              {/* content */}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/* header */}
                <div className="flex flex-col items-start justify-between p-5 rounded-t">
                  <button
                    className="p-1 ml-auto bg-black border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <FaWindowClose size={30} />
                  </button>
                  <div className="mt-6 mx-auto">
                    <h3 className="text-3xl font-semibold text-black">Add new address</h3>
                  </div>
                </div>
                {/* body 
                <div className="w-[900px] flex flex-col relative p-6">
                  <div className="w-full mb-2 flex flex-col">
                    <label className="text-[#9B9B9B]">Save address as (ex : home address, office address)</label>
                    <input type="text" className="border h-11 px-3 rounded mt-2" />
                  </div>
                  <div className="flex mb-2 w-full">
                    <div className="flex flex-col mr-4 w-1/2">
                      <label className="text-[#9B9B9B]">Recipient’s name</label>
                      <input type="text" className="border h-11 px-3 rounded mt-2" />
                    </div>
                    <div className="flex flex-col ml-4 w-1/2">
                      <label className="flex text-[#9B9B9B] flex-col">Recipient&apos;s telephone number</label>
                      <input type="text" className="border h-11 px-3 rounded mt-2" />
                    </div>
                  </div>
                  <div className="flex mb-2 w-full">
                    <div className="flex flex-col mr-4 w-1/2">
                      <label className="text-[#9B9B9B]">Address</label>
                      <input type="text" className="border h-11 px-3 rounded mt-2" />
                    </div>
                    <div className="flex flex-col ml-4 w-1/2">
                      <label className="flex flex-col text-[#9B9B9B]">Postal code</label>
                      <input type="number" className="border h-11 px-3 rounded mt-2" />
                    </div>
                  </div>
                  <div className="w-1/2 mb-2 flex flex-col">
                    <label className="text-[#9B9B9B]">City or Subdistrict</label>
                    <input type="text" className="border mr-4 h-11 px-3 rounded mt-2" />
                  </div>
                  <div className="mb-2">
                    <input type="checkbox" className="mr-4 mt-8" />
                    <label className="text-[#9B9B9B]">Make it the primary address</label>
                  </div>
                </div>*/}
                {/* footer 
                <div className="flex items-center justify-end p-4 mr-5 rounded-b">
                  <button
                    className="text-gray-500 hover:bg-gray-500 hover:text-white active:bg-gray-600 px-20 py-2 rounded-full outline outline-2 focus:outline mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className=" text-white bg-red-500 active:bg-red-600 px-20 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    onClick={() => setShowModal(false)}
                  >
                    Save
                  </button>
                </div>*/}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black" />
        </>
      ) : null}
      </div>
    </>
  )
}

export default Home