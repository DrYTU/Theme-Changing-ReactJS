import React from "react";
import "./Book.css"
import { ThemeContext } from '../contexts/ThemeContext'

class Book extends React.Component {
    render() {
        return (
            <ThemeContext.Consumer>{(contextTheme) => {
                const { isDarkTheme, dark, light } = contextTheme;
                const theme = isDarkTheme ? dark : light;

                return (
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                                <div className="portfolio-hover" style={{background:theme.hover}}>
                                    <div className="portfolio-hover-content">
                                        <i className="bi bi-plus-circle"></i>
                                    </div>
                                </div>
                                <img className="img-fluid" src={this.props.book.imageURL} alt="book" />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">{this.props.book.title}</div>
                                <div className="portfolio-caption-subheading text-muted">{this.props.book.author}</div>
                            </div>
                        </div>
                    </div>
                );
            }}
            </ThemeContext.Consumer>


        );

    }

}

export default Book;
/*<img className="img-fluid" src="assets/img/portfolio/1.jpg" alt="..."/>*/


