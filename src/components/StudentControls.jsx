function StudentControls({ filter, setFilter, searchTerm, setSearchTerm, sortOrder, setSortOrder }) {
  return (
    <div className="controls">
      <div className="filters">
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`} 
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className={`filter-btn ${filter === 'pass' ? 'active' : ''}`} 
          onClick={() => setFilter('pass')}
        >
          Pass
        </button>
        <button 
          className={`filter-btn ${filter === 'fail' ? 'active' : ''}`} 
          onClick={() => setFilter('fail')}
        >
          Fail
        </button>
      </div>
      
      <input 
        type="text" 
        className="input search" 
        placeholder="Search by name" 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      <button 
        className="btn sort-btn"
        onClick={() => setSortOrder(prev => prev === 'high' ? 'low' : 'high')}
      >
        Sort: {sortOrder === 'high' ? 'High-Low' : 'Low-High'}
      </button>
    </div>
  );
}

export default StudentControls;