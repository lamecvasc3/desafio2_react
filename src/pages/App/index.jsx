import { GlobalStyle } from '../../styles/global'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../styles/theme'
import Cards from '../../components/Cards'
import { api } from '../../api/api'
import { useCallback, useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { HeaderStyle } from '../../styles/header'


function App() {
  const [datas, setDatas] = useState([]);
  const [searched, setSearched] = useState('');

  const handleData = useCallback(
    async (searched) => {
      const { data: { hits } } = await api.get(`/search?query=${searched}`);
      const datas = hits.map((data) => {
        return {
          key: data.objectID,
          title: data.title,
          author: data.author,
          url: data.url,
        };
      });
      setDatas(datas);
    }, []
  );
  const submit = (event) => {
    event.preventDefault();
    handleData(searched);

  }
  const handleSearched = (event) => {
    setSearched(event.target.value);
  }

  useEffect(() => {
    handleData('')
  }, [handleData]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>
        <HeaderStyle >
          <h1>Books</h1>
          <form onSubmit={submit}>
            <input value={searched} type="text" onChange={handleSearched} placeholder="search a book" />
            <button><FaSearch /></button>
          </form>
        </HeaderStyle>
        <Cards dados={datas} />
      </div>
    </ThemeProvider>
  );
}

export default App;
