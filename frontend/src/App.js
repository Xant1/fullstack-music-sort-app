import { useState, useEffect } from 'react';
import './App.css';
import { fakeData } from './fakeDB';
import { FaArrowUp, FaArrowsAltV, FaArrowDown } from 'react-icons/fa';
import { Pagination } from 'antd';
import MusicList from './components/MusicList';

function App() {
  const [data, setData] = useState([]);
  const [sorted, setSorted] = useState({ sorted: 'year', reversed: false });
  
  

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [total, setTotal] = useState('');

  useEffect(() => {
    const loadMusics = () => {
      const response = fakeData;
      setData(response);
      setTotal(response.length);
    };
    loadMusics();
  }, []);
  
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data.slice(firstPostIndex, lastPostIndex);

  //sorting
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
          style={{ marginTop: '15px', textAlign: 'center' }}
        />
        <div className='select'>
          <select onChange={(e) => setData(e.target.value)}>
            {Array.from(data).map((d) => (
              <option >{d.musician}</option>
            ))}
          </select>
          <select onChange={(e) => setData(e.target.value)}>
            {Array.from(data).map((d ) => (
              <option  >{d.genre}</option>
            ))}
          </select>
          <select onChange={(e) => setData(e.target.value)}>
            {Array.from(data).map((d ) => (
              <option>{d.year}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
export default App;