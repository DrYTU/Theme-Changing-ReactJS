import React from "react";
import './BookList.css';
import Book from "./Book";
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';

class BookList extends React.Component {

    render() {

        return (

            <ThemeContext.Consumer>{(contextTheme) => (
                    <BookContext.Consumer>
                        {contextBook => {

                            const { books } = contextBook;
                            const { isDarkTheme, dark, light, changeTheme } = contextTheme;
                            const theme = isDarkTheme ? dark : light;
                            return (
                                <section className="page-section" style={{ background: theme.bg, color: theme.txt }} id="portfolio">
                                    <div className="container">
                                        <div className="text-center">
                                            <h2 className="section-heading text-uppercase">BookFolio</h2>
                                            <h3 className="section-subheading text-secondary">This page is my BookFolio.</h3>
                                            <button type='button' className="btn btn-sm btn-success mb-5 text-white" onClick={changeTheme}>Change Theme</button>
                                        </div>
                                        <div className="row">
                                            {
                                                books.map((book, i) => {
                                                    return <Book book={book} key={i} />
                                                })
                                            }
                                        </div>
                                    </div>
                                </section>
                            )
                        }}
                    </BookContext.Consumer>
                )}


            </ThemeContext.Consumer>
        )
    }
}
export default BookList;

