import { useState, useEffect, useMemo } from 'react';
import './App.css';
import axios from 'axios';
import { Pagination } from 'antd';
import Table from './components/Table';

function App() {
  const [data, setData] = useState([]);
  const [sortSelect, setSortSelect] = useState('');
  const [musicians, setMusicians] = useState([]);
  const [genres, setGenres] = useState([]);
  const [years, setYears] = useState([]);

  //fetching data from server
  useEffect(() => {
    const loadMusics = async () => {
      const response = await axios.get('http://localhost:5555/api/music');
      setData(response.data);
      setMusicians([...new Set(response.data.map((x) => x.musician))]);
      setGenres([...new Set(response.data.map((x) => x.genre))]);
      setYears([...new Set(response.data.map((x) => x.year))]);
      setTotal(response.data.length);
    };
    loadMusics();
  }, []);

  const sortedData = useMemo(() => {
    if (sortSelect) {
      return data.filter(
        (item) =>
          item.musician.includes(sortSelect) ||
          item.genre.includes(sortSelect) ||
          item.year.toString().includes(sortSelect)
      );
    }
    return data;
  }, [sortSelect, data]);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [total, setTotal] = useState('');
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = sortedData.slice(firstPostIndex, lastPostIndex);

  const onShowSizeChanger = (current, pageSize) => {
    setPostsPerPage(pageSize);
  };

  return (
    <div className='App'>
      <Table
        setData={setData}
        data={sortedData}
        currentPosts={currentPosts}
        setSortSelect={setSortSelect}
        musicians={musicians}
        genres={genres}
        years={years}
        sortByName
        sortBySong
        sortByGenre
        sortByYear
      />
      <Pagination
        onChange={(value) => setCurrentPage(value)}
        pageSize={postsPerPage}
        total={total}
        current={currentPage}
        showSizeChanger
        showQuickJumper
        onShowSizeChange={onShowSizeChanger}
        style={{ marginTop: '15px' }}
      />
    </div>
  );
}
export default App;
