import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import NewsList from './NewsList/NewsList';
import Footer from './Footer/Footer';
import { CSS, URL, LABELS } from './CONST';

class App extends Component {
    constructor() {
        super();

        this.changeSort = this.changeSort.bind(this);
        this.changeNumberNewsOnPage = this.changeNumberNewsOnPage.bind(this);

        this.state = {
            news: {},
            newsOnPage: LABELS.SIX,
            sort: LABELS.DATE,
            pages: 0,
            sortNews: []
        };

        this.newsRequest();
    }

    async newsRequest() {
        const url = URL.BASE;
        let response = await fetch(url);
        let data = await response.json();

        this.setState(() => {
            const path = data.response.ITEMS;

            return {
                news: path,
                pages: Math.ceil(Object.keys(path).length / this.state.newsOnPage),
                sortNews: Object.values(path).reverse()
            }
        })
    }

    changeNumberNewsOnPage({ target: { innerHTML }}) {
        this.setState({
            newsOnPage: Number(innerHTML),
            pages: Math.ceil(Object.keys(this.state.news).length / Number(innerHTML))
        });

        this.props.history.push(LABELS.HOME);
    }

    changeSort({ target: { value }}) {
        this.setState({ sort: value });
        this.sortArray(value);
    }

    sortArray(option) {
        this.setState((prevState) => {
            if (option === LABELS.DATE) {
                return {
                    sortNews: prevState.sortNews.sort((a, b) => {
                        if (a.DATE < b.DATE) return 1;
                        else return -1;
                    })
                };
            } else if (option === LABELS.TITLE) {
                return {
                    sortNews: prevState.sortNews.sort((a, b) => {
                        if (a.NAME > b.NAME) return 1;
                        else return -1;
                    })
                }
            }
        })
    }

    render() {
        const { pages, newsOnPage, sortNews } = this.state;
        const pagesArray = new Array(pages).fill(1);

        return (
            <div className={ CSS.APP }>
                <Navigation newsOnPage={ newsOnPage }
                            changeSort={ this.changeSort }
                            changeNumberNewsOnPage={ this.changeNumberNewsOnPage }
                />
                <Switch>
                    { pagesArray.map((item, index) =>
                        <Route path={ `/${ index + 1 }` } key={ index + 1 } render={ () =>
                            <NewsList pageNumber={ index + 1 } news={ sortNews } newsOnPage={ newsOnPage }/> }
                        />)
                    }
                    <Redirect exact={ true } from="/" to={ LABELS.HOME } />
                </Switch>
                <Footer pages={ pages } />
            </div>
        );
    }
}

export default withRouter(App);
