export const Search = ({ search, setSearch, sort, setSort }) => {
  return (
    <div className="search">
      <h2>Pesquisar</h2>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Digite o que deseja pesquisar"
      />
    </div>
  );
};
export default Search;
