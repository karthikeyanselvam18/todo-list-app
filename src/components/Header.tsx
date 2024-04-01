import React, { useRef } from "react";

export interface IHeaderProps {
  searchTerm: string;
  handleSearchTermChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Header: React.FC<IHeaderProps> = ({
  searchTerm,
  handleSearchTermChange,
}) => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    if (searchInputRef.current) {
      if (isChecked) {
        searchInputRef.current.focus(); 
      } else {
        searchInputRef.current.blur();
      }
    }
  };

  return (
    <header>
      <div className="logo">
        <h1>ToDo!</h1>
      </div>
      <div className="search-bar">
        <label htmlFor="check">
          <i className="fa-solid fa-magnifying-glass"></i>
        </label>
        <input
          type="checkbox"
          id="check"
          onChange={handleCheckboxChange} 
        />
        <input
          ref={searchInputRef}
          type="text"
          id="search-input"
          value={searchTerm}
          onChange={handleSearchTermChange}
          placeholder="Search tasks..."
        />
      </div>
    </header>
  );
};

export default Header;
