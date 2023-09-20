import React, { useState } from 'react'
import './sorting.css'

export const Sorting = ({ onSortChange }) => {
  const [sort, setSort] = useState('')

  const handleSortChange = e => {
    const selectedOption = e.target.value
    setSort(selectedOption)
    onSortChange(selectedOption)
  }

  return (
    <div>
      <label htmlFor='sort_item'>Сортувати:</label>
      <select id='sort_item' onChange={handleSortChange}>
        <option value=''>за замовчуванням</option>
        <option value='new'>спочатку нові</option>
        <option value='less'>спочатку дешеві</option>
        <option value='more'>спочатку дорогі</option>
      </select>
    </div>
  )
}
