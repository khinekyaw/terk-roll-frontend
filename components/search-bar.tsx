import { Search } from "lucide-react"
import React from "react"

const SearchBar = () => {
  return (
    <div className="bg-input/40 h-10 w-full rounded-s-full px-2 cursor-pointer rounded-e-full flex items-center">
      <div className="flex items-center justify-center w-8 h-8"><Search className="w-5 h-5" /></div>
      <p className="typo-body-sm text-gray-400">Search</p>
    </div>
  )
}

export default SearchBar
