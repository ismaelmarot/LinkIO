import React from 'react'
import * as styles from './SearchBar.styles'
import { useSearchBar } from './useSearchBar'
import { SearchIcon as SearchIconComponent } from '../../constants/icons.constants'
import { useI18n } from '../../app/i18n'

const SearchBar: React.FC = () => {
  const {
    searchQuery,
    setSearchQuery,
    activeTag,
    setActiveTag,
    tags,
  } = useSearchBar()
  const { t, language } = useI18n()

  const translateTag = (tag: string): string => {
    if (tag === 'All') return t('home.tag_all')
    if (tag === 'Favorites') return t('home.tag_favorites')
    return tag
  }

  return (
    <styles.Container>
      <styles.SearchWrapper>
        <styles.SearchIcon>
          <SearchIconComponent size={20} />
        </styles.SearchIcon>
        <styles.SearchInput
          type="text"
          placeholder={t('home.search')}
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
            {translateTag(tag)}
          </styles.TagButton>
        ))}
      </styles.TagFilters>
    </styles.Container>
  )
}

export default SearchBar