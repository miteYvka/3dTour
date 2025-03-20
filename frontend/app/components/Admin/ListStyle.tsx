"use client"

import { useState } from "react"

interface CheckboxListProps {
  options: string[]
}

export const ListStyle = ({ options }: CheckboxListProps) => {

  const [selectedItems, setSelectedItems] = useState<string[]>([])

  const handleCheckboxChange = (option: string) => {
    if (selectedItems.includes(option)) {
      setSelectedItems(selectedItems.filter((item) => item !== option))
    } else {
      setSelectedItems([...selectedItems, option])
    }
  }

  return (
      <ul className="adminPage-aside-ul">
        {options.map((option) => (
          <li key={option} className="adminPage-aside-ul-li">
            <label className="adminPage-aside-ul-li-label">
              <input
                className="adminPage-aside-ul-li-inp"
                type="checkbox"
                checked={selectedItems.includes(option)}
                onChange={() => handleCheckboxChange(option)}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
  )
}