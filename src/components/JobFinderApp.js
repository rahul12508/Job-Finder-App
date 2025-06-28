import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './JobFinderApp.css';

const JobFinderApp = () => {
  const [query, setQuery] = useState('');
  const [jobs, setJobs] = useState([]);
  const [history, setHistory] = useState([]);
  const [salaryFilter, setSalaryFilter] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [savedJobs, setSavedJobs] = useState([]);
  const [page, setPage] = useState(1);


  useEffect(() => {
    const saved = localStorage.getItem('savedJobs');
    if (saved) {
      setSavedJobs(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('savedJobs', JSON.stringify(savedJobs));
  }, [savedJobs]);

  const fetchJobs = async () => {
    setLoading(true);
    setError(null);
    try {
      const options = {
        method: 'GET',
        url: 'https://jsearch.p.rapidapi.com/search',
        params: {
          query: query || 'developer',
          page: page.toString(),
          num_pages: '1'
        },
        headers: {
          'x-rapidapi-key': '279c0df731mshbe74fb5731724ffp1c5f9ajsn14cf9ab47d62',
          'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        }
      };
      const response = await axios.request(options);
      console.log('Fetched Jobs:', response.data.data);
      setJobs(prev => page === 1 ? response.data.data : [...prev, ...response.data.data]);
      setHistory((prev) => [query, ...new Set(prev)].slice(0, 5));
    } catch (err) {
      setError('Failed to fetch jobs.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [page]);

  const toggleSaveJob = (job) => {
    setSavedJobs(prev =>
      prev.find(j => j.job_id === job.job_id)
        ? prev.filter(j => j.job_id !== job.job_id)
        : [...prev, job]
    );
  };

  const removeSavedJob = (jobId) => {
    setSavedJobs(prev => prev.filter(j => j.job_id !== jobId));
  };

  return (
    <div className="app-container">
      <aside className="sidebar">
        <h2 className="sidebar-heading">Filters</h2>
        <div className="sidebar-section">
          <label className="sidebar-label">Salary Range</label>
          <select className="sidebar-select" onChange={(e) => setSalaryFilter(e.target.value)}>
            <option value="">Any</option>
            <option value="50000">50,000+</option>
            <option value="100000">100,000+</option>
            <option value="150000">150,000+</option>
          </select>
        </div>
        <div>
          <h3 className="sidebar-label">Search History</h3>
          <ul className="sidebar-history">
            {history.map((term, index) => (
              <li key={index}>{term}</li>
            ))}
          </ul>
        </div>

        {savedJobs.length > 0 && (
          <div className="saved-jobs">
            <h3 className="sidebar-label">Saved Jobs</h3>
            <ul className="sidebar-history">
              {savedJobs.map((job, i) => (
                <li key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span>{job.job_title} - {job.job_city}</span>
                  <button onClick={() => removeSavedJob(job.job_id)} style={{ marginLeft: '8px', color: 'red', border: 'none', background: 'transparent', cursor: 'pointer' }}>×</button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </aside>

      <main className="main-content">
        <h1 className="main-title">Job Finder</h1>
        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="Search job title or keywords..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
 
          <button
            className="search-button "
            onClick={() => {
              setPage(1);
              fetchJobs();
            }}
          >
            Search
          </button>
        </div>

        {loading && <p>Loading jobs...</p>}
        {error && <p className="error">{error}</p>}

        <div className="job-grid">
          {jobs
            .filter((job) =>
              (salaryFilter ? job.estimated_salaries?.some((s) => s.salary >= Number(salaryFilter)) : true) 
                        )
            .map((job, index) => (
              <div key={index} className="job-card">
                <h2 className="job-title">{job.job_title}</h2>
                <p className="job-location">{job.job_city}, {job.job_state}</p>
                <p className="job-desc">{job.job_description}</p>
                <a
                  href={job.job_apply_link}
                  className="apply-link button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply Now
                </a>
                <button className="save-button button" onClick={() => toggleSaveJob(job)}>
                  {savedJobs.find(j => j.job_id === job.job_id) ? 'Unsave' : 'Save'}
                </button>
              </div>
            ))}
        </div>

        {jobs.length > 0 && !loading && (
          <button className="load-more button" onClick={() => setPage(prev => prev + 1)}>Load More</button>
        )}
      </main>
    </div>
  );
};

export default JobFinderApp;
