import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';
import SearchBox from '../components/common/SearchBox';
import PostCard from '../components/others/PostCard';
import './blogsPage.scss';



function Items({ currentBlogs }) {
    return (
      <>
        {currentBlogs && currentBlogs.map(blog => <PostCard key={blog.id} image={blog.image} title={blog.title} subHeading={blog.subHeading} id={blog.id}/>)}
      </>
    );
}

function BlogsPage({blogs, itemsPerPage}) {

    const [currentBlogs, setcurrentBlogs] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
  
    useEffect(() => {
      const endOffset = itemOffset + itemsPerPage;
      setcurrentBlogs(blogs.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(blogs.length / itemsPerPage));
      if(searchQuery){
        setcurrentBlogs(currentBlogs.filter(b => b.title.toLowerCase().includes(searchQuery.toLowerCase())));
      }
    }, [itemOffset, itemsPerPage, searchQuery]);
  
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % blogs.length;
      setItemOffset(newOffset);
    };

    const  handleSearch = query => {
      setSearchQuery(query);
      setItemOffset(0);
    };

      

    return (
        <>
            <div className='blogs-page'>
                <div className='blogs-page__filters'>
                  <a onClick={() => navigate('/')} className='blogs-page__filters__home'>Home</a>
                  <SearchBox value={searchQuery} onChange={handleSearch} />
                </div>
                <div className='blogs-page__main'>
                  <Items currentBlogs={currentBlogs} />
                </div>
                <div className='blogs-page__pagination'>
                  <ReactPaginate
                  breakLabel="..."
                  nextLabel="next"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={3}
                  pageCount={pageCount}
                  previousLabel="prev"
                  renderOnZeroPageCount={null}
                  />
                </div>
            </div>
            
        </>
    );
}

export default BlogsPage;