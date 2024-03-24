import React from 'react';
import BookList from './BookList';
import ThemeContextProvider  from '../contexts/ThemeContext'
import BookContextProvider from '../contexts/BookContext';

class App extends React.Component {

    render(){
        return(
            <div>
              <ThemeContextProvider>
                <BookContextProvider>
                  <BookList/>
                </BookContextProvider>
              </ThemeContextProvider>
            </div>
        )
    }
}

export default App;