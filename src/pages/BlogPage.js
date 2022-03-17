import React from 'react';
import AnimateHeight from 'react-animate-height';
import Blog from '../components/Blog';

function BlogPage(props) {
  return (
    <AnimateHeight duration={700} height={props.page ? 'auto' : 0}>
      <Blog setPage={props.setPage} />
    </AnimateHeight>
  );
}

export default BlogPage;
