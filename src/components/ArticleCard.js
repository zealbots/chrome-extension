import React, { Component } from "react";

export class ArticleCard extends Component {
  render() {
    const { post } = this.props;
    console.log(post);

    let datestr = new Date(post.pub_date).toDateString();
    let today = new Date();
    if (today.toDateString() === datestr) {
      datestr = "Today";
    }
    today.setDate(today.getDate() - 1);
    if (today.toDateString() === datestr) {
      datestr = "Yesterday";
    }

    return (
      <div className="max-w-sm rounded-xl bg-secondaryBg overflow-hidden shadow-lg mx-auto">
        <a
          href={`https://zealbots.com/articles/${post.airflow_id}`}
          title={post.title}
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none !important" }}
        >
          <div className="px-6 py-4">
            <div className="font-mono font-medium text-primaryText text-md mb-2">
              {post.title}
            </div>
            <div className="font-mono italic text-secondaryText text-sm mb-2">
              {datestr}
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default ArticleCard;
