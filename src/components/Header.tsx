export interface IHeaderProps {
  searchTerm: string;
  handleSearchTermChange: any;
}

export default function Header({
  searchTerm,
  handleSearchTermChange,
}: IHeaderProps) {
  return (
    <header>
      <div className="logo">
        <h1>ToDo!</h1>
      </div>
      <div className="search-bar">
        <label htmlFor="check">
          <i className="fa-solid fa-magnifying-glass"></i>
        </label>
        <input type="checkbox" name="" id="check" />
        <input
          type="text"
          id="search-input"
          value={searchTerm}
          onChange={handleSearchTermChange}
          placeholder="Search tasks..."
        />
      </div>
    </header>
  );
}
