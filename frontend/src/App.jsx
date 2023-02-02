import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { Pagination } from 'antd';
import MusicList from './components/MusicList';
import Table from './components/Table';
import FilterSelect from './components/FilterSelect';

function App() {
  const [data, setData] = useState([]);
  const [reset, setReset] = useState(0);

  //fetching data from server
  useEffect(() => {
    const loadMusics = async () => {
      const response = await axios.get('http://localhost:5555/api/music');
      setData(response.data);
      setTotal(response.data.length);
    };
    loadMusics();
  }, [reset]);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [total, setTotal] = useState('');
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data.slice(firstPostIndex, lastPostIndex);

  const onShowSizeChanger = (current, pageSize) => {
    setPostsPerPage(pageSize);
  };

  return (
    <div className='App'>
      <div className='table-container'>
        <div>
          <h1>Playlist</h1>
          <table>
            <Table
              setData={setData}
              data={data}
              sortByName
              sortBySong
              sortByGenre
              sortByYear
            />
            <MusicList data={currentPosts} />
          </table>
          <Pagination
            onChange={(value) => setCurrentPage(value)}
            pageSize={postsPerPage}
            total={total}
            current={currentPage}
            showSizeChanger
            showQuickJumper
            onShowSizeChange={onShowSizeChanger}
            style={{ marginTop: '15px', textAlign: 'center' }}
          />
        </div>
        <FilterSelect
          data={data}
          setData={setData}
          reset={reset}
          setReset={setReset}
        />
      </div>
    </div>
  );
}
export default App;
