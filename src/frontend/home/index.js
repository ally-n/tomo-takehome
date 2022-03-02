import './index.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const [spices, setSpices] = useState([]);
  const [blends, setBlends] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredSpices, setFilteredSpices] = useState([]);

  function handleChange(e) {
    setSearch(e.target.value);
    setFilteredSpices(
      spices.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  // load spices when the page loads
  useEffect(() => {
    axios.get('/api/v1/spices').then((response) => {
      setSpices(response.data);
    });
    axios.get('/api/v1/blends').then((response) => {
      setBlends(response.data);
    });
  }, []);

  return (
    <div className="App">
      <h4>Spice List</h4>
      <form
        className="search-form"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          id="search"
          name="search"
          value={search}
          placeholder="Type spice here..."
          onChange={handleChange}
        ></input>
        <button type="submit" id="search-btn">
          Search
        </button>
      </form>
      <div className="spice-container">
        {search
          ? filteredSpices.map((spice) => (
              <div className="spice-box" key={spice.id}>
                <Link to={`/spices/${spice.id}`}>{spice.name}</Link>
              </div>
            ))
          : spices.map((spice) => (
              <div className="spice-box" key={spice.id}>
                <Link to={`/spices/${spice.id}`}>{spice.name}</Link>
              </div>
            ))}
      </div>
      <h4>Blend List</h4>
      <div className="blend-container">
        {blends.map((blend) => (
          <div className="blend-box" key={blend.id}>
            <Link to={`/blends/${blend.id}`}>{blend.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
