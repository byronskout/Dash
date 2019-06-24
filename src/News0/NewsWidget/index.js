import React, { Component } from 'react';
import axios from 'axios';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import NewsItem from '../NewsItem';
import Select from 'react-select';

import 'react-select/dist/react-select.css';
import './NewsWidget.css';

class NewsWidget extends Component {
	constructor(props) {
		super(props);
		this.state = {
			articles: [],
			sources: [],
			currentPage: 1,
			maxPages: 1,
			selectedSource: ''
		}
	}

	handleShowMore() {
		if (this.state.currentPage < this.state.maxPages) {
			this.setState(prevState => ({
				currentPage: prevState.currentPage + 1
			}), () => this.getNews());
		}
	}

	handleChangeSource(selectedOption) {
		this.setState({ currentPage: 1, selectedSource: selectedOption == null ? '' : selectedOption.value, articles: [] }, () => this.getNews());
	}

	getNews() {
		let newsUrl;
		if (this.state.selectedSource === '') {
			newsUrl = `https://newsapi.org/v2/top-headlines?country=gb&pageSize=5&page=${this.state.currentPage}&apiKey=17fcb50c25f244a59d6a87fda4730bef`;
		} else {
			newsUrl = `https://newsapi.org/v2/top-headlines?pageSize=5&page=${this.state.currentPage}&sources=${this.state.selectedSource}&apiKey=17fcb50c25f244a59d6a87fda4730bef`;
		}
		axios.get(newsUrl)
			.then(res => {
				for (let article of res.data.articles) {
					this.setState(prevState => ({
						articles: [...prevState.articles, article]
					}));
				}
				this.setState({ maxPages: Math.ceil(res.data.totalResults / 5) });
			})
			.catch(err => console.log(err));
	}

	getSources() {
		axios.get(`https://newsapi.org/v2/sources?country=gb&apiKey=17fcb50c25f244a59d6a87fda4730bef`)
			.then(res => this.setState({ sources: res.data.sources }))
			.catch(err => console.log(err));
	}

	componentWillMount() {
		this.getNews();
		this.getSources();
	}

	render() {
		let articles;
		let sources;

		if (this.state.articles) {
			articles = this.state.articles.map(article => {
				return (
					<NewsItem key={article.title} article={article} />
				);
			});
		}

		if (this.state.sources) {
			sources = this.state.sources.map(source => {
				return {
					value: source.id,
					label: source.name
				};
			});
		}

		return (
			<div className="newsFeed">
				<div className="newsFeed__heading d-flex flex-row align-items-center justify-content-between">
					<h3 className="newsFeed__title">News</h3>
					<Select
						className="newsFeed__sources"
						placeholder="Filter By Source"
						value={this.state.selectedSource}
						options={sources.length > 0 ? sources : null}
						onChange={this.handleChangeSource.bind(this)}
					/>
				</div>
				{articles.length > 0 ? (
					<ul className="newsFeed__list">
						<ReactCSSTransitionGroup
							transitionName="newsItemsTransition"
							transitionEnterTimeout={500}
							transitionLeaveTimeout={300}>
							{articles}
						</ReactCSSTransitionGroup>
					</ul>
				) : (
					<p className="newsFeed__empty">No news articles were found.</p>
				)}
				<button
					className="newsFeed__more btn btn-primary"
					onClick={this.handleShowMore.bind(this)}>
					{this.state.currentPage === this.state.maxPages ? 'No More News' : 'Show More'}</button>
				<p className="newsFeed__sponsor">Powered by <a href="https://newsapi.org/" target="_blank" rel="noopener noreferrer">News API</a>.</p>
			</div>
		)
	}
}

export default NewsWidget;
