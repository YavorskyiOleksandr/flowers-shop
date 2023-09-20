import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { SeedlingItem } from '../../components/seedling-item'
import { Jumbotron } from '../../components/jumbotron'
import { Skeleton } from '../../routing/skeleton'
import { Pagination } from '../../routing/pagination/pagination'
import { Sorting } from '../../routing/sorting'
import { Search } from '../../routing/search'
import './home-page.css'

export const HomePage = () => {
  const [seedlings, setSeedlings] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [seedlingsPerPage] = useState(6)
  const [currentSort, setCurrentSort] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    axios
      .get('https://65038d90a0f2c1f3faec075e.mockapi.io/seedlings')
      .then(res => {
        setSeedlings(res.data)
        setIsLoading(false)
      })
  }, [])

  const lastSeedlingIndex = currentPage * seedlingsPerPage
  const firstSeedlingIndex = lastSeedlingIndex - seedlingsPerPage
  const currentSeedlings = seedlings.slice(
    firstSeedlingIndex,
    lastSeedlingIndex
  )

  const sortSeedlings = (seedlings, sort) => {
    switch (sort) {
      case 'new':
        return seedlings.sort((a, b) => b.id - a.id)
      case 'less':
        return seedlings.sort((a, b) => a.price - b.price)
      case 'more':
        return seedlings.sort((a, b) => b.price - a.price)
      default:
        return seedlings
    }
  }

  const totalPages = Math.ceil(seedlings.length / seedlingsPerPage)

  const paginate = pageNumber => setCurrentPage(pageNumber)
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1)
    }
  }
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1)
    }
  }

  const handleSortChange = selectedOption => {
    setCurrentSort(selectedOption)
    setCurrentPage(1)
  }

  const handleSearch = searchTerm => {
    setSearchTerm(searchTerm)
    setCurrentPage(1)
  }

  const filteredSeedlings = seedlings.filter(seedling => {
    return seedling.title.toLowerCase().includes(searchTerm.toLowerCase())
  })

  const sortedAndFilteredSeedlings = sortSeedlings(
    filteredSeedlings,
    currentSort
  )

  return (
    <div className='main_home-page'>
      <Jumbotron />
      <div id='home-page' className='home-page'>
        <div className='wrap'>
          <Search onSearch={handleSearch} />
          <p className='goods'>Товари</p>
          <Sorting onSortChange={handleSortChange} />
        </div>
        <div className='home'>
          {isLoading
            ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
            : sortedAndFilteredSeedlings
                .slice(firstSeedlingIndex, lastSeedlingIndex)
                .map(seedling => (
                  <SeedlingItem key={seedling.id} seedling={seedling} />
                ))}
        </div>
        <div className='pagination-container'>
          <button
            className='pagination-page_link'
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            &#10094;
          </button>

          <Pagination
            seedlingsPerPage={seedlingsPerPage}
            totalSeedlings={sortedAndFilteredSeedlings.length}
            paginate={paginate}
          />

          <button
            className='pagination-page_link'
            onClick={nextPage}
            disabled={currentPage === totalPages}
          >
            &#10095;
          </button>
        </div>
      </div>
    </div>
  )
}
