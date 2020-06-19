import React, { useState } from 'react';

const Searchbar = props => {
  const { handleFormSubmit } = props;
  const [search, setSearch] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    handleFormSubmit(search);
    setSearch('');
  };
  return (
    <div className="search-bar ui segment">
      <form onSubmit={handleSubmit} className="ui form">
        <div className="field">
          <label htmlFor="video-search">Search</label>
        </div>
        <input
          onChange={e => setSearch(e.target.value)}
          name="search"
          type="text"
          value={search}
        />
      </form>
    </div>
  );
};

Searchbar.defaultProps = {
  handleFormSubmit: () => {}
};

export default Searchbar;
