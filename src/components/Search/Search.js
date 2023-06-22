const { SearchForm, SearchInput, SearchBtn } = require('./Search.styled');

function Search({ handleSubmit }) {
  return (
    <SearchForm onSubmit={evt => handleSubmit(evt)}>
      <SearchInput type="text" name="search" />
      <SearchBtn type="button">SEARCH</SearchBtn>
    </SearchForm>
  );
}

export default Search;
