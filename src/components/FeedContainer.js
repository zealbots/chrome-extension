import React, { Component } from "react";
import ArticleCard from "./ArticleCard.js";

export class FeedContainer extends Component {
  state = {
    loading: true,
    feed: null,
  };

  async componentDidMount() {
    const url = process.env.REACT_APP_ZB_FULLY;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ loading: false, feed: data });
  }

  render() {
    if (this.state.loading) {
      return (
        <h1 className="py-20 text-4xl text-primaryText text-center mx-auto">
          Loading...
        </h1>
      );
    }

    if (!this.state.feed) {
      <h1 className="py-20 text-3xl text-primary text text-center mx-auto">
        couldn't get the data for feed
      </h1>;
    }

    return (
      <main className=" py-20 bg-primaryBg">
        <div className="grid px-10 grid-cols-3 gap-4 flex">
          {this.state.feed.map((post) => (
            <ArticleCard key={post.doi} post={post}></ArticleCard>
          ))}
        </div>
      </main>
    );
  }
}

export default FeedContainer;
