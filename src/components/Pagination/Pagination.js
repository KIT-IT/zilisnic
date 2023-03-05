import React from 'react';
import { Link, useRouteMatch} from "react-router-dom"


function Pagination({ totalPosts, postPerPage, paginate, activeIndex }) {
    let {url}  = useRouteMatch()

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++ ) {
        pageNumbers.push(i)
    }

    return (
        <div className="pagination element-with-changing-styles">
            <nav className="pagination__body _container">
                <ul className="pagination-list _content">
                    {
                        pageNumbers.map(number => {
                            if (activeIndex === number) {
                                return (
                                    <div className={activeIndex === number ? "pagination-list__item pagination-item-active element-with-changing-styles" : "pagination-list__item element-with-changing-styles"}
                                          key={number} onClick={() => paginate(number)}>
                                        <span className="pagination-list__item_number element-with-changing-styles">{number}</span>
                                    </div>
                                )
                            } else {
                                return (
                                    <Link to={`${url}/${number}`}
                                          className={activeIndex === number ? "pagination-list__item pagination-item-active element-with-changing-styles" : "pagination-list__item element-with-changing-styles"}
                                          key={number} onClick={() => paginate(number)}>
                                        <span className="pagination-list__item_number element-with-changing-styles">{number}</span>
                                    </Link>
                                )
                            }
                        })
                    }
                </ul>
            </nav>
        </div>
    );
}

export default Pagination;