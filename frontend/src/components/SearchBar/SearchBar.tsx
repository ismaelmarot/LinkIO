import React from 'react'
import * as styles from './SearchBar.styles'
import { useSearchBar } from './useSearchBar'
import { SearchIcon as SearchIconComponent } from '../../constants/icons.constants'

const SearchBar: React.FC = () => {
  const {
    searchQuery,
    setSearchQuery,
    activeTag,
    setActiveTag,
    tags,
  } = useSearchBar()

  return (
    <styles.Container>
      <styles.SearchWrapper>
        <styles.SearchIcon>
          <SearchIconComponent size={20} />
        </styles.SearchIcon>
        <styles.SearchInput
          type="text"
          placeholder="Buscar enlaces..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </styles.SearchWrapper>
      <styles.TagFilters>
        {tags.map((tag) => (
          <styles.TagButton
            key={tag}
            $active={activeTag === tag}
            onClick={() => setActiveTag(tag)}
          >
            {tag}
          </styles.TagButton>
        ))}
      </styles.TagFilters>
    </styles.Container>
  )
}

export default SearchBar