import React, { useState, useRef, useCallback, useContext } from 'react';
import styled from 'styled-components';
import useClickOutside from '../hooks/useClickOutside';
import { IoSearch, IoClose } from 'react-icons/io5';
import { motion } from 'framer-motion';
import MoonLoader from 'react-spinners/MoonLoader';
import useDebounce from '../hooks/useDebounce';
import { ThemeContext } from '../context/themeContext';

const SearchBarContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 34em;
  height: 3.8em;
  border-radius: 6px;
  box-shadow: 0px 2px 12px 3px rgba(0, 0, 0, 0.15);
  overflow: hidden;
`;

const SerachInputContainer = styled.div`
  width: 100%;
  min-height: 3.8em;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 15px;
`;

const SerachInput = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  font-size: 21px;
  font-weight: 500;
  border-radius: 6px;
  background-color: transparent;

  &:focus {
    /* outline: none; */
    &::placeholder {
      opacity: 0;
    }
  }

  &::placeholder {
    color: #bebebe;
    transition: all 2.5ms ease-in-out;
  }
`;

const SearchIcon = styled.span`
  color: #bebebe;
  font-size: 25px;
  margin-right: 10px;
  margin-top: 5px;
`;

const CloseIcon = styled.span`
  color: #bebebe;
  font-size: 23px;
  margin-right: 25px;
  transition: all 250ms ease-in-out;
  cursor: pointer;

  &:hover {
    color: #dfdfdf;
  }
`;

const LineSeparator = styled.span`
  display: flex;
  min-width: 100%;
  height: 2px;
  background-color: #dfdfdf;
`;

const SearchContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const containerVariants = {
  expanded: {
    height: '25em',
  },
  collapsed: {
    height: '3.8em',
  },
};
const containerTransition = { type: 'spring', damping: 22, stiffness: 150 };

const SearchBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [query, setQuery] = useState('');

  const containerRef = useRef();
  const inputRef = useRef();

  const expandContainer = () => setIsExpanded(true);

  const clearQuery = useCallback(() => setQuery(''), []);

  const hideContainer = useCallback(() => {
    setIsExpanded(false);
    clearQuery();
  }, [clearQuery]);

  //   const clearInput = () => (inputRef.current.value = '');
  const searchTVShows = () => {};

  const printQuery = (e) => setQuery(e.target.value);

  const { expanded, collapsed } = containerVariants;

  useClickOutside(containerRef, hideContainer);

  useDebounce(query, 500, searchTVShows);

  const { theme } = useContext(ThemeContext);

  return (
    <SearchBarContainer
      animate={isExpanded ? expanded : collapsed}
      variants={containerVariants}
      ref={containerRef}
      transition={containerTransition}
      >
      <SerachInputContainer>
        <SearchIcon>
          <IoSearch />
        </SearchIcon>
        <SerachInput
          placeholder='Search for Series/TV Shows'
          onFocus={expandContainer}
          ref={inputRef}
          value={query}
          onChange={printQuery}
          className={theme === 'dark' ? 'dark' : 'light'}
        />
        {query && (
          <CloseIcon onClick={clearQuery}>
            <IoClose />
          </CloseIcon>
        )}
      </SerachInputContainer>
      <LineSeparator />
      <SearchContent>
        <LoadingWrapper>
          <MoonLoader loading color='blue' size={30} />
        </LoadingWrapper>
      </SearchContent>
    </SearchBarContainer>
  );
};

export default SearchBar;
