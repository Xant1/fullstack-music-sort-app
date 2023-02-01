import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { FaArrowUp, FaArrowsAltV, FaArrowDown } from 'react-icons/fa';
import { Pagination } from 'antd';
import MusicList from './components/MusicList';

function App() {
  const [data, setData] = useState([]);
  const [sorted, setSorted] = useState({ sorted: 'year', reversed: false });
  const [reset, setReset] = useState(0);
  //fetching from server
  useEffect(() => {
    const loadMusics = async () => {
      const response = await axios.get('http://localhost:5555/api/music');
      setData(response.data);
      setTotal(response.data.length);
    };
    loadMusics();
  }, [reset]);

  const getByMusician = (e) => {
    axios
      .get('http://localhost:5555/api/music/name/' + e.target.value)
      .then((response) => setData(response.data))
      .then((error) => console.log(error));
  };

  const getByGenre = (e) => {
    axios
      .get('http://localhost:5555/api/music/genre/' + e.target.value)
      .then((response) => setData(response.data))
      .then((error) => console.log(error));
  };

  const getByYear = (e) => {
    axios
      .get('http://localhost:5555/api/music/year/' + e.target.value)
      .then((response) => setData(response.data))
      .then((error) => console.log(error));
  };
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
  //sorting items
  const sortByYear = () => {
    const dataCopy = [...data];
    dataCopy.sort((dataA, dataB) => {
      if (sorted.reversed) {
        return dataA.year - dataB.year;
      }
      return dataB.year - dataA.year;
    });
    setData(dataCopy);
    setSorted({ sorted: 'year', reversed: !sorted.reversed });
  };

  const sortByName = () => {
    const dataCopy = [...data];
    dataCopy.sort((dataA, dataB) => {
      const nameA = `${dataA.musician}`;
      const nameB = `${dataB.musician}`;
      if (sorted.reversed) {
        return nameB.localeCompare(nameA);
      }
      return nameA.localeCompare(nameB);
    });
    setData(dataCopy);
    setSorted({ sorted: 'musician', reversed: !sorted.reversed });
  };

  const sortBySong = () => {
    const dataCopy = [...data];
    dataCopy.sort((dataA, dataB) => {
      const songA = `${dataA.song}`;
      const songB = `${dataB.song}`;
      if (sorted.reversed) {
        return songB.localeCompare(songA);
      }
      return songA.localeCompare(songB);
    });
    setData(dataCopy);
    setSorted({ sorted: 'song', reversed: !sorted.reversed });
  };

  const sortByGenre = () => {
    const dataCopy = [...data];
    dataCopy.sort((dataA, dataB) => {
      const genreA = `${dataA.genre}`;
      const genreB = `${dataB.genre}`;
      if (sorted.reversed) {
        return genreB.localeCompare(genreA);
      }
      return genreA.localeCompare(genreB);
    });
    setData(dataCopy);
    setSorted({ sorted: 'genre', reversed: !sorted.reversed });
  };
  //rendering arrow icon
  const renderArrow = () => {
    if (sorted.reversed) {
      return <FaArrowUp />;
    }
    return <FaArrowDown />;
  };

  return (
    <div className='App'>
      <div className='table-container'>
        <div>
          <h1>Playlist</h1>
          <table>
            <thead>
              <tr>
                <th onClick={sortByName}>
                  <span style={{ marginRight: 10 }}>Musician</span>
                  {sorted.sorted === 'musician' ? (
                    renderArrow()
                  ) : (
                    <FaArrowsAltV />
                  )}
                </th>
                <th onClick={sortBySong}>
                  <span style={{ marginRight: 10 }}>Song</span>
                  {sorted.sorted === 'song' ? renderArrow() : <FaArrowsAltV />}
                </th>
                <th onClick={sortByGenre}>
                  <span style={{ marginRight: 10 }}>Genre</span>
                  {sorted.sorted === 'genre' ? renderArrow() : <FaArrowsAltV />}
                </th>
                <th onClick={sortByYear}>
                  <span style={{ marginRight: 10 }}>Year</span>
                  {sorted.sorted === 'year' ? renderArrow() : <FaArrowsAltV />}
                </th>
              </tr>
            </thead>
            <tbody>
              <MusicList data={currentPosts} />
            </tbody>
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

        <div className='select'>
          <h1>Filter</h1>
          <b>Musicians</b>
          <select onChange={getByMusician}>
            <option value={0}>all</option>
            {Array.from(data).map((d) => (
              <option key={d.id} value={d.musician}>
                {d.musician}
              </option>
            ))}
          </select>
          <b>Genre</b>
          <select onChange={getByGenre}>
            <option value={0}>all</option>
            {Array.from(data).map((d) => (
              <option key={d.id} value={d.genre}>
                {d.genre}
              </option>
            ))}
          </select>
          <b>Year</b>
          <select onChange={getByYear}>
            <option value={0}>all</option>
            {Array.from(data).map((d) => (
              <option key={d.id} value={d.year}>
                {d.year}
              </option>
            ))}
          </select>
          <button
            className='button'
            onClick={() => {
              setReset(reset + 1);
            }}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
export default App;
